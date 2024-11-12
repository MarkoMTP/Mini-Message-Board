require("dotenv").config();
const { Pool } = require("pg"); // Correct the import here

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // SSL should be lowercase
});

pool.connect((err) => {
  if (err) {
    console.error("Database connection error:", err.stack);
  } else {
    console.log("Connected to the PostgreSQL database");
  }
});

module.exports = pool;
