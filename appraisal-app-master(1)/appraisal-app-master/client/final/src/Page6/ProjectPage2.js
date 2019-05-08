import React ,{Component} from 'react';
import Select from 'react-select';
import axios from "axios"
import Axios from "axios"
import {Form} from "react-bootstrap"

import {BrowserRouter as Router,Link} from 'react-router-dom';

const Months =[
  {label:"one",value:"1"},
  {label:"two",value:"2"},
  {label:"three",value:"3"},
  {label:"four",value:"4"},
  {label:"five",value:"5"},
  {label:"six",value:"6"},
  {label:"seven",value:"7"},
  {label:"eight",value:"8"},
  {label:"nine",value:"9"},
  {label:"ten",value:"10"},
  {label:"eleven",value:"11"},
  {label:"twelve",value:"12"}
 
]



const Projects = [
    
  { label: "Astro"},
  { label: "Darwin" },
  { label: "Elixir" },
  { label: "Indigo"},
  { label: "Moonshot" },
  { label: "Phoenix " },
  { label: "Uno " },
];


 class ProjectPage2 extends Component{
   constructor(props){
    super(props);
    this.state={
      project:"",
      dur:""
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
   project : this.state.project.label,
   dur : this.state.dur.value
   }
    axios.post("http://192.168.43.18:8080/name?tokenId="+window.localStorage.getItem("tokenid"),data)
        .then(response =>{
        console.log(response);
        window.location.href="http://localhost:3000/projects";
              window.localStorage.setItem("ProjectName", response.data);

        this.setState({
        loading:false,
        message:response.data,
        
        })
        
        })
        
 }



render(){
    return(
        <div className="container center">
        <form class="white">

        <div className="col s6 m4">
          <div className="page2card sky darken-1">
            <div className="card-content center Navy-text">
              <span className="aa card-title">Set Items here for Projects</span>
              <br/>
              <div className="card-content center black-text">
               <label>Select project name</label>
                <Select  options={ Projects} name="project" value={this.state.project}
                 onChange={(val)=> {this.fnChangeData({ name:'project', value: val })}} placeholder="select project name"/>
                
                  <br/>
                  <label>Select Duration</label>
                  <Select options={Months}  name="dur" value={this.state.dur}
                   onChange={(val)=> {this.fnChangeData({ name:'dur', value: val })}} placeholder="Select Duration"/>
                
              </div>
            <Router>
              <Link to="/projects">
                <button className="gotobtn2 btn waves-effect waves-light" type="submit" onClick={this.fnPost} >Set
                </button>
              </Link>
          </Router>
            
        </div>
            </div>
        </div>
        </form>
        </div>
        

         
    )
}
}

export default ProjectPage2;