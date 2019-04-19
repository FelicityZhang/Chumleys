import React, { Component } from 'react';
import Header from './Components/Header'
import ChefBlock from './Components/ChefBlock'
import ContactPage from './Components/ContactPage'
import './App.css';
import OurStory from './Components/OurStory'
import HemQuote from './Components/HemQuote'
import ScottQuote from './Components/ScottQuote'
import JackQuote from './Components/JackQuote'
import Location from './Components/Location'
import Footer from './Components/Footer'
import EmptyQuote from './Components/EmptyQuote'


import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ChefBlock />
        <HemQuote />
        <OurStory />
        <ScottQuote />
        <Location />
        <JackQuote />
        <ContactPage />
        <EmptyQuote />
        <Footer />



      </div>
    );
  }
}

export default App;
