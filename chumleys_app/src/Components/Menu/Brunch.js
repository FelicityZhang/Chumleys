import React, { Component } from 'react'

export default class Brunch extends Component {
  render() {
    return (
        <div className="brunch-menu render">
        <div className="menu-executive-chef">
        Executive Chef: Heather Pelletier
        </div>
        <div className="brunch-1 title">Not Avocado Toast</div>
            <div className="brunch-1 description">
                Banana Pistachio <br />
                Broccoli Cheddar<br />
                Carbonara<br />
                One Toast....$9<br />
                All the Toast....$24<br />
            </div>
        <div className="brunch-2 title">Yoghurt Parfait</div>
            <div className="brunch-2 description">
                House granola, pomegranate,<br />
                persimmon....$13
            </div>   
        <div className="brunch-3 title">English Muffin Pizza</div>
            <div className="brunch-3 description">
                'Nduja, Stracciatella,<br />
                quail egg....$14  
            </div> 
        <div className="brunch-4 title">Smoked Trout Caesar</div>
            <div className="brunch-4 description">
                Little gem lettuce, garlic chile<br />
                breadcrumbs, Pecorino....$18
            </div>
        <div className="brunch-5 title">B.E.C Melt</div>
            <div className="brunch-5 description">
                Nueske's bacon, cipollini<br />
                Fontina, fried egg....$17
            </div>
        <div className="brunch-5 title">Frittata</div>
            <div className="brunch-6 description">
                Seasonal, side salad.....$15
            </div>
        <div className="brunch-6 title">Acorn Squash</div>
            <div className="brunch-6 description">
                Mushrooms, salsa verde,<br />
                onions, baked egg....$16
            </div>
        <div className="brunch-7 title">Duck & Fawaffle</div>  
            <div className="brunch-7 description">
                Confit leg, chickpea waffle,<br />
                hot date syrup, fried egg....$23
            </div>
        <div className="brunch-8 title">Crepes</div>  
            <div className="brunch-7 description">
                House cured salmon, Labne, caper<br /> 
                Hollandaise, everything bagel spice....$19
            </div> 
        <div className="brunch-9 title">Pancake</div>
            <div className="brunch-9 description">
                Creme Anglaise, Almonds<br />
                vanilla, poached pears....$16
            </div>
            <div className="brunch-10 title">86'd Burger</div>
                <div className="brunch-10 description">
                    Bone marrow, crispy shallots,<br />
                    American cheese, Chumley's sauce....$29
                </div>
            <div className="brunch-11 title">Sides</div> 
                <div className="brunch-11 description">
                    House-cured Pancetta....$9<br /> 
                    House-cured salmon....$9<br />
                    Beef fat fries....$10
                </div>       
        </div>
    )
  }
}
