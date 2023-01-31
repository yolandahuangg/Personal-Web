import React from 'react'
import './PortHead.css'
import portfolio from '../../assets/portfolio.jpg'
import {AnimationOnScroll} from "react-animation-on-scroll";
import "animate.css/animate.min.css";

function PortHead() {
  return (
    <div className='my__porthead'>
        <div className='my__porthead-content'>

            <AnimationOnScroll className='my__porthead-content_img' animateOnce={true} animateIn="animate__fadeInDown" delay={300}>
                <div>
                <img src={portfolio} alt='portfolio' /> 
                </div> 
            </AnimationOnScroll>

            <AnimationOnScroll className='my__porthead-content_text' 
                animateOnce={true} 
                animateIn="animate__slideInLeft"
                delay={300}
            >
                <div className='gradient__text'>
                    <p>PORTFOLIO</p>
                </div>
            </AnimationOnScroll>
        </div>
    </div>
  )
}

export default PortHead