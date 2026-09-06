require("dotenv").config();

const { upsertUser } = require("../repositories/userRepository");
const pool = require("../db/pool");

/*
 * Manual test script for the user repository.
 *
 * Run this script from the backend Docker container: `docker compose exec backend node backend/scripts/testUserRepository.js`
 *
 * Verify the database afterward: `docker compose exec db psql -U sweng861 -d sweng861 -c "SELECT * FROM users;"`
 *
 * Run the script more than once to verify that the same provider identity
 * updates the existing user rather than creating a duplicate record.
 */

async function run() {
  try {
    const user = await upsertUser({
      authProvider: "auth0",
      providerUserId: "auth0|test-user-123",
      email: "test@example.com",
      displayName: "Test User",
    });

    console.log(user);
  } catch (error) {
    console.error("User repository test failed:", error.message);
  } finally {
    await pool.end();
  }
}

run();