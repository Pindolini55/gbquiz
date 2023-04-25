import './../App.css';
import Logo from './../resources/logo.png';
import lp from './../resources/loginphoto.png';
import rb from './../resources/robotlogin.png';
import React, { useState } from 'react';
import Header from './../components/Header';
import { useNavigate } from 'react-router-dom';
import LearningModesPage from './LearningModesPage';


function LoginPage() {
    const navigate = useNavigate();
    const RegisterLinkClick = () => {
        navigate('/register');
      }

    const [isChecked, setIsChecked] = useState(false);

    const [wrongInputs, setWrongInputs] = useState('');

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
      }

    const checkLogin = () => {
        if(!isChecked)
        {
            setWrongInputs('Prosze zaznazczyć weryfikacje Recaptcha!');
        }
    }

    return (
        <div>
            <Header/>
            <body>
                <div className='LoginBody'>
                 <div className='LoginContent'>
                    <div className='loginWindow'>

                    <div className='lewaStronaLogin'>
                        <div className='Rejestracja'>Logowanie</div>
                        <div className='NapisyLogin'>E-mail</div>
                        <input className='loginInput'></input>
                        <div className='NapisyLogin'>Hasło</div>
                        <input className='loginInput'></input>

                        <div className='Recaptcha'>
                          <label className='RecaptchaText'> Nie jestem robotem
                        <input className='CheckBoxLogin' type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
                        <span class="checkmark"></span>
                            </label>
                        </div>
                        
                        <div className='wrongInputsLogin'>{wrongInputs}</div>

                        <button className='loginButton' onClick={checkLogin}>Zaloguj się</button>
                       


                        <div className='OneText'>
                        <div className='loginQuestion'>Nie masz jeszcze konta?</div>
                        <div className='RegisterText' onClick={RegisterLinkClick}>Zarejestruj się</div>
                        </div>
                        </div>

                     
                       
                        <div className='prawaStronaLogin'>
                        <div className='RightTextLogin'>Zaloguj się i staw czoła nowym wyzwaniom!</div>
                        <img className='LoginPhoto' src={lp}/>

                        </div>

                    </div>
                    
                </div>
                <footer className='footLoginRegister'>Copyright © GbQuiz 2023</footer>
                <div className='PageFix'>
                
                </div>
                </div>
            </body>
            
        </div>
    );

    }

export default LoginPage;