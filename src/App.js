import logo from './logo.svg';
import './App.css';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Headerjuan from "./components/header/index.js";
import Footerjuan from "./components/footer/index.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Headerjuan/>
        
        <Footerjuan></Footerjuan>
      </header>
    </div>
  );
}

export default App;
