import React from 'react'
import Fireplace_Restaurant from '../images/Fireplace.png'

export default function ContactPage(props) {
    return (
        <div className='contactpage-block' id='contactpage'>
            <div className='contactpage-image'>
                <img src={Fireplace_Restaurant} />
            </div>

            <div className='contact-holder'>
                <div className='contact-box'>
                    <p className='contact-header'>Contact</p>

                    <div className='contact-content'>

                        <span className='media-contact'>For press inquiries, please email jrosen@chumleysnewyork.com
                    </span>
                        <p className='allelse-contact'>For anything else, contact us by Phone <span className='Phone'>(212) 675-2081</span> <br></br> or fill out the form below.
                    </p>
                        <div className='input1'>
                            <div className='name'>Name</div>
                        </div>
                        <div className='input1'>
                            <div className='name'>Email</div>
                        </div>
                        <div className='input2'>
                            <div className='name'>Message</div>
                        </div>
                        <button className='contact-button'>SEND</button>

                    </div>

                </div>

            </div>


        </div>
    )
}