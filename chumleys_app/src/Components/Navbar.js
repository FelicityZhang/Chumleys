import React from 'react'
import logo from '../images/logo.png'
import HamburgerMenuIcon from '../images/hamburger-menu-icon-2.png'
import HamburgerMenu from './HamburgerMenu'



export default class Navbar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            menuActive: false
        }

    }



    render() {
        return (
            <div className='navbar'>
                <div className='nav-img-year'>
                    <img src={logo} className='logo' />
                    <p className='established'>Established 1922</p>
                </div>


                <div className='nav-links'>
                    <a href="#menu" className='nav-menu-button'>Menu</a>
                    <a href="#ourstory" className='nav-story-button'>Our Story</a>
                    <a href="#hourslocation" className='nav-hours-button'>Hours &amp; Location</a>
                    <a href="#contactpage" className='nav-contact-button'>Contact</a>
                    <button className='book-table-button'>Book a Table</button>
                </div>

                <div className='hamburgermenu' onClick={this.props.openMenu}>
                    <img src={HamburgerMenuIcon} />
                </div>

                {/* {this.state.menuActive && <HamburgerMenu />} */}




            </div>
        )
    }
}