import React, { Component } from 'react';
import Header from './Components/Header'
import ChefBlock from './Components/ChefBlock'
import OurStory from './Components/OurStory'
import HemQuote from './Components/HemQuote'
import Location from './Components/Location'

import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ChefBlock />
        <HemQuote />
        <OurStory />
        <Location />


      </div>
    );
  }
}

export default App;
