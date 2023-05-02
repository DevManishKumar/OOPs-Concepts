class BankAccount {
  customerName;
  accountNumber;
  balance = 0;

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

const rakeshAccount = new BankAccount("Rakesh", 1000);
const joniAccount = new BankAccount("Joni", 1000);


rakeshAccount.deposit(3000);
console.log(rakeshAccount);

joniAccount.withdraw(300);
console.log(joniAccount);

