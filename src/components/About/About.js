import React from 'react'
import './About.css'
import design1 from '../../assets/design1.png'

function About() {
  return (
    <div className='my__about section__padding' id='about'>
        <div className='my__about-heading'>
        ⬩ HEY THERE
        </div>
        <hr></hr>

        <div className='my__about-container'>
          <div className='my__about-content'>

            <h1 className='my__about-content_sub sub__padding'>
              I'm Yolanda.
            </h1>

            <div className='my__about-content_text1 text__padding'>
              <p>
                I am a software developer in training, and a passionate designer. <br />
                I enjoy art both digitally and traditionally. <br />
                I am a fluent user of C/C++, Python, HTML/CSS, Javascript and Visual Basics. <br /> <br />
                I am a huge money-burning fan for DSLR cameras. <br />
                I love cats, movies, gaming and pretty looking notebooks. <br />
                I love spring. <br />
                I love coding. <br />
                Thanks for finding my webpage! <br />
              </p>
              <img src={design1} alt='design1'/>
            </div>

            <h1 className='my__about-content_sub sub__padding'>
              I'm studying at Waterloo.
            </h1>

            <div className='my__about-content_text2 text__padding'>
            {/* <img src={coffee} alt='coffee'/> */}
              <p>
                I 
              </p>
            </div>
            
          </div>

        </div>
    </div>
  )
}

export default About