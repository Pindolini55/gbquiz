import './../App.css';
import Logo from './../resources/logo.png';
import lp from './../resources/loginphoto.png';
import rb from './../resources/robotlogin.png';
import React, { useState } from 'react';
import Header from './../components/Header';
import { useNavigate } from 'react-router-dom';



function LoginPage() {
    const navigate = useNavigate();
    const RegisterLinkClick = () => {
        navigate('/register');
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
                        <input className='CheckBoxLogin' type="checkbox" />
                        <span class="checkmark"></span>
                            </label>
                        </div>
                        
                        
                        <button className='loginButton'>Zaloguj się</button>
                        <scipt>
                            
                        </scipt>
                        <div className='OneText'>
                        <div className='loginQuestion'>Nie masz jeszcze konta?</div>
                        <div className='RegisterText' onClick={RegisterLinkClick}>Zarejestruj się</div>
                        </div>
                        </div>

                        <div class="line-vertical"></div>
                       
                        <div className='prawaStronaLogin'>
                        <div className='RightTextLogin'>Zaloguj się i staw czoła nowym wyzwaniom!</div>
                        <img className='LoginPhoto' src={lp} width={359} height={269}/>

                        </div>

                    </div>
                    
                </div>
                <div className='PageFix'>
                </div>
                </div>
            </body>
        </div>
    );

    }

export default LoginPage;