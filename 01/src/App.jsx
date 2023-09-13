
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './assets/Component/Home';
import About from './assets/Component/About';
import Navbar from './assets/Component/Navbar';
import './navbar.css';



function App() {
  

  return (

   
    <>
     <Navbar />
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
