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
import HamburgerMenu from './Components/HamburgerMenu'

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
        <div className={this.state.menuActive ? 'empty' : 'active'}>
          <Header openMenu={this.openMenu} />
          <ChefBlock />
          {/* <HemQuote /> */}
          {/* <OurStory /> */}
          {/* <ScottQuote /> */}
          {/* <Location /> */}
          {/* <JackQuote /> */}
          {/* <ContactPage /> */}

        </div>




      </div>
    );
  }
}

export default App;
