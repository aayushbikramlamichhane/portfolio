import React from 'react'
import  './NavBar.css'
import {Link} from 'react-scroll'
import contactImg from '../../assests/contactImg.png'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <h1 className='logo'>Aayush</h1>
    <div className='desktopMenu'>
      <Link className='desktopMenuListItem'>Home</Link>
      <Link className='desktopMenuListItem'>About</Link>
      <Link className='desktopMenuListItem'>Skills</Link>
      <Link className='desktopMenuListItem'>Portfolio</Link>
    </div>
    <button className='desktopMenuBtn'>
      <img src={contactImg} alt=''  className='desktopMenuImg'/>Contact Me</button>
    </nav>
  )
}

export default NavBar