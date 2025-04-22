import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home'
import Era1980 from './pages/Era1980'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Era1980 />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

