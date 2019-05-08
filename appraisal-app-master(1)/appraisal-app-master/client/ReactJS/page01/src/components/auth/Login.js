import React,{Component} from 'react';
import Google from "./google"
import logo from "./avatar2.png";
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
        <div className="container">
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
                <div className="Input-field">
                    <button className=" btn pink Lighten-1 z-depth-0">Login</button>
                </div>
            </form>
            <div className="text">
            <h4 className="">OR</h4></div>
            <Google/>
        </div>
    )
    
}
}

export default LogIn;
