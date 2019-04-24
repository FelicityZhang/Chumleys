import React, { Component } from 'react'
import Facebook from '../images/Facebook.png'
import Ins from '../images/Ins.png'
import Twitter from '../images/Twitter.png'


export default class Footer extends Component {
    render() {
        return (
            <div className="displayQuote">
                <div className='Dimmer-Box'>
                    <div className='DimmerContainer'>
                        <div className='socialMedia'>
                            <div><img className='Shape' src={ Facebook } /></div>
                            <div><img className='Shape' src={ Twitter } /></div>
                            <div><img className='Shape' src={ Ins } /></div>
                        </div>
                        {/* <div></div>
                <div></div> */}
                        <div className='-Bedford-St-New-Y'>
                            86 Bedford St, New York, NY 10014
               </div>
                        <div className='phone'>(212) 675-2081</div>
                    </div>
                </div>
            </div>
        )
    }
}
