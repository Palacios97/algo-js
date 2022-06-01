/*Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2),
write a function "elevator" accepting 3 arguments (in order):
left - The current floor of the left elevator 
right - The current floor of the right elevator 
call - The floor that called an elevator It should return the name of the elevator 
closest to the called floor ("left"/"right").
In the case where both elevators are equally distant from the called floor, 
choose the elevator to the right.
You can assume that the inputs will always be valid integers between 0-2.

Examples:

elevator(0, 1, 0); // => "left"
elevator(0, 1, 1); // => "right"
elevator(0, 1, 2); // => "right"
elevator(0, 0, 0); // => "right"
elevator(0, 2, 1); // => "right" */
const readlineSync = require("readline-sync");

let leftElevator = 0;
let rightElevator = 0;
let floor = 0;


function elevator(left, right, current){
    if(Math.abs(left - current) < Math.abs(right - current)){
        return "gauche";
    }  
    else {
        return "droite"
    }
}

 leftElevator= new Number(readlineSync.question("A quel étage se situe l'ascenceur de gauche ? "));
 rightElevator= new Number(readlineSync.question("A quel étage se situe l'ascenceur de droite ? "));
 floor= new Number(readlineSync.question("A quel étage vous situez vous ? "));

console.log("L'ascenceur de " + elevator(leftElevator, rightElevator, floor) + " va arriver !" );
