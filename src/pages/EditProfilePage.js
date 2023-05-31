import './../App.css';
import React, { useEffect, useState } from 'react';
import HeaderLogged from '../components/HeaderLogged';
import { useNavigate } from 'react-router-dom';
import { auth, db} from './../firebase';
import { TiChevronLeft } from "react-icons/ti";




  
function EditProfilePage ()  {
    const uid = auth.currentUser?.uid;
    const [login,setLogin] = useState('');
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');
    const [categoryage,setCategoryAge] = useState('');
    const [changeButtonVisible, setChangeButtonVisible] = useState(false);
    const [sendButtonVisible, setSendButtonVisible] = useState(false);
    
    

    const navigate = useNavigate();
    const RegisterLinkClick = () => {
        navigate('/register');
      }


      const [isActive, setIsActive] = useState(false);

      
    

      useEffect(() => {
        db.collection('users').doc(uid).get()
        .then((doc) => {
          if (doc.exists) {
            const data = doc.data();
            setLogin(data.login);
            setEmail(data.email);
            setName(data.name);
            setSurname(data.surname);
            setCategoryAge(data.categoryage);
          } else {
            console.log("Nie znaleziono dokumentu");
          }
        })
    }, []);

    const [activePanel, setActivePanel] = useState('');
    const [rightPanelText, setRightPanelText] = useState('');

    

    const handleActiveClick = () => {
      setIsActive(!isActive);
    }

    const handleLoginClick = () => {
      setActivePanel('login');
      setRightPanelText('Zmiana Loginu');
      setIsActive(!isActive);
      setChangeButtonVisible(true);
      setSendButtonVisible(false);
    }
    
    const handleEmailClick = () => {
      setActivePanel('email');
      setRightPanelText('Zmiana e-mailu');
      setIsActive(!isActive);
      setChangeButtonVisible(false);
      setSendButtonVisible(true);
    }
    
    const handleNameClick = () => {
      setActivePanel('name');
      setRightPanelText('Zmiana imienia');
      setIsActive(!isActive);
      setChangeButtonVisible(true);
      setSendButtonVisible(false);
    }
    
    const handleSurnameClick = () => {
      setActivePanel('surname');
      setRightPanelText('Zmiana nazwiska');
      setIsActive(!isActive);
      setChangeButtonVisible(true);
      setSendButtonVisible(false);
    }
    
    const handleCategoryAgeClick = () => {
      setActivePanel('categoryage');
      setRightPanelText('Zmiana kategorii wiekowej');
      setIsActive(!isActive);
      setChangeButtonVisible(true);
      setSendButtonVisible(false);
    }

    const [emailInput,setEmailInput] = useState('');
    const [loginInput,setLoginInput] = useState('');
    const [nameInput,setNameInput] = useState('');
    const [surnameInput,setSurnameInput] = useState('');
    const [categoryageInput,setCategoryAgeInput] = useState('');


    const handleEmailChange = (event) => {
      setEmailInput(event.target.value)
}


    const handleLoginChange = (event) => {
      setLoginInput(event.target.value)
}


const handleNameChange = (event) => {
  setNameInput(event.target.value);
};
const handleSurnameChange = (event) => {
  setSurnameInput(event.target.value);
};
const handleCategoryChange = (event) => {
  setCategoryAgeInput(event.target.value);
};


    const changeData = async () => {
      const dbref = db.collection('users').doc(auth.currentUser?.uid)
      const user = auth.currentUser;
      auth.currentUser.updateEmail(emailInput);
      if(activePanel === 'login')
      {
         await dbref.set({
        login: loginInput
          }, {merge: true})
          setIsActive(!isActive);
      }
      else if(activePanel === 'email' )
      {
        user.updateEmail(emailInput).then(() => {
          console.log("Wysłano link na nowy e-mail");
        }).catch((error) => {
          console.log(error);
        });
       await dbref.set({
          email: emailInput
            }, {merge: true})
            setIsActive(!isActive);
            logOut();
      }
      else if(activePanel === 'name')
      {
        await dbref.set({
          name: nameInput
            }, {merge: true})
            setIsActive(!isActive);
      }
      else if(activePanel === 'surname')
      {
       await dbref.set({
          surname: surnameInput
            }, {merge: true})
            setIsActive(!isActive);
      }
      else if(activePanel === 'categoryage')
      {
       await dbref.set({
          categoryage: categoryageInput
            }, {merge: true})
            setIsActive(!isActive);
      }
      else {

      }
      navigate("/home");
    }
    const logOut = () => {
      auth
      .signOut()
      .then(() => {
       navigate('/');
      })
    }
    return (
        <div>
            <HeaderLogged/>
            <body>
                <div className='LoginBody'>
                 <div className='LoginContent'>
                    <div className='settingsWindow'>

                    <div className='leftSettingsWindow'>
                    <div className={`left-panel ${isActive ? 'active' : ''}`}>
                  
                     <div className='TextSite'>Ustawienia</div>
                    <div className='DescEdit'>Aby edytować dane konta kliknij w konkretną daną</div>

                    <div className='SettingsText'>E-mail</div>
                    <div className='userCredentialsText' onClick={handleEmailClick}>{email}</div>

                    
                    <div className='SettingsText'>Login</div>
                    <div className='userCredentialsText' onClick={handleLoginClick}>{login}</div>

                    
                    <div className='SettingsText'>Imię</div>
                    <div className='userCredentialsText' onClick={handleNameClick}>{name}</div>

                    
                    <div className='SettingsText'>Nazwisko</div>
                    <div className='userCredentialsText' onClick={handleSurnameClick} >{surname}</div>

                    
                    <div className='SettingsText'>Kategoria wiekowa</div>
                    <div className='userCredentialsText' onClick={handleCategoryAgeClick}>{categoryage}</div>

                    


                        </div>
                        </div>

                     
                       
                        <div className='rightSettingsWindow'>
                             <div className={`right-panel ${isActive ? 'active' : ''}`}>
                          <TiChevronLeft className='BackArrowEdit' size={40} onClick={handleActiveClick} />
                          <p className='rightPanelText'>{rightPanelText}</p>
                          {activePanel === 'login' && <input type='text' value={loginInput} onChange={handleLoginChange} className='editInput' placeholder='Nowy Login'/>}
                          {activePanel === 'email' && <input type='text' value={emailInput} onChange={handleEmailChange} className='editInput' placeholder='Nowy E-mail'/> } 
                          {activePanel === 'name' && <input type='text' value={nameInput} onChange={handleNameChange} className='editInput' placeholder='Nowe Imię'/>}
                          {activePanel === 'surname' && <input type='text' value={surnameInput} onChange={handleSurnameChange}  className='editInput' placeholder='Nowe Nazwisko'/>}
                          {activePanel === 'categoryage' && <select className='selectInput' name="ageCategory" value={categoryageInput} onChange={handleCategoryChange}>
                        <option value="non">--Wybierz opcję--</option>
                         <option value="5x8">5-8</option>
                         <option value="9x12">9-12</option>
                         <option value="13x16">13-16</option>
                         <option value="17x20">17-20</option>
                        <option value="20x25">20-25</option>
                        <option value="26x30">26-30</option>
                        <option value="26x30">30+</option>

                        </select>}
                     <button className='ChangeButton' onClick={changeData}>Zapisz Zmiany</button>
  
                        </div>
                        

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
export default EditProfilePage;