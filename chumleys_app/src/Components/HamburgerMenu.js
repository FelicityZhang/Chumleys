import React from 'react'
import { slide as Menu } from 'react-burger-menu'

class HamburgerMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }

    }

    handleClick() {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        return (
            <Menu width={200} isOpen={false}>
                <a href='#'>Home</a>
                <a href='#'>About</a>
                <a href='#'>Contact</a>
            </Menu>


        )
    }
}

export default HamburgerMenu