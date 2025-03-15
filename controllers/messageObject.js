const formatDate = require("../routes/date");


function createMessageObject(message) {
    const row = {
        name: message.name,
        message: message.message,
        added: formatDate(new Date(message.added))
    }
    return row
}

module.exports = createMessageObject;