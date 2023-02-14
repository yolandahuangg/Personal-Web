import React from 'react'
import './Projects.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'

function Projects() {
  return (
    <div className='my__projects section__padding' id='projects'>
        <div className='my__projects-heading'>
        ⬩ SELECTED PROJECTS
        </div>

        <div className='my__projects-content'>
          <h1 className='my__projects-content_sub sub__padding'>
            Check Out My Recent Works
          </h1>

          <div className='my__other-projects'>
            <AnimationOnScroll className='my__other-projects_box' animateOnce={true} animateIn="animate__fadeIn">
              <h1>HASHbrown: Emolock</h1>
              <p>Emolock is a safe box security system designed by our HASHbrown team, which unlocks when recognizing
                a preset combination of emotions. 
                It's emotion capture is achieved through META's deepface library and live camera processing. 
              </p>
              <h2>C++ | Python | OpenCV | Arduino</h2>
            </AnimationOnScroll>

            <AnimationOnScroll className='my__other-projects_box' animateOnce={true} animateIn="animate__fadeIn" delay={400}>
              <h1>Image Booth API</h1>
              <p>I am the lead developer of an API which stores, tags and filters images saved by each user with a 
                built in masonry display. It has register/login authentication functions supported by our Express.js webserver 
                and MongoDB database. 
              </p>
              <h2>Javascript | React | Express.js | MongoDB</h2>
            </AnimationOnScroll>

            <AnimationOnScroll className='my__other-projects_box' animateOnce={true} animateIn="animate__fadeIn" delay={800}>
              <h1>ARO Web Application</h1>
              <p>As full-stack developer, I am involved with the ARO web app front-end. 
                This application is responsible for receiving and transmitting selfie requests to our ground station,
                with interactive functions including login, count down and submit forms.
              </p>
              <h2>Javascript | React | Figma | Firebase</h2>
            </AnimationOnScroll>

            <AnimationOnScroll className='my__other-projects_box' animateOnce={true} animateIn="animate__fadeIn" delay={1200}>
              <h1>Stock Observer Bot</h1>
              <p>This is a webscraper bot that can extract data from Market Watch. It collects stock information by 
                fetching and parsing HTML content with python libraries.
                It is also designed to stay alive 24/7 and update hourly on a Flask webserver.
              </p>
              <h2>Python | Flask | Requests | BeautifulSoup</h2>
            </AnimationOnScroll>
          </div>
        </div>
    </div>
  )
}

export default Projects