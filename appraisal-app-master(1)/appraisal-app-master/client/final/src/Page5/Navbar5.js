import React from 'react';
import {Link} from 'react-router-dom';
import "./Navbar5.css";

const Navbar5=()=>{
    return(
        <nav className="nav">
            <div className="nav-container">     
              <div className="nav-wrapper">
          <ul id="nav-mobile" className=" hide-on-med-and-down"></ul>
             <div className="left brand-logo">Nineleaps</div>
             <ul className="right">
                    <li><a href="#">LogOut</a></li>
                    </ul>
            
            </div>
            </div>
 
        </nav>
       
    )
}
export default Navbar5;