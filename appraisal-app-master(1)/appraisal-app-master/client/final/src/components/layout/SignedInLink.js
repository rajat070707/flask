import React from 'react'
import {Link} from 'react-router-dom'

const SignedInLinks=()=>{
    return(
        <ul className="right navbar-toggle">
            <li><Link to='/'><b>ABOUT</b></Link></li>

        </ul>
    )
}


export default SignedInLinks;