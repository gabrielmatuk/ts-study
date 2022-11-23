import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'



const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Gabriel', 22,)
peopleAccount.setName('Gabriel Matuk')
console.log(peopleAccount.getName())