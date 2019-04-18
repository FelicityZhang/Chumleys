import React, { Component } from 'react'
import './Contact.css';

export default class Contact extends Component {
    render() {
        return (
            <div className='contact-main'>
                <div className='Rectangle-Copy'>
                    <div className="Text-Box">
                        <div className='Hours-Location'>Hours & Location</div>
                        <div className='Dinner-Monday-Satu'>
                            <div classNane='Dinner-Monday-Satu text-style-1 '>Dinner</div>
                            <p>Monday - Saturday</p>
                            <p>5:30pm - 12am</p>
                            <div classNane='Dinner-Monday-Satu text-style-1 '>Sunday Brunch</div>
                            <p>11:30pm - 3:30pm</p>
                        </div>
                        <div><img className='Rectangle-Copy-2' src='./images/Map.png' /></div>
                    </div>
                </div>
                <div>
                    <img className='Booth' alt='boothImage' src='./images/Booth.png' />
                </div>
            </div>
        )
    }
}

