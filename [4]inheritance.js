{
  function BankAccount(customerName, balance = 0) {
    //   Properties
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
  };
  BankAccount.prototype.withdraw = function (amount) {
    this.balance -= amount;
  };

  function CurrentAccount(customerName, balance = 0) {
    //   Properties
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
    this.transaction = 50000;
  }

  CurrentAccount.prototype.takeBusinessLoan = function (amount) {
    console.log("Taking business loan : ", amount);
  };

  CurrentAccount.prototype.deposit = function (amount) {
    this.balance += amount;
  };
  CurrentAccount.prototype.withdraw = function (amount) {
    this.balance -= amount;
  };

  function SavingAccount(customerName, balance = 0) {
    //   Properties
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
    this.transaction = 10000;
  }

  SavingAccount.prototype.takePersonalLoan = function (amount) {
    console.log("Taking Personal Loan : ", amount);
  };

  SavingAccount.prototype.deposit = function (amount) {
    this.balance += amount;
  };
  SavingAccount.prototype.withdraw = function (amount) {
    this.balance -= amount;
  };

  const rakeshAcc = new BankAccount("Rakesh", 500);
  console.log(rakeshAcc);
  const rakeshAc = new CurrentAccount("Rakesh", 500);
  console.log(rakeshAc);
  const rakeshAccount = new SavingAccount("Rakesh", 500);
  console.log(rakeshAccount);
}


// Implement Inheritance using contructor function
{
  function BankAccount(customerName, balance = 0) {
    //   Properties
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
  };
  BankAccount.prototype.withdraw = function (amount) {
    this.balance -= amount;
  };

  function CurrentAccount(customerName, balance = 0) {
    //   Properties
    BankAccount.call(this, customerName, balance);

    this.transactionLimit = 50000;
  }

  CurrentAccount.prototype = Object.create(BankAccount.prototype)

  CurrentAccount.prototype.takeBusinessLoan = function (amount) {
    console.log("Taking business loan : ", amount);
  };

  function SavingAccount(customerName, balance = 0) {
    //   Properties
    BankAccount.call(this, customerName, balance)
    this.transactionLimit = 10000;
  }

  SavingAccount.prototype = Object.create(BankAccount.prototype)

    SavingAccount.prototype.takePersonalLoan = function (amount) {
      console.log("Taking personal loan : ", amount);
    };

 

  const rakeshAccount = new SavingAccount("Rakesh", 500);
  rakeshAccount.deposit(5000);
  rakeshAccount.withdraw(100);
  console.log(rakeshAccount);
}


// Implement Inheritance using classes

{
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

    class CurrentAccount extends BankAccount{
        transactionLimit = 50000;

        constructor(customerName, balance = 0){
            super(customerName, balance)
        }

        takeBusinessLoan(amount) {
            console.log("Taking business loan", amount);
        }
    }


    class SavingAccount extends BankAccount {
      transactionLimit = 10000;

      constructor(customerName, balance = 0) {
        super(customerName, balance);
      }

      takePersonalLoan(amount) {
        console.log("Taking personal loan", amount);
      }
    }

    const rakeshAccount = new CurrentAccount("rakesh", 4000)
    rakeshAccount.deposit(1000)
    rakeshAccount.withdraw(3900)
    console.log(rakeshAccount)
}

