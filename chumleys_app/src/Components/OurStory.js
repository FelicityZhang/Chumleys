import React from 'react'
import JimImage from '../images/Jim.png'
import JimMobileImage from '../images/Mobile_Jim.png'

export default function OurStory(props) {
    return (
        <div className='our-story-block' id="ourstory">
            <div className='our-story-image'>
                <img className='our-story-large-img' src={JimImage} />
                <img className='our-story-mobile-img' src={JimMobileImage} />
            </div>



            <div className='our-story-description'>
                <div className='our-story-information'>
                    <div className='our-story-title'>Our Story</div>
                    <div className='our-story-content'>
                        <p>Chumley's is a historic pub and restaurant in the West Village of  New York City.
                        </p>

                        <p>Born as a speakeasy in 1922 when the socialist activist Leland Stanford Chumley wanted to create a meeting space for a local chapter of a Labor Union, it quickly became a favorite spot for influential writers, poets, playwrights, journalists, and activists, including members of the Lost Generation and the Beat Generation movements. Hemingway, Steinbeck, O’Neill, Ginsberg, Cather, Cummings and many more all called Chumley’s ‘home’
                        </p>

                        <p>Stop by for a drink and a bite to eat, and meet our Archivist, James. An author himself, James holds many secrets of Chumley’s storied history. He’ll gladly take you on the ‘write of passage’ and walk you through the celebrated haven of writers who helped define 20th century American Literature.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}