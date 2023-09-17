import React from 'react'
import HeroSection from './HeroSection'


const Home = () => {

  const data = {
    name: "Source for Web and App Solutions",
    para: "If you are seeking a complete web and app solution, you are in the right place. We are more than happy to assist you",
    image: "./Images/hero1.jpg",
  }
  return (
    <div>
      
      <HeroSection {...data}/>
    </div>
  )
}

export default Home
