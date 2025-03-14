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

module.exports = getPgVersion;