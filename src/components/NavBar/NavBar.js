import React, { useState } from 'react'
import  './NavBar.css'
import {Link} from 'react-scroll'
import contactImg from '../../assests/contactImg.png'
import menu from '../../assests/ham.png'

const NavBar = () => {
  const [showMenu,setShowMenu] = useState(false);
  return (
    
    <nav className='navbar'>
      <h1 className='logo'>Aayush</h1>
      <div className='desktopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='abt-container' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Skills</Link>
        <Link activeClass='active' to='portfolio-container' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Portfolio</Link>
      </div>
      <button className='desktopMenuBtn'  onClick={()=> 
        document.getElementById('contact').scrollIntoView({behavior:'smooth' })  } offset={100} >
        <img src={contactImg} alt=''  className='desktopMenuImg'/>Contact Me</button>
        <img src={menu} alt='' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
      <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='abt-container' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Skills</Link>
        <Link activeClass='active' to='portfolio-container' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  )
}

export default NavBar