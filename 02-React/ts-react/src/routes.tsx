import { Route, Routes } from 'react-router-dom'
import Conta from './pages/Conta'
import ContaInfo from './pages/ContaInfo'
import Home from './pages/Home'
import Padrao from './pages/Padrao'
import NotLogged from './pages/NotLogged'
import React from 'react'
import { AppContext } from './components/AppContext'

const MainRoutes = () => {
    const {isLoggedIn} = React.useContext(AppContext)


  return (
    <Routes>
        <Route path='*' element={<Padrao />}/>
        <Route path='/' element={<Home />}/>
        {isLoggedIn && <Route path='/conta/:id' element={<Conta/>}/>}
        <Route path='/conta/*' element={<NotLogged/>} />
        <Route path='infoconta' element={<ContaInfo />}/>
  </Routes>
  )
}

export default MainRoutes