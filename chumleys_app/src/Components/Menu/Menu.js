import React, { Component } from 'react'
import Dinner from './Dinner'
import Brunch from './Brunch'
import Drinks from './Drinks'

export default class Menu extends Component {
    constructor(){
        super()
        this.state = {
            button_dinner: true,
            button_brunch: false,
            button_drinks: false,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        if (e.target.id==="button_dinner") {
            this.setState({
                button_dinner: true,
                button_brunch: false,
                button_drinks: false
            })
            
        }
        if (e.target.id==="button_brunch") {
            this.setState({button_dinner: false})
            this.setState({button_brunch: true})
            this.setState({button_drinks: false})
        }
        if (e.target.id==="button_drinks") {
            this.setState({button_dinner: false})
            this.setState({button_brunch: false})
            this.setState({button_drinks: true})
        }
    }


    render() {
        return(
            <div className="menu-component">
            <div className="menu-header">Menus</div>
                <div className="buttons">
                    <button 
                        id="button_dinner" 
                        onClick={this.handleClick}>
                            Dinner
                    </button>
                    <button 
                        id="button_brunch" 
                        onClick={this.handleClick}>
                            Brunch
                    </button>
                    <button 
                        id="button_drinks" 
                        onClick={this.handleClick}>
                            Drinks
                    </button>
                </div> 

                <div className="menu-conditional-render">
                    {this.state.button_dinner ? 
                        (<div id="div-dinner">
                            <Dinner /></div>): 
                        (<div></div>)} 
                    {this.state.button_brunch ? 
                        (<div id="div-brunch">
                            <Brunch /> </div>): 
                        (<div></div>)} 
                    {this.state.button_drinks ? 
                        (<div id="div-drinks">
                            <Drinks />
                        </div>): 
                        (<div></div>)}
                </div>
            </div>  
        )
    }
}
