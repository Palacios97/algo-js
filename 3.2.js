/*Write a program that will calculate the average value of a given array.

Test it with the following arrays:

[1, 2, 3, 4, 5] => 3
[100, 101, 102] => 101*/

const arr = [1, 2, 3, 4, 5];
var sum = 0;
for (var number of arr) {
    sum += number;
}
average = sum / arr.length;
console.log(average);

const arrSecond = [100, 101, 102];
var sum = 0;
for (var number of arrSecond) {
    sum += number;
}
average = sum / arrSecond.length;
console.log(average);