import React,{Component} from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Select from "react-select"
import axios from "axios"

import './cards.css';

const drop = [
  { label: "NEVER" },
  { label: "RARELY" },
  { label: "SOMETIMES"},
  { label: "MOSTLY" },
  { label: "ALWAYS" },
  { label: "EXCEPTIONAL" },
];

class Card extends Component{
    
constructor(props){
    super(props);
    this.state={
      Inclusion:"",
      Mettle:"",
      Pioneering:"",
      Accountability:"",
      Collaboration:"",
      Trust:""
    }
      this.fnPost = this.fnPost.bind(this);

    this.fnChangeData = this.fnChangeData.bind(this);
  }

  fnChangeData(e){
    console.log(e);
    this.setState({
      [e.name]:e.value
    })
  }
fnPost(e){
  e.preventDefault()
  console.log(this.state);

   const data={ 
      
   inclusion : this.state.Inclusion.label,
  mettle :this.state.Mettle.label,
   pioneering : this.state.Pioneering.label,
  accountability : this.state.Accountability.label,
  collaboration : this.state.Collaboration.label,
  trust :this.state.Trust.label
   }
  
    axios.post("http://192.168.43.18:8080/values?tokenId="+window.localStorage.getItem("tokenid"),data)
  .then(response =>{
    console.log(response);
      window.location.href="http://localhost:3000/page2";

      window.localStorage.setItem("ImpactResult", response.data);
    this.setState({
      loading:false,
      message:response.data
      
    })
  })


}

    render()
    { return(
          <div className="center container">

             
                <div className="row">
                  <div className="col s4 m4">
                    <div className="card1 sky">
                      <div className="card-content black-text">
                        <span className="card-title"><b>INCLUSION</b></span>
                            <Select options={ drop } name="Inclusion" value={this.state.Inclusion}
                                            onChange={(val)=> {this.fnChangeData({ name:'Inclusion', value: val })}}/>    
                      </div>
                    </div>
                  </div>

                  <div className="col s4 m4">
                    <div className="card1 sky ">
                      <div className="card-content black-text">
                        <span className="card-title"><b>METTLE</b></span>
                            <Select options={ drop } name="Mettle" value={this.state.Mettle}
                                            onChange={(val)=> {this.fnChangeData({name:'Mettle',  value: val })}}/>        
                      </div>
                    </div>
                  </div>


                  <div className="col s4 m4">
                    <div className="card1 sky">
                      <div className="card-content black-text">
                        <span className="card-title"><b>PIONEERING</b></span>
                          <Select options={ drop } name="Pioneering" value={this.state.Pioneering}
                                            onChange={(val)=> {this.fnChangeData({ name:'Pioneering', value: val })}}/>         
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col s4 m4">
                    <div className="card1 sky">
                      <div className="card-content black-text">
                        <span className="card-title"><b>ACCOUNTABILITY</b></span>
                          <Select options={ drop} name="Accountability" value={this.state.Accountability}
                                            onChange={(val)=> {this.fnChangeData({name:'Accountability',  value: val })}}/>    
                      </div>
                    </div>
                  </div>

                  <div className="col s4 m4">
                    <div className="card1 sky">
                      <div className="card-content black-text">
                        <span className="card-title"><b>COLLABORATION</b></span>
                          <Select options={ drop}  name="Collaboration" value={this.state.Collaboration}
                                            onChange={(val)=> {this.fnChangeData({ name:'Collaboration', value: val })}}/>   
                      </div>
                    </div>
                  </div>


                  <div className="col s4 m4">
                    <div className="card1 sky">
                      <div className="card-content black-text">
                        <span className="card-title"><b>TRUST</b></span>
                          <Select options={ drop} name="Trust" value={this.state.Trust}
                                            onChange={(val)=> {this.fnChangeData({ name:'Trust', value: val })}}/>    
                      </div>
                    </div>
                  </div>
                </div>
              <button className="btngoto3 btn waves-effect waves-light" type="submit" onClick={this.fnPost} >SUBMIT
              </button>
              
          </div>
        );
    }
}

export default Card;
