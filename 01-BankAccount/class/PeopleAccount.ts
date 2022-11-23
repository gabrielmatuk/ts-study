import { BankAccount } from "./BankAccount"

export class PeopleAccount  extends BankAccount{
    doc_id: number

    constructor(doc_id: number, name: string, accountNumber: number, deposit?: number, withdraw?: number){
        super(name, accountNumber, deposit, withdraw)
        this.doc_id = doc_id
    }
}

