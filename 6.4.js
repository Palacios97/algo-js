/*Create a class named Person. It will have two properties,
firstname and lastname, as well as a getter name, which will return "[firstname] [lastname]", 
and a setter name, which will divide the full name on the basis of
 a space: the first element will be the firstname, the second the lastname.

Test the class: Create an instance of the Person class
 and display the value of the name inside the console, then assigns a new value to it 
 and displays the state of the instance inside the console at the end of the process.*/
 class Person {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
  
    /**
     * @param {string} text
     */
    set setName(text) {
      let arr_nam = text.split(" ");
      this.firstname = arr_nam[0];
      this.lastname = arr_nam[1];
    }
    get getName() {
      return `${this.firstname} ${this.lastname}`;
    }
  }
  
  let johnny = new Person("Johnny", "Hallyday");
  // johnny.name = "Johnny Hallyday";
  console.log(johnny.getName());
  // "Johnny Halliday"
  
  johnny.setName = "Jean-Phillipe Smet";
  console.log(johnny.getName());
  // "Jean-Philippe Smet"
  