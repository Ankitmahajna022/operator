//Scenario: You are building an ATM system where a user has a bank account. The balance should not be directly accessible but can be checked via a method.
// Task:
//Create a BankAccount class with a private #balance property.
//Implement deposit(amount) and withdraw(amount) methods.
//Add a getBalance() method to return the balance.

class BankAccount {
    #balance;
    constructor() {
      this.#balance = 0;
    }
  
    deposit(amount) {
      this.#balance += amount;
    }
  
    withdraw(amount) {
      if (amount > this.#balance) {
        throw new Error("Insufficient balance");
      }
      this.#balance -= amount;
    }
  
    getBalance() {
      return this.#balance;
    }
  }

  const bankAccount = new BankAccount();
  bankAccount.deposit(150);
  bankAccount.withdraw(50);
  document.writeln(bankAccount.getBalance());
