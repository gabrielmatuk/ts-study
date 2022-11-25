import { Box,Center } from '@chakra-ui/react'
// import { login } from '../services/login'
// import { ButtonComponent } from './Button'
import {InputsEmail, InputsPassword} from './Inputs'
import {api} from '../api'
import React from 'react'

interface userData {
  email: string
  password: string
  name: string
}


export const Card = () => {
  const [userData, setUserData] = React.useState<null | userData>()

  
  React.useEffect(()=>{
    const getData = async() => {
      const data: any | userData = await api
      setUserData(data)
    }
    getData()
  }, [])

  console.log(userData)

  return (
    <Box backgroundColor='#fafafa' borderRadius='25px' padding='15px' >
      {userData === null || userData === undefined ? <h1>Loading ... </h1> : <h1>Informações carregadas</h1>}
    <Center>
    <h1>Faça o Login:</h1>
    <p>
    {userData?.email}
    </p>
    </Center>

    <InputsEmail id='emailInput' label='Email:' htmlFor='emailInput' placeholder='Email'></InputsEmail>
    <InputsPassword id='passwordInpput' label='Senha:' htmlFor='passwordInpput' type='password' placeholder='Password'></InputsPassword>
       <Center>
        {/* <ButtonComponent onClick={login('gabrielmatuk@.com')}/> */}
      </Center>
    </Box>
  )
}

export default Card