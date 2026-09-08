const { upsertUser } = require("../repositories/userRepository");

/*
 * Synchronizes the authenticated Auth0 identity with the local users table
 * and attaches the resulting application user to the request.
 */
async function syncUser(req, res, next) {
  try {
    const claims = req.auth?.payload;

    if (!claims?.sub) {
      return res.status(401).json({
        error: "Unauthorized",
        message: "Valid access token is required",
      });
    }

    const user = await upsertUser({
      authProvider: "auth0",
      providerUserId: claims.sub,
      email: claims.email || null,
      displayName: claims.name || null,
    });

    req.user = user;

    next();
  } catch (error) {
    console.error("Failed to synchronize authenticated user:", error.message);

    return res.status(500).json({
      error: "Internal Server Error",
      message: "Unable to process authenticated user",
    });
  }
}

module.exports = syncUser;