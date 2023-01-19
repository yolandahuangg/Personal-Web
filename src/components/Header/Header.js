import React from 'react'
import './Header.css'
import header from '../../assets/header.jpeg'
import {AnimationOnScroll} from "react-animation-on-scroll";
import "animate.css/animate.min.css";

function Header() {
  return (
    <div className='my__header'>
        <div className='my__header-content'>

          <AnimationOnScroll className='my__header-content_img' animateIn="animate__fadeInDown">
            <div>
              <img src={header} alt='header' /> 
            </div> 
          </AnimationOnScroll>

          <AnimationOnScroll className='my__header-content_text' animateOnce={true} animateIn="animate__slideInLeft">
            <div className='gradient__text'>
              <p> 
                SOFTWARE <br />
                DEVELOPER <br />
                & <br />
                DESIGNER <br />
              </p>
            </div>
          </AnimationOnScroll>

          <AnimationOnScroll className='my__header-content_name' animateOnce={true} animateIn="animate__rotateInDownRight" delay={1000}>
            <p>
              Yolanda <br />
              Huang <br /> <br /> <br />
              "I make art come to life."
            </p>
          </AnimationOnScroll>

          <button className='my__header-vline'></button>

        </div>
    </div>
  )
}

export default Header