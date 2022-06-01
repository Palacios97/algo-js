//Make a program that ask the user to enter a number between 1 and 7. 
//Depending on the number, display the day of the week that correspond. 
//(1 => Monday, 2 => Tuesday, etc...)

const readlineSync = require('readline-sync');
var userData = readlineSync.question("Number between 1-7?");
let Monday = 1;
let Tuesday = 2;
let Wednesday = 3;
let Thursday = 4;
let Friday = 5;
let saturday = 6;
let Sunday = 7;
 while(userData == 1) {
     console.log("Monday");
     var userData = readlineSync.question("Number between 1-7?");
  if (userData == 2) {
     console.log("Tuesday");
     var userData = readlineSync.question("Number between 1-7?");
 }  if (userData == 3 ) {
     console.log("Wednesday");
     var userData = readlineSync.question("Number between 1-7?");
 }  if(userData == 4) {
     console.log("Thursday");
     var userData = readlineSync.question("Number between 1-7?");
 }  if(userData == 5) {
     console.log("Friday");
     var userData = readlineSync.question("Number between 1-7?");
 }  if(userData == 6) {
     console.log("Saturday");
     var userData = readlineSync.question("Number between 1-7?");
 }  if(userData == 7) {
     console.log("Sunday");
     var userData = readlineSync.question("Number between 1-7?");
 }
}