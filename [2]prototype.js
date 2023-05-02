function BankAccount(customerName, balance = 0) {
  //   Properties
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  //   Methods
  //   this.deposit = function (amount) {
  //     this.balance += amount;
  //   };
  //   this.withdraw = (amount) => {
  //     this.balance -= amount;
  //   };
}

const rakeshAccount = new BankAccount("Rakesh Ku");

const joniAccount = new BankAccount("Joni", 1000);

// console.log(rakeshAccount, joniAccount)

BankAccount.prototype.test = "this is a test";
BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};
BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

rakeshAccount.deposit(3000);
console.log(rakeshAccount);

joniAccount.withdraw(300);
console.log(joniAccount);

console.log(BankAccount.prototype);
