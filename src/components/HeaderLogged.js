import './../App.css';
import Logo from './../resources/logo.png';
import React, { useState } from 'react';
import { TiChevronLeft } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';

const HeaderLogged = () => {
    const navigate = useNavigate();
    const backClick = () => {
        navigate('/home');
      }
      const homeClick = () => {
        navigate('/home');
      }
    return (
        <div className='HeaderComponent'>
        <TiChevronLeft className='BackArrow' size={40} onClick={backClick}/>
        <img className='HeaderLogo' onClick={homeClick} src={Logo} width="267"/>
        </div>
    );
}

export default HeaderLogged;