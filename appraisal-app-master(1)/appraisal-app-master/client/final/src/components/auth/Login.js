import React,{Component} from 'react';
import Google from "./google"
import logo from "./avatar2.png";
import {BrowserRouter as Router,Link} from 'react-router-dom';

class LogIn extends Component{

    
    state={
        email: '',
        password: ''

    }
    handleSubmit=(e)=> { 
        this.setState({
            [e.target.id]:e.target.value,

        })

    }

    handleChange=(e)=>{
console.log(this.state);
        e.preventDefault();

    }
    



render(){
    return(
        <div className="container center">
        <form onSubmit={this.handleSubmit} className="white ">
            <h4 className="indigo-text text-darken-3 center"><b>LOGIN</b></h4>
            <div class="imgcontainer">
                <img src={logo} class="avatar"/>
             </div>
   
               
                <div className="input-field">
                    <label  htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange}/>
                </div>


                <div className="input-field">
                    <label  htmlFor="Password">Password</label>
                    <input type="password" id="password" onChange={this.handleChange}/>
                </div>
               <button className="btn waves-effect waves-light" type="submit" onClick="handleClick()" formAction="/page2">LOGIN
</button>
   
                    <h4 className="text">OR</h4>
                    <Google/>
        
            </form>
         
            
        </div>
    )
    
}
}

export default LogIn;
