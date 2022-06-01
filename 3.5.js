//You get an array of numbers, return the sum of all of the positives ones.

//Example: [1,-4,7,12] => 1 + 7 + 12 = 20

//Note: if there is nothing to sum, the sum is default to 0

const arr = [1,-4,7,12]; 
const sumPositives = (arr = []) => {
   const isPositive = num => typeof num === 'number' && num > 0;
   const res = arr.reduce((acc, val) => {
      if(isPositive(val)){
         acc += val;
      };
      return acc;
   }, 0);
   return res;
};
console.log(sumPositives(arr));
    