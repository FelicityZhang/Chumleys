import React, { Component } from 'react'

export default class Dinner extends Component {
  render() {
    return (
        <div className="dinner-menu-render">
        <div className="menu-executive-chef">
        Executive Chef: Heather Pelletier
        </div>
        <div className="dinner-1 title">East Coast Oysters</div>
            <div className="dinner-1 description">
                Half Dozen....$22 <br />
                Dozen....$42
            </div>
        <div className="dinner-2 title">Shrimp Cocktail</div>
            <div className="dinner-2 description">
                $19
            </div>   
        <div className="dinner-3 title">Clams Casino Toast</div>
            <div className="dinner-3 description">
                Marinated countneck clams,<br />
                tomato aoili, chile, bacon bits....$14  
            </div> 
        <div className="dinner-4 title">Little Gem "Ceasar"</div>
            <div className="dinner-4 description">
                Smoked trout dressing, garlic chile<br />
                breadcrumbs, Pecorino....$18
            </div>
        <div className="dinner-5 title">Autumn Salad</div>
            <div className="dinner-5 description">
                Celery, grapes, walnuts,<br />
                apple vinaigrette, Labneh....$19
            </div>
        <div className="dinner-5 title">Tongue Pastrami</div>
            <div className="dinner-6 description">
                Seared beef tongue, beet ‘slaw,<br />
                mustard, rye chip....$20
            </div>
        <div className="dinner-6 title">Veal Tartare</div>
            <div className="dinner-6 description">
                Black truffle aoili,<br />
                crispy potatoes....$20
            </div>
        <div className="dinner-7 title">Cannoli</div>  
            <div className="dinner-7 description">
                Chicken liver and foie gras mousse,<br /> 
                shallot jam, pistachio....$19
            </div>
        <div className="dinner-8 title">Risotto</div>  
            <div className="dinner-7 description">
                Chestnut, stracciatella<br /> 
                brown butter, radicchio....$28
            </div> 
        <div className="dinner-9 title">Arctic Char en Papillote</div>
            <div className="dinner-9 description">
                Leeks, potato,<br />
                tarragon bagna cauda....$32
            </div>
            <div className="dinner-10 title">Duck & Fawaffle</div>
                <div className="dinner-10 description">
                    Confit leg, chickpea waffle,<br />
                    hot date syrup....$30
                </div>
            <div className="dinner-11 title">Cast-Iron Amish Chicken for Two</div> 
                <div className="dinner-11 description">
                    Crispy potatoes, roasted figs,<br /> 
                    baby greens....$54
                </div>       
            <div className="dinner-12 title">Hemingway’s Chili</div> 
                <div className="dinner-12 description">
                    Shrimp, cuttlefish, cannellini <br />
                    beans, creme fraiche....$37
                </div>   
            <div className="dinner-13 title">86’d Burger</div> 
                <div className="dinner-13 description">
                    Bone marrow, crispy shallots,<br /> 
                    American cheese, Chumley’s sauce....$29
                </div>   
            <div className="dinner-14 title">Sides</div> 
                <div className="dinner-14 description">
                    Whole roasted Romanesco....$12<br />
                    “Creamed” Brussels....$10<br />
                    Beef fat fries....$10
                </div>      
        </div>
    )
  }
}
