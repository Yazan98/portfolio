import React from 'react';
import './App.scss';
import {HashRouter, Route, Switch} from "react-router-dom";
import ProjectsPageComponent from "./pages/ProjectsPageComponent";
import  {NotFoundPageViewComponent} from "./pages/NotFoundPageComponent";
import {SkillsViewComponent} from "./components/SkillsComponent";
import {ArchiveProjectsView} from "./pages/ArchiveProjectsPage";
import {AllProjectsViewComponent} from "./pages/AllProjectsPageComponent";
import HomePageComponent from "./pages/HomePageComponent";
import {ResumePageViewComponent} from "./pages/ResumePageComponent";
import {ToolbarDrawerViewComponent} from "./components/ToolbarDrawerComponent";
import {ProjectViewPage} from "./pages/ProjectPage";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={HomePageComponent}/>
                    <Route exact path="/drawer" component={ToolbarDrawerViewComponent}/>
                    <Route exact path="/projects" component={ProjectsPageComponent}/>
                    <Route exact path="/skills" component={SkillsViewComponent}/>
                    <Route exact path="/resume" component={ResumePageViewComponent}/>
                    <Route exact path="/app/:id" component={ProjectViewPage}/>
                    <Route exact path="/archive" component={ArchiveProjectsView}/>
                    <Route exact path="/projects/all" component={AllProjectsViewComponent}/>
                    <Route path='*' exact={true} component={NotFoundPageViewComponent}/>
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;
