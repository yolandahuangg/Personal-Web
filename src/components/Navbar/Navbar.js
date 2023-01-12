import React from 'react'
import './Navbar.css' 

function Navbar() {
  return (
    <div className='my__navbar'>
      <div className='my__navbar-links'>
        <div className='my__navbar-links_container'>
          <p><a href='#home'>HOME</a></p>
          <p><a href='#About'>ABOUT</a></p>
          <p><a href='#Projects'>PROJECTS</a></p>
          <p><a href='#Portfolio'>PORTFOLIO</a></p>
          <p><a href='#Footer'>CONTACT</a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar