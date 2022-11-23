import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'



const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Gabriel', 22,)
peopleAccount.deposit()
const companyAccount: CompanyAccount = new CompanyAccount('ETEG', 10)
companyAccount.deposit()
