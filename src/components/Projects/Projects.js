import React from 'react'
import './Projects.css'
import emolock from '../../assets/emolock.gif'
import hash from '../../assets/hash.png'
import ARO from '../../assets/ARO.png'
import { AnimationOnScroll } from 'react-animation-on-scroll'

function Projects() {
  return (
    <div className='my__projects section__padding' id='projects'>
        <div className='my__projects-heading'>
        ⬩ SELECTED PROJECTS
        </div>
        <hr></hr>

        <div className='my__projects-container'>
          <AnimationOnScroll className='my__projects-content' animateOnce={true} animateIn="animate__fadeInUp">

            <h1 className='my__projects-content_sub sub__padding'>
              HASHbrown: Emolock
            </h1>

            <div className='my__projects-content_body1 text__padding'>
              <img src={emolock} alt='emolock' />
              <img src={hash} alt='hash' />

              <div className='my__projects-content_text'>
                 <p>
                  Emolock is an emotion-controlled security lock system designed by our HASHbrown team. It can recognize password combinations between happy, angry, surprised and neutral. <br /> <br />
                  Languages: Python and C++. <br />
                  Implemented OpenCV real time camera processing. <br />
                  Used META's Deepface library for facial and emotion recognition. <br />
                </p>
                <br />
                <a href='https://github.com/yolandahuangg/hashbrowns-emolock'>→ Visit Github</a>
              </div>
            </div>

            <h1 className='my__projects-content_sub sub__padding'>
              UW Orbital: ARO Web Application
            </h1>

            <div className='my__projects-content_body2 text__padding'>
              <img src={ARO} alt='ARO' />

              <div className='my__projects-content_text'>
                <p>
                  As full-stack developer, I am involved with the ARO web app front-end. This application is responsible for receiving and transmitting selfie requests to our ground station. <br /> <br />
                  Constructed input-responsive webpages with login and countdown functions, which greatly improves user experience. <br />
                  Currently in the process of integrating website back-end with Flask and Firebase DB to further protect user privacy. <br />
                </p>
                <br />
                <a href='https://www.uworbital.com/'>→ Visit UW Orbital</a>
              </div>
              
            </div>
          </AnimationOnScroll>
        </div>
    </div>
  )
}

export default Projects