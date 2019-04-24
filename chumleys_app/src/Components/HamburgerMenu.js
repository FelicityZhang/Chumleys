import React from 'react'
import xicon from '../images/x-icon-white.png'

export default function HamburgerMenu(props) {
    return (
        <div className='hamburger-menu-component'>
            <div className='exit' onClick={props.closeMenu}>
                <img src={xicon} />
            </div>

            <div className='hamburger-menu-links'>
                <a href='#'>Book a Table</a>
                <a href='#'>Menu</a>
                <a href='#'>Hours and Location</a>
                <a href='#'>Our Story</a>
                <a href='#'>Executive Chef</a>
                <a href='#'>Contact</a>
            </div>

            <div className='hamburger-footer'>
                <p>(212) 675-2081</p>
                <p>86 Bedford St, </p>
                <p>New York, NY 10014</p>

            </div>

        </div>
    )

}
