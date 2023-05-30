import HeaderLogged from '../components/HeaderLogged';
import './../App.css';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth, db} from './../firebase';

function ChooseModePage() {
const navigate = useNavigate();
const {state} = useLocation();
  const { id } = state;
  const [modes, setModes] = useState([]);

  useEffect(() => {
    db.collection('quizes')
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          setModes(data.modes.split(''));
        }
      })
      .catch((error) => {
        console.log('Błąd podczas pobierania danych z bazy Firebase:', error);
      });
  }, []);

  const isModeAvailable = (index) => {
    return modes[index] === 'T';
  };

  return (
    <div className="ModesPage">
      <div className="headerWrapper">
        <HeaderLogged />
      </div>
      <div className="contentWrapper">
        <div className="modesContent">
          <h1 className="modesTitle">Tryby nauki</h1>
          <div className="modes">
            <button className={`buttonModes ${isModeAvailable(0) ? '' : 'disabled'}`} disabled={!isModeAvailable(0)}>
              Dopasowania
            </button>
          </div>
          <div className="modes">
            <button
              onClick={() => navigate('/quiz', { state: { id: id } })}
              className={`buttonModes ${isModeAvailable(1) ? '' : 'disabled'}`}
              disabled={!isModeAvailable(1)}
            >
              Quiz
            </button>
          </div>
          <div className="modes">
            <button
              onClick={() => navigate('/flashcards', { state: { id: id } })}
              className={`buttonModes ${isModeAvailable(2) ? '' : 'disabled'}`}
              disabled={!isModeAvailable(2)}
            >
              Fiszki
            </button>
          </div>
          <div className="modes">
            <button
              onClick={() => navigate('/truefalse', { state: { id: id } })}
              className={`buttonModes ${isModeAvailable(3) ? '' : 'disabled'}`}
              disabled={!isModeAvailable(3)}
            >
              Prawda Fałsz
            </button>
          </div>
          <div className="modes">
            <button className={`buttonModes ${isModeAvailable(4) ? '' : 'disabled'}`} disabled={!isModeAvailable(4)}>
              Puste Pola
            </button>
          </div>
          <div className="modes">
            <button className={`buttonModes ${isModeAvailable(5) ? '' : 'disabled'}`} disabled={!isModeAvailable(5)}>
              Układanie
            </button>
          </div>
        </div>
        <div className="PageFixModes"></div>
      </div>
    </div>
  );
}

export default ChooseModePage;

