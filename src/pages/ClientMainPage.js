import './../App.css';
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Logo from './../resources/logo.png';
import Lupa from './../resources/search.png';
import HomeIcon from './../resources/HomeIcon.png';
import FavouriteIcon from './../resources/FavouriteIcon.png';
import HelpIcon from './../resources/HelpIcon.png';
import ProfileIcon from './../resources/ProfileIcon.png';
import SettingsIcon from './../resources/SettingsIcon.png';
import LogoutIcon from './../resources/LogoutIcon.png';
import Slider from 'react-slick';
import { auth, db} from './../firebase';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaHandHolding } from 'react-icons/fa';

function ClientMainPage () {
    
    const [showProfile, setShowProfile] = useState(false);
    const navigate = useNavigate();
    const [login,setLogin] = useState('');
    const [email,setEmail] = useState('');

    const uid = auth.currentUser?.uid;

    const handleClickProfile = () => {
        setShowProfile(!showProfile);
      };

    const logOut = () => {
      auth
      .signOut()
      .then(() => {
       navigate('/');
      })

    }

    const handleHelpNavigate = () => {
      navigate('/help');
    }
    const handleSettingsNavigate = () => {
      navigate('/settings');
    }

    const [testlogin, setTestLogin] = useState('marianektester');
    const [testemail, setTestEmail] = useState('marianos2023@wp.pl');

    const [quizzes, setQuizzes] = useState([]);
    const [categories, setCategories] = useState([]);
    const [displayedQuizzes, setDisplayedQuizzes] = useState([]);
    
    useEffect(() => {
        // pobierz quizy z bazy danych Firebase
        db.collection("quizes")
          .get()
          .then((querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setQuizzes(data);
            // uzyskaj listę kategorii z pobranych quizów
            const uniqueCategories = Array.from(new Set(data.map((quiz) => quiz.category)));
            setCategories(uniqueCategories);


          });
          db.collection('users').doc(uid).get()
          .then((doc) => {
            if (doc.exists) {
              const data = doc.data();
              setLogin(data.login);
              setEmail(data.email);
              console.log(login, email);
            } else {
              console.log("Nie znaleziono dokumentu");
            }
          })
      }, []);
    
  
    
      
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        centerMode: false,
        prevArrow: <button>{'Poprzedni'}</button>,
        nextArrow: <button>{'Następny'}</button>,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

    return (
        <div>
          <div className='HeaderMenuHome'> 
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

<div className='helpIconText'>
<img className='helpIcon' src={HelpIcon} alt='Help Icon' onClick={handleHelpNavigate}/>
</div>

<div className='profileIconText'>
<img className='profileIcon' src={ProfileIcon} onClick={handleClickProfile} alt='Profile Icon'/>
</div>

{showProfile && (
        <div className="profileWindow">
       <p style={{fontWeight: 'bold'}}>{login}</p>
        <div className='onelineClient'>
        <p className='emailTextWindow'>{email}</p>
        </div>

      
        <div className='onelineTop'>
        <img className='settingsIcon' src={SettingsIcon} alt='Settings Icon'/>
        <p style={{fontWeight: 'bold'}} onClick={handleSettingsNavigate}>Ustawienia</p>
        </div>

        <div className='onelineLogout'>
        <img className='logoutIcon' src={LogoutIcon} alt='Logout Icon'/>
        <p style={{fontWeight: 'bold'}} onClick={logOut}>Wyloguj</p>
        </div>
    
        </div>

        
      )}


  </div>  


  <div className='centerContent'>
<div className='Fixed'>gbs</div>
    <div className='codeWindow'>
    <div className='codeText'>
    Wpisz kod quizu i zacznij naukę już teraz!   
    </div>
     
        <div className='crossInputButton'>
            <input placeholder='Wpisz kod dołączenia' type='number' className='codeInput'></input>
            <button className='joinButton'>DOŁĄCZ</button>
        </div>
    </div>
    <div className="App">
  {categories.map((category) => {
    const categoryQuizzes = quizzes.filter((quiz) => quiz.category === category);
    const uniqueQuizzes = Array.from(new Set(categoryQuizzes.map((quiz) => quiz.id)));
    return (
      <div key={category}>
        <h2>{category}</h2>
        <div className='slider-container'> 
        <Slider {...settings}>
          {uniqueQuizzes.map((quizId) => {
            const quiz = categoryQuizzes.find((quiz) => quiz.id === quizId);
            return (
              <div className="quiz-item" key={quiz.id} onClick={() => navigate('/modes', {state: {id: quiz.id}})}>
                <div className="quiz-image">
                  <img src={quiz.imgurl} alt={quiz.name} />
                </div>
                <div className="quiz-details">
                <div className="quiz-name">{quiz.name}</div>
                  <div className="quiz-count">{quiz.questioncounter} pytań</div>
                </div>
              </div>
            );
          }).filter((quiz, index, self) =>
            index === self.findIndex((t) => (
              t.key === quiz.key
            ))
          )}
        </Slider>
      </div>
      </div>
    );
  })}
</div>








    
    <div className='Fixed'>gbs</div>
</div>     
            







        </div>
    )
}

export default ClientMainPage;