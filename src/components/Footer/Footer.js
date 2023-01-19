import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import './Footer.css'

function Footer() {
  return (
    <div className='my__footer section__padding' id='contact'>

        <div className='my__footer-heading'>
        ⬩ GET IN TOUCH
        </div>
        <hr></hr>
        
        <AnimationOnScroll className='my__footer-container' animateOnce={true} animateIn="animate__fadeInUp">
          <div className='my__footer-content'>

            <h1 className='my__footer-content_sub sub__padding'>
              Let's connect!
            </h1>

            <div className='my__footer-content_text text__padding'>
              <p>
                I am always enthusiastic to hear about opportunities related to: <br /> <br />

                Full stack or front end development. <br />
                AI/ML research. <br />
                UX/UI design. <br />
                Game development. <br /> <br />
                And any other cool projects you might have in mind! <br />
              </p>

              <div className='my__footer-content_links'>
                <div className='my__footer-content_buttons'>
                  <a href='mailto: yolandahaung2004@gmail.com'>
                    <button className='my__footer-button'>
                      <p>Email</p>
                    </button>
                  </a>

                  <a href='https://github.com/yolandahuangg'>
                    <button className='my__footer-button'>
                      <p>Github</p>
                    </button>
                  </a>

                  <a href='https://www.linkedin.com/in/yolandahuangg'>
                    <button className='my__footer-button'>
                      <p>LinkedIn</p>
                    </button>
                  </a>

                  <a href='https://www.instagram.com/yolandahuangg'>
                    <button className='my__footer-button'>
                      <p>Instagram</p>
                    </button>
                  </a>
                </div>
                <br />
                <hr></hr>

                <p className='my__footer-extratext'>
                  You can also reach me through the phone at 647-367-5000,<br />
                  Or find me on discord: SpaceOddity#5841.
                </p>
              </div>

            </div>
          </div>
        </AnimationOnScroll>
    </div>
  )
}

export default Footer