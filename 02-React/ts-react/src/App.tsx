
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Conta from './pages/Conta';
import Home from './pages/Home';
import Padrao from './pages/Padrao';
function App() {
  
  return (
    <BrowserRouter>
      <ChakraProvider> 
      <Layout>
      <Routes>
        <Route path='/' element={
          <Home />
        }/>
        <Route path='*' element={
          <Padrao />
        }/>
        <Route path='/conta' element={
          <Conta/>
        }/>
        </Routes>
      </Layout>
      </ChakraProvider>

    </BrowserRouter>

  );
}

export default App;
