import React from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {

  render() {
      return (
          <div className="App">
              <Router>
                <Switch>
                  <Route path="">
                    <HomeComponent />
                  </Route>
                  <Route path="/">
                    <HomeComponent />
                  </Route>
                  <Route path="/about">
                    <HomeComponent />
                  </Route>
                  <Route path="/projects">
                    <HomeComponent />
                  </Route>
                  <Route path="/services">
                    <HomeComponent />
                  </Route>
                </Switch>
              </Router>
          </div>
      );
  }
}

export default App;