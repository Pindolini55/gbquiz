import React, { useState, useEffect } from "react";
import { db } from './../firebase';
import './../App.css';
import HeaderLogged from '../components/HeaderLogged';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useFlip, Flipper } from 'react-flip-toolkit';
import { Card, Button } from 'react-bootstrap';


function FlashcardMode({ questions }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [isCardFlippedBack, setIsCardFlippedBack] = useState(false);

  const handleCardClick = () => {
    if (isCardFlipped) {
      setIsCardFlippedBack(!isCardFlippedBack);
    } else {
      setIsCardFlipped(!isCardFlipped);
    }
  };

  const handleNextQuestion = () => {
    setIsCardFlipped(false);
    setIsCardFlippedBack(false);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevQuestion = () => {
    setIsCardFlipped(false);
    setIsCardFlippedBack(false);
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };
  
    const currentQuestion = questions[currentQuestionIndex];
  
    return (
    <div className="FlashcardPage">
    <HeaderLogged/>
    <div className="backgroundFlashcard">
        <div className="UpFixedFlashcard">gbs</div>
        <div className="greenWindow">
        <div className="containermy-4">
        <div className="questionCounterFlashcard">{currentQuestionIndex + 1}/{questions.length}</div>
        <div
          className={`card ${isCardFlipped ? 'flipped' : ''} ${isCardFlippedBack ? 'flipped-back' : ''}`}
          onClick={handleCardClick}
        >
          <div className="card-front">
            <Card.Body>
            <Card.Title>Pytanie:</Card.Title>
              <Card.Text>{currentQuestion.question}</Card.Text>
            </Card.Body>
          </div>
          <div className="card-back">
            <Card.Body>
              <Card.Title>Odpowiedź:</Card.Title>
              <Card.Text>{currentQuestion.answers[currentQuestion.correctAnswer]}</Card.Text>
            </Card.Body>
          </div>
        </div>
        <div className="mt-4 d-flex justify-content-between">
          <Button className="buttonsFlashcard" disabled={currentQuestionIndex === 0} onClick={handlePrevQuestion}>
            Poprzedni
          </Button>
          <Button className="buttonsFlashcard" disabled={currentQuestionIndex === questions.length - 1} onClick={handleNextQuestion}>
            Następny
          </Button>
        </div>
      </div>
      
      </div>
      <div className="FixedFlashcard">gbs</div>
      </div>
      </div>
    );
  }


const FlashcardsPage = () => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);

  const {state} = useLocation();
  const { id } = state;

  useEffect(() => {
    const fetchData = async () => {
      const quizRef = db.collection('quizes').doc(id);
      const quizDoc = await quizRef.get();
      const quizData = quizDoc.data();


      const questionsRef = quizRef.collection('questions');
      const questionsSnapshot = await questionsRef.get();
      const questionsData = questionsSnapshot.docs.map((doc) => doc.data());

      setQuestions(questionsData);
      setLoading(false);
    };

    fetchData();
  }, []);

  

  if (loading) {
    return <div>Ładowanie...</div>;
  } else {
    return <FlashcardMode questions={questions} />;
}
                }
export default FlashcardsPage;