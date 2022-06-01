/*Create a function named askTvSerie()
that will ask the user for the following data about its favorite TV serie:
Name
Production year
Names of the cast members (there can be as much as the user want)
That function must gather all the data in a single object and return it. 
The data structure must be elegant.
Create a program that use that function to generate a TV serie object and display it to the user in JSON 
format.*/
const readlineSync = require("readline-sync");

const askTvSerie = () => {
    const tvshow = {};
    tvshow.name = readlineSync.question('Please enter the name of your favorite tv show : ');
    tvshow.year = readlineSync.question('In what year was it produced ? : ');
    tvshow.cast = [];
    let keepGoing = true;
    while (keepGoing) {
        let input = readlineSync.question('Please give me the cast (type stop to finish): ');
        input != "stop" ? tvshow.cast.push(input) : keepGoing = false;
    }
    return tvshow;
}
console.log(`Your favorite show object : ${JSON.stringify(askTvSerie())}`);