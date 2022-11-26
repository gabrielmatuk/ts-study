import { Center,  SimpleGrid, Spinner } from "@chakra-ui/react"
import {useParams, useNavigate} from 'react-router-dom'
import CardInfo from "../components/CardInfo"
import React from "react"
import { api } from "../api"
import { AppContext } from "../components/AppContext"

interface userData {
    email: string
    password: string
    name: string
    balance: number
    id: string
  }

const Conta = () => {
    const [userData, setUserData] = React.useState<null | userData>()
    const {id} = useParams()

    const navigate = useNavigate()

    const {isLoggedIn} = React.useContext(AppContext)

    !isLoggedIn && navigate('/')

    React.useEffect(()=>{
      const getData = async() => {
        const data: any | userData = await api
        setUserData(data)
      }
      getData()
    }, [])
    
    const actualData = new Date()

    if(userData && id !==  userData.id){
      navigate('/')
    }
  return (
    <Center>
        {/* {userData === null || userData === undefined ? <h1>Loading ... </h1> : <h1>Informações carregadas</h1>} */}

        <SimpleGrid column={2} spacing={8} paddingTop={16}>
          {
            userData === undefined || userData === null ? (<Center>
              <Spinner size='xl' color="white"/>
            </Center>): (<>
              <CardInfo mainContent={`Bem vindo ${userData?.name}`} content={`${actualData.getDay()}/${actualData.getMonth()}/${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`}/>
              <CardInfo mainContent="Saldo" content={`R$: ${userData.balance}`}></CardInfo>
              </>)
            
          }
           
        </SimpleGrid>
    </Center>

  )
}

export default Conta