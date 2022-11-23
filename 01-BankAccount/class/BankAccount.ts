export abstract class BankAccount {
    name: string
    accountNumber: number
    balance: number = 0

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = (): void => {
        console.log('Você depositou')
    }

    withdraw = (): void => {
        console.log('Você sacou')
    }
    
    getBalance = (): void => {
        console.log(this.balance)
    }
}
