require("dotenv").config();

const express = require("express");
const requireAuth = require("./middleware/requireAuth");
const syncUser = require("./middleware/syncUser");
const { upsertUser } = require("./repositories/userRepository");
const { auth } = require("express-openid-connect");

const app = express();
const PORT = process.env.PORT || 3000;

/*
 * Configures the Auth0 OIDC login flow for browser-based authentication.
 * Requests access to the protected API on behalf of the authenticated user.
 */
const oidcConfig = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SESSION_SECRET,
  baseURL: "http://localhost:3000",
  clientID: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`,
  authorizationParams: {
    response_type: "code",
    audience: process.env.AUTH0_AUDIENCE,
    scope: "openid profile email",
  },

  async afterCallback(req, res, session) {
    const claims = session.user;

    await upsertUser({
      authProvider: "auth0",
      providerUserId: claims.sub,
      email: claims.email || null,
      displayName: claims.name || null,
    });

    return session;
  },
};

app.use(auth(oidcConfig));

/*
 * Provides a minimal browser interface for testing Auth0 login and logout.
 * Displays the authenticated user's identity when a session is active.
 */
app.get("/", (req, res) => {
  if (req.oidc.isAuthenticated()) {
    return res.status(200).send(`
      <h1>SWENG 861 Authentication Test</h1>
      <p>Logged in as ${req.oidc.user.email || req.oidc.user.name}</p>
      <p><a href="/logout">Logout</a></p>
    `);
  }

  return res.status(200).send(`
    <h1>SWENG 861 Authentication Test</h1>
    <p><a href="/login">Login with Auth0</a></p>
  `);
});

/*
 * Health endpoint used to verify that the API is running and responding.
 * A successful request returns HTTP 200 with a simple status response.
 */
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

/*
 * Protected hello endpoint.
 * Requires a valid Auth0 access token and authenticated local user.
 */
app.get("/api/hello", requireAuth, syncUser, (req, res) => {
  const identifier = req.user.email || req.user.display_name || "user";

  res.status(200).json({
    message: `Hello, ${identifier}!`,
  });
});

/*
 * Returns a generic authentication response without exposing
 * internal token validation details.
 */
app.use((err, req, res, _next) => {
  if (err.status === 401) {
    return res.status(401).json({
      error: "Unauthorized",
      message: "Valid access token is required",
    });
  }

  console.error("Unhandled application error:", err);

  return res.status(500).json({
    error: "Internal Server Error",
    message: "An unexpected error occurred",
  });
});

/*
 * Start the Express HTTP server and listen for incoming requests.
 */
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});