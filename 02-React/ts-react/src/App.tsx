
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import React from 'react';
import Layout from './components/Layout';
import Conta from './pages/Conta';
import ContaInfo from './pages/ContaInfo';
import Home from './pages/Home';
import Padrao from './pages/Padrao';

interface IAppContext  {
  user: string,
}

export const AppContext = React.createContext({} as IAppContext);

const AppContextProvider = ({children}: any) => {
  const user = 'Gbriel'
  
  return(
    <AppContext.Provider value={{user}}>
      {children}
    </AppContext.Provider>
  )
}

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
              <Route path='infoconta' element={<ContaInfo />}></Route>
            </Routes>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>    
    </BrowserRouter>

  );
}

export default App;
