import './Header.css'
import { useContext } from 'react'
import {Button, Flex,Spacer, Text,Center,Box} from '@chakra-ui/react'
import { AppContext } from '../AppContext'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  
  const {isLoggedIn ,setIsLoggedIn} = useContext(AppContext)

  const navigate = useNavigate()

  const logout = () =>{
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    
    <div className='header'>
        <Flex backgroundColor='#fafafa' padding='5px'>
          <Box>

          <Center>
         <Text fontSize='3xl'>Bank Screen</Text>
          </Center>
          </Box>
       
        {
          isLoggedIn && (
            <>
             <Spacer/>
             <Button onClick={logout}>Sair</Button>
            </>
          )
        }
        </Flex>
    </div>
  )
}

export default Header