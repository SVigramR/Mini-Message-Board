require('dotenv').config({ path: '../.env' });
const { Client } = require("pg");

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env
// Debug environment variables (redact actual password in output)
// console.log("Environment variables loaded:");
// console.log("PGHOST:", process.env.PGHOST ? "✓ Set" : "❌ Not set");
// console.log("PGDATABASE:", process.env.PGDATABASE ? "✓ Set" : "❌ Not set");
// console.log("PGUSER:", process.env.PGUSER ? "✓ Set" : "❌ Not set");
// console.log("PGPASSWORD:", process.env.PGPASSWORD ? "✓ Set (value hidden)" : "❌ Not set");
// console.log("DATABASE_URL:", process.env.DATABASE_URL ? "✓ Set (value hidden)" : "❌ Not set");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
 id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
 name VARCHAR ( 255 ),
 message TEXT,
 added DATE
);
INSERT INTO messages (name, message, posted)
VALUES
 ('Jake', 'Amazing!','2025-03-13'),
 ('Marco', 'Howdy!', '2025-03-13')
`;

async function main() {
  console.log("seeding...");
  
  const client = new Client({
    host: PGHOST,
    database: PGDATABASE,
    user: PGUSER,
    password: PGPASSWORD,
    ssl: {
      require: true
    }
  });
  
  try {
    await client.connect();
    await client.query(SQL);
    console.log("done");
  } finally {
    await client.end();
  }
}

main().catch(err => {
  console.error("Database error:", err.message);
  console.error(err.stack);
});