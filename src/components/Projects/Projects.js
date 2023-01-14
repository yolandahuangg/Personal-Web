import React from 'react'
import './Projects.css'
import emolock from '../../assets/emolock.gif'
import hash from '../../assets/hash.png'

function Projects() {
  return (
    <div className='my__projects section__padding' id='projects'>
        <div className='my__projects-heading'>
        ⬩ SELECTED PROJECTS
        </div>
        <hr></hr>

        <div className='my__projects-container'>
          <div className='my__projects-content'>

            <h1 className='my__projects-content_sub sub__padding'>
              HASHbrown: Emolock
            </h1>

            <div className='my__projects-content_body text__padding'>
              <img src={emolock} alt='emolock' />
              <img src={hash} alt='hash' />

              <div className='my__projects-content_text'>
                 <p>
                  Emolock is an emotion-controlled security lock system designed by our HASHbrown team.  <br /> <br />
                  Languages: Python and C++. <br />
                  Implemented OpenCV real time camera processing. <br />
                  Used META's Deepface library for facial and emotion recognition. <br />
                </p>
                <a href='https://github.com/yolandahuangg/hashbrowns-emolock'>→ Visit Github</a>
              </div>
              
            </div>

          </div>
        </div>
    </div>
  )
}

export default Projects