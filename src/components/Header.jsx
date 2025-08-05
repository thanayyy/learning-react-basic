import React from 'react'
import Logo from '../assets/image/logo.png'
const Header = () => {
  return (
    <nav>
        <img src={Logo} alt='logo'/>
        <a href="#">หน้าแรก</a>
    </nav>
  )
}

export default Header