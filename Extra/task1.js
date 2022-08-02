// Class for Person
class Person {
  constructor(name) {
    this.name = name;
  }
  display() {
    console.log(`Name ${this.name}`);
  }
}

class MP extends Person {
  name;
  spending_limit;
  driverName;
  constituency;

  constructor(name, driverName, constituency, spending_limit) {
    super(name);
    this.spending_limit = spending_limit;
    this.driverName = driverName;
    this.constituency = constituency;
  }
  getConstituency() {
    console.log("MP Constituency name:", this.constituency);
  }
  getDriver() {
    console.log("MP Driver's name:", this.driverName);
  }
}

class PM extends MP {
  constructor(name, driverName, constituency, spending_limit) {
    super(name, driverName, constituency,spending_limit);
    
  }
}

class Minister extends PM{    
    constructor(name, driverName, constituency, spending_limit){
        super(name,driverName,constituency,spending_limit);
    }
};

class comissioner extends Minister{
    can_arrest;
    constructor(can_arrest){
        super();
        this.can_arrest = can_arrest;
    }
    check(){
      if(this.spending_limit > 100000)
      {
          console.log("MP exceeded spending limit");
          can_arrest = true;
          console.log("Can be arrested by comissioner?:")
      }
      else if(this.spending_limit > 10000000)
      {
          console.log("PM exceeded spending limit");
          can_arrest = true;
          console.log("Can be arrested by comissioner?:");
      }
      else if(this.spending_limit > 1000000)
      {
          console.log("minister exceeded spending limit");
          can_arrest=true;
          console.log("Can be arrested by comissioner?");
      }
      else{
          console.log("Nobody exceeded spending limit");
          console.log("MP spending:", this.spending_limit);
          console.log("PM spending:", this.spending_limit);
          console.log("Minister spending:",this.spending_limit);
      }
      }

};

const personObj = new Person("Sandhya");
personObj.display();
console.log(personObj);

const mpObj = new MP("sandhya","andy", "Agra",100000);
mpObj.getConstituency();
mpObj.getDriver();
console.log(mpObj);

const pmObj = new PM("sarika", "tom", "Mainpuri", 10000000);
console.log(pmObj);

const ministerObj = new Minister("Rahul", "sanju", "Delhi", 1000000);
console.log(ministerObj);

const comissionerObj = new comissioner(true)
comissionerObj.check();
console.log(comissionerObj);

