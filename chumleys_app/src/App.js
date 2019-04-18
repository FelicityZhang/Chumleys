import React, { Component } from 'react';
import Header from './Components/Header'
import ChefBlock from './Components/ChefBlock'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ChefBlock />


      </div>
    );
  }
}

export default App;
