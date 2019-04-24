import React from 'react'
import xicon from '../images/x-icon-white.png'

export default function HamburgerMenu(props) {
    return (
        <div className='hamburger-menu-component'>
            <div className='exit' onClick={props.closeMenu}>
                <img src={xicon} />
            </div>

            <div className='hamburger-menu-links' onClick={props.closeMenu}>
                <a href='https://resy.com/cities/ny?date=2019-04-24&seats=2&query=chumlesy' target="_blank">Book a Table</a>
                <a href='#menu'>Menu</a>
                <a href='#chef'>Executive Chef</a>
                <a href='#ourstory'>Our Story</a>
                <a href='#hourslocation'>Hours and Location</a>
                <a href='#contactpage'>Contact</a>
            </div>

            <div className='hamburger-footer'>
                <p>(212) 675-2081</p>
                <p>86 Bedford St, </p>
                <p>New York, NY 10014</p>

            </div>

        </div>
    )

}
