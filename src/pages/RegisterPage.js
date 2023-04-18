import './../App.css';
import Logo from './../resources/logo.png';
import rp1 from './../resources/registerphoto1.jpg';
import rp2 from './../resources/registerphoto2.png';
import React, { useState } from 'react';
import Header from './../components/Header';
import { useNavigate } from 'react-router-dom';



function RegisterPage() {
    const navigate = useNavigate();
    const LoginLinkClick = () => {
        navigate('/login');
      }
    return (
        <div>
            <Header/>
            <body>
                <div className='LoginBody'>
                 <div className='LoginContent'>
                    <div className='loginWindow'>

                    <div className='lewaStronaLogin'>
                        <div className='Rejestracja'>Rejestracja</div>
                        <div className='NapisyLogin'>E-mail</div>
                        <input className='loginInput'></input>
                        <div className='NapisyLogin'>Hasło</div>
                        <input className='loginInput'></input>
                        <div className='NapisyLogin'>Powtórz Hasło</div>
                        <input className='loginInput'></input>

                        
                        
                        
                        <button className='loginButton'>Zarejestruj</button>
                        <scipt>
                            
                        </scipt>
                        <div className='OneText'>
                        <div className='loginQuestion'>Posiadasz już konto?</div>
                        <div className='RegisterText' onClick={LoginLinkClick}>Zaloguj się!</div>
                        </div>
                        </div>

                     
                       
                        <div className='prawaStronaLogin'>
                        <div className='RightTextRegister'>Zarejestruj się i korzystaj z pełni możliwości GbQuiz!</div>
                        <img className='RegisterPhoto1' src={rp1}/>
                        <img className='RegisterPhoto2' src={rp2}/>


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

export default RegisterPage;