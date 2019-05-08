import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar"
import Card from "./cards";

class App3 extends Component {

  render() {
    return (
      <div className="App3">
        <title>IMPACT PAGE</title>
       <div className="app_container">
         <Navbar/>
          <Card/>
          </div>
      </div>
    );
  }
}
export default App3;