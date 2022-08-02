
// class Person {

//     constructor(name) {
//         this.name = name;
//     }

//     introduceSelf() {
//         console.log(`Hi! I'm ${this.name}`);
//     }

// }

// class Professor extends Person {

//     constructor(name, teaches) {
//         super(name);
//         this.teaches = teaches;
//     }

//     introduceSelf() {
//         console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
//     }

//     grade(paper) {
//         const grade = Math.floor(Math.random() * (5 - 1) + 1);
//         console.log(grade);
//     }

// }

// const walsh = new Professor('Walsh', 'Psychology');
// walsh.introduceSelf();

// walsh.grade('my paper');

class A {

    constructor(n) {
        this.name = n;
        this.mapOfA = new Map();
    };

    toObj() {
        const { name, mapOfA } = this;

        const simpleMapOfA = Object.fromEntries(
            Array.from(
                mapOfA.entries(),
                ([key, value]) => [key, value.toObj()] 
            )
        );

        return {
            name,
            mapOfA: simpleMapOfA
        }
    };

    static from(obj) {
        const instance = new A(obj.name);

        for (const [key, value] of Object.entries(obj.mapOfA)) {
            instance.mapOfA.set(key, A.from(value));
        }

        return instance;
    };

    serialise() {
        return JSON.stringify(this.toObj());
    };

    static deserialise(json) {
        return A.from(JSON.parse(json));
    };

}

let a = new A("A");
let b = new A("B");
let c = new A("C");
let d = new A("D");

b.mapOfA.set("D", d);
a.mapOfA.set("B", b);
a.mapOfA.set("C", c);

let jsonString = a.serialise();
console.log("serialised view:\n", jsonString);

let fooA = A.deserialise(jsonString);
let fooB = fooA.mapOfA.get("B");
let fooC = fooA.mapOfA.get("C");
let fooD = fooB.mapOfA.get("D");

console.log("all four objects still instances of A\n", fooA instanceof A, fooB instanceof A, fooC instanceof A, fooD instanceof A);
console.log("deserilised objects:\n", fooA, fooB, fooC, fooD);