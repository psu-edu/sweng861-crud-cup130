const pool = require("../db/pool");

/*
 * Creates a local user on first login or updates the existing user
 */
async function upsertUser({
  authProvider,
  providerUserId,
  email,
  displayName,
}) {
  const query = `
    INSERT INTO users (
      auth_provider,
      provider_user_id,
      email,
      display_name,
      last_login_at
    )
    VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP)
    ON CONFLICT (auth_provider, provider_user_id)
    DO UPDATE SET
      email = EXCLUDED.email,
      display_name = EXCLUDED.display_name,
      updated_at = CURRENT_TIMESTAMP,
      last_login_at = CURRENT_TIMESTAMP
    RETURNING
      id,
      auth_provider,
      provider_user_id,
      email,
      display_name,
      created_at,
      updated_at,
      last_login_at;
  `;

  const values = [
    authProvider,
    providerUserId,
    email,
    displayName,
  ];

  const result = await pool.query(query, values);

  return result.rows[0];
}

module.exports = {
  upsertUser,
};