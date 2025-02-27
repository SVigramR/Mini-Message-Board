const dateFns = require("date-fns");

function formatDate(getDate) {
  if (getDate === '') {
    return getDate;
  } else {
    return dateFns.format(new Date(Date.parse(getDate)), 'LLL do yyyy');
  }
}

module.exports = formatDate;