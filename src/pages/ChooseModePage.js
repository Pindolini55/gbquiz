import { Link } from 'react-router-dom';
import HeaderLogged from '../components/HeaderLogged';
import './../App.css';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function ChooseModePage() {
const navigate = useNavigate();
const {state} = useLocation();
  const { id } = state;

  return (
    <div className='ModesPage'>
      <div className='headerWrapper'>
        <HeaderLogged/>
      </div>
      <div className='contentWrapper'>
        <div className='modesContent'>
          <h1 className='modesTitle'>Tryby nauki</h1>
          <div className="modes">
            <button onClick={() => navigate('/matches', {state: {id: id}})} className='buttonModes'>
              Dopasowania
            </button>
          </div>
          <div className="modes">
            <button onClick={() => navigate('/quiz', {state: {id: id}})} className='buttonModes'>
              Quiz
            </button>
          </div>
          <div className="modes">
            <button onClick={() => navigate('/flashcards', {state: {id: id}})} className='buttonModes'>
              Fiszki
            </button>
          </div>
          <div className="modes">
            <button onClick={() => navigate('/test', {state: {id: id}})} className='buttonModes'>
              Test
            </button>
          </div>
          <div className="modes">
            <button onClick={() => navigate('/blanks', {state: {id: id}})} className='buttonModes'>
              Puste Pola
            </button>
          </div>
          <div className="modes">
            <button onClick={() => navigate('/stack', {state: {id: id}})} className='buttonModes'>
              Układanie
            </button>
          </div>
        </div>
        <div className='PageFixModes'></div>
      </div>
    </div>
  );
}

export default ChooseModePage;

