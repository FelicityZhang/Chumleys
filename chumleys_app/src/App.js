import React, { Component } from 'react';

import Menu from './Components/Menu/Menu.js'
import Header from './Components/Header'
import ChefBlock from './Components/ChefBlock'
import ContactPage from './Components/ContactPage'
import './App.css';
import OurStory from './Components/OurStory'
import HemQuote from './Components/HemQuote'
import ScottQuote from './Components/ScottQuote'
import JackQuote from './Components/JackQuote'
import Location from './Components/Location'
import HamburgerMenu from './Components/HamburgerMenu'
import Footer from './Components/Footer'
import EmptyQuote from './Components/EmptyQuote'
import Parallax from './Components/parallax.js'


import './App.css';
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      menuActive: false
    }
    this.openMenu = this.openMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  openMenu() {
    this.setState({
      menuActive: !this.state.menuActive
    })
  }

  closeMenu() {
    this.setState({
      menuActive: !this.state.menuActive
    })
  }

  render() {
    return (
      <div className="App">


        <div className={this.state.menuActive ? 'hamburger-menu-on' : 'hamburger-menu-off'}>
          <HamburgerMenu closeMenu={this.closeMenu} />
        </div>
        <Header openMenu={this.openMenu} />
        <Menu />
        <Parallax />
        <ChefBlock />
        <HemQuote />
        <OurStory />
        <ScottQuote />
        <Location />
        <JackQuote />
        <ContactPage />
        <Footer />






      </div>
    )
  }
}

export default App;
