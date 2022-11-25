import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react'
import {Layout} from './components/Layout';
import {Card} from './components/Card'
function App() {
  
  return (
    <ChakraProvider>
      <Layout>
        <Box minHeight='100vh' backgroundColor='#4d4d4d' padding='25px'>
          <Card/>
        </Box>
      </Layout>

    </ChakraProvider>
  );
}

export default App;
