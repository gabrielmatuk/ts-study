import { BankAccount } from "./BankAccount"

export class CompanyAccount extends BankAccount {
    amountLoan: number | undefined

    constructor (name:string, accountNumber: number, amountLoan?: number){
        super(name, accountNumber)
        this.amountLoan = amountLoan
    }

    getLoan = (amountLoan: number):void => {
        this.balance = this.balance + amountLoan
        console.log(`Quantidade inserida em caixa: ${amountLoan} -> Quantidade TOTAL: ${this.balance}`)
        return
    }

    deposit = ():void => {
        console.log('A empresa depositou')
    }
}
