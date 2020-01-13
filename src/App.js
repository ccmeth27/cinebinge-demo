import React from 'react';
import logo from './cinebinge-logo.png';
import './App.css';
import SubscriptionSelect from './SubscriptionSelect'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <h1>Cinebinge Demo</h1>
      </header>
      <div className="demo-container">
        <SubscriptionSelect/>

      </div>
    </div>
  );
}

export default App;
