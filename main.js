const moment = require("moment")
const momentFile = require("./moment.js")
const chalkFile = require("./chalk.js")

console.log("It is " + chalkFile.blue(moment().format('dddd MMMM Do YYYY, h:mm:ss a')));
console.log("It is the " + chalkFile.magenta(moment().format('DDDo')) + " day of the year.");
console.log("It is " + chalkFile.cyan(momentFile.totalTimeSeconds()) + " seconds into the current day.");
console.log("It " + chalkFile.green(momentFile.isDaylight()) + " during Daylight Savings Time.");
console.log("It " + chalkFile.red(momentFile.isLeap()) + " a leap year.");
