import React from 'react'
import { NavLink } from 'react-router-dom'
import { CgMenu, CgCloseR } from "react-icons/cg"

const Header = () => {

  
  return (
 
  <header>
      <div className='navbar'>
        <div >
          <img className="logo" src="Images/logo.jpg" alt="Logo" />
        </div>
       
        <ul className='nav-buttons'> 
          <li className='nav-button' ><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
          <li className='nav-button' ><NavLink to="/service" activeClassName="active">Service</NavLink></li>
          <li className='nav-button' ><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li className='nav-button' ><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </ul>
        <div className="mobile-navbar-btn">
          <CgMenu name='menu-outline' className='mobile-nav-icon'/>
          <CgCloseR name='close-outline' className='close-outline mobile-nav-icon'/>
        </div>

        <button className='login-button'>Login</button>
      </div>
    </header>

  )
}

export default Header
