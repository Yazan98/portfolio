import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePageComponent from "./pages/HomePageComponent";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePageComponent}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
