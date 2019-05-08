import React from 'react'
import {Link} from 'react-router-dom'
import Card from "./cards"



const Navbar=()=>{
    return(
        <div className="container s12 ">
        <nav className="nav-wwrapper blue darken-3">
           <div className="container">
                <a href="#" className= "Brand-logo">NINELEAPS</a>
                <ul className="right">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
        </nav>
        <Card/>
        </div>
        
    )
}



export default Navbar;