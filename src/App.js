import React from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProjectsComponent from './components/ProjectsComponent';
import OtherProjectsComponent from './components/OtherProjectsComponent';
import AboutComponent from './components/AboutComponent';
import VortexMainPageComponent from './components/VortexProjectComponent';
import VortexDocsComponent from './components/VortexDocsComponent';
import MwarridProjectComponent from './projects/MwarridProjectComponent';

class App extends React.Component {

  render() {
      return (
          <>
          <Router>
            <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route path="/projects" component={ProjectsComponent} />
                <Route path="/other" component={OtherProjectsComponent} />
                <Route path="/about" component={AboutComponent} />
                <Route path="/services" component={HomeComponent} />
                <Route path="/vortex" component={VortexMainPageComponent} />
                <Route path="/vortex-docs" component={VortexDocsComponent} />
                <Route path="/mwarrid" component={MwarridProjectComponent} />
            </Switch>
          </Router>
          </>
      );
  }
}

export default App;
