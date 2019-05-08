import React, { Component } from 'react';
import Navbar4 from './Navbar';
import Grids from './uppergrid';
import SecondGrid from './grid';



class App4 extends Component {

  handleClick=()=>{
    window.location.href="http://localhost:3000/";
}

handleImpact=()=>{
    window.location.href="http://localhost:3000/";
}
 render() {
    return (
    <div className="App">
      <title>Project</title>
      <Navbar4/>
      <Grids/>
      <SecondGrid/>
      </div>
     
  
    );
  }
}

export default App4;