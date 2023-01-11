import React from 'react';
import './App.css';

import { About, Footer, Header, Navbar, Portfolio, Projects } from './components'

function App() {
  return (
    <div className='App'>
      <div className='gradiant__bg'>
        <Navbar />
        <Header />
      </div>
      <About />
      <Portfolio />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
