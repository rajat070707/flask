import React, { Component } from 'react';
import Navbar from "./Navbar";
import Cards from "./cards";
import Details from './details';


class App2 extends Component {

  handleClick=()=>{
    window.location.href="http://localhost:3000/";
}

handleImpact=()=>{
    window.location.href="http://localhost:3000/";
}
 render() {
    return (
    <div className="App">
      <title>Home</title>
      <Navbar/>
      <Details/>
      <Cards/>
      </div>
     
  
    );
  }
}

export default App2;
