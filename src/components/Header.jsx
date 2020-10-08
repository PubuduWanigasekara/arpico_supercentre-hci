import React, { useEffect , useState } from 'react'
import {motion} from 'framer-motion'
import Logo from '../assets/logo.svg'
import {Link} from "react-router-dom";
import {useHistory} from 'react-router-dom'

export default function Header(props) {



    let [mobmenu, setmobmenu] = useState(false);

    const history = useHistory();
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
            width:'120px',
            cursor:'pointer'
    }

    const linkstyle = {
        textDecoration: 'none'
    }

    const navHome = ()=>{
        
        history.push("/");
    }

    const totop = ()=>{
        window.scrollTo(0,0);
    }
    return (
        <div>
            <div id="navbar">
                <div id="logo">
                    <img src={Logo} alt="" style={logo} onClick={navHome}/>
               </div>
                <div id="links">

                    <ul style={{display: !mobmenu ? 'flex' : 'none'}}>
                        <li><Link style={linkstyle} to="/home">Home</Link></li>
                        <li><Link style={linkstyle} to="/contact-us">Contact us</Link></li>
                        <li><Link style={linkstyle} to="/faq">Faq</Link></li>
                        {!props.isLogged ? <>
                            <li><button id="profile">
                            <i class="ar-propic"></i> 
                         </button>
                         <i class="ar-down-1"></i> 
                         </li>
                         <li id="cart_li">
                             <i class="ar-bag" id="bag"></i>
                             <div id="cart_total">20</div>
                             </li>
                        </> :  <li><Link style={linkstyle} to="/login" ><button className="button primary outline login">login</button></Link></li>}
                       
                        

                    </ul>

                    {/* <div id="user_menu">
                        <li>profile</li>
                        <li></li>
                    </div> */}
                   
                </div>
            </div>

            {/* <div id="mobnav">

            </div> */}
            {mobmenu && <motion.div  
            initial={{opacity:0.5}}
            exit={{ opacity: 0.5 }}
            whileHover={{ scale: 1.1 , opacity:1}}
            whileTap={{ scale: 0.9 ,opacity:1} , totop}
            id="mobnavBtn">
                <i class="ar-up"></i>
            </motion.div>}
            
        </div>
    )
}
