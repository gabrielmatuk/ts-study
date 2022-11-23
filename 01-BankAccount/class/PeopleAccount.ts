import { BankAccount } from "./BankAccount"

export class PeopleAccount  extends BankAccount{
    doc_id: number

    constructor(doc_id: number, name: string, accountNumber: number){
        super(name, accountNumber)
        this.doc_id = doc_id
    }
}

