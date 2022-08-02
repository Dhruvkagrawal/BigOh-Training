// Inheritance : Inheritance enables us to define a class that takes all the properties of a parent class and allow us to add more.
// Pros :=> Allow code reuseablity.
// for class inheritance we are using extend keyword.


// Example : => 

// Parent class
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello", this.name);
    }
}

// Inheriting Parent Class
class Student extends Person {
    greet2() {
        console.log("Hello from Student class", this.name);
    };
};


let student1 = new Student('Jack');


student1.greet2()