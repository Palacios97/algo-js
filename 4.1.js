//Create a function named calcSurface that takes the length and width of a rectangle and returns its 
//surface. Then create a program that asks the length and width of a rectangle to the user 
//then displays the surface of that rectangle. That program must use the function you created.

//Write a documentation for the calcSurface function.
const readLineDSync = require("readline-sync");
    let length = readLineDSync.question("Length :");
    let width = readLineDSync.question("Width :")
    let calcSurface = (length, width) => { //This fonction will operate the number's user in order to obtain the surface's figure
    return length * width + "m2";
} 
console.log("Surface is:" + calcSurface(length, width));
    
