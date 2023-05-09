import React, { useState, useEffect } from "react";
import { auth, db} from './../firebase';
import './../App.css';
import { useNavigate, useLocation } from 'react-router-dom';
import HeaderLogged from '../components/HeaderLogged';
import Confetti from 'react-confetti';

const QuizPage = () => {
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [category, setCategory] = useState('');
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [timeLeft, setTimeLeft] = useState(null);
    const [timerId, setTimerId] = useState(null);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
  
  const {state} = useLocation();
  const { id } = state;

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
        const questionsData = questionsSnapshot.docs.map((doc) => doc.data());
  
        setQuestions(questionsData);
        setLoading(false);
        setTimeLeft(questionsData[0].timeLimit);
  
        startTimer();
      };
  
      fetchData();
    }, []);
  
    const startTimer = () => {
      const id = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 2000);
  
      setTimerId(id);
    };
  
    const stopTimer = () => {
      clearInterval(timerId);
    };
  
    const handleAnswerOptionClick = (isCorrect) => {
      if (isCorrect) {
        setScore(score + 1);
      }
  
      setSelectedAnswer(isCorrect);
  
      stopTimer();
  
      setTimeout(() => {
        setSelectedAnswer(null);
  
        if (currentQuestion === questions.length - 1) {
          setShowScore(true);
        } else {
          setCurrentQuestion(currentQuestion + 1);
          setTimeLeft(questions[currentQuestion + 1].timeLimit);
          startTimer();
        }
      }, 1000);
    };
  
    const renderAnswerOptions = () => {
      return questions[currentQuestion].answers.map((answerOption, index) => (
        <div
          className={`answer-option ${selectedAnswer !== null ? 'disabled' : ''} ${
            selectedAnswer === index ? (selectedAnswer === questions[currentQuestion].correctAnswer ? 'correct' : 'incorrect') : ''
          }`}
          key={index}
          onClick={() => handleAnswerOptionClick(index === questions[currentQuestion].correctAnswer)}
        >
          {answerOption}
        </div>
      ));
    };

    if (loading) {
      return <div>Ładowanie...</div>;
    }

    else {
    return (
    <div className="QuizPage">
      <HeaderLogged/>
   <div className="BackgroundQuiz">
      <div className="quiz-container">
        {showScore ? (
        <div>
          <Confetti
  numberOfPieces={200}
  width={window.innerWidth}
  height={window.innerHeight}
  recycle={false}
  colors={['#e74c3c', '#f1c40f', '#2ecc71', '#3498db', '#C7D2FE']}
/>
          <div className="score-section">
            Zdobyłes {score} na {questions.length} pkt
          </div>
        </div>
        ) : (
          <>
            <div className="question-section">
              <div className="quizTitle">{name}</div>
              
              <div className="question-count">
                <span>Pytanie {currentQuestion + 1}</span>/{questions.length}
              </div>
             
  
              {questions[currentQuestion].imgurl && (
                 <img src={questions[currentQuestion].imgurl} width={400} height={250} alt="Question" className="question-image" />
                 )}

<div className="question-text">{questions[currentQuestion].question}</div>
  <div className="time-left">Czas: {timeLeft} s</div>
      </div>
      <div className="answer-section">
        <ul className="answer-options">{renderAnswerOptions()}</ul>
      </div>
    </>
  )}
</div>
<div className="FixedQuiz">gbs</div>
</div>
</div>
);
              }
};


export default QuizPage;