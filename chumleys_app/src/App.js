import React, { Component } from 'react';
import Header from './Components/Header'
import ChefBlock from './Components/ChefBlock'
import ContactPage from './Components/ContactPage'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ChefBlock />
        <ContactPage />

      </div>
    );
  }
}

export default App;
