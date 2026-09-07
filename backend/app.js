require("dotenv").config();

const express = require("express");
const requireAuth = require("./middleware/requireAuth");
const syncUser = require("./middleware/syncUser");

const app = express();
const PORT = process.env.PORT || 3000;

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
app.use((err, req, res, next) => {
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