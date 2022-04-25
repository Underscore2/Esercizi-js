class BankAccount {

    constructor(current) {
        this.view = function () {
            return console.log(`Il tuo saldo attuale è di: $${current}`)
        }

        this.deposit = function (value) {
            current += value;
            return console.log(`Hai depositato $${value}`)

        }

        this.withdraw = function (value) {
            current -= value;
            return console.log(`Hai ritirtato $${value}`)


        }
    }

}




const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();