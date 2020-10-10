import React from 'react';

export default function Signup() {
    return (
        <>
           <div id="login_container">
           <div id="login_form">
               <div id="inputs">
                   <span id="title">
                   Sign up
                   </span>
                    {/* <Mail id="icons" className="mail"/> */}
                   <input type="email" name="email" id="email" placeholder="email"/>
                   {/* <Pass id="icons" className="pass"/> */}
                   <input type="password" name="password" id="password"/>
                   <input type="password" name="password" id="password"/>
                   <input type="password" name="password" id="password"/>
                   <input type="password" name="password" id="password"/>
                   <button>Register</button>
               </div>
           </div>
        </div> 
        </>
    )
}
