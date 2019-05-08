import React, { Component } from 'react';


class App extends Component {

handleClick=()=>{
    window.location.href="http://localhost:3003/";
}

handleImpact=()=>{
    window.location.href="http://localhost:3002/";
}

  render() {
    return (
      <header>
      <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Nineleaps</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Login</a></li>
        
      </ul>
    </div>
  </nav>


      <div class="row">
        <div className="input-field col s3">
          <input  id="emp_name" type="text" className="validate"/>
          <label for="emp_name">Employee Name</label>
        </div>
        <div className="input-field col s3">
          <input id="email_id" type="text" className="validate"/>
          <label for="email_id">Email Id</label>
        </div>
        <div className="right input-feild" >
          <input id="score" type="number" className="validate"/>
          <label for="score"><b>SCORE</b></label>
        </div>
      
      
      
      
      </div>
      <div className="center header" id="myHeader">
  <h6><b>"We must accept finite disappointment, but never lose infinite hope."</b></h6>
</div>

      <div className="row">
    <div className="col s6 m4">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">IMPACT</span>
        
        </div>
        <button className="btn waves-effect waves-light" type="submit" onClick={this.handleImpact} name="action" >GOTO
  </button>
        
      </div>
    </div>

    <div className="col s6 m4">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Organisational Behaviour</span>
    
        </div>
        <button className="btn waves-effect waves-light" type="submit" name="action">Submit

  </button>
        
      </div>
    </div>


    <div className="col s6 m4">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">PROJECT</span>
      
        </div>
        <button className="btn waves-effect waves-light" type="submit" onClick={this.handleClick} name="action">Goto
  </button>
        
      </div>
    </div>
  </div>
  </header>
    );
  }
}

export default App;