
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Conta from './pages/Conta';
import Home from './pages/Home';
import Padrao from './pages/Padrao';
function App() {
  
  return (
    <BrowserRouter>
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
    </BrowserRouter>

  );
}

export default App;
