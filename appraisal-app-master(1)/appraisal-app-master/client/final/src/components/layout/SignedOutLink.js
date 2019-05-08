import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedOutLinks=()=>{
    return(
        <ul className="right">
            <li><NavLink to='/login'><b>LOGIN</b></NavLink></li>
        </ul>
    )
}


export default SignedOutLinks;