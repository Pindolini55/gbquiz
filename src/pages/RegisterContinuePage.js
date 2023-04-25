import './../App.css';
import React, { useState } from 'react';
import Header from '../components/Header';
import lady from './../resources/continueRegisterLady.png';
import { useNavigate } from 'react-router-dom';

function RegisterContinuePage () {
    
  const navigate = useNavigate();
  
  const [categories, setCategories] = useState([
    { value: 'category1', label: 'Piłka nożna', selected: false },
    { value: 'category2', label: 'Fotografia', selected: false },
    { value: 'category3', label: 'Biologia', selected: false },
    { value: 'category4', label: 'Chemia', selected: false },
    { value: 'category5', label: 'Elektronika', selected: false },
    { value: 'category6', label: 'Fizyka', selected: false },
    { value: 'category7', label: 'Zwierzęta', selected: false },
    { value: 'category8', label: 'Informatyka', selected: false },
    { value: 'category9', label: 'Rośliny', selected: false },
    { value: 'category10', label: 'J.Angielski', selected: false },
    { value: 'category11', label: 'J.Niemiecki', selected: false },
    { value: 'category12', label: 'J.Hiszpański', selected: false },
    { value: 'category13', label: 'J.Włoski', selected: false },
    { value: 'category14', label: 'Siatkówka', selected: false },
    { value: 'category15', label: 'Hokej', selected: false },
    { value: 'category16', label: 'Historia', selected: false },
    { value: 'category17', label: 'Geografia', selected: false },
    { value: 'category18', label: 'Medycyna', selected: false },
    { value: 'category19', label: 'Piłka ręczna', selected: false },
    { value: 'category20', label: 'Jedzenie i picie', selected: false },
  ]);

  function handleCategoryClick(index) {
    const newCategories = [...categories];
    newCategories[index].selected = !newCategories[index].selected;
    setCategories(newCategories);
  }


  const [loginValue, setLoginValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [surnameValue, setSurnameValue] = useState('');
  const [ageCategoryValue, setAgeCategoryValue] = useState('non');
  const [wrongInputs, setWrongInputs] = useState('');

  const handleLoginChange = (event) => {
    setLoginValue(event.target.value);
  };
  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurnameValue(event.target.value);
  }

  const handleAgeCategoryChange = (event) => {
    setAgeCategoryValue(event.target.value);
  }


  const checkSave = () => {
    const isValidLogin = /^\w{6,}$/.test(loginValue);
    const isValidName = /^[a-zA-Z]{3,}$/.test(nameValue);
    const isValidSurname = /^[a-zA-Z]{3,}$/.test(nameValue);

    if(!isValidLogin)
    {
      setWrongInputs('Nazwa użytkownika musi mieć conajmniej 6 znaków!');
    }
    else if(!isValidName || !isValidSurname)
    {
      setWrongInputs('Imię i nazwisko musi mieć conajmniej 3 znaki!');
    }
    else if(ageCategoryValue === "non")
    {
      setWrongInputs('Proszę wybrać kategorię wiekową!');
    }
    else
    {
      navigate('/home');
    }
  }

    
    return (
        <div>
            <Header/>
            <body>
                <div className='RegisterContinueBody'>
                <img className="ladyimg" src={lady}/>
                 <div className='RegisterContinueContent'>
                    <div className='registerContinueWindow'>

                
                        <div className='DaneOsobowe'>Dane Osobowe</div>
                        <div className='W8'>Jeszcze tylko chwila!</div>

                        <div className='wrongInputsContinue'>{wrongInputs}</div>

                        <div className='NapisyLogin'>Nazwa użytkownika</div>
                        <input type='text' value={loginValue} onChange={handleLoginChange} className='loginInput'></input>


                        <div className='NapisyLogin'>Imię</div>
                        <input type='text' value={nameValue} onChange={handleNameChange} className='loginInput'></input>
                        
                        
                        <div className='NapisyLogin'>Nazwisko</div>
                        <input  type='text' value={surnameValue} onChange={handleSurnameChange}  className='loginInput'></input>
                        
                        <div className='NapisyLogin'>Kategoria wiekowa</div>
                        <select className='selectInput' name="ageCategory" value={ageCategoryValue} onChange={handleAgeCategoryChange}>
                        <option value="non">--Wybierz opcję--</option>
                         <option value="5x8">5-8</option>
                         <option value="9x12">9-12</option>
                         <option value="13x16">13-16</option>
                         <option value="17x20">17-20</option>
                        <option value="20x25">20-25</option>
                        <option value="26x30">26-30</option>
                        <option value="26x30">30+</option>

                        </select>

                        <div className='NapisyLogin'>Kategorie</div>
                      
      {categories.map((category, index) => (
        <button 
          key={category.value}
          className={category.selected ? 'selected' : ''}
          onClick={() => handleCategoryClick(index)}
        >
          {category.label}
        </button>
      ))}
 
                        
                        <button className='saveButton' onClick={checkSave}>Zapisz</button>
                        
                        
                    <div className='PageFixContinue'>GBS</div>
                     

                    </div>
                    
                </div>
                <footer className='footLoginRegister'>Copyright © GbQuiz 2023</footer>
                
                </div>
            </body>
            
        </div>
    )
}

export default RegisterContinuePage;