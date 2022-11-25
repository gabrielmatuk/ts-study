import { Box,Center } from '@chakra-ui/react'
import { login } from '../services/login'
import { ButtonComponent } from './Button'
import {InputsEmail, InputsPassword} from './Inputs'

export const Card = () => {
  return (
    <Box backgroundColor='#fafafa' borderRadius='25px' padding='15px' >
    <Center>
    <h1>Faça o Login: </h1>
    <p>
    </p>
    </Center>

    <InputsEmail id='emailInput' label='Email:' htmlFor='emailInput' placeholder='Email'></InputsEmail>
    <InputsPassword id='passwordInpput' label='Senha:' htmlFor='passwordInpput' type='password' placeholder='Password'></InputsPassword>
       <Center>
        <ButtonComponent onClick={()=> {login('gabriel@matuk.com')}}/>
      </Center>
    </Box>
  )
}

export default Card