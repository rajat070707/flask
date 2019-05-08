import React,{Component} from "react";

import axios from 'axios';     

 class ProjectPage3 extends Component 
{

    constructor(){
        super();
        this.state = 
        {
          Name:"",
          emailId:"",
          subject:""
        }
    }    

    changeData(e1)
    {
        console.log(e1);
        this.setState({
          [e1.target.name]:e1.target.value,
        })
    } 
    
    postIt(e1){
      e1.preventDefault()
        console.log(this.state);
      const name=this.state.Name
      const emailId=this.state.emailId
      const subject=this.state.subject
            
        this.setState({
         loading:true
       })
        
       const data={
        emailId,
        name,
        subject
       }
        
    axios.post("http://192.168.43.18:8080/sendhtml?tokenId="+window.localStorage.getItem("tokenid"),data)
        .then(response =>{
           console.log(response);
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



    
     SendIt(e1){
      e1.preventDefault()
        console.log(this.state);            
        this.setState({
         loading:true
       })
    axios.post("http://192.168.43.18:8080/pdf?tokenId="+window.localStorage.getItem("tokenid"))
        .then(response =>{
           console.log(response);
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
        
    render() 
    {
        return (


                 <div className="container center">
                 <div className="row">
                 <div className="col s6 m4">
                    <form  className="white ">
                      <h4 className="indigo-text text-darken-3 "><b>here is your final score page</b></h4>
            
                        <div >
                            <input type="text" name="Name" 
                                value={localStorage.getItem("finalScore")}
                               >
                            </input>
                            <input type="text" name="Name" 
                                value={this.state.Name} 
                                onChange={this.changeData.bind(this)}
                                 placeholder="Enter Employee Name">
                            </input>
            
                            <input type="email" name="emailId"
                                 value={this.state.emailId} 
                                 onChange={this.changeData.bind(this)} 
                                 placeholder="Enter Employee Email Id">
                            </input> 
                             <input type="text" name="subject" 
                                value={this.state.subject} 
                                onChange={this.changeData.bind(this)}
                                 placeholder="Enter subject here">
                            </input>    
                        
                        </div>
                        <button className="btn waves-effect waves-light align left" 
                             type="submit" onClick={this.postIt.bind(this)} >Send mail
                        </button>
                         <button className="btn waves-effect waves-light align right" 
                            type="submit" onClick={this.SendIt.bind(this)} >Download Pdf
                        </button>
                     </form>
                    </div>
                  </div>
                </div>
        );
    }
}
	
	
	
export default ProjectPage3;