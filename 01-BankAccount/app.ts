import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { InvestorAccount} from './class/InvestorAccount'


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Gabriel', 22, 1000, 300)

const investorAccount:InvestorAccount = new InvestorAccount('Investidor', 123456, )
investorAccount.deposit(100)
// const companyAccount: CompanyAccount = new CompanyAccount('Banco', 123, 1000)
// companyAccount.setBalance(1000)
// companyAccount.getLoan(3000)
// companyAccount.getBalance()