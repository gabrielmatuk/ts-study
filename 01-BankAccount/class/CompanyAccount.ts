import { BankAccount } from "./BankAccount"

export class CompanyAccount extends BankAccount {
    constructor (name:string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = ():void => {
        console.log('Você pegou um emprestimo')
    }

    deposit = ():void => {
        console.log('A empresa depositou')
    }
}
