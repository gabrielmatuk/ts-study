export abstract class BankAccount {
    private name: string
    accountNumber: number
    balance: number = 0

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name: string):void => {
        this.name = name
        console.log('Nome alterado com sucesso')
    }

    getName = (): string => {
        return this.name
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
