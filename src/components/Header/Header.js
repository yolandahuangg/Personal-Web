import React from 'react'
import './Header.css'
import flower from '../../assets/flower.jpeg'

function Header() {
  return (
    <div className='my__header section__padding' id='home'>
        <div className='my__header-content'>

          <h1 className='text__title'>
            <h1 className='text__title-reg'>Y</h1>
            <h1 className='text__title-special'>O</h1>
            <h1 className='text__title-reg'>LANDA H</h1>
            <h1 className='text__title-special'>U</h1>
            <h1 className='text__title-reg'>ANG</h1>
            <p>
            Software Developer & Designer
            </p>
          </h1>

          <div className='my__header-content_img'>
            <img src={flower} alt='flower'/>
          </div>

        </div>
    </div>
  )
}

export default Header