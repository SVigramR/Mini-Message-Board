const pool = require("../db/pool")
const messages = require("../routes/messages")
const createMessageObject = require("./messageObject")

async function populateMessages() {
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT * FROM messages');
        console.table(result.rows[0])
        for (let index = 0; index < result.rows.length; index++) {
            let row = createMessageObject(result.rows[index])
            console.log(row)
            messages.push(row)
        }
    } finally {
        client.release();
    }
}

module.exports = populateMessages;