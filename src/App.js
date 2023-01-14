import React from 'react';
import './App.css';

import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
// import Portfolio from './components/Portfolio/Portfolio'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <About />
      <Projects />
      {/* <Portfolio /> */}
      <Footer />
    </div>
  );
}

export default App;
