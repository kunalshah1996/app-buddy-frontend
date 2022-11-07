import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './App.css';
import LoginPage from './components/loginPage/LoginPage';
import Homepage from './components/homepage/Homepage';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Homepage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
