import { Center, Box, Text, Spinner, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import logo from './Images/ronaldo.jpeg'

const NotLogged = () => {
    const TIMEOUT_INTERVAL: number = 5000
    const navigate = useNavigate()

    setTimeout(()=> {
    navigate('/')
    },TIMEOUT_INTERVAL)

  return (
    <Box>
        <Center>
        <Image src={logo} alt='ronaldo'></Image>

        </Center>
        <Center>
        <Text size='3xl' color='#fafafa' marginTop='15px'>Poxa! Você precisa estar logado para acessar essa página. Iremos te redirecionar em alguns segundos.</Text>
        </Center>
        <Center>
        <Spinner padding='30px' marginTop='15px'/>
        </Center>
    </Box>
  )
  
}

export default NotLogged