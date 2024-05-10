import React from 'react'
import './Navbar.css';
import Slider from './Slider';

function NavBar() {
  return (
    <div className="navbar">
      <img src="../logo.png" alt="Logo" className="logo" />
      <ul>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#quiz">Quiz</a></li>
        <li><a href="#about-us">About Us</a></li>
        <li><button className='log'>Login</button> </li>
      </ul>
      
    </div>
  )
}

export default NavBar
