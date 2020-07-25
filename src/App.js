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
import FooterComponent from './common/FooterComponent';
import AppBarComponent from './common/AppBarComponent';
import AppPageComponent from './components/AppPageComponent';

class App extends React.Component {

  render() {
      return (
          <>
          <Router>
          <AppBarComponent />
            <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route path="/projects" component={ProjectsComponent} />
                <Route path="/other" component={OtherProjectsComponent} />
                <Route path="/about" component={AboutComponent} />
                <Route path="/services" component={HomeComponent} />
                <Route path="/vortex" component={VortexMainPageComponent} />
                <Route path="/vortex-docs" component={VortexDocsComponent} />
                <Route path="/app/details" component={AppPageComponent} render={(props) => <AppPageComponent text="Hello, " {...props} />} />
            </Switch>
          </Router>
          <FooterComponent />
          </>
      );
  }
}

export default App;
