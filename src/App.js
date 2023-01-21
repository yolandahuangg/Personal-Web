import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/portfolio' element={<Portfolio />} />
    </Routes> 
  );
}

export default App;
