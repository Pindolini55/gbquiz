import './../App.css';
import Logo from './../resources/logo.png';
import lp from './../resources/loginphoto.png';
import React, { useState } from 'react';
import Header from './../components/Header';
import { useNavigate } from 'react-router-dom';
import { auth, db} from './../firebase';

function LoginPage() {
    const navigate = useNavigate();
    const RegisterLinkClick = () => {
        navigate('/register');
      }

    const [isChecked, setIsChecked] = useState(false);

    const [passwordValue, setPasswordValue] = useState('');
    const [emailValue, setEmailValue] = useState('');

    const [wrongInputs, setWrongInputs] = useState('');

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
      }

    const checkLogin = () => {
        if(!isChecked)
        {
            setWrongInputs('Prosze zaznazczyć weryfikacje Recaptcha!');
        }
        else
        {
            handleLogin();
        }
    }

    const handleEmailChange = (event) => {
        setEmailValue(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

    const handleLogin = async () => {
        await auth
          .signInWithEmailAndPassword(emailValue, passwordValue)
          .then(() => {
            
            navigate('/home');            

          })
          .catch(error => alert("Podany login lub hasło są nieprawidłowe!"))
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
                        <input className='loginInput' value={emailValue} onChange={handleEmailChange}></input>
                        <div className='NapisyLogin'>Hasło</div>
                        <input className='loginInput' type='password' value={passwordValue} onChange={handlePasswordChange}></input>

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
                    <div className='PageFix'>
                gbs
                </div>
                </div>
                <footer className='footLoginRegister'>Copyright © GbQuiz 2023</footer>
                
                </div>
            </body>
            
        </div>
    );

    }

export default LoginPage;