require("dotenv").config(); // Load environment variables from .env file
const { Client } = require("pg"); // PostgreSQL client

// SQL Query to create and populate the table
const SQL = `
  CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    text VARCHAR(255),
    username VARCHAR(255),
    added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  INSERT INTO messages (text, username) 
  VALUES
    ('I am a king', 'Bryan'),
    ('I learned programming here', 'Odin'),
    ('Marko the creator will be the richest and most powerful', 'Damon');
`;

async function main() {
  console.log("Seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL, // Use the DATABASE_URL from .env
  });

  try {
    // Connect to the Supabase database
    await client.connect();

    // Run the SQL to create the table and insert data
    await client.query(SQL);
    console.log("Data seeded successfully");
  } catch (err) {
    console.error("Error during seeding:", err);
  } finally {
    // Close the database connection
    await client.end();
  }

  console.log("End");
}

main();
