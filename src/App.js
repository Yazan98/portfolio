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
import MwarridProjectComponent from './projects/MwarridProjectComponent';
import AutohubComponent from './projects/AutohubComponent';

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
                <Route path="/mwarrid" component={MwarridProjectComponent} />
                <Route path="/autohub" component={AutohubComponent} />
            </Switch>
          </Router>
          </>
      );
  }
}

export default App;
