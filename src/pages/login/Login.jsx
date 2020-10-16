import React from 'react'
import './login.css'
import {ReactComponent as Mail} from '../../assets/mailico.svg'
import {ReactComponent as Pass} from '../../assets/pass.svg'


export default function Login(props) {
    return (
        <>

        <div id="login_container">
           <div id="login_form">
               <div id="inputs">
                   <span id="title">
                   
                   <h3 id="cart_ttitle">Sign In</h3>
                   </span>
                    {/* <Mail id="icons" className="mail"/> */}
                   <input type="email" name="email" id="email" placeholder="Enter your email"/>
                   {/* <Pass id="icons" className="pass"/> */}
                   <input type="password" name="password" id="password" />
                   <button onClick={()=>props.logSet(false)}>Login</button>
               </div>
           </div>
        </div>
            
        </>
    )
}
