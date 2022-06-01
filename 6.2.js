/*Create a Person class. It will have two properties, 
firstname and lastname, and method sayHello, which will return "Hello, [firstname] [lastname]!".

Test the class: 
Create an instance of the Person class and return the value of the sayHello method inside the console.*/
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName
    }
    set fullName(val) {
        this.firstName = val.split(" ")[0];
        this.name = val.split(" ")[1];
    }
    sayHello() {
        console.log("Hello," + " " + this.firstName + " " + this.lastName)
    }
}
let personOne = new Person ("Miguel", "Palacios");
personOne.sayHello();

