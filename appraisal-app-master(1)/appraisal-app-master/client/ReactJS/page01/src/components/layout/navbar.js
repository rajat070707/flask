import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLink'
import SignedOutLinks from './SignedOutLink'
const Navbar=()=>{
    return(
        <nav className="nav-wwrapper blue darken-3">
          <div className="nav-container">
                <Link to='/' className="left brand-logo">NINELEAPS</Link>
                <SignedInLinks/>
                <SignedOutLinks/>
                </div>
        </nav>
    )
}



export default Navbar;