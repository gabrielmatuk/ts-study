import { Box, ChakraProvider } from '@chakra-ui/react'
import Card from '../components/Card'
import Layout from '../components/Layout'

const Home = () => {
  return (
    <ChakraProvider>
    <Layout>
      <Box minHeight='100vh' backgroundColor='#4d4d4d' padding='25px'>
        <Card/>
      </Box>
    </Layout>
  </ChakraProvider>  )
}

export default Home