import React from 'react'
import HeroSection from './HeroSection'

const About = () => {
  const data = {
    name: "About Us",
    para: "Our expertise spans across various domains, ensuring that we can provide solutions to meet your specific requirements. We are your trusted partners in transforming your ideas into reality. We offer a seamless, end-to-end experience that you can rely on.", 
    image: "./Images/About1.jpg",
  }

  return (

    <HeroSection  {...data} />

  )
}

export default About
