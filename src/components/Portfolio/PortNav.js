import React from 'react'
// import { Link } from 'react-router-dom'
import './PortNav.css' 

const ScrollTo = (word) => {
  var element = document.getElementById(word);
  element.scrollIntoView({behavior:"smooth"});
}

function PortNav() {
  return (
    <div className='my__navbar'>
        <div className='my__navbar-links_container'>
          <p><a href='/'>HOME</a></p>
          <p onClick={() => ScrollTo("gallery")}>GALLERY</p>
        </div>
    </div>
  )
}

export default PortNav