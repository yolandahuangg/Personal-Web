import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='my__footer section__padding' id='contact'>

        <div className='my__footer-heading'>
        ⬩ GET IN TOUCH
        </div>
        <hr></hr>
        
        <div className='my__footer-container'>
          <div className='my__footer-content'>

            <h1 className='my__footer-content_sub sub__padding'>
              Let's connect!
            </h1>

            <div className='my__footer-content_text text__padding'>
              <p>
                I am always enthusiatic to hear about:
              </p>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Footer