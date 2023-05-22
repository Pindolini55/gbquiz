import React, { useState, useEffect } from "react";
import { auth, db} from './../firebase';
import './../App.css';
import { useNavigate, useLocation } from 'react-router-dom';
import HeaderLogged from '../components/HeaderLogged';
import Confetti from 'react-confetti';
import { PieChart, Pie, Cell, Label } from 'recharts';

const QuizPage = () => {
  const navigate = useNavigate();
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
    const [randomAnswerIndex, setRandomAnswerIndex] = useState(null);
  
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

        if(!questionsSnapshot.empty) {
          const questionsData = questionsSnapshot.docs.map((doc) => doc.data());
          setQuestions(questionsData);
          setLoading(false);
          setTimeLeft(questionsData[0].timeLimit);
  
        startTimer();

        }
        else
        {
          navigate('/home');
          alert("Ten Quiz jest niedostępny!");
          
        }
      };
  
      fetchData();
    }, []);
  
    const startTimer = () => {
      const id = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft > 0) {
            return prevTimeLeft - 1;
          }
          else {
            clearInterval(id);
          }
        });

      }, 1000);
      
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
    } else {
      if (showScore) {
        const data = [
          { name: 'Poprawne odpowiedzi', value: score },
          { name: 'Błędne odpowiedzi', value: questions.length - score },
        ];
  
        const COLORS = ['#2ecc71', '#e74c3c'];
  
        return (
          <div className="QuizPage">
            <HeaderLogged />
            <div className="BackgroundQuiz">
              <div className="quiz-container">
                <Confetti
                  numberOfPieces={200}
                  width={window.innerWidth}
                  height={window.innerHeight}
                  recycle={false}
                  colors={['#e74c3c', '#f1c40f', '#2ecc71', '#3498db', '#C7D2FE']}
                />
                <div className="score-section">
                <div className="diagram">
                  <PieChart width={300} height={300}>
                    <Pie
                      data={data}
                      cx={150}
                      cy={170}
                      innerRadius={70}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                       <Label
                      value={`${((score / questions.length) * 100).toFixed(0)}%`}
                      position="center"
                      fill="#fff"
                      fontSize={30}
                      fontWeight="bold"
                    />
                    </Pie>
                  </PieChart>
                  </div>
                  <div>
                    Zdobyłeś {score} z {questions.length} punktów
                  </div>
                </div>
              </div>
              <div className="FixedScoreDown">gbs</div>
            </div>
          </div>
        );
      } else {
  return (
       <div className="QuizPage">
            <HeaderLogged />
            <div className="BackgroundQuiz">
              <div className="quiz-container">
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
      
  
  
  </div>
  <div className="FixedQuiz">gbs</div>
  </div>
  </div>
  
  );
      }
    }
  };
  
  export default QuizPage;