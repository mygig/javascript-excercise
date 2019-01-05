/**
 * Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
 */


const readline = require('readline');
let year;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Provide the year and check if its leap or not. ', (answer) => {
  year = answer;
  console.log(`Year entered is ${year}`);
  checkLeapYear(year)? console.log(`${year} is a leap year`): console.log(`${year} is a not a leap year`)

  rl.close();
});

function checkLeapYear(year){
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}