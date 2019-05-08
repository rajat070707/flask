import React ,{Component} from 'react';
import "./cards.css";
import Select from 'react-select';
import axios from "axios"
import {Form} from "react-bootstrap"
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Org from "./Org"
import Code from "./code"

 class Cards extends Component{
render(){
    return(
      <form>
        <div className="row">
            <div className="col s6 m4">
             <Code/>
            </div>
            
            
            <div className="col s6 m4 ">
                  <div className="page2card sky darken-1">
                      <div className="card-content center black-text">
                        <span className="aa card-title">IMPACT</span>
                          <div class="form-group">
                            <label for="Impactresult">Score:</label>
                              <input type="text col s0" class="form-control" id="ImpactResult" 
                                value={localStorage.getItem("ImpactResult")}></input>
                          </div>    
                                      

                          <button className="gotobtn btngoto btn waves-effect waves-light" 
                            type="submit"  FormAction="/Impact" >Click Here.....
                          </button>
                       </div>
                  </div>
            </div>


            <div className="col s6 m4">
                  <Org/>
            </div>
        </div>
        </form>
    )
}
 }

export default Cards;