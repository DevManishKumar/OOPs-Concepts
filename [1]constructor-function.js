function BankAccount(customerName, balance = 0) {
  //   Properties
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  //   Methods
  this.deposit = function (amount) {
    this.balance += amount;
  };
  this.withdraw = (amount) => {
    this.balance -= amount;
  };
}

const rakeshAccount = new BankAccount("Rakesh Ku", 1000);
const joniAccount = new BankAccount("Joni Ku", 5000);
console.log(rakeshAccount, joniAccount);
console.log(joniAccount.balance);
joniAccount.balance = 2000;
console.log(joniAccount.balance);

rakeshAccount.deposit(6000);
console.log(rakeshAccount);

rakeshAccount.withdraw(3000);
console.log(rakeshAccount);

/** */

const accounts = [];

const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");

const depositForm = document.querySelector("#depositForm");
const accountNumber = document.querySelector("#accountNumber");
const amount = document.querySelector("#amount");

accountForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const account = new BankAccount(customerName.value, Number(balance.value));

  accounts.push(account);

  console.log(accounts);
});

depositForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const account = accounts.find(
    (account) => account.accountNumber === +accountNumber.value
  );

  account.deposit(+amount.value)

  console.log(accounts)
});
