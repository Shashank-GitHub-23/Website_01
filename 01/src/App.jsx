
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './assets/Component/Home';
import About from './assets/Component/About';



function App() {
  

  return (

   
    <>
    <div  >
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
       </div>
      <BrowserRouter>
      <Routes>
        < Route path="/" element={<Home />} />
        < Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
