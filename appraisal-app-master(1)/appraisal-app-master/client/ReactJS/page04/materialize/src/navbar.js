import React from 'react'
import {Link} from 'react-router-dom'



const Navbar=()=>{
    return(
        <nav className="nav-wwrapper blue darken-3">
           <div className="container">
                <a href="#" className= "Brand-logo left">NINELEAPS</a>
                <ul className="right">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
        </nav>
        
    )
}



export default Navbar;