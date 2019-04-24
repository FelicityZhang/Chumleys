import React from 'react'
import ChefImage from '../images/Chef_Pelletier.png'
import MobileChefImage from '../images/Mobile_Chef_Pelletier.png'

export default function ChefBlock(props) {
    return (
        <div className='chef-block' id="chef">

            <div className='chef-description'>
                <div className='chef-information'>

                    <div className='chef-title'>
                        <p className='chef-executive'>Executive Chef:</p>
                        <p className='chef-name'>Heather Pelletier</p>
                    </div>
                    <div className='chef-content'>

                        <p>With a background in pastry arts, and having started her career as a pastry chef, Heather has  worked at some of the best restaurants in New York City, and brings her expertise and unique persepctive to Chumley’s.
                    </p>
                        <p>Blending French and American cuisines, Heather strives to find fresh, seasonal, local ingredients, to craft our menu.
                    </p>
                        <p>Menu items change regularly to reflect what is in-season and to ensure each visit to Chumley’s offers something new.
                    </p>

                    </div>

                </div>

            </div>
            <div className='chef-image'>
                <img className='chef-large-image' src={ChefImage} />
                <img className='chef-mobile-image' src={MobileChefImage} />
            </div>

        </div>
    )
}