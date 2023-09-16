
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './assets/Component/Home';
import About from './assets/Component/About';
import './navbar.css';
import './HeroSection.css';
import './contact.css';
import './service.css';
import './Footer.css';
import Header from './assets/Component/Header';
import Footer from './assets/Component/Footer';
import Service from './assets/Component/Service';
import Contact from './assets/Component/Contact';
import HeroSection from './assets/Component/HeroSection';



function App() {
  
  return (

    <>
    <BrowserRouter>
     <Header />
    
      <Routes>
        < Route path="/" element={<Home />} />
        < Route path="/about" element={<About />} />
        < Route path="/service" element={<Service />} />
        < Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
