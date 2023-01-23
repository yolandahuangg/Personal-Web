import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css' 

function Navbar() {

  const ScrollTo = (word) => {
    var element = document.getElementById(word);
    element.scrollIntoView({behavior:"smooth"});
  }

  return (
    <div className='my__navbar' id='home'>
      <div className='my__navbar-links'>
        <div className='my__navbar-links_container'>
          <p><a href='/'>HOME</a></p>
          <p onClick={() => ScrollTo("about")}>ABOUT</p>
          <p onClick={() => ScrollTo("projects")}>PROJECTS</p>
          <p><a href='https://drive.google.com/file/d/1BYy3khJu_F8RsvSm3Jasv96URaWJhE68/view?usp=sharing'>PORTFOLIO</a></p>
          {/* <p><Link to='portfolio'>PORTFOLIO</Link></p> */}
          <p onClick={() => ScrollTo("contact")}>CONTACT</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar