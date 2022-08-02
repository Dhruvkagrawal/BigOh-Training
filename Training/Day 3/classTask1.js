class IndianPolitics {

    mpName;

    mpConstituency;

    mpDriver;

    mpDesignation;

    // Constructor Function

    constructor(mpName, mpConstituency, mpDriver, mpDesignation) {
        this.mpName = mpName;

        this.mpConstituency = mpConstituency;

        this.mpDriver = mpDriver;

        this.mpDesignation = mpDesignation;
    };

    // Methods

    getConstituency() {
        return ` MP ${this.mpName} wins from ${this.mpConstituency} constituency.`;
    };

    getDriver() {
        return `MP${this.mpName} has Assigned ${this.mpDriver} as a driver.`;
    };

    SpendingLimit() {
        if (this.mpDesignation === "PM") {
            this.mpSpendingLimit = 1000000000;
        } else if (this.mpDesignation === "Minister") {
            this.mpSpendingLimit = 10000000;
        } else if (this.mpDesignation === "MP") {
            this.mpSpendingLimit = 1000000;
        }
        return this.mpSpendingLimit;
    };

    exceedsSpendingLimit(amount) {
        let redFlag;
        if (amount > this.SpendingLimit()) {
            redFlag = true;
            return `sorry, MP ${this.mpName} has exceeded his spending limit. your spending limit is only ${this.mpSpendingLimit}`;
        } else if (amount <= this.SpendingLimit()) {
            redFlag = false;
            return `Conratulations, MP ${this.mpName} has ${this.SpendingLimit()}. you can withdraw money....`;
        }
        return redFlag;
    };

    CanArrest(permission, Designation) {
        if (
            permission === true &&
            Designation === "PM" &&
            this.mpDesignation === "Minister"
        ) {
            return `MP ${this.mpName} can be arrested because of the PM's order`;
        } else {
            return `MP ${this.mpName} can't be arrested`;
        }
    };

    CanAvail() {
        if (this.mpDesignation === "PM") {
            return `PM ${this.mpName} can avail special benefits such as Aircraft (along with car) and its designated driver.  `;
        } else {
            return `Person can't avail special benifits`;
        }
    };
};

const jaipurContituency = new IndianPolitics("Dhruv", "Jaipur", "Ramesh", "MP");
let BangloreContituency = new IndianPolitics("Krishna", "Banglore", "Suresh", "PM");
let NoidaContituency = new IndianPolitics("Dhruv", "Noida", "VImlesh", "Minister");

console.log("jaipurContituencyClassBAsed", jaipurContituency);
console.log("BangloreContituencyClassBAsed", BangloreContituency);
console.log("NoidaContituencyClassBAsed", NoidaContituency);

console.log("MP", jaipurContituency.mpName);

console.log("getConstituency", jaipurContituency.getConstituency());

console.log("getDriver", jaipurContituency.getDriver());

console.log("exceedsSpendingLimit", jaipurContituency.exceedsSpendingLimit(1250000));

console.log("canArrest", jaipurContituency.CanArrest(true, "PM"));

console.log("canAvail", jaipurContituency.CanAvail());

console.log("SpendingLimit", jaipurContituency.SpendingLimit());