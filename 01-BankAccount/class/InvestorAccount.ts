import {BankAccount } from './BankAccount'

export class InvestorAccount extends BankAccount {
    depositValue?: number
    constructor(name:string, accountNumber:number, deposit?: number){
        super(name, accountNumber)
        this.depositValue = deposit
    }

    deposit = (deposit: number) => {
        this.depositValue = deposit + 10
        console.log(this.depositValue)
        return
    }
}