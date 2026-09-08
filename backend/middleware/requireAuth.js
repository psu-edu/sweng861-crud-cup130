const { auth } = require("express-oauth2-jwt-bearer");
const authConfig = require("../config/auth");

/*
 * Validates Auth0 access tokens before allowing access
 * to protected API endpoints.
 */
const requireAuth = auth({
  audience: authConfig.audience,
  issuerBaseURL: authConfig.issuerBaseURL,
  tokenSigningAlg: "RS256",
});

module.exports = requireAuth;