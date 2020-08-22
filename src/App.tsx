import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePageComponent from "./components/pages/HomePageComponent";
import ProjectsPageComponent from "./components/pages/ProjectsPageComponent";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePageComponent}/>
                    <Route exact path="/projects" component={ProjectsPageComponent}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
