import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./navbar"
import Table from './Table'
import Pillar1 from './Pillar1'
import Pillar2 from './Pillars2';
import Pillar3 from './Pillar3';
import Pillar4 from './Pillars4';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Table/>
        <Pillar1/>
        <Pillar2/>
        <Pillar3/>
        <Pillar4/>
      </div>
    );
  }
}

export default App;
