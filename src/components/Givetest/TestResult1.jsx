// TestResult.js
import React from "react";
import { Link } from "react-router-dom";
import "./TestResult.css";

function TestResult1(props) {
    const { score, numberOfQuestions, correctAnswers, wrongAnswers } = props;

    return (
        <div className="test-result">
            <h1>Test Result</h1>
            <p className="score">Score: {score}%</p>
            <p>Total Number of Questions: {numberOfQuestions}</p>
            <p>Correct Answers: {correctAnswers}</p>
            <p>Wrong Answers: {wrongAnswers}</p>
            <div className="link">
                <Link to="/">Home </Link>
            <Link to="/testinstructions">Test Again </Link>
            </div>
        </div>
    );
}

export default TestResult1;
