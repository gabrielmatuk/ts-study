import {ButtonComponent} from './components/Button';
import {Inputs} from './components/Inputs';
import { Layout } from './components/Layout';
import { ChakraProvider, Center} from '@chakra-ui/react'


function App() {
  return (
    <>
    <ChakraProvider>
    <Layout>
      <Center>
      <h1>Faça o Login:</h1>
      <Inputs id='emailInput' label='Email:' htmlFor='emailInput'></Inputs>
      <Inputs id='passwordInpput' label='Senha:' htmlFor='passwordInpput' type='password'></Inputs>
      <ButtonComponent />
      </Center>
    </Layout>
    </ChakraProvider>
    </>
  );
}

export default App;
