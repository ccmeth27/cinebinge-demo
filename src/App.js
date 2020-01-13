import React from 'react';
import logo from './cinebinge-logo.png';
import './App.css';
import SubscriptionSelect from './SubscriptionSelect'
import HomeSwipe from './HomeSwipe'
import Watchlist from './Watchlist'
import Search from './Search'

class App extends React.Component{

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="logo" alt="logo" />
          <h1>Cinebinge Demo</h1>
          <h3>App built by Connor Meth</h3>
        </header>
        <div className="demo-container">
          <SubscriptionSelect />
          <HomeSwipe />
          <Watchlist />
          <Search />
        </div>
      </div>
    )
  }
}

export default App;
