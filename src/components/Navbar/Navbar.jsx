import './Navbar.css'
import logo from '../../assets/logo.png'
import { useEffect, useState } from 'react'
import {Link} from 'react-scroll'
import menu from '../../assets/menu-icon.png'

const Navbar = () => {

const [sticky,setSticky]=useState(false);

useEffect(()=>{
window.addEventListener('scroll',()=>{
  window.scrollY > 200 ? setSticky(true):setSticky(false)
})
},[])

const [hide,setHide]=useState(false)
const toggleMenu=()=>{
   hide? setHide(false) : setHide(true)
}

  return (
    <nav className={`container ${sticky? 'dark-nav':''}`}>
        <img id='logo' src={logo} alt=''/>
        <ul className={hide ? '':'mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
            <li><Link to='drivers' smooth={true} offset={-260} duration={500}>Featured</Link></li>
            <li><Link to='about' smooth={true} offset={-180} duration={500}>About Us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Gallery</Link></li>
            <li><Link to='teams' smooth={true} offset={-260} duration={500}>Teams</Link></li>
            <li>
            <Link to='contact' smooth={true} offset={-260} duration={500}><button className='btn'>Contact</button></Link></li>
        </ul>
        <img onClick={toggleMenu} src={menu} alt='' className='menu'/>
    </nav>
  )
}

export default Navbar
