import './../App.css';
import React, { useState } from 'react';
import Header from '../components/Header';
import Logo from './../resources/logo.png';
import Lupa from './../resources/search.png';
import HomeIcon from './../resources/HomeIcon.png';
import FavouriteIcon from './../resources/FavouriteIcon.png';
import HelpIcon from './../resources/HelpIcon.png';
import ProfileIcon from './../resources/ProfileIcon.png';




function ClientMainPage () {
    
    
    return (
        <div>
          <div className='HeaderMenu'> 
    <img src={Logo} className='LogoHome'  />
    <input type="text"  className='homeSearch' placeholder='Wyszukaj' style={{ backgroundImage: `url(${Lupa})`}}/>

<div className='homeIconText'>
<img className='HomeIcon' src={HomeIcon} alt='Home Icon'/>
    <div className='HomeText'>
    Strona Główna
    </div>
</div>

<div className='favouriteIconText'>
<img className='FavouriteIcon' src={FavouriteIcon} alt='Favourite Icon'/>
    <div className='FavouritesText'>
    Ulubione
    </div>
</div>


  </div>       
            
        </div>
    )
}

export default ClientMainPage;