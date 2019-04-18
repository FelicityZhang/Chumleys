import React, { Component } from 'react';
import Header from './Components/Header'
import './App.css';
import Contact from './Contact'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Contact />
      </div>
    );
  }
}

export default App;
