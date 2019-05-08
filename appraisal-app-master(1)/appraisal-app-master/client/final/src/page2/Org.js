import React,{Component} from "react"
import "./cards.css";
import Select from 'react-select';
import axios from "axios"
import {Form} from "react-bootstrap"


const scr =[
    {label:"10"},
    {label:"20"},
    {label:"30"},
    {label:"40"},
    {label:"50"},
    {label:"60"},
    {label:"70"},
    {label:"80"},
    {label:"90"},
    {label:"100"}
]


class Org extends Component{
    constructor(props){
        super(props);
        this.state={
            scr:""
        }
        this.funPost = this.funPost.bind(this);
        this.funChangeData = this.funChangeData.bind(this);
    }

    funChangeData(e){
        console.log(e);
        this.setState({
            [e.name]:e.value
        })
    }

    funPost(e){
  e.preventDefault()
  console.log(this.state);
   const params={ 
      
   }
     
   axios.get("http://192.168.43.18:8080/org",{
       params:{
                "tokenId": window.localStorage.getItem("tokenid"),
                "scr": this.state.scr.label
       }
   })
        .then(response =>{
        console.log(response);
             window.location.href="http://localhost:3000/ProjectPage2";

        this.setState({
        loading:false,
        message:response.data,
        })
        })
        
 }


    render(){
        return(
          <div className="page2card sky darken-1">
            <div className="card-content center black-text">
              <span className="aa card-title">Organisational Behaviour</span><br/>
              <br/>
                <Select options={scr}  name="scr" value={this.state.scr}
                   onChange={(val)=> {this.funChangeData({ name:'scr', value: val })}} placeholder="Select Score"/>
                


                <button className="gotobtn btngoto btn waves-effect waves-light center" 
                type="submit"   
                onClick={this.funPost}>Set
                </button>
        </div>
                
            </div>
        )
    }
}

export default Org;