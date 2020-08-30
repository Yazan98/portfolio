import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePageComponent from "./components/pages/HomePageComponent";
import ProjectsPageComponent from "./components/pages/ProjectsPageComponent";
import ArchivePageComponent from "./components/pages/ArchiveProjectsPage";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePageComponent}/>
                    <Route exact path="/projects" component={ProjectsPageComponent}/>
                    <Route exact path="/projects/archive" component={ArchivePageComponent}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
