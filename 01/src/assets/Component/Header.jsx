import React from 'react'

const Header = () => {
  return (
   <header>
    <div className='navbar'>
        <div className="logo">
        <img src="Images/brand_logo.png" alt="Logo" srcset="" />
        </div>
       
        <ul className='nav-buttons'> 
        <li className='nav-button' >Menu</li>
        <li className='nav-button' >Location</li>
        <li className='nav-button' >About</li>
        <li className='nav-button' >Contact</li>
       </ul>

       <button className='login-button'>Login</button>
       
       </div>
   </header>
  )
}

export default Header