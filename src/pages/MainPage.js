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

function MainPage() {

  const [showModes, setShowModes] = useState(false);
  const [showPremium, setShowPremium] = useState(false);

  const handleArrowClickModes = () => {
    setShowModes(!showModes);
    setShowPremium(false);
  };
  
  const handleArrowClickPremium = () => {
    setShowPremium(!showPremium);
    setShowModes(false);
  };

  return (  

<div>
<div className='HeaderMenu'> 
  <div className='Logo'>
    <img src={Logo} width="267" />
  </div>

  <div className='TrybyNauki' onClick={handleArrowClickModes}> 
    Tryby Nauki
  </div>

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

             <div className='content'>
              <img src={di} alt="Dopasowania" />
              <p className='trybybold'>Dopasowania</p>
              </div>

              <div className='content'>
              <img src={qi} alt='Quiz' />
              <p className='trybybold'>Quiz</p>
              </div>

              <div className='content'>
              <img src={fi} alt='Fiszki' />
              <p className='trybybold'>Fiszki</p>
              </div>

          </div>

          <div className='colr'>

            <div className='content'>
              <img src={ti} alt='Test' />
              <p className='trybybold'>Test</p>
              </div>

              <div className='content'>
              <img src={pi} alt='Puste Pola' />
              <p className='trybybold'>Puste Pola</p>
              </div>

              <div className='content'>
              <img src={ui} alt='Układanie' />
              <p className='trybybold'>Układanie</p>
              </div>

          </div>
         </div>
         
        </div> //Koniec Okna Tryby Nauki
      )}

      <div className='Premium' onClick={handleArrowClickPremium}>
        Premium
      </div>

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
    <button className='ZalogujSie'>
    Zaloguj się
    </button>

    <button className='ZarejestrujSie'>
    Zarejestruj się
    </button>


  </div> 

  <div className='Srodek'>
    <p>gbs</p>
    <p>gbs</p>
    <p>gbs</p>
    <p>gbs</p>
    <p>gbs</p>
    <p>gbs</p>
    <p>gbs</p>
    <p>gbs</p>
  </div>



</div>





);

}

export default MainPage;