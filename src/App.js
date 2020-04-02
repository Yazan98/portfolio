import React from 'react';
import './App.css';
import ToolbarComponent from './components/ToolbarComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <Router>
      <div className="AppContainer">
        <ToolbarComponent />
        <Switch>
          <Route path="/home">

          </Route>
          <Route path="/projects">
            
          </Route>
          <Route path="/about">
            
          </Route>
        </Switch>
        <FooterComponent />
    </div>
    </Router>
  );
}

export default App;
