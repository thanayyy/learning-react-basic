import React from 'react'
import Logo from '../assets/image/logo.png'
import '../css/Header.css'
const Header = () => {
  return (
    <nav>
        <img src={Logo} alt='logo' className='logo'/>
        <a href="#">หน้าแรก</a>
    </nav>
  )
}

export default Header