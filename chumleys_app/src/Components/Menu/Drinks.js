import React, { Component } from 'react'

export default class Drinks extends Component {
  render() {
    return (
        <div className="drinks-menu-render">
            <div className="cocktails">
                Cocktails....$16
            </div>
            <div className="row">
            <div className="column-1"></div>
            <div className="column-2">
            <div className="drinks-header column-title">In Season</div>
            <div className="drinks-1 title">"Yank" Smith's Machismo</div>
                <div className="drinks-1 description">
                    Monkey 47, absinthe, orange,<br />
                    grenadine, lemon
                </div>
            <div className="drinks-2 title">Hola, Cotorro</div>
                <div className="drinks-2 description">
                    Avua Prata Cachaca, lavendar,<br />
                    arugula, sunflower oil, lemon
                </div>   
            <div className="drinks-3 title">Same Thing We Do Every Night</div>
                <div className="drinks-3 description">
                    Mezcal, currant, pink peppercorn,<br />
                    lime, grapefruit, egg white 
                </div> 
            <div className="drinks-4 title">Eve Harrington</div>
                <div className="drinks-4 description">
                    suntory toki, shochu, rose, lemon,<br />
                    honey sparkling rose  
                </div> 
            <div className="drinks-5 title">You Look Confused</div>
                <div className="drinks-5 description">
                    pisco, caffe amaro, cinnamon,<br />
                    black tea clove, cumin, caraway, fennel, bitters
                </div>
                </div>
                <div className="column-3">
                <div className="drinks-header column-title">
                    Highball
                </div>    
            <div className="drinks-6 title">Breakfast Brew</div>
                <div className="drinks-6 description">
                    cutty sark prohibition, licorice<br />
                    orange, lemon, honey, bitters, soda
                </div>
            <div className="drinks-7 title">I Used to Come Here in the 70's</div>
                <div className="drinks-7 description">
                    highland park magnus,<br />
                    baines pacharans, apple, bitters, soda
                </div>
            <div className="drinks-8 title">T.V. Reference</div>
                <div className="drinks-8 description">
                    glenlivet founder's reserve, dudognon<br />
                    selection, orange, mint, almond extract, soda
                </div>
            <div className="drinks-9 title">Too Many Cooks</div>  
                <div className="drinks-9 description">
                    copper dog, batavia-arrack, sfumato,<br />
                    killian's, chai, lime, soda
                </div>
            <div className="drinks-10 title">We Both Still Love You</div>  
                <div className="drinks-10 description">
                    singleton 12, fino sherry,<br />
                    quintinye blanc, soda
                </div> 
            <div className="drinks-11 title">Choose Your Own Adventure</div>
                <div className="drinks-11 description">
                    bourbon or gin,<br />
                    lime oleo, lime, soda
                </div>
                </div>
                <div className="column-4"></div>
        </div>
        <form action="./Chumleys-Beverage-Menu-11.21.18.pdf" target="_blank">
                <button className="drinks-button" type="submit" value="Go to Drinks">
                    Full Drinks Menu
                </button>
            </form>
        </div>
    )
  }
}
