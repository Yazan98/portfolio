import React from 'react';
import './App.css';
import ToolbarComponent from './components/ToolbarComponent';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FooterComponent from './components/FooterComponent';
import HomeComponent from './components/HomeComponent';
import MainPageComponent from './components/pages/MainPageComponent';

function App() {
  return (
    <Router>
      <div className="AppContainer">
        <ToolbarComponent />
        <Switch>
          <Route path="">
            <MainPageComponent />
          </Route>
          <Route path="/projects">
            {/* <ProjectsComponent /> */}
          </Route>
          <Route path="/about">
            {/* <AboutCompoenent /> */}
          </Route>
        </Switch>
        <FooterComponent />
    </div>
    </Router>
  );
}

export default App;
