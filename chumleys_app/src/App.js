import React, { Component } from 'react';
import './App.css';
import Menu from './Components/Menu/Menu.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu />
        </header>
      </div>
    );
  }
}

export default App;
