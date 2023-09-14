import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
 
  <header>
      <div className='navbar'>
        <div className="logo">
          <img src="Images/brand_logo.png" alt="Logo" />
        </div>
       
        <ul className='nav-buttons'> 
          <li className='nav-button' ><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
          <li className='nav-button' ><NavLink to="/location" activeClassName="active">Location</NavLink></li>
          <li className='nav-button' ><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li className='nav-button' ><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </ul>

        <button className='login-button'>Login</button>
      </div>
    </header>

  )
}

export default Header
