import React from 'react';
import logo from './logo.svg';
import './App.css';
import BlueLineComponent from "./components/common/BlueLineComponent";
import ToolbarComponent from "./components/common/ToolbarComponent";

function App() {
  return (
    <div className="App">
      <BlueLineComponent />
      <ToolbarComponent />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
