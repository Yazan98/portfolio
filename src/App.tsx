import React from 'react';
import './App.scss';
import {HashRouter, Route, Switch} from "react-router-dom";
import ProjectsPageComponent from "./pages/ProjectsPageComponent";
import  {NotFoundPageViewComponent} from "./pages/NotFoundPageComponent";
import AboutPageComponent from "./pages/AboutPageComponent";
import {SkillsViewComponent} from "./components/SkillsComponent";
import ResumePageComponent from "./pages/ResumePageComponent";
import {ArchiveProjectsView} from "./pages/ArchiveProjectsPage";
import {AppPageViewComponent} from "./pages/AppPageComponent";
import {AllProjectsViewComponent} from "./pages/AllProjectsPageComponent";
import HomePageComponent from "./pages/HomePageComponent";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={HomePageComponent}/>
                    <Route exact path="/projects" component={ProjectsPageComponent}/>
                    <Route exact path="/skills" component={SkillsViewComponent}/>
                    <Route exact path="/resume" component={ResumePageComponent}/>
                    <Route exact path="/app/:id" component={AppPageViewComponent}/>
                    <Route exact path="/archive" component={ArchiveProjectsView}/>
                    <Route exact path="/about" component={AboutPageComponent}/>
                    <Route exact path="/projects/all" component={AllProjectsViewComponent}/>
                    <Route path='*' exact={true} component={NotFoundPageViewComponent}/>
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;
