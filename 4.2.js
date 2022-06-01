//Create a function named rand10() that returns a random integer between 1 and 10.
//Create a program that will display the result of that function each time it is run.
//Write a documentation for the rand10() function.
//You will have to search on Google how to generate random numbers in JavaScript for this exercise.
//const readLineDSync = require("readline-sync")
//let random = readLineDSync.question("random number :")


const readLineDSync = require("readline-sync");
let number = readLineDSync.question("Press enter")

function rand10(min, max) {
return Math.floor(Math.random() * 10) ; // return a random whole number between 0 , 10 
} 
console.log(Math.floor(Math.random() * 10));