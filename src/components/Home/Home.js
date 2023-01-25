import React from 'react'
import './Home.css';

import About from '../About/About'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Projects from '../Projects/Projects'
import Scroll from '../Scroll/Scroll'

function Home() {
  return (
    <div className='Home'>
      <Scroll />
      <div className='gradient__bg'>
        <Navbar />
        <hr />
        <Header />
      </div>
      <About />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home