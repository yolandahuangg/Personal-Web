import React from 'react'
import Scroll from '../Scroll/Scroll'
import PortNav from './PortNav'
import Gallery from '../Gallery/Gallery'
import PortHead from './PortHead'

function Portfolio() {
  return (
    <div className='my__portfolio' id='portfolio'>
      <Scroll />
      <div className='black__bg'>
        <PortNav />
        <hr />
        <PortHead />
        <Gallery />
      </div>
    </div>
  )
}

export default Portfolio