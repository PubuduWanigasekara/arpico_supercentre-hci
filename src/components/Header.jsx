import React, { useEffect , useState } from 'react'
import {motion} from 'framer-motion'
import Logo from '../assets/logo.png'
import {Link} from "react-router-dom";

export default function Header() {

    

    let [mobmenu, setmobmenu] = useState(false);

    useEffect(() => {

     
            const width = window.innerWidth;

            if (width < 780) {
              
                setmobmenu( mobmenu = true);
                console.log(mobmenu);
            } else {
                setmobmenu( mobmenu = false);
                console.log(mobmenu);
            }
        

        window.onresize = () => {
            const width = window.innerWidth;

            if (width < 780) {
              
                setmobmenu( mobmenu = true);
                console.log(mobmenu);
            } else {
                setmobmenu( mobmenu = false);
                console.log(mobmenu);
            }

        }
    });

    const logo = {
            width:'120px'
    }

    const linkstyle = {
        textDecoration: 'none'
    }

    return (
        <div>
            <div id="navbar">
                <div id="logo">
                    <img src={Logo} alt="" style={logo}/>
               </div>
                <div id="links">

                    <ul style={{display: !mobmenu ? 'flex' : 'none'}}>
                        <li><Link style={linkstyle} to="/home">Home</Link></li>
                        <li><Link style={linkstyle} to="/contact-us">Contact us</Link></li>
                        <li><Link style={linkstyle} to="/faq">Faq</Link></li>
                        <li><Link style={linkstyle} to="/login" ><button className="button primary outline login">login</button></Link></li>
                    </ul>
                   
                </div>
            </div>

            {/* <div id="mobnav">

            </div> */}
            {mobmenu && <motion.div  
            initial={{opacity:0.5}}
            exit={{ opacity: 0.5 }}
            whileHover={{ scale: 1.1 , opacity:1}}
            whileTap={{ scale: 0.9 ,opacity:1}}
            id="mobnavBtn">
                M
            </motion.div>}
            
        </div>
    )
}
