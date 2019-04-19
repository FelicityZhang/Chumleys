import React from 'react'
import logo from '../images/logo.png'
import HamburgerMenu from '../images/hamburger-menu-icon-2.png'



export default function Navbar(props) {
    return (
        <div className='navbar'>
            <div className='nav-img-year'>
                <img src={logo} className='logo' />
                <p className='established'>Established 1922</p>
            </div>


            <div className='nav-links'>
                <a href="#" className='nav-menu-button'>Menu</a>
                <a href="#ourstory" className='nav-story-button'>Our Story</a>
                <a href="#hourslocation" className='nav-hours-button'>Hours &amp; Location</a>
                <a href="#contactpage" className='nav-contact-button'>Contact</a>
                <button className='book-table-button'>Book a Table</button>
            </div>

            <div className='hamburgermenu'>
                <img src={HamburgerMenu} />

            </div>




        </div>
    )
}