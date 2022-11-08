import React from 'react';
import './App.scss';
import {HashRouter, Route, Switch} from "react-router-dom";
import HomePageComponent from "./components/HomePageComponent";
import NotFoundPageViewComponent from "./components/NotFoundPageViewComponent";
import ProjectsPageComponent from "./components/ProjectsPageComponent";
import SkillsPageComponent from "./components/SkillsPageComponent";
import ArchivePageComponent from "./components/ArchivePageComponent";
import AllProjectsPageComponent from './components/AllProjectsPageComponent';
import MobilePagesNavigationComponent from "./components/MobilePagesNavigationComponent";
import ProjectViewPageComponent from "./components/ProjectViewPageComponent";
import ReactGA from 'react-ga';

const GOOGLE_ANALYTICS_TRACKING_ID = "UA-239882909-2"
ReactGA.initialize(GOOGLE_ANALYTICS_TRACKING_ID)

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={HomePageComponent}/>
                    <Route exact path="/projects" component={ProjectsPageComponent}/>
                    <Route exact path="/skills" component={SkillsPageComponent}/>
                    <Route exact path="/archive" component={ArchivePageComponent} />
                    <Route exact path="/projects/all" component={AllProjectsPageComponent} />
                    <Route exact path="/projects/:projectName" component={ProjectViewPageComponent} />
                    <Route exact path="/nav" component={MobilePagesNavigationComponent} />
                    <Route exact path="/projects/nav" component={MobilePagesNavigationComponent} />
                    <Route path='*' exact={true} component={NotFoundPageViewComponent}/>
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;
