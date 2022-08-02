function BankAccount(customeName, balance = 0) {
    // Properties
    this.customeName = customeName;

    this.accountNumber = Date.now();

    this.balance = balance;

    // Methods
    this.deposit = (amount) => {
        this.balance += amount
    }

    this.withdraw = (amount) => {
        this.balance -= amount
    }
};

const Customer1 = new BankAccount("Dhruv", 1000);
const Customer2 = new BankAccount("krishna", 2000);
const Customer3 = new BankAccount("Mahendra", 3000);
const Customer4 = new BankAccount("Mamta", 4000);
const Customer5 = new BankAccount("Rakesh");

Customer1.balance = 9000

Customer1.deposit(1000);

console.log("customer1", Customer1);

Customer1.withdraw(1000);

console.log("customer1", Customer1);