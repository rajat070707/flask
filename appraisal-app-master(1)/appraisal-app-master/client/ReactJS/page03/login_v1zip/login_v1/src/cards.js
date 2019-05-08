import React,{Component} from 'react';
import Selects from './Select'

class Card extends Component{
    render(){
        return(
          
            <div className="container">
            <h1>IMPACT VALUES</h1>

              <div className="row">


                <div className="col s4  ">
                <div className="card blue lighten-3">
                    <div className="card-content">
                    <h2>inclusion</h2>
                      <Selects/>
                    </div>
                  </div>
                </div>


                <div className="col s4 ">
                <div className="card purple lighten-3">
                    <div className="card-content ">
                    <h2>Mettle</h2>
                      <Selects/>
                    </div>
                  </div>
                </div>


                <div className="col s4 ">
                <div className="card  grey darken-3">
                    <div className="card-content ">
                    <h2>Pioneer</h2>
                      <Selects/>
                    </div>
                  </div>
                </div>
 
 
              </div>





              <div className="row">


                <div className="col s4  ">
                <div className="card teal lighten-3">
                    <div className="card-content">
                    <h2>Accountability</h2>
                      <Selects/>
                    </div>
                  </div>
                </div>


                <div className="col s4 ">
                <div className="card cyan lighten-3">
                    <div className="card-content ">
                    <h2>Collaboration</h2>
                      <Selects/>
                    </div>
                  </div>
                </div>


                <div className="col s4 ">
                <div className="card indigo lighten-3">
                    <div className="card-content ">
                    <h2>Trust</h2>
                      <Selects/>
                    </div>
                  </div>
                </div>
 
 
              </div>
            </div>
        );
    }
}

export default Card;