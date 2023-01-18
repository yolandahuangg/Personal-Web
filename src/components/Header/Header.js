import React from 'react'
import './Header.css'
import header from '../../assets/header.jpeg'

function Header() {
  return (
    <div className='my__header'>
        <div className='my__header-content'>

          <div className='my__header-content_img'>
            <img src={header} alt='header' />  
          </div>

          <div className='my__header-content_text'>
            <div className='gradient__text'>
              <p> 
                SOFTWARE <br />
                DEVELOPER <br />
                & <br />
                DESIGNER <br />
              </p>
            </div>
          </div>

          <div className='my__header-content_name'>
            <p>
              Yolanda <br />
              Huang <br /> <br /> <br />
              "I make art come alive."
            </p>
          </div>

          <button className='my__header-vline'></button>

        </div>
    </div>
  )
}

export default Header