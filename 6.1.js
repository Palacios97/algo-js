/*In the code below, there is a class defined, named: Cat. Copy-paste it in your js file.

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
Test the class: Display in the console two instances of the class Cat: Skitty, 9 years and Pixel, 6 years.*/

class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let x = new Cat ("Skitty", "9 years");
console.log(x)
x.age = " 6 years";
console.log(x);