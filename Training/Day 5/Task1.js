// TRY # 1

// class MP {

//     constructor(mpDriver, mpName, mpConstituency, mpPost) {
//         this.mpDriver = mpDriver;
//         this.mpName = mpName;
//         this.mpConstituency = mpConstituency;
//         this.mpPost = mpPost;
//     };

//     getName() {
//         console.log("Mp name is Mr.", this.mpName);
//     };

//     getDriverName() {
//         console.log("Driver Assigned for Mp", this.mpName, "name is Mr.", this.mpDriver);
//     };

//     getConstituency() {
//         console.log("Constituency of Mp", this.mpName, "is", this.mpConstituency);
//     };

//     getMpSpendLimit() {
//         if (this.mpPost === "PM") {
//             this.mpSpendLimit = 1000000000;
//         } else if (this.mpPost === "Minister") {
//             this.mpSpendLimit = 10000000
//         } else if (this.mpPost === "Mp") {
//             this.mpSpendLimit = 1000000
//         }
//         console.log("Spending Limit of the MP is", this.mpSpendLimit);
//         return;
//     };
// }

// class Police {
//     constructor(policePost,) {
//         this.poicePost = policePost
//     }

//     canArrest() {

//     }
// }

// let Jaipur = new MP("Rajesh", "Dhruv", "Jaipur", "PM");

// console.log("Jaipur", Jaipur);
// Jaipur.getName();
// Jaipur.getDriverName();
// Jaipur.getConstituency();
// Jaipur.getMpSpendLimit()


// class Animals {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sing() {
//         return `${this.name} can sing`;
//     }
//     dance() {
//         return `${this.name} can dance`;
//     }
// } 
// class Cats extends Animals {
//     constructor(name, age, whiskerColor) {
//         super(name, age);
//         this.whiskerColor = whiskerColor;
//     }
//     whiskers() {
//         return `I have ${this.whiskerColor} whiskers`;
//     }
// }
// let clara = new Cats("Clara", 33, "indigo");

// TRY # 2
// class person {

//     constructor(name) {
//         this.name = name
//     };

//     getName() {
//         console.log("The Person name is", this.name);
//     };

// };

// class MP extends person {

//     constructor(name, constituency, designation) {
//         super(name);
//         this.constituency = constituency;
//         this.designation = designation
//     };

//     getSpendingLimit() {
//         if (this.designation === "PM") {
//             this.spendingLimit = 1000000000;
//         } else if (this.designation === "Minister") {
//             this.spendingLimit = 10000000;
//         } else if (this.designation === "MP") {
//             this.spendingLimit = 1000000;
//         }
//         return this.spendingLimit
//     }

//     getDriverName() {
//         console.log("Driver Assigned for Mp", this.name, "name is Mr.", this.mpDriver);
//     };

//     getConstituency() {
//         console.log("Constituency of Mp", this.name, "is", this.constituency);
//     };

// };

// class Driver extends person {

//     constructor(name, typeOfVehicle) {
//         super(name)
//         this.typeOfVehicle = typeOfVehicle;
//         this.designation = "Driver"
//     };

// };

// let jaipurMP =  new MP ("Dhruv" ,"Jaipur", "PM");
// jaipurMP.getConstituency();
// jaipurMP.getSpendingLimit();
// let japurDriver = new Driver("Raju" , "Car");

// console.log("japurDriverjapurDriver",  japurDriver);


// TRY # 3

class Person {
    constructor(name) {
        this.name = name;
    }

    displayName() {
        return this.name;
    }
}

const person1 = new Person("Dhruv");

class MP extends Person {
    constructor(Name, DriverName, Constituency) {
        super(Name);
    
    this.DriverName = DriverName;
        this.Constituency = Constituency;
        this.spend = 0;
        this.Post = "Mp";
    }

    getConstituency() {
        return this.Constituency;
    }

    getDriver() {
        return this.DriverName;
    }

    getMpSpendLimit() {
        if (this.Post === "PM") {
            this.SpendLimit = 1000000000;
        } else if (this.Post === "Minister") {
            this.SpendLimit = 10000000;
        } else if (this.Post === "Mp") {
            this.SpendLimit = 1000000;
        }
        return this.SpendLimit;
    }

    Spended(expediture) {
        let spend = this.spend + expediture;
        this.spend = spend;
        return this.spend;
    };
}

const JaipurMp = new MP("Krishna", "Rajesh", "Jaipur");

class PM extends MP {
    constructor(Name, DriverName, Constituency) {
        super(Name, DriverName, Constituency);
        this.Post = "PM";
        this.specialFacility = true;
    }
}

const indiaPM = new PM("Krishna", "Mahesh", "Raipur");

class Minister extends PM {
    constructor(Name, DriverName, Constituency) {
        super(Name, DriverName, Constituency);
        this.Post = "Minister";
    }
}

const healthMinister = new Minister("Mahendra", "Mukesh", "Noida");

class comissioner extends Person {
    constructor(name) {
        super(name);
        this.post = "Comissioner";
    }

    mpArrestWarant(culprit) {
        let warants = [];
        for (let i = 0; i < culprit.length; i++) {
            if (culprit[i].spend > culprit[i].getMpSpendLimit()) {
                warants.push(culprit);
            } else if (culprit[i].spend > culprit[i].getMpSpendLimit()) {
                warants[i].push(culprit);
            } else if (culprit[i].spend > culprit[i].getMpSpendLimit()) {
                warants.push(culprit);
            }
        }
        return warants;
    }

    doArrest(from, permission, man) {
        if (from === "PM" && permission === true && man.Post !== "PM") {
            return `${man.name} can be arrested`;
        } else {
            return `${man.name} can't be arrested`;
        }
    }
}

const centralComissioner = new comissioner("Ravi");
