import React, { useEffect , useState , useRef} from 'react'
import {motion , AnimatePresence} from 'framer-motion'
import Logo from '../assets/logo.svg'
import {Link} from "react-router-dom";
import {useHistory , useLocation} from 'react-router-dom'

export default function Header(props) {



    let [mobmenu, setmobmenu] = useState(false);
    let [propmenu, setpropMenu] = useState(false);
    
    
    const history = useHistory();
    const location = useLocation();
    let focus = useRef();
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


    const toggleProfile = ()=>{
        setpropMenu(!propmenu);
    }

    const linkstyle = {
        textDecoration: 'none',
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
                        <li><Link style={linkstyle} to="/">Home</Link></li>
                        <li><Link style={linkstyle} to="/contact-us">Contact us</Link></li>
                        <li><Link style={linkstyle} to="/faq">Faq</Link></li>
                        {!props.isLogged ? <>
                            <li><button id="profile">
                            <i class="ar-propic"></i> 
                         </button>
                         <i class="ar-down-1 hover" onClick={toggleProfile} ></i> 
                         </li>
                         <li id="cart_li" onClick={()=> history.push('/cart')}>
                             <i class="ar-bag" id="bag"></i>
                             <div id="cart_total">20</div>
                             </li>
                        </> :  <li><Link style={linkstyle} to="/login" ><button className="button primary outline login">login</button></Link></li>}
                       
                        

                    </ul>
                    <AnimatePresence initial={{ opacity: 0 , y:0 }}
            animate={{ opacity: 1 }}
            exit={{  opacity: 0  , y:20 }}>
                {propmenu ? <>
                    <motion.div ref={focus} onMouseLeave={() => setpropMenu(false)} id="user_menu" initial={{ opacity: 0 ,y:20 }}
            animate={{ opacity: 1 , y:0 }}
            exit={{ opacity: 0 , y:20 }}
            transition ={{
                duration: 0.3,
              }}
            >
                        <motion.li><i class="ar-user pro_icons"></i><div id="text_profile">Profile</div></motion.li>
                        <motion.li><i class="ar-logout pro_icons_logout"></i><div id="text_profile">Log out</div></motion.li>
                    </motion.div>
                     </>:<> </>}
                     </AnimatePresence>
                     
                </div>

          
            </div>

             <div id="location_bar" style={location.pathname != '/' ? {display:''} : {display:'none'}}>
             
             <div onClick={()=> history.push('/')} style={{cursor:'pointer'}}>{props.home}&nbsp;</div> / <div onClick={()=> history.push(props.link)}>&nbsp;{props.name}</div> 
               
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
