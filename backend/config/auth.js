const domain = process.env.AUTH0_DOMAIN;
const audience = process.env.AUTH0_AUDIENCE;

if (!domain || !audience) {
  throw new Error(
    "Auth0 configuration is missing. AUTH0_DOMAIN and AUTH0_AUDIENCE are required."
  );
}

const authConfig = {
  domain,
  audience,
  issuerBaseURL: `https://${domain}`,
};

module.exports = authConfig;