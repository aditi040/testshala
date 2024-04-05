import M from 'materialize-css';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { LuClock } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import isEmpty from '../../utils/is-empty';
import "./Testpage.css";
import buttonNotification from './mouse-click.mp3';
import question from './questions.json';
class Testpage extends React.Component {
constructor(props){
  super(props);
  this.state = {
  question,
  currentQuestion:{},
  nextQuestion:{},
  previousQuestion:{},
  answer:'',
  numberOfQuestion:0,
  numberOfAnsweredQuestion:0,
  currentQuestionIndex:0,
  score:0,
  correctAnswer:0,
  wrongAnswer:0,
  nextButtonDisabled:false,
  previousButtonDisabled: true,
  time:{}
  };
 this.interval = null
}

componentDidMount(){
  const { question, currentQuestion,nextQuestion,previousQuestion }=this.state;
  this.displayQuestions(question, currentQuestion,nextQuestion,previousQuestion);
  this.startTimer();
}
displayQuestions= (question = this.state.questions, currentQuestion,nextQuestion,previousQuestion) => {
  let{currentQuestionIndex}=this.state;
  if(!isEmpty(this.state.question)){
question=this.state.question;
currentQuestion=question[currentQuestionIndex];
nextQuestion=question[currentQuestionIndex + 1];
previousQuestion = question [currentQuestionIndex - 1];
const answer = currentQuestion.answer;
const score=(this.state.score / this.state.numberOfQuestion) *100;
this.setState({
  currentQuestion: currentQuestion,
  nextQuestion: nextQuestion,
  previousQuestion: previousQuestion,
  numberOfQuestion:question.length,
  answer: answer
}, ()=> {
  this.handleDisableButton();
});
}
};

handleOptionClick = (e) =>{
if(e.target.innerHTML.toLowerCase() ===this.state.answer.toLowerCase()) {
  setTimeout(() => {
    document.getElementById('button-sound').play();
  },200);
 
  this.correctAnswer();
} else{
  setTimeout(() => {
    document.getElementById('button-sound').play();
  },200);
  this.wrongAnswer();
}
// alert ('clicked');
}

handleNextButtonClick =()=>{
  this.playButtonSound();
  if(this.state.nextQuestion!== undefined){
    this.setState(prevState => ({
      currentQuestionIndex: prevState.currentQuestionIndex +1
    }), () => {
      this.displayQuestions(this.state.state,this.state.currentQuestion,this.state.nextQuestion,this.state.previousQuestion)
    });

  }
}

handlePreviousButtonClick =()=>{
  this.playButtonSound();
  if(this.state.previousQuestion!== undefined){
    this.setState(prevState => ({
      currentQuestionIndex: prevState.currentQuestionIndex - 1
    }), () => {
      this.displayQuestions(this.state.state,this.state.currentQuestion,this.state.nextQuestion,this.state.previousQuestion)
    });
}
}

handleQuitButtonClick = () => {
  this.playButtonSound();
  if(window.confirm('Are you sure you want to finish the test?')) {
this.props.navigate('/testpage/result')
  }
}


handleButtonClick = (e) => {
  switch (e.target.id) {
    case 'next-button':
      this.handleNextButtonClick();
      break;
      case 'previous-button':
        this.handlePreviousButtonClick();
        break;
        case 'quit-button':
          this.handleQuitButtonClick();
          break;
    default:
      break;
  }
  this.playButtonSound();
};

playButtonSound = () => {
  document.getElementById('button-sound').play();
}
correctAnswer = () => {
  M.toast({
    html:'Correct Answer!',
    classes: 'toast-valid',
    displayLength:1500
  });
  this.setState(prevState => ({
    score: prevState.score +1,
    correctAnswer: prevState.correctAnswer +1,
    currentQuestionIndex: prevState.currentQuestionIndex +1,
    numberOfAnsweredQuestion:prevState.numberOfAnsweredQuestion +1
  }), () => {
    if(this.state.nextQuestion === undefined){
      this.endTest();
    } else{
      this.displayQuestions(this.state.questions,this.state.currentQuestion,this.state.nextQuestion);
    }
  }
  );
}
wrongAnswer = () => {
  navigator.vibrate(1000)
  M.toast({
    html:'Wrong Answer!',
    classes: 'toast-invalid',
    displayLength:1500
  });
  this.setState(prevState => ({
    wrongAnswer: prevState.wrongAnswer +1,
    currentQuestionIndex:prevState.currentQuestionIndex+1,
    numberOfAnsweredQuestion: prevState.numberOfAnsweredQuestion +1
  }), () => {
    if(this.state.nextQuestion === undefined){
      this.endTest();
    } else{
      this.displayQuestions(this.state.questions,this.state.currentQuestion,this.state.nextQuestion);
    }
    
  }
  );
}
startTimer = () => {
  const countDownTime = Date.now() + 30000; // 30 seconds for example
  this.interval = setInterval(() => {
    const now = new Date();
    const distance = countDownTime - now;

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (distance < 0) {
      clearInterval(this.interval);
      this.setState({
        time: {
          minutes: 0,
          seconds: 0
        }
      }, () => {
        this.endTest();
      });
    } else {
      this.setState({
        time: {
          minutes,
          seconds
        }
      });
    }
  }, 1000);
}
  
  handleDisableButton =() =>{
    if(this.state.previousQuestion === undefined || this.state.currentQuestionIndex === 0){
      this.setState({
        previousButtonDisabled:true
      });
    } else{
      this.setState({
        previousButtonDisabled:false
      });
    }

    if(this.state.nextQuestion === undefined || this.state.currentQuestionIndex + 1 === this.state.numberOfQuestion){
      this.setState({
        nextButtonDisabled:true
      });
    } else{
      this.setState({
        nextButtonDisabled:false
      });
    }
  }

  endTest = () => {
      alert('Test has ended!');
      const {state} = this;
      const playerStats ={
        score:state.score,
        numberOfQuestion:state.numberOfQuestion,
        numberOfAnsweredQuestion:state.numberOfAnsweredQuestion,
        correctAnswer:state.correctAnswer,
        wrongAnswer:state.wrongAnswer,
      };
      console.log(playerStats);
      setTimeout(() =>{
        this.props.navigate('/testpage/result',{playerStats})
        // return(<TestResult playerStats={playerStats}/>)
      },1000);
  }
  render (){
    // console.log(question);
    const{
      currentQuestion,
      currentQuestionIndex,
      numberOfQuestion,
      time}=this.state;

    return(
    <Fragment>
        <Helmet><title>Test Page</title></Helmet>
        <Fragment><audio id="button-sound" src={buttonNotification}></audio></Fragment>
        <div className='questions'>
        <h2>PRACTICE TEST</h2>
        <div className ="lifeline-container">
          <p>
            <span className='left' style={{float: "left"}}>{currentQuestionIndex +1} of {numberOfQuestion}</span>
            <span className='right' style={{float: "right"}}> <LuClock /> {time.minutes}:{time.seconds}  </span>
          </p>
        </div>
            <h5>{currentQuestion.question}</h5>
            <div className='options-container'>
                <p onClick={this.handleOptionClick}  className='option'>{currentQuestion.optionA}</p>
                <p onClick={this.handleOptionClick}  className='option'>{currentQuestion.optionB}</p>
                </div>
                <div className='options-container'>
                <p onClick={this.handleOptionClick}  className='option'>{currentQuestion.optionC}</p>
                <p onClick={this.handleOptionClick} className='option'>{currentQuestion.optionD}</p>
            </div>
            </div>
            {/* <h5>The temperature, at which the root mean square
velocity of hydrogen molecules equals their escape
velocity from the earth, is closest to :
[Boltzmann Constant kB = 1.38 × 10–23 J/K
Avogadro Number NA = 6.02 × 1026 /kg
Radius of Earth : 6.4 × 106 m
Gravitational acceleration on Earth = 10ms–2]</h5>
            <div className='options-container'>
                <p  className='option'>650 K</p>
                <p  className='option'>3 × 105 K</p>
                </div>
                <div className='options-container'>
                <p className='option'>104 K</p>
                <p className='option'>800 K</p>
            </div> */}
           <div className='button-container'>
            <button
            id="previous-button"
            onClick={this.handleButtonClick}
            className= {this.state.previousButtonDisabled ? 'disabled' : ''}>
            Previous
            </button>
            <button
            id="next-button"
            onClick={this.handleButtonClick}
            className={this.state.previousButtonDisabled ? 'disabled' : ''}>
            Next</button>
            <button id="quit-button" onClick={this.handleButtonClick} className='finish'>Finish</button>
           </div>
       
    </Fragment>
    );
  }
}

export function APPWithRouter(props){
  const navigate =useNavigate()
  return (<Testpage navigate={navigate}></Testpage>)
}

export default Testpage;
