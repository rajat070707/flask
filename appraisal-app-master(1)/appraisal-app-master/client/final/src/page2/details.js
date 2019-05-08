import React ,{Component}from 'react';
import "./details.css";

class Details extends Component{




  render(){
  
    return(
      <React.Fragment>
        <div className="details">
      <div class="row">
      <div className="input-field col s3">
        <input  id="emp_name" type="text"  value={localStorage.getItem("name")}/>

      </div>
      <div className="input-field col s3">
        <input id="email_id" type="text" value={localStorage.getItem("email")}/>

      </div>
      <div className="input-field   col s3">
        <input id="Gid" type="text" value={localStorage.getItem("googleId")}/>
       

      </div>
      </div>
      </div>
     <header> <div class="row">
    <div className="header">
<h4><b>"We must accept finite disappointment, but never lose infinite hope."</b></h4>
</div>
</div>
</header>
</React.Fragment>

      
    )
}
}
export default Details;
