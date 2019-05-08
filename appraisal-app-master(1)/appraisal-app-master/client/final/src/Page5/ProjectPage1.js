import React,{Component} from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import axios from "axios";

class ProjectPage1 extends Component{  
        SendIt(e1){
      e1.preventDefault()
        console.log(this.state);            
        this.setState({
         loading:true
       })
    axios.post("http://192.168.43.18:8080/finalscore?tokenId="+window.localStorage.getItem("tokenid"))
        .then(response =>{
           console.log(response);
            window.location.href="http://localhost:3000/ProjectPage3";

            window.localStorage.setItem("finalScore", response.data);

           this.setState({
              loading:false,
              message:response.data
            })
        })
        .catch(err=>{
          console.log(err);
          this.setState({
             loading:false
            })
        })
    }


render(){
    return(
        <div className="container center">
        <form  className="white ">
            <h4 className="indigo-text text-darken-3 center"><b>Hello Nineleaper</b></h4>
            
   
               
                <div className="input-field">
                    <input type="email" id="email" value={localStorage.getItem("email")}/>
                </div>


                <div className="input-field">
                    <input type="text" id="Name" value={localStorage.getItem("name")} />
                </div>
               <button className="btn waves-effect waves-light align right" type="submit" onClick={this.SendIt.bind(this)} formAction="/Projectpage3">Final Score...
                </button>
                <button className="btn waves-effect waves-light align left" type="submit" onClick="handleClick()" formAction="/ProjectPage2">Add Projects....
                </button>
   
   
                  
        
            </form>
         
            
        </div>
    )
    
}
}

export default ProjectPage1;