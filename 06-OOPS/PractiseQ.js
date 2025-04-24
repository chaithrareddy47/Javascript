class BankAccout{
    constructor(balance = 0, accountHolder, accountNumber) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
      
        if (amount > 0) {
            this.balance += amount
            c
            
        }
    }

    withDraw() {
        
    }
}

const alexAccount = new BankAccout('123Abc', 'Alex', 600)

console.log(alexAccount.deposit());

