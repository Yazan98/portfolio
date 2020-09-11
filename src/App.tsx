import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePageComponent from "./components/pages/HomePageComponent";
import ProjectsPageComponent from "./components/pages/ProjectsPageComponent";
import ArchivePageComponent from "./components/pages/ArchiveProjectsPage";
import ResumePageComponent from "./components/pages/ResumePageComponent";
import ProjectPageComponent from "./components/pages/ProjectPageComponent";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePageComponent}/>
                    <Route exact path="/projects" component={ProjectsPageComponent}/>
                    <Route exact path="/projects/archive" component={ArchivePageComponent}/>
                    <Route exact path="/resume" component={ResumePageComponent}/>
                    <Route exact path="/project/:name" component={ProjectPageComponent}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
