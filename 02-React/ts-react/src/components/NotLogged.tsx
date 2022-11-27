import { Center, Box, Text, Spinner } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'


const NotLogged = () => {
    const navigate = useNavigate()

    setTimeout(()=> {
    navigate('/')
    },5000)

  return (
    <Box>
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