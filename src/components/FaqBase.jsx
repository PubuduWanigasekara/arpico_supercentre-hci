import React, { useState , useEffect} from 'react'
import './faqBase.css'
import { motion, AnimatePresence } from 'framer-motion'

export default function FaqBase(props) {

    let [open, setOpen] = useState(false)

    const handleToggle = () =>{
        setOpen(!open);
        props.activecheck(props.number);
    }

        useEffect(()=>{
            if(props.number == props.item){
                setOpen(true);
            }else{
                setOpen(false);
            }
        },[props])

    return (
        <>
            
            <AnimatePresence initial={false} exit={{opacity:0}} transition={{delay:1}} >
               
                    <motion.div


                        id="faq_item" className={open ? 'faq_open' : ''}>
                        <div id="faq_controls">
                            <div className="faq_title">
                                Q{props.number} : {props.question}
                    </div>
                            <div id="faq_icon">
                                <i class="ar-plus faq_btn" onClick={handleToggle} style={open ? {transform:"rotate(45deg)"} : {}}></i>
                            </div>
                        </div>
                        {open &&
                            <motion.div initial={{ opacity: 0 , y:10}}
                            animate={{ opacity: 1 , y:0 }}
                            exit={{  opacity: 0  }}
                            transition={{ type: "spring", stiffness: 100 , delay:0.5}}
                            
                            
                            id="faq_des">
                               {props.children}
                    </motion.div>
                        }
                    </motion.div>
           
            </AnimatePresence>
        </>
    )
}
