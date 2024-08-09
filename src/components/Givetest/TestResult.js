// import React, { Component, Fragment } from "react";
// import { Helmet } from "react-helmet";
// import { Link } from "react-router-dom";

// class TestResult extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             score: 0,
//             numberOfQuestion: 0,
//             numberOfAnsweredQuestion: 0,
//             correctAnswer: 0,
//             wrongAnswer: 0,
//         };
//     }

//     componentDidMount() {
//         console.log("Props>>> ", this.props)
//         // const { playerStats } = this.state;
//         // console.log("Location>> ", location)
//         console.log("State >>> ", this.state)
//         this.setState({
//                 score: (this.props.score / this.props.numberOfQuestion) * 100,
//                 numberOfQuestion: this.props.numberOfQuestion,
//                 numberOfAnsweredQuestion: this.props.numberOfAnsweredQuestion,
//                 correctAnswer: this.props.correctAnswer,
//                 wrongAnswer: this.props.wrongAnswer
//         })
//         // const { location } = this.props;
//         // if (location.state && location.state.playerStats) {
//         //     const { playerStats } = location.state;
//         //     this.setState({
//         //         score: (playerStats.score / playerStats.numberOfQuestion) * 100,
//         //         numberOfQuestion: playerStats.numberOfQuestion,
//         //         numberOfAnsweredQuestion: playerStats.numberOfAnsweredQuestion,
//         //         correctAnswer: playerStats.correctAnswer,
//         //         wrongAnswer: playerStats.wrongAnswer
//         //     });
//         // }
//     }

//     render() {
//         // const { location } = this.props;
//         // const { state } = location;
//         const state = this.state
//         let stats, remark;
//         const userScore = this.state.score;
//         if (userScore <= 30) {
//             remark = 'You need to practice more!!';
//         } else if (userScore >= 30 && userScore <= 50) {
//             remark = 'Better luck next time';
//         } else if (userScore <= 70 && userScore > 50) {
//             remark = 'You can do better';
//         } else if (userScore >= 71 && userScore <= 84) {
//             remark = 'You did great!';
//         } else {
//             remark = 'You are an absolute genius!';
//         }

//         if (state !== undefined) {
//             stats = (
//                 <Fragment>
//                     <div>
//                         <span className="mdi mdi-check-circle-outline success-icon"></span>
//                     </div>
//                     <h1>Test has ended</h1>
//                     <div className="container">
//                         <h4>{remark}</h4>
//                         <h2>Your score: {this.state.score.toFixed(0)}&#37;</h2>
//                         <span className="stat left">Total number of questions:</span>
//                         <span className="right">{this.state.numberOfQuestion}</span><br />

//                         <span className="stat left">Number of attempted questions:</span>
//                         <span className="right">{this.state.numberOfAnsweredQuestion}</span><br />

//                         <span className="stat left">Number of Correct Answers:</span>
//                         <span className="right">{this.state.correctAnswer}</span><br />

//                         <span className="stat left">Number of Wrong Answers:</span>
//                         <span className="right">{this.state.wrongAnswer}</span><br />
//                     </div>
//                     <section>
//                         <ul>
//                             <li>
//                                 <Link to="/">Back to Home</Link>
//                             </li>
//                             <li>
//                                 <Link to="/testintructions">Test again</Link>
//                             </li>
//                         </ul>
//                     </section>
//                 </Fragment>
//             );

//         } else {
//             stats = (
//                 <section>
//                     <h1 className="no-stats">No statistics Available</h1>
//                     <ul>
//                         <li>
//                             <Link to="/">Back to Home</Link>
//                         </li>
//                         <li>
//                             <Link to="/testpage">Take a Test</Link>
//                         </li>
//                     </ul>
//                 </section>
//             );
//         }
//         return (
//             <Fragment>
//                 <Helmet><title>Test Result</title></Helmet>
//                 {stats}
//             </Fragment>
//         );
//     }
// }

// export default TestResult;
