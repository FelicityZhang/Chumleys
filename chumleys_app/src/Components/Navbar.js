import React from 'react'
import logo from '../images/logo.png'
import HamburgerMenuIcon from '../images/hamburger-icon.png'
import HamburgerMenu from './HamburgerMenu'



export default class Navbar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            menuActive: false,
            sizeClass: 'navbar'
        }

    }

    componentDidMount() {
        window.addEventListener('scroll', this.resizeHeaderOnScroll)
    }

    resizeHeaderOnScroll() {
        const distance = window.pageYOffset || document.documentElement.scrollTop
        const shrinkOn = 800
        const headerElement = document.getElementById('navbar-wrapper')
        const logoElement = document.getElementById('logo')
        const establishedElement = document.getElementById('established')

        if (distance > shrinkOn) {
            headerElement.classList.add('smaller')
            headerElement.classList.remove('navbar')
            logoElement.classList.add('smaller-logo')
            logoElement.classList.remove('logo')
            establishedElement.classList.add('smaller-established')
            establishedElement.classList.remove('established')
        }
        else {
            headerElement.classList.remove('smaller')
            headerElement.classList.add('navbar')
            logoElement.classList.remove('smaller-logo')
            logoElement.classList.add('logo')
            establishedElement.classList.remove('smaller-established')
            establishedElement.classList.add('established')

        }
    }



    render() {
        return (
            <div className='navbar' id='navbar-wrapper'>


                <a href='#' className='navbar-logo-established'>
                    <div className='nav-img-year' id='#'>
                        <img src={logo} className='logo' id='logo' />
                        <p className='established' id='established'>Established 1922</p>
                    </div>
                </a>


                <div className='nav-links'>
                    <a href="#menu" className='nav-menu-button'>Menu</a>
                    <a href="#ourstory" className='nav-story-button'>Our Story</a>
                    <a href="#hourslocation" className='nav-hours-button'>Hours &amp; Location</a>
                    <a href="#contactpage" className='nav-contact-button'>Contact</a>
                    <a href='https://resy.com/cities/ny?date=2019-04-24&seats=2&query=chumlesy'>
                        <button className='book-table-button'>Book a Table</button>
                    </a>
                </div>

                <div className='hamburgermenu' onClick={ this.props.openMenu }>
                    <img src={HamburgerMenuIcon} />
                    
                </div>

                {/* {this.state.menuActive && <HamburgerMenu />} */}




            </div>
        )
    }
}