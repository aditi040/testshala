import { Component, React } from "react";

class TestResult extends Component {
    constructor (props) {
        super(props);
        this.state={
            score: 0,
            numberOfQuestion: 0,
            numberOfAnsweredQuestion: 0,
            correctAnswer: 0,
            wrongAnswer: 0
        };
    }
    componentDidMount () {
        const {state} = this.props;
        this.setState({
            score: (state.score / state.numberOfQuestion) *100,
            numberOfQuestion: state.numberOfQuestion,
            numberOfAnsweredQuestion: state.numberOfAnsweredQuestion,
            correctAnswer: state.correctAnswer,
            wrongAnswer: state.wrongAnswer
        });
        
    }

    render(){
        const{ state }= this.props.location;
        let stats,remark;
        const userScore = this.state.score;
        if(userScore<= 30){
            remark = 'You need to practice more!!';
        }else if(userScore>=30 && userScore<=50){
            remark = 'Better luck next time';
        }else if(userScore<=70 && userScore>50){
            remark='You can do better';
        }else if(userScore>=71 && userScore <=84){
            remark='You did greate!';
        }else{
            remark = 'You are an absolute genius!';
        }
        
        if(state!==undefined){
            stats= (
                <Fragment>
                
                <div>
                    <span className="mdi mdi-check-circle-outline success-icon"></span>
                </div>
                <h1> Test has ended</h1>
                <div className="container">
                    <h4>{remark}</h4>
                    <h2>Your score: {this.state.score.toFixed(0)}&#37;</h2>
                    <span className="stat left">Total number of questions:</span>
                    <span className="right">{this.state.numberOfQuestion}</span><br />
    
                    <span className="stat left">Number of attempted questions:</span>
                    <span className="right">{this.state.numberOfAnsweredQuestion}</span><br />
    
                    <span className="stat left">Number of Correct Answers:</span>
                    <span className="right">{this.state.correctAnswer}</span><br />
    
                    <span className="stat left">Number of Wrong Answers:</span>
                    <span className="right">{this.state.wrongAnswer}</span><br />
    
                </div>
                <section>
                    <ul>
                       <li>
                          <Link to ="/">Back to Home</Link>
                        </li>
                        <li>
                          <Link to ="/testpage">Test again</Link>
                        </li>
                    </ul>
                </section>
                </Fragment>
    
            );
    
        }else{
            stats=(
                <section>
                <h1 className="no-stats">No statistics Available</h1>
                <ul>
                     <li>
                          <Link to ="/">Back to Home</Link>
                        </li>
                        <li>
                          <Link to ="/testpage">Take a Test</Link>
                        </li>
                    </ul>
                </section>
            );
        }
        return (
            <Fragment>
               <Helmet><title>Test Result</title></Helmet>
               {stats}
            </Fragment>
        );
    
    }

    
    // const {state} = this.props;
    // let stats;
    // if(state !==undefined){
    //     stats = (<h1>Stats is available</h1>);
    // }  else{
    //     stats = (<h1>No stats available please take a quiz</h1>);
    // }
    // return(
    //     <Fragment>
    //         <Helmet>
    //             <title>Test Summary</title>
    //         </Helmet>
    //     </Fragment>
    // );
    // }

    // export default TestResult;

// import React, { Fragment, useContext } from "react";
// import { Helmet } from 'react-helmet';
// import { Link } from "react-router-dom";

// // Create a context to hold the state
// const TestResultContext = React.createContext();

// // Create a provider component to provide the state
// const TestResultProvider = ({ state, children }) => (
//   <TestResultContext.Provider value={state}>{children}</TestResultContext.Provider>
// );

// // Define the TestResult component
// const TestResult = () => {
//   const state = useContext(TestResultContext);

//   // Your existing logic goes here
//   let stats, remark;
//   const userScore = (state.score / state.numberOfQuestion) * 100;

//   // Determine remark based on user score
//   if (userScore <= 30) {
//     remark = 'You need to practice more!!';
//   } else if (userScore >= 30 && userScore <= 50) {
//     remark = 'Better luck next time';
//   } else if (userScore <= 70 && userScore > 50) {
//     remark = 'You can do better';
//   } else if (userScore >= 71 && userScore <= 84) {
//     remark = 'You did great!';
//   } else {
//     remark = 'You are an absolute genius!';
//   }

//   // Render stats based on state availability
//   if (state!= undefined) {
//     stats = (
//       <Fragment>
//         <div>
//           <span className="mdi mdi-check-circle-outline success-icon"></span>
//         </div>
//         <h1> Test has ended</h1>
//         <div className="container">
//           <h4>{remark}</h4>
//           <h2>Your score: {userScore.toFixed(0)}%</h2>
//           <span className="stat left">Total number of questions:</span>
//           <span className="right">{state.numberOfQuestion}</span><br />

//           <span className="stat left">Number of attempted questions:</span>
//           <span className="right">{state.numberOfAnsweredQuestion}</span><br />

//           <span className="stat left">Number of Correct Answers:</span>
//           <span className="right">{state.correctAnswer}</span><br />

//           <span className="stat left">Number of Wrong Answers:</span>
//           <span className="right">{state.wrongAnswer}</span><br />

//         </div>
//         <section>
//           <ul>
//             <li>
//               <Link to="/">Back to Home</Link>
//             </li>
//             <li>
//               <Link to="/testpage">Test again</Link>
//             </li>
//           </ul>
//         </section>
//       </Fragment>
//     );
//   } else {
//     stats = (
//       <section>
//         <h1 className="no-stats">No statistics Available</h1>
//         <ul>
//           <li>
//             <Link to="/">Back to Home</Link>
//           </li>
//           <li>
//             <Link to="/testpage">Take a Test</Link>
//           </li>
//         </ul>
//       </section>
//     );
//   }

//   return (
//     <Fragment>
//       <Helmet><title>Test Result</title></Helmet>
//       {stats}
//     </Fragment>
//   );
// };

// export { TestResult, TestResultProvider };

