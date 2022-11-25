import { Center,  SimpleGrid } from "@chakra-ui/react"
import CardInfo from "../components/CardInfo"
import React from "react"
import { api } from "../api"

interface userData {
    email: string
    password: string
    name: string
    balance: number
  }

const Conta = () => {
    const [userData, setUserData] = React.useState<null | userData>()

  
    React.useEffect(()=>{
      const getData = async() => {
        const data: any | userData = await api
        setUserData(data)
      }
      getData()
    }, [])
  return (
    <Center>
        {/* {userData === null || userData === undefined ? <h1>Loading ... </h1> : <h1>Informações carregadas</h1>} */}

        <SimpleGrid column={2} spacing={8} paddingTop={16}>
           <CardInfo text="Informações do acesso"/>
           <CardInfo text="Informações da conta"/>
        </SimpleGrid>
    </Center>

  )
}

export default Conta