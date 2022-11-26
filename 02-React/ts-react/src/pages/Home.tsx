import { Box, Center,Input } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../components/AppContext'
import { ButtonComponent } from '../components/Button'
import Card from '../components/Card'
import { Inputs } from '../components/Inputs'
import { login} from '../services/login'



const Home = () => {
  const [email, setEmail] = React.useState('')

  const {setIsLoggedIn} = useContext(AppContext)
  const navigate = useNavigate()

  const validateUser = async(email: string) => {
    const loggedIn = await login(email)

  
    if(!loggedIn){
      alert('Email inválido')
    }
    setIsLoggedIn(true)
    navigate('conta/1')
  }
  return (
      <Box minHeight='100vh' padding='25px'>
        <Card>
          <Center>
      <h1>Faça o Login: </h1>
          </Center>
          <Input placeholder='Email' value={email} onChange={(event)=> setEmail(event.target.value)}></Input>
          <Inputs id='passwordInpput' htmlFor='passwordInpput' type='password' placeholder='Password'></Inputs>
          <Center>
            <ButtonComponent onClick={()=> {validateUser(email)}}/>
          </Center>
        </Card>
      </Box>
)
}

export default Home