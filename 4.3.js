/*By reusing the function rand10() created in Exercise 2, write a function named multiRand(n)
that returns an array of n numbers between 1 and 10. 
You should not modify anything in rand10() to achieve this.
Write a documentation for the multiRand(n) function.
Use that function to create a program that will ask the number of random numbers to generate
 then display that same number of random numbers.*/

 

    const readlineSync = require("readline-sync");
    let num = readlineSync.question('Enter a number please');

    let arr = [];
 
 
    function rand10(n){
     return Math.floor(Math.random() * 10);
 
    }
 
    function multiRand(n){
     for(var i = 0; i < n; i++){
         arr[i]=rand10();
     }
 }
 
     multiRand(num);
    console.log(arr);