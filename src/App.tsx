import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Count} from "./Components/Count";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Counter Using React & Mobx(State Management)
        </p>
        <Count/>
      </header>
    </div>
  );
}

export default App;
