import React from 'react'
import './About.css'
import design1 from '../../assets/design1.png'
import coffee from '../../assets/coffee.png'
import { AnimationOnScroll } from 'react-animation-on-scroll'

function About() {
  return (
    <div className='my__about section__padding' id='about'>
        <div className='my__about-heading'>
        ⬩ HEY THERE
        </div>

        <div className='my__about-content'>
          <h1 className='my__about-content_sub sub__padding'>
            I'm Yolanda.
          </h1>

          <AnimationOnScroll className='my__about-content_text1 text__padding' animateOnce={true} animateIn="animate__fadeIn">
            <p>
              I am a software developer in training, and a passionate designer. <br />
              I enjoy art both digitally and traditionally. <br />
              I am a fluent user of C/C++, C#, Python, HTML/CSS, Javascript (Node, React, Express). <br /> <br />
              I am a huge money-burning fan for DSLR cameras. <br />
              I love cats, movies, gaming and pretty-looking notebooks. <br />
              I love spring. <br />
              I love coding. <br />
              Thanks for finding my webpage! <br />
            </p>
            <img src={design1} alt='design1'/>
          </AnimationOnScroll>

          <h1 className='my__about-content_sub sub__padding'>
            I'm studying at Waterloo.
          </h1>
            
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <div className='my__about-content_text2 text__padding'>
              <img src={coffee} alt='coffee'/>
              <p>
                I am currently a 2A Software Engineering student at the University of Waterloo. <br /> <br />
                Engineering Anbassador of the 2022-2023 school year. <br />
                Yearbook Representative of our 2027 cohort. <br />
                Accumulative GPA of 3.9 / 4.0. <br />
                Constant seeker of either coffee or tea. <br /> <br /> <br />
                If I'm on campus you'll be able to find me in the math/eng buildings for sure. <br />
                If not... <br />
                I like to move around between Waterloo, Toronto and Markham and call it travelling! <br />
              </p>
            </div>
          </AnimationOnScroll>

        </div>
    </div>
  )
}

export default About