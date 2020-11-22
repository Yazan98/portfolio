import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePageComponent from "./pages/HomePageComponent";
import ProjectsPageComponent from "./pages/ProjectsPageComponent";
import NotFoundPageComponent from "./pages/NotFoundPageComponent";
import AboutPageComponent from "./pages/AboutPageComponent";
import ShillsPageComponent from "./components/SkillsComponent";
import ResumePageComponent from "./pages/ResumePageComponent";
import ArchiveProjectsPage from "./pages/ArchiveProjectsPage";
import AppPageComponent from "./pages/AppPageComponent";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePageComponent}/>
                    <Route exact path="/projects" component={ProjectsPageComponent}/>
                    <Route exact path="/skills" component={ShillsPageComponent}/>
                    <Route exact path="/resume" component={ResumePageComponent}/>
                    <Route exact path="/app/:id" component={AppPageComponent}/>
                    <Route exact path="/archive" component={ArchiveProjectsPage}/>
                    <Route exact path="/about" component={AboutPageComponent}/>
                    <Route path='*' exact={true} component={NotFoundPageComponent} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
