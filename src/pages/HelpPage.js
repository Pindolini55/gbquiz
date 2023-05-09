import './../App.css';
import React, { useState } from 'react';
import HeaderLogged from '../components/HeaderLogged';
import { useNavigate } from 'react-router-dom';


function HelpPage ()  {



return (

    <div className='HelpPage'>
    <HeaderLogged/>
<div className='helpContent'>
        <div className='helpWindow'>
       <h3> Witaj na stronie informacyjnej!</h3>
       <p>Jako właściciele tej strony, zależy nam na tym, aby zapewnić Ci jak najlepszą obsługę. </p>
       <p>W razie jakichkolwiek pytań lub wątpliwości, prosimy o kontakt. </p> 
       <p>Nasz zespół obsługi klienta jest dostępny zarówno przez telefon, jak i przez e-mail.</p>
       <p>Jeśli chodzi o częste pytania, warto zajrzeć do sekcji "FAQ", gdzie znajdziesz odpowiedzi na wiele pytań, które mogą Cię nurtować.</p>
       <p>Staramy się, aby ta sekcja była na bieżąco aktualizowana i zawierała najważniejsze informacje.</p>
       

        <div class="info-box">
  <h3>Informacje o naszej stronie internetowej</h3>
  <ul>
    <li><strong>Data utworzenia:</strong> 23.04.2023 roku</li>
    <li><strong>Właściciel:</strong> Dawid Rudnicki</li>
    <li><strong>Wersja strony:</strong> v2.0 - 07.05.2023r</li>
    <li><strong>FAQ:</strong> w sekcji "Najczęściej zadawane pytania" znajdziesz odpowiedzi na wiele pytań, które mogą Cię nurtować</li>
    <li><strong>Email:</strong> gbquiz@help.pl</li>
    <li><strong>Obsługa klienta:</strong> +48 931 231 211</li>
  </ul>
</div>
        </div>
        <div className='FixedHelp'>
        Copyright © GbQuiz 2023
        </div>
        </div>
    </div>
    
    )}
export default HelpPage;