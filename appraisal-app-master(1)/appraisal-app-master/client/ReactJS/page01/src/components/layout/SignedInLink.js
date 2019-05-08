import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedInLinks=()=>{
    return(
        <ul className="right navbar-toggle">
            <li><NavLink to='/'><b>ABOUT</b></NavLink></li>

        </ul>
    )
}


export default SignedInLinks;