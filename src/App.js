import './App.css';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LearningModesPage from './pages/LearningModesPage';
import RegisterContinuePage from './pages/RegisterContinuePage';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage/>}/>

          <Route path="/login" element={<LoginPage/>}/>

          <Route path="/register" element={<RegisterPage/>}/>

          <Route path="/learningmodes" element={<LearningModesPage/>}/>

          <Route path="/registercontinue" element={<RegisterContinuePage/>}/>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
