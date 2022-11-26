import React from 'react'
import { AppContext } from '../AppContext'
import './Header.css'
import logo from './ronaldo.jpeg'

export const Header = () => {
  const context = React.useContext(AppContext)
  console.log(context)
  return (
    <div className='header'>
      <img className='logo' src={logo} alt='Ronaldo Fenomeno'/>
    </div>
  )
}

export default Header