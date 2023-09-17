import React from 'react'

const HeroSection = (props) => {

  return (
    <>
    <div className="heroBox">
      
      <img className="heroImg" src={props.image} alt="" srcset="" />

      <div className='heroParaBox'>
        <h2 className='heroHeading'>{props.name}</h2>
        <p className='heroPara'>{props.para}</p>
      </div>
      
     

    </div>
    </>
  )

}

export default HeroSection
