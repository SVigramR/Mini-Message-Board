const pool = require("./pool");

async function getPgVersion() {
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT version()');
      console.log(result.rows[0]);
    } finally {
      client.release();
    }
}

async function insertMessage(message) {
  return await pool.query(
    "INSERT INTO messages (name, message, added) VALUES ($1, $2, NOW()) RETURNING *", 
    [message.name, message.message]
  );
}

module.exports = {
  getPgVersion,
  insertMessage
};