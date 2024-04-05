import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { LuClock } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import "./Testpage.css";
import buttonNotification from './mouse-click.mp3';
import question from './questions.json';

function Testpage1() {
    const [state, setState] = useState({
      questions: [],
      currentQuestion: {},
      nextQuestion: {},
      previousQuestion: {},
      answer: '',
      numberOfQuestion: 0,
      numberOfAnsweredQuestion: 0,
      currentQuestionIndex: 0,
      score: 0,
      correctAnswer: 0,
      wrongAnswer: 0,
      nextButtonDisabled: false,
      previousButtonDisabled: true,
      time: {}
    });
  
    useEffect(() => {
      setState(prevState => ({
        ...prevState,
        questions: question
      }));
    }, []);
  
    useEffect(() => {
      displayQuestions();
      startTimer();
      handleDisableButton();
    }, [state.previousQuestion, state.currentQuestionIndex]);
  
  const navigate = useNavigate();

  const displayQuestions = () => {
    const { questions, currentQuestionIndex } = state;
    if (questions.length > 0 && currentQuestionIndex >= 0 && currentQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex];
      const nextQuestion = questions[currentQuestionIndex + 1];
      const previousQuestion = questions[currentQuestionIndex - 1];
  
      setState(prevState => ({
        ...prevState,
        currentQuestion: currentQuestion,
        nextQuestion: nextQuestion,
        previousQuestion: previousQuestion,
        numberOfQuestion: questions.length,
        answer: currentQuestion.answer
      }));
    }
  };
  
  const handleOptionClick = (e) => {
    const selectedOption = e.target.innerHTML.toLowerCase();
     const answer = state.answer.toLowerCase();

    if (selectedOption === answer) {
      setTimeout(() => {
        document.getElementById('button-sound').play();
      }, 200);
      correctAnswer();
    } else {
      setTimeout(() => {
        document.getElementById('button-sound').play();
      }, 200);
      wrongAnswer();
    }
  };

  const handleNextButtonClick = () => {
    playButtonSound();
    if (state.nextQuestion !== undefined) {
      setState(prevState => ({
        ...prevState,
        currentQuestionIndex: prevState.currentQuestionIndex + 1
      }));
    }
  };

  const handlePreviousButtonClick = () => {
    playButtonSound();
    if (state.previousQuestion !== undefined) {
      setState(prevState => ({
        ...prevState,
        currentQuestionIndex: prevState.currentQuestionIndex - 1
      }));
    }
  };

  const handleQuitButtonClick = () => {
    playButtonSound();
    if (window.confirm('Are you sure you want to finish the test?')) {
      navigate('/testpage/result');
    }
  };

   const handleButtonClick = (e) => {
    switch (e.target.id) {
      case 'next-button':
        handleNextButtonClick();
        break;
      case 'previous-button':
        handlePreviousButtonClick();
        break;
      case 'quit-button':
        handleQuitButtonClick();
        break;
      default:
        break;
    }
    playButtonSound();
  };

  const playButtonSound = () => {
    document.getElementById('button-sound').play();
  };


  const correctAnswer = () => {

    setState(prevState => ({
      ...prevState,
      score: prevState.score + 1,
      correctAnswer: prevState.correctAnswer + 1,
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
      numberOfAnsweredQuestion: prevState.numberOfAnsweredQuestion + 1
    }), () => {
      if (state.nextQuestion === undefined) {
        endTest();
      } else {
        displayQuestions();
      }
    });
  };

  const wrongAnswer = () => {

    setState(prevState => ({
      ...prevState,
      wrongAnswer: prevState.wrongAnswer + 1,
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
      numberOfAnsweredQuestion: prevState.numberOfAnsweredQuestion + 1
    }), () => {
      if (state.nextQuestion === undefined) {
        endTest();
      } else {
        displayQuestions();
      }
    });
  };

  const startTimer = () => {
    const countDownTime = Date.now() + 30000; // 30 seconds for example
    const interval = setInterval(() => {
      const now = new Date();
      const distance = countDownTime - now;

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(interval);
        setState(prevState => ({
          ...prevState,
          time: {
            minutes: 0,
            seconds: 0
          }
        }), () => {
          endTest();
        });
      } else {
        setState(prevState => ({
          ...prevState,
          time: {
            minutes,
            seconds
          }
        }));
      }
    }, 1000);
  };

  const handleDisableButton = () => {
    setState(prevState => ({
      ...prevState,
      previousButtonDisabled: !prevState.previousQuestion || prevState.currentQuestionIndex === 0,
      nextButtonDisabled: !prevState.nextQuestion || prevState.currentQuestionIndex + 1 === prevState.numberOfQuestion
    }));
  };

  const endTest = () => {
    alert('Test has ended!');
    const playerStats = {
      score: state.score,
      numberOfQuestion: state.numberOfQuestion,
      numberOfAnsweredQuestion: state.numberOfAnsweredQuestion,
      correctAnswer: state.correctAnswer,
      wrongAnswer: state.wrongAnswer,
    };
    console.log(playerStats);
    setTimeout(() => {
      navigate('/test', { playerStats });
    }, 1000);
  };
  return (
    <React.Fragment>
      <Helmet>
        <title>Test Page</title>
      </Helmet>
      <audio id="button-sound" src={buttonNotification}></audio>
      <div className='questions'>
        <h2>PRACTICE TEST</h2>
        <div className ="lifeline-container">
          <p>
            <span className='left' style={{float: "left"}}>
              {state.currentQuestionIndex + 1} of {state.numberOfQuestion}
            </span>
            <span className='right' style={{float: "right"}}>
              <LuClock /> {state.time.minutes}:{state.time.seconds}
            </span>
          </p>
        </div>
        <h5>{state.currentQuestion.question}</h5>
        <div className='options-container'>
          <p onClick={handleOptionClick} className='option'>{state.currentQuestion.optionA}</p>
          <p onClick={handleOptionClick} className='option'>{state.currentQuestion.optionB}</p>
        </div>
        <div className='options-container'>
          <p onClick={handleOptionClick} className='option'>{state.currentQuestion.optionC}</p>
          <p onClick={handleOptionClick} className='option'>{state.currentQuestion.optionD}</p>
        </div>
      </div>
      <div className='button-container'>
        <button
          id="previous-button"
          onClick={handleButtonClick}
          className={state.previousButtonDisabled ? 'disabled' : ''}
        >
          Previous
        </button>
        <button
          id="next-button"
          onClick={handleButtonClick}
          className={state.previousButtonDisabled ? 'disabled' : ''}
        >
          Next
        </button>
        <button id="quit-button" onClick={handleButtonClick} className='finish'>Finish</button>
      </div>
    </React.Fragment>
  );
}

export default Testpage1;
