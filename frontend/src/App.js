import React, {Component} from 'react';
import'./App.css';

import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import Card from "./Component/Card/index.js";

class App extends Component {
    render() {
        return(
        <Router>
            <Route path="/" exact component={Card} />
        </Router>
        );
    }
}

export default App;
