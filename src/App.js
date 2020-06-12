import React from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProjectsComponent from './components/ProjectsComponent';

class App extends React.Component {

  render() {
      return (
          <>
          <Router>
            <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route path="/projects" component={ProjectsComponent} />
                <Route path="/about" component={HomeComponent} />
                <Route path="/services" component={HomeComponent} />
            </Switch>
          </Router>
          </>
      );
  }
}

export default App;