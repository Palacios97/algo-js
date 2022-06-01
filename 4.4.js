/*Create a function named average(arr) that takes an array of numbers as argument and returns the average.
Create a function named min(arr) that takes an array of numbers as argument and returns the minimum element.
Create a function named max(arr) that takes an array of numbers as argument and returns the maximum element.
Create a program that asks a number to the user then generate that same amount of random numbers
but also displays their average, min and max. 
To do so, 
use the three functions you just created as well as the multiRand(n) function created in Exercise 3.
Write a documentation for all the functions you created.*/

    const readlineSync = require("readline-sync");
    let num = readlineSync.question('Enter a number please');
    let arr = [];
    let averageFirst;
    let minimum;
    let maximum;


    function rand10(n){
        return Math.floor(Math.random() * 10);
    }

    function multiRand(n){
    for(var i = 0; i < n; i++){
        arr[i]=rand10();
    }
    }
    function average(arr){
        function average(arr){
            return averageFirst = arr.reduce((a, b) => a + b, 0) / arr.length;
         }
    }
    function max(arr){
        return maximum = Math.max(...arr);
    }
    
    function min(arr){
       return minimum = Math.min(...arr);
    }
    multiRand(num);
    console.log(arr);
    console.log(max(arr));
    console.log(min(arr));
    console.log(average(arr));