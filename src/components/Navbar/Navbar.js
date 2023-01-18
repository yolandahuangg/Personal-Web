import React from 'react'
import './Navbar.css' 

function Navbar() {
  return (
    <div className='my__navbar' id='home'>
      <div className='my__navbar-links'>
        <div className='my__navbar-links_container'>
          <p><a href='#home'>HOME</a></p>
          <p><a href='#about'>ABOUT</a></p>
          <p><a href='#projects'>PROJECTS</a></p>
          <p><a href='https://drive.google.com/file/d/1BYy3khJu_F8RsvSm3Jasv96URaWJhE68/view?usp=sharing'>PORTFOLIO</a></p>
          <p><a href='#contact'>CONTACT</a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar