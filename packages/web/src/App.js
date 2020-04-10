import React from 'react';
import logo from './logo.svg';
import './App.css';
import { display } from '@mypackage/common';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          { display("Yes!! this is success!") }
        </p>
      </header>
    </div>
  );
}

export default App;
