const moment = require("moment")

function isDaylight() {
  if (moment().isDST("YYYY, M, D") == false){
    return("is not");
  } else if (moment().isDST("YYYY, M, D") == true) {
    return("is");
  }
}

function isLeap() {
  if (moment().isLeapYear("YYYY") == false) {
    return("is not")
  } else if (moment().isLeapYear("YYYY") == true) {
    return("is")
  }
}

function totalTimeSeconds() {
let hourSeconds = (moment().format('HH') * 3600)
let minuteSeconds = (moment().format('mm') * 60)
let seconds = (moment().format('ss') * 1)

let totalSeconds = (hourSeconds + minuteSeconds + seconds)
return(totalSeconds)
}

module.exports = {
  isDaylight: isDaylight,
  isLeap: isLeap,
  totalTimeSeconds: totalTimeSeconds,
}
