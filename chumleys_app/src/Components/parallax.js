import React, { Component } from 'react';
import Stew from '../images/Stew.png'
import Cannoli from '../images/Cannoli.png'
import Duck_Waffle from '../images/Duck_Waffle.png'
import Cocktails from '../images/Cocktails.png'

import '../App.css';

class Parallax extends Component {
  render() {
    return (
      <div className="Parallax"> 

  
      <div className="parallax-background-image">

          <div className="parallax">

              <img className="Stew" src={Stew}/>
              <img className="Cannoli" src={Cannoli}/>
              <img className="Waffle" src={Duck_Waffle}/>
              <img className="Cocktails" src={Cocktails}/>
            
         
          </div>

          </div>
          </div>

      
    );
  }
}

export default Parallax;