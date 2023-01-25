import React from 'react'
import Scroll from '../Scroll/Scroll'
import PortNav from './PortNav'

function Portfolio() {
  return (
    <div className='my__portfolio' id='portfolio'>
      <Scroll />
      <div className='gradient__bg'>
        <PortNav />
        <hr />
      </div>
    </div>
  )
}

export default Portfolio