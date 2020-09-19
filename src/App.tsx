import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePageComponent from "./components/pages/HomePageComponent";
import ProjectsPageComponent from "./components/pages/ProjectsPageComponent";
import ArchivePageComponent from "./components/pages/ArchiveProjectsPage";
import ResumePageComponent from "./components/pages/ResumePageComponent";
import ProjectPageComponent from "./components/pages/ProjectPageComponent";
import AboutMePageComponent from "./components/pages/AboutMePageComponent";
import DenamoPageComponent from "./components/pages/DenamoPageCompoenent";

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
                    <Route exact path="/about" component={AboutMePageComponent}/>
                    <Route exact path="/tools/denamo" component={DenamoPageComponent}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
