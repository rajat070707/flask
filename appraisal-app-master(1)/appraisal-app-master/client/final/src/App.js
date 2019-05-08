import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";

import Navbar from './components/layout/navbar';
import LogIn from "./components/auth/Login";
import './index.css';

class App extends Component {


  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <LogIn/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
