import React from 'react'
import logo from '../images/logo.png'

export default function Navbar(props) {
    return (
        <div className='navbar'>
            <img src={logo} className='logo' />
            <a href="#">Menu</a>
            <a href="#">Our Story</a>
            <a href="#">Hours &amp; Location</a>
            <a href="#">Contact</a>
            <button>Book a Table</button>

        </div>
    )
}