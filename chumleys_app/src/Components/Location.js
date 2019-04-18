import React, { Component } from 'react'
import Map from '../images/Map.png'
import Booth from '../images/Booth.png'



export default class Contact extends Component {
    render() {
        return (
            <div className='hourLocation-container'>
                <div className='contact-main'>
                    <div className='Rectangle-Copy'>
                        <div className="Text-Box">
                            <div className='mapInfo-container'>
                                <div className='Hours-Location'>Hours Location</div>
                                <div className="hoursContainer Dinner-Monday-Satu">
                                    <div>
                                        <div className=' text-style-1 '>Dinner</div>
                                        <div classNanme='hours'>Monday - Saturday</div>
                                        <div classNanme='hours'>5:30pm - 12am</div>
                                    </div>
                                    <div >
                                        <div className=' text-style-1 '>Sunday Brunch</div>
                                        <div classNanme='hours'>11:30pm - 3:30pm</div>
                                    </div>
                                </div>
                            </div>
                            <div><img className='Rectangle-Copy-2' src={ Map } /></div>
                        </div>
                    </div>
                    <div className='Booth'>
                        <img className='Booth' alt='boothImage' src={ Booth } />
                    </div>
                </div>
            </div>
        )
    }
}

