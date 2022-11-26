import { Box, Center } from '@chakra-ui/react'
import { ButtonComponent } from '../components/Button'
import Card from '../components/Card'
import { InputsEmail, InputsPassword } from '../components/Inputs'
import { Login } from '../services/login'

const Home = () => {
  return (
      <Box minHeight='100vh' padding='25px'>
        <Card>
          <Center>
      <h1>Faça o Login: </h1>
          </Center>
          <InputsEmail id='emailInput' label='Email:' htmlFor='emailInput' placeholder='Email'></InputsEmail>
          <InputsPassword id='passwordInpput' label='Senha:' htmlFor='passwordInpput' type='password' placeholder='Password'></InputsPassword>
          <Center>
            <ButtonComponent onClick={()=> {Login('gabriel@matuk.com')}}/>
          </Center>
        </Card>
      </Box>
)
}

export default Home