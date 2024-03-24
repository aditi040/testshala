import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import TestInstructions from './components/test/TestInstructions';

function App() {
    return (
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/instructions" exact component ={TestInstructions} />
        </Router>
    );
}

export default App;