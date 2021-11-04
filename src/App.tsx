import React from 'react';
import './App.scss';
import {HashRouter, Route, Switch} from "react-router-dom";
import HomePageComponent from "./components/HomePageComponent";
import NotFoundPageViewComponent from "./components/NotFoundPageViewComponent";
import ProjectsPageComponent from "./components/ProjectsPageComponent";
import SkillsPageComponent from "./components/SkillsPageComponent";
import ArchivePageComponent from "./components/ArchivePageComponent";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={HomePageComponent}/>
                    <Route exact path="/projects" component={ProjectsPageComponent}/>
                    <Route exact path="/skills" component={SkillsPageComponent}/>
                    <Route exact path="/archive" component={ArchivePageComponent}/>
                    <Route path='*' exact={true} component={NotFoundPageViewComponent}/>
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;
