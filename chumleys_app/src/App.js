import React, { Component } from 'react';
import Header from './Components/Header'
import './App.css';
import Location from './Components/Location'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Location />
      </div>
    );
  }
}

export default App;
