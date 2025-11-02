import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Era1980 from './pages/Era1980';
import Era1990 from './pages/Era1990';
import Era2000 from './pages/Era2000';
import Era2010 from './pages/Era2010';

import Home from './pages/Home'
import ComputerInfo from './pages/ComputerInfo';
import Era1980sub from './pages/Era1980sub';
import Era1990sub from './pages/Era1990sub';
import Era2000sub from './pages/Era2000sub';
import Era2010sub from './pages/Era2010sub';





function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/1980" element={<Era1980 />} />
      <Route path="/1990" element={<Era1990 />} />
      <Route path="/2000" element={<Era2000 />} />
      <Route path="/2010" element={<Era2010 />} />

      <Route path="/ComputerInfo" element={<ComputerInfo />} />
      <Route path="/1980/sub" element={<Era1980sub />} />
      <Route path="/1990/sub" element={<Era1990sub />} />
      <Route path="/2000/sub" element={<Era2000sub />} />
      <Route path="/2010/sub" element={<Era2010sub />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;

