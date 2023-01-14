import React from 'react'
import './Navbar.css' 

function Navbar() {
  return (
    <div className='my__navbar'>
      <div className='my__navbar-links'>
        <div className='my__navbar-links_container'>
          <p><a href='#home'>HOME</a></p>
          <p><a href='#about'>ABOUT</a></p>
          <p><a href='#projects'>PROJECTS</a></p>
          {/* <p><a href='#portfolio'>PORTFOLIO</a></p> */}
          <p><a href='#contact'>CONTACT</a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar