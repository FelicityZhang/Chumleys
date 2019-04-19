import React from 'react'
import Fireplace_Restaurant from '../images/Fireplace.png'
import Mobile_Fireplace from '../images/Mobile_Fireplace.png'

export default function ContactPage(props) {
    return (
        <div className='contactpage-block'>
            {/* <div className='contactpage-image'> */}
            <div>
            <img className='mobile-fireplace' src={Mobile_Fireplace} />

            <img className='contactpage-image' src={Fireplace_Restaurant} />
import Fireplace from '../images/Fireplace.png'


export default function ContactPage(props) {
    return (
        <div className='contactpage-block' id='contactpage'>
            <div className='contactpage-image'>
                <img src={Fireplace} />
            </div>

            <div className='contact-holder'>
                <div className='contact-box'>
                    <p className='contact-header'>Contact</p>

                    <div className='contact-content'>
                    <div className='desktop-contact-text'>
                        <span className='media-contact'>For press inquiries, please email jrosen@chumleysnewyork.com
                    </span>
                        <p className='allelse-contact'>For anything else, contact us by Phone <span className='Phone'>(212) 675-2081</span> <br></br> or fill out the form below.
                    </p>
                    </div>
                    <div className='mobile-contact-text'>
                        <span className='media-contact'>Reservations can be arranged by phone Monday through Saturday from 10:00am to 10:00pm, or through Resy. </span> 
                        <br></br>
                        <br></br>
                        <span className='media-contact'> While a credit card is not required for reservations under six guests, we ask that you confirm at least 24 hours before your reservation. </span>
                    
                        <p className='allelse-contact'>If your plans should change, please reach out to us. <br></br><br></br><span className='Phone'>(212) 675-2081</span> <br></br>
                    </p>
                    </div>
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