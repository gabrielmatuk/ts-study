import './Header.css'
import logo from './ronaldo.jpeg'

export const Header = () => {
  return (
    <div className='header'>
      <img className='logo' src={logo} alt='Ronaldo Fenomeno'/>
    </div>
  )
}

export default Header