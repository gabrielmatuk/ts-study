export abstract class BankAccount {
    private name: string
    readonly accountNumber: number
    balance: number = 0
    private status: boolean = true
    private depositCash?: number
    private withdrawMoney?: number 

    constructor(name: string, accountNumber: number, deposit?: number, withdraw?: number){
        this.name = name
        this.accountNumber = accountNumber
        this.depositCash = deposit
        this.withdrawMoney = withdraw
    }

    setName = (name: string):void => {
        this.name = name
        console.log('Nome alterado com sucesso')
    }
    setBalance = (balance:number):void => {
        this.balance = balance
        console.log('Quantidade em caixa alterado')
    }
    getName = (): string => {
        return this.name
    }

    deposit = (deposit: number): void => {
        if(this.validateStatus()){
            this.depositCash = deposit
            this.balance = deposit
            console.log('Depositado total de: ', deposit)
        }
    }

    withdraw = (withdrawMoney:number): void => {
        if(this.balance > withdrawMoney && this.validateStatus()) {
            this.balance =  this.balance - withdrawMoney 
            console.log(`Você sacou: ${withdrawMoney}, seu saldo atual é de: ${this.balance}`)
            return 
        }
        throw new Error('Não foi possível sacar')
    }
    
    getBalance = (): void => {
        console.log(this.balance)
    }
    private validateStatus = (): boolean => {
        if(this.status) {
            return this.status
        }

        throw new Error('Conta inválida')
    }
}
