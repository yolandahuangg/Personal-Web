import React from 'react';
import './App.css';

import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Scroll from './components/Scroll/Scroll'

function App() {
  return (
    <div className='App'>
      <Scroll />
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
