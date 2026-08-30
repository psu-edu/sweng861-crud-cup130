const express = require("express");
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
 * Hello endpoint used to demonstrate basic API routing and JSON responses.
 * A successful request returns HTTP 200 with a Hello World message.
 */
app.get("/api/hello", (req, res) => {
  res.status(200).json({ message: "Hello, World!" });
});

/*
 * Start the Express HTTP server and listen for incoming requests.
 */
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});