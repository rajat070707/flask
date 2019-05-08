import React ,{Component}from "react"
import Select from "react-select"
import axios from "axios"




const code=[
  {label:"A"},
  {label:"B"},
  {label:"C"}
];

class Code extends Component{
     constructor(props){
    super(props);
    this.state={
       code:""
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
   const params={ 
      
   }
     
   axios.get("http://192.168.43.18:8080/code",{
       params:{
                "tokenId": window.localStorage.getItem("tokenid"),
                "code": this.state.code.label
       }
   })
        .then(response =>{
        console.log(response);

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
                                <span className="aa card-title">Weightage Code</span>
                               <br/>
                               <br/>
                                    <Select options={ code }
                                        name="code" value={this.state.code}
                                        onChange={(val)=>{this.fnChangeData({name:'code', value: val})}}
                                        placeholder="Select code"/>

                                    <button className="gotobtn btngoto btn waves-effect waves-light" 
                                        type="submit"  onClick={this.fnPost} name="action" >Set
                                    </button>
                            </div>
                        </div>
        
        )
    }
}
export default Code;