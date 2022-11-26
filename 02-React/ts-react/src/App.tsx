
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Conta from './pages/Conta';
import ContaInfo from './pages/ContaInfo';
import Home from './pages/Home';
import Padrao from './pages/Padrao';
import { AppContextProvider } from './components/AppContext';



function App() {
  
  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider> 
          <Layout>
            <Routes>
              <Route path='*' element={<Padrao />}/>
              <Route path='/' element={<Home />}/>
              <Route path='/conta/:id' element={<Conta/>}/>
              <Route path='infoconta' element={<ContaInfo />}/>
            </Routes>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>    
    </BrowserRouter>

  );
}

export default App;
