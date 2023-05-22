import React, { useState, useEffect } from 'react';
import { auth, db} from './../firebase';
import './../App.css';
import { useNavigate, useLocation } from 'react-router-dom';
import HeaderLogged from '../components/HeaderLogged';
import Confetti from 'react-confetti';


const TrueFalsePage = () => {

    const {state} = useLocation();
    const { id } = state;


  const [name, setName] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [category, setCategory] = useState('');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const quizRef = db.collection('quizes').doc(id);
      const quizDoc = await quizRef.get();
      const quizData = quizDoc.data();

      setName(quizData.name);
      setImgUrl(quizData.imgurl);
      setCategory(quizData.category);

      const questionsRef = quizRef.collection('questions');
      const questionsSnapshot = await questionsRef.get();
      if(!questionsSnapshot.empty) {
        const questionsData = questionsSnapshot.docs.map((doc) => doc.data());
        setQuestions(questionsData);
        setLoading(false);
      }
      else
      {
        navigate('/home');
        alert("Ten Quiz jest niedostępny!");
        
      }
    };

    fetchData();
  }, [id]);

  const handleAnswer = (answer) => {
    if (answer === 'true') 
    {
        if(questions[currentQuestionIndex].correctAnswer === randomAnswerIndex)
        {
            setScore((prevScore) => prevScore + 1);
            
        }
        if(currentQuestionIndex + 1 < questions.length)
        {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        }
        else
        {
            setShowResult(true);
        }

    }
    if(answer === 'false')
    {
        if(questions[currentQuestionIndex].correctAnswer !== randomAnswerIndex)
        {
            setScore((prevScore) => prevScore + 1);
            
        }
        if(currentQuestionIndex + 1 < questions.length)
        {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        }
        else
        {
            setShowResult(true);
        }
    }

    
  };

  if (loading) {
    return <div>Ładowanie...</div>;
  }

  if (showResult) {
    return (
      <div>
        <HeaderLogged/>
        <div className="FixedScoreUp">gbs</div>
        <div className="BackgroundQuiz">
              <div className="quiz-container">
        <h1>Koniec gry!</h1>
        <Confetti
  numberOfPieces={200}
  width={window.innerWidth}
  height={window.innerHeight}
  recycle={false}
  colors={['#e74c3c', '#f1c40f', '#2ecc71', '#3498db', '#C7D2FE']}
/>
        <h2 className='scoreTrueFalse'> Twój wynik: {score} pkt</h2>
      </div>
      </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const randomAnswerIndex = Math.floor(Math.random() * currentQuestion.answers.length);
  const randomAnswer = currentQuestion.answers[randomAnswerIndex];

  return (
    <div>
    <HeaderLogged/>
    <div className="BackgroundQuiz">
    <div className="quiz-container">
    <div className="quizTitle">{name}</div>
   <div className="question-count">
                  <span>Pytanie {currentQuestionIndex + 1}</span>/{questions.length}
                </div>
    <div className='questions-truefalse'>
      <div className='question-text'>
        {currentQuestion.question} 
      </div>
      <div className='question-text-random'>
        / ({randomAnswer})
      </div>
    </div>
      <div className='textChooseAnswerTrueFalse'>Wybierz odpowiedź:</div>
      <div className='trueFalseButtonContainer'>
        <button className='trueButton' onClick={() => handleAnswer('true')}>
          Prawda
        </button>
        <button className='falseButton' onClick={() => handleAnswer('false')}>
          Fałsz
        </button>
      </div>
    </div>
    <div className="FixedQuiz">gbs</div>
  </div>
</div>
  );
};
export default TrueFalsePage;
