import './../App.css';
import React, { useState } from 'react';
import Header from '../components/Header';
import { useNavigate, useLocation } from 'react-router-dom';


function LearningModesPage ()  {

    const location = useLocation();
    const modeIndex = location.state.modeIndex;
    
    
    const learningModes = [
        { 
        name: "Dopasowania", 
        description: "Jeden z najczęściej wybieranych trybów przez użytkoników,tryb ten polega na dopasowywaniu elementów do siebie na podstawie ich właściwości lub związku z daną kategorią. Na przykład, mogą to być słowa w języku obcym oraz ich tłumaczenia, które należy ze sobą połączyć.",
        imageUrl: "https://i.imgur.com/YtUz1jE.png"
     },
        { 
        name: "Quiz", 
        description: "Tryb ten polega na udzielaniu odpowiedzi na pytania z różnych dziedzin wiedzy. Pytania są zamknięte, czyli mają tylko jedną odpowiedź do wyboru. Quiz może być stosowany do nauki różnych przedmiotów lub sprawdzania wiedzy w danej dziedzinie.",
        imageUrl: "https://i.imgur.com/NxMY4aO.png"
    },
        { 
        name: "Fiszki",
        description: "Tryb ten polega na nauce poprzez powtarzanie informacji z kartek z napisanymi pytaniami i odpowiedziami. Każda kartka zawiera jedno pytanie lub jedną odpowiedź, a uczący się musi zapamiętać je na pamięć. Można to wykorzystać do nauki słówek, pojęć lub dat.",
        imageUrl: "https://i.imgur.com/C3D6XTl.png"
    },
        { 
        name: "Prawda Fałsz", 
        description: "Tryb ten polega na sprawdzaniu wiedzy poprzez rozwiązanie testu składającego się z pytań otwartych lub zamkniętych. Testy mogą być stosowane w różnych dziedzinach, np. w nauce języka obcego, matematyce lub historii.",
        imageUrl: "https://i.imgur.com/stCOC0w.png"
    },
        { 
        name: "Puste Pola", 
        description: "Tryb ten polega na wpisywaniu odpowiedzi na pytania w puste pola, w odróżnieniu od trybu nauki 'Test' są tutaj tylko pytania otwarte",
        imageUrl: "https://i.imgur.com/5sxawWY.png"
    },
        { 
         name: "Układanie", 
         description: "Tryb ten polega na ułożeniu wydarzeń w określonej kolejności chronologicznej. Może to być wykorzystane do nauki historii, literatury lub innych dziedzin, w których ważne jest zapamiętanie kolejności wydarzeń.",
         imageUrl: "https://i.imgur.com/kGXhBcW.png" },
      ];
    
      const [expandedIndex, setExpandedIndex] = useState(modeIndex);
      const handleModeClick = (index) => {
        setExpandedIndex(index === expandedIndex ? -1 : index);
      }
    
      return (
        
        <div className='ModesPage'>
         <div className='headerWrapper'>
      <Header/>
    </div>
    <div className='contentWrapper'>
        <div className='modesContent'>
          <h1 className='modesTitle'>Tryby nauki</h1>
          
            {learningModes.map((mode, index) => (
              <div key={index} className="modes">
                <button onClick={() => handleModeClick(index)} className='buttonModes'>
                  {mode.name} {expandedIndex === index ? '-' : '+'}
                </button>
                {expandedIndex === index && (
              <>
                <div className='modeDescription'>{mode.description}</div>
                <img className='modesImages' src={mode.imageUrl} alt={mode.name} />
              </>
            )}
              </div>
            ))}
         
           <footer className='footLoginRegister'>Copyright © GbQuiz 2023</footer>
            <div className='PageFixModes'></div>
            </div>
            
            </div>
            
        </div>
      );
    }
export default LearningModesPage;