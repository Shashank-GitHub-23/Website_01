
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './assets/Component/Home';
import About from './assets/Component/About';
import './navbar.css';
import Header from './assets/Component/Header';
import Footer from './assets/Component/Footer';
import Service from './assets/Component/Service';
import Contact from './assets/Component/Contact';



function App() {
  
  return (

    <>
     <Header />
      <BrowserRouter>
      <Routes>
        < Route path="/" element={<Home />} />
        < Route path="/about" element={<About />} />
        < Route path="/service" element={<Service />} />
        < Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
