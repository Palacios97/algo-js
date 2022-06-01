//Write a program that will create a duplicate of a given array.
//Bonus: make a first version that will only do it using push(). 
//Make a second version that uses a single method call to perform the copy.

const arr = [2,3,4,5,6,7,8,9];
const copyArr = [];
copyArr.push(arr);
console.log(copyArr);


const arrFirst = [3,6,7,8,9];
const clone = [].concat(arrFirst);
console.log(clone);