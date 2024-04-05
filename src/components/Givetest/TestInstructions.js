import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./Test-instructions.css";

const TestInstructions=() => (
    <Fragment>
        <Helmet><title>Test Instructions</title></Helmet>
        <div className="instructions container">
            
            <ul className="browser-default" id="main-list">
            <h1>How to take the Test?</h1>
            <p>Ensure You read all the instructions from start to finish.</p>
                <li>The Test has a duration of 15 minutes and ends as soon as your time elapses.</li>
                <li>Each test consists of 15 questions.</li>
                <li>
                    Every question consists 4 options.
                   <img src="test.png" alt="Test App options example"/>
                </li>
                <li>
                    Select the option which best answers the question by clicking (or selecting) it.
                    <img src="answer.png" alt="Test app answer example"/>
                </li>

                <li>Feel free to quit (or retire from) the test at any time. in that case your score will be revealed afterwords.
                </li>
                <li> The timer starts as soon as the test loads.
                </li>
                <li>After reading all the points its time to give the test.If you are ready click on 'Start test' to test yuorself.
                </li>
                <div className="link">
                <Link to="/">Go Back </Link>
            <Link to="/testpage">Start Test </Link>
            </div>
            </ul>
            
        </div>
    </Fragment>
);

export default TestInstructions;