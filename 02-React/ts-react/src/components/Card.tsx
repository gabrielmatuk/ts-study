import { Box,Center } from '@chakra-ui/react'
import { ButtonComponent } from './Button'
import Inputs from './Inputs'


export const Card = () => {
  return (
    <Box backgroundColor='#fafafa' borderRadius='25px' padding='15px' >
         
    <Center>
    <h1>Faça o Login:</h1>
    </Center>

    <Inputs id='emailInput' label='Email:' htmlFor='emailInput' placeholder='Email'></Inputs>
    <Inputs id='passwordInpput' label='Senha:' htmlFor='passwordInpput' type='password' placeholder='Password'></Inputs>
       <Center>
        <ButtonComponent />
      </Center>
    </Box>
  )
}

export default Card