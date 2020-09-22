import React, { useEffect , useState } from 'react'
import {ReactComponent as Mail_icon} from '../assets/mail.svg'
import {ReactComponent as Visa} from '../assets/visa.svg'
import {ReactComponent as Master} from '../assets/mastercard.svg'
import {ReactComponent as Fb} from '../assets/facebook.svg'
import {ReactComponent as Tw} from '../assets/twitter.svg'
import {ReactComponent as Ins} from '../assets/instagram.svg'
import Logo from '../assets/logo.png'



export default function Footer() {

    
    let year = new Date().getFullYear();
    

    useEffect(() => {

      
     
        
    });

    const logo = {
            width:'120px'
        
    }

    return (
        <>
            <div id="footer">
               <div id="footer_top">
                   <div id="logo">
                   <img src={Logo} alt="" style={logo}/>
                   </div>
                   <div id="subs">
                       <Mail_icon id="mail_icon"/>
                  <input type="email" name="" id="subscribe_bar" placeholder="Enter your email address"/>
                 <button className="button primary filled sub_btn">Subscribe</button>
                   </div>
               </div>


               <div id="footer_links">
                  
                      
                       <ul>
                           <li> Explore</li>
                           <li>Home</li>
                           <li>About Us</li>
                           <li>Contact Us</li>
                           <li>Store Locations</li>
                         
                       </ul>

                       <ul>
                           <li> POLICY STATEMENT</li>
                           <li>Home</li>
                           <li>About Us</li>
                           <li>Contact Us</li>
                           <li>Store Locations</li>
                         
                       </ul>

                       <ul>
                           <li>SUPPORT</li>
                           <li>Home</li>
                           <li>About Us</li>
                           <li>Contact Us</li>
                           <li>Store Locations</li>
                         
                       </ul>
                       <ul>
                           <li>SHOP LOCATION</li>
                           <li>Home</li>
                           <li>About Us</li>
                           <li>Contact Us</li>
                           <li>Store Locations</li>
                         
                       </ul>
                    
               </div>

               <div id="footer_bottom">
                   <div id="f_left">
                    <div id="pay_cards">
                        <Visa  id="pay_card"/>
                        <Master id="pay_card"/>
                    </div>
                    <div id="copyright">
                    Copyright © {year}. Richard Pieris & Company PLC
                    </div>
                   </div>
                   <div id="f_right">
                        <div id="social">
                        <Fb id="s_links"/>
                        <Tw id="s_links"/>
                        <Ins id="s_links"/>
                        </div>
                   </div>
               </div>
            </div>
        </>
    )
}
