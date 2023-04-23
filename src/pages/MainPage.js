import './../App.css';
import Logo from './../resources/logo.png';
import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { FcCheckmark } from 'react-icons/fc';
import di from './../resources/dopasowania-icon.png';
import fi from './../resources/fiszki-icon.png';
import pi from './../resources/pustepola-icon.png';
import qi from './../resources/quiz-icon.png';
import ti from './../resources/test-icon.png';
import ui from './../resources/ukladanie-icon.png';
import gbpr from './../resources/gbpremium.png';
import fs from './../resources/firstShow.png';
import ss from './../resources/secondShow.png';
import ts from './../resources/thirdShow.png';
import { useNavigate, Link } from 'react-router-dom';


function MainPage() {

  const [showModes, setShowModes] = useState(false);
  const [showPremium, setShowPremium] = useState(false);
  const navigate = useNavigate();

  const handleArrowClickModes = () => {
    setShowModes(!showModes);
    setShowPremium(false);
  };
  
  const handleArrowClickPremium = () => {
    setShowPremium(!showPremium);
    setShowModes(false);
  };

  const loginClick = () => {
    navigate('/login');
  }

  const registerClick = () => {
    navigate('/register');
  }
  
  const ModesClick = (modeIndex) => {
    navigate('/learningmodes', {state: {modeIndex}});
  }
  return (  

<div>
<div className='HeaderMenu'> 
  <div className='Logo'>
    <img src={Logo} width="267" />
  </div>


  <div className='TrybyNauki' onClick={handleArrowClickModes}> 
    Tryby Nauki
    <div onClick={handleArrowClickModes} className='TrybyArrow'> 
    <FaAngleDown
      style=
      {{
        transform: showModes ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.3s ease',
      }}
    />
  </div>
  {showModes && (
    //Okno Tryby Nauki
        <div className="OknoTrybyNauki">
          <div className='row'>
            <div className='coll'>

             <div className='content' onClick={() => ModesClick(0)}>
              <img src={di} alt="Dopasowania" />
              <p className='trybybold'>Dopasowania</p>
              </div>

              <div className='content' onClick={() => ModesClick(1)}>
              <img src={qi} alt='Quiz' />
              <p className='trybybold'>Quiz</p>
              </div>

              <div className='content' onClick={() => ModesClick(2)}>
              <img src={fi} alt='Fiszki' />
              <p className='trybybold'>Fiszki</p>
              </div>

          </div>

          <div className='colr'>

            <div className='content' onClick={() => ModesClick(3)}>
              <img src={ti} alt='Test' />
              <p className='trybybold'>Test</p>
              </div>

              <div className='content' onClick={() => ModesClick(4)}>
              <img src={pi} alt='Puste Pola' />
              <p className='trybybold'>Puste Pola</p>
              </div>

              <div className='content' onClick={() => ModesClick(5)}>
              <img src={ui} alt='Układanie' />
              <p className='trybybold'>Układanie</p>
              </div>

          </div>
         </div>
         
        </div> //Koniec Okna Tryby Nauki
      )}
  </div>



      <div className='Premium' onClick={handleArrowClickPremium}>
        Premium
        <div onClick={handleArrowClickPremium} className='PremiumArrow'> 
      <FaAngleDown 
      style=
      {{
        transform: showPremium ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.3s ease',
      }}
    />
  </div>
  {showPremium && (
    //Okno Tryby Nauki
        <div className="OknoPremium">
       <p style={{fontWeight: 'bold'}}>Odkryj wszystkie możliwości dzięki kontu Premium!</p>
        <img className='gbpremiumlogo' src={gbpr} width="172" height="48"/>

        <div className='oneline'>
        <p style={{fontWeight: 'bold',textDecoration: "underline rgb(15, 189, 151) 2px"}}>Nielimitowana ilość quizów!</p>
        <FcCheckmark className='checkarrow1'></FcCheckmark>
        </div>

        <div className='oneline'>
        <p style={{fontWeight: 'bold',marginTop: "-2px",textDecoration: "underline rgb(15, 189, 151) 2px"}}>Nielimitowana ilość pytań w quizie!</p>
        <FcCheckmark className='checkarrow2'></FcCheckmark>
        </div>

        <div className='oneline'>
        <p style={{fontWeight: 'bold',marginTop: "-2px",textDecoration: "underline rgb(15, 189, 151) 2px"}}>Nielimotwany dostęp do quizów!</p>
        <FcCheckmark className='checkarrow2'></FcCheckmark>
        </div>

        </div> //Koniec Okna Tryby Nauki
      )}
      </div>

      
    <button className='ZalogujSie' onClick={loginClick}>
    Zaloguj się
    </button>

    <button className='ZarejestrujSie' onClick={registerClick}>
    Zarejestruj się
    </button>


  </div> 

  <div className='Srodek'>
    <div className='firstShow'>
    <p className='Shows'>Pokaż na co się stać i ucz się dzięki wielu trybom nauki!</p>
    <img className='firstShowimg' src={fs} alt="Pokaz 1" />
    </div>

    <div className='secondShow'>
    <p className='Shows'>Rywalizuj z innymi graczami w testach online!</p>
    <img className='secondShowimg' src={ss} alt="Pokaz 1" />
    </div>

    <div className='thirdShow'>
    <p className='Shows'>Twórz własne quizy/testy i sprawdź innych!</p>
    <img className='firstShowimg' src={ts} alt="Pokaz 1" />
    </div>
  


  </div>



  <footer className='foot'>Copyright © GbQuiz 2023</footer>
</div>




);

}

export default MainPage;