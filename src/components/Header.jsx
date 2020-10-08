import React, { useEffect , useState } from 'react'
import {motion , AnimatePresence} from 'framer-motion'
import Logo from '../assets/logo.svg'
import {Link} from "react-router-dom";

export default function Header(props) {



    let [mobmenu, setmobmenu] = useState(false);
    let [propmenu, setpropMenu] = useState(false);

    let isLogged = true;

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


    const toggleProfile = ()=>{
        setpropMenu(!propmenu);
    }

    const linkstyle = {
        textDecoration: 'none'
    }

    return (
        <div>
            <div id="navbar">
                <div id="logo">
                    <img src={Logo} alt="" style={logo} />
               </div>
                <div id="links">

                    <ul style={{display: !mobmenu ? 'flex' : 'none'}}>
                        <li><Link style={linkstyle} to="/">Home</Link></li>
                        <li><Link style={linkstyle} to="/contact-us">Contact us</Link></li>
                        <li><Link style={linkstyle} to="/faq">Faq</Link></li>
                        {isLogged ? <>
                            <li><button id="profile" >
                            <i  class="ar-propic"></i> 
                         </button>
                         <i class="ar-down-1 hover" onClick={toggleProfile} ></i> 
                         </li>
                         <li id="cart_li">
                             <i class="ar-bag" id="bag"></i>
                             <div id="cart_total">20</div>
                             </li>
                        </> :  <li><Link style={linkstyle} to="/login" ><button className="button primary outline login">login</button></Link></li>}
                       
                        

                    </ul>
                    <AnimatePresence initial={{ opacity: 0 , y:0 }}
            animate={{ opacity: 1 }}
            exit={{  opacity: 0  , y:20 }}>
                {propmenu ? <>
                    <motion.div id="user_menu" initial={{ opacity: 0 ,y:20 }}
            animate={{ opacity: 1 , y:0 }}
            exit={{ opacity: 0 , y:20 }}
            transition ={{
                duration: 0.3,
              }}
            >
                        <motion.li><i class="ar-user pro_icons"></i>profile</motion.li>
                        <motion.li><i class="ar-logout pro_icons2"></i>Log out</motion.li>
                    </motion.div>
                     </>:<> </>}
                     </AnimatePresence>
                     
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
