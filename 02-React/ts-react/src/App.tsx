import {ButtonComponent} from './components/Button';
import {Inputs} from './components/Inputs';
import { ChakraProvider, Box,Center } from '@chakra-ui/react'
import {Layout} from './components/Layout';


function App() {
  return (
    <>
    <ChakraProvider>
      <Layout>
        <Box minHeight='100vh' backgroundColor='#4d4d4d' padding='25px'>
            
          <Box backgroundColor='#fafafa' borderRadius='25px' padding='15px' >
         
          <Center>
          <h1>Faça o Login:</h1>
          </Center>

          <Inputs id='emailInput' label='Email:' htmlFor='emailInput'></Inputs>
          <Inputs id='passwordInpput' label='Senha:' htmlFor='passwordInpput' type='password'></Inputs>
             <Center>
              <ButtonComponent />
            </Center>
          </Box>
        </Box>
      </Layout>

    </ChakraProvider>
    </>
  );
}

export default App;
