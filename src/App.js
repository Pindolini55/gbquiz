import './App.css';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LearningModesPage from './pages/LearningModesPage';
import RegisterContinuePage from './pages/RegisterContinuePage';
import ClientMainPage from './pages/ClientMainPage';
import HelpPage from './pages/HelpPage';
import EditProfilePage from './pages/EditProfilePage';
import QuizPage from './pages/QuizPage';
import ChooseModePage from './pages/ChooseModePage';
import FlashcardsPage from './pages/FlashcardsPage';

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

          <Route path="/home" element={<ClientMainPage/>}/>

          <Route path="/help" element={<HelpPage/>}/>

          <Route path="/settings" element={<EditProfilePage/>}/>
          
          <Route path="/quiz" element={<QuizPage/>}/>

          <Route path="/modes" element={<ChooseModePage/>}/>

          <Route path="/flashcards" element={<FlashcardsPage/>}/>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
