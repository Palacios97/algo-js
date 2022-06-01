//Write a program that will display the minimum and maximum elements of a given array.

let arr = [2,3,4,5,6,7,8,9,10,11,12];
temp = 0;
arr.forEach((element) => {
    if(temp < element) {
        temp = element;
    }
});
console.log(`the largest number is:${temp}`);

let arrFirst = [2,3,4,5,6,7,8,9];
let m = Math.min(...arrFirst);
console.log("the lowest number is:", m);