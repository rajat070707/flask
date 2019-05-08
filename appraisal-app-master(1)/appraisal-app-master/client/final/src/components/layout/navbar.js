import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLink'
import SignedOutLinks from './SignedOutLink'
const Navbar=()=>{
    return(
        <nav className="nav">
        <div className="nav-wrapper">
          <ul id="nav-mobile" className=" hide-on-med-and-down"></ul>
             <Link to='/' className="left brand-logo">Nineleaps</Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            
            </div>
        </nav>
      
    )
}



export default Navbar;