import React, { Component } from 'react'

export default class Drinks extends Component {
  render() {
    return (
        <div className="drinks-menu-render">
            <div className="drinks-menu-cocktails">
                Cocktails....$16
            </div>
            <div className="drinks-header">In Season</div>
            <div className="drinks-1 title">"Yank" Smith's Machismo</div>
                <div className="drinks-1 description">
                    monkey 47, absinthe, orange,<br />
                    grenadine, lemon
                </div>
            <div className="drinks-2 title">Hola, Cotorro</div>
                <div className="drinks-2 description">
                    avua prata cachaca, lavendar,<br />
                    arugula, sunflower oil, lemon
                </div>   
            <div className="drinks-3 title">Eve Harrington</div>
                <div className="drinks-3 description">
                    suntory toki, shochu, rose, lemon,<br />
                    honey sparkling rose  
                </div> 
            <div className="drinks-4 title">You Look Confused</div>
                <div className="drinks-4 description">
                    pisco, caffe amaro, cinnamon,<br />
                    black tea clove, cumin, caraway<br />
                    fennel, bitters
                </div>
                <div className="drinks-header">
                    Highball
                </div>    
            <div className="drinks-5 title">Breakfast Brew</div>
                <div className="drinks-5 description">
                    cutty sark prohibition, licorice<br />
                    orange, lemon, honey, bitters, soda
                </div>
            <div className="drinks-5 title">I Used to Come Here in the 70's</div>
                <div className="drinks-6 description">
                    highland park magnus,<br />
                    baines pacharans, apple, bitters, soda
                </div>
            <div className="drinks-6 title">T.V. Reference</div>
                <div className="drinks-6 description">
                    glenlivet founder's reserve, dudognon<br />
                    selection, orange, mint, almond extract, soda
                </div>
            <div className="drinks-7 title">Too Many Cooks</div>  
                <div className="drinks-7 description">
                    copper dog, batavia-arrack, sfumato,<br />
                    killian's, chai, lime, soda
                </div>
            <div className="drinks-8 title">We Both Still Love You</div>  
                <div className="drinks-7 description">
                    singleton 12, fino sherry,<br />
                    quintinye blanc, soda
                </div> 
            <div className="drinks-9 title">Choose Your Own Adventure</div>
                <div className="drinks-9 description">
                    bourbon or gin,<br />
                    lime oleo, lime, soda
                </div>
            <form action="../../images/Chumleys-Beverage-Menu-11.21.18.pdf">
                <button className="drinks-button" type="submit" value="Go to Drinks">Full Drinks Menu</button>
            </form>
        </div>
    )
  }
}
