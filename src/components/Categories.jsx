import React, { useState } from 'react'
import './categories.css'
import { motion, AnimatePresence } from 'framer-motion'

import child from '../assets/child.png'
import crab from '../assets/crab.png'
import electronics from '../assets/electronics.png'
import frozen from '../assets/frozen.png'
import fruits from '../assets/fruits.png'
import furniture from '../assets/furniture.png'
import gros from '../assets/gros.png'
import house from '../assets/house.png'
import meat from '../assets/meat.png'
import vege from '../assets/vege.png'


export default function Categories(props) {

    let [title, set] = useState('')

    const container = {
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.12
            }
        }
    }

    const item = {
        hidden: { opacity: 0 , scale:0 },
        show: { opacity: 1 , scale:1 }
    }


    return (
        <>
            <div id="cat_container">

                <button onClick={() => props.openCat()} id="pop_close_btn">
                    <i class="ar-plus"></i>
                </button>

                <motion.div id="cat_base" variants={container} initial="hidden" animate="show">
                    <motion.div variants={item} > <div id="catbase_item" onMouseOver={() => set('Groceries')} onMouseLeave={() => set('')}>         <img id="cat_img_list" src={gros} alt="" />  </div> </motion.div>
                    <motion.div variants={item} > <div id="catbase_item" onMouseOver={() => set('Household')} onMouseLeave={() => set('')}      >    <img id="cat_img_list" src={house} alt="" />  </div> </motion.div>
                    <motion.div variants={item} > <div id="catbase_item" onMouseOver={() => set('Vegetables')} onMouseLeave={() => set('')}     >    <img id="cat_img_list" src={vege} alt="" />  </div> </motion.div>
                    <motion.div variants={item} > <div id="catbase_item" onMouseOver={() => set('Fruits')} onMouseLeave={() => set('')}         >    <img id="cat_img_list" src={fruits} alt="" />  </div> </motion.div>
                    <motion.div variants={item} > <div id="catbase_item" onMouseOver={() => set('Fresh Meats')} onMouseLeave={() => set('')}    >        <img id="cat_img_list" src={meat} alt="" />  </div> </motion.div>
                    <motion.div variants={item} > <div id="catbase_item" onMouseOver={() => set('Fresh Sea Foods')} onMouseLeave={() => set('')}>        <img id="cat_img_list" src={crab} alt="" />  </div> </motion.div>
                    <motion.div variants={item} > <div id="catbase_item" onMouseOver={() => set('Frozen items')} onMouseLeave={() => set('')}   >            <img id="cat_img_list" src={frozen} alt="" />  </div> </motion.div>
                    <motion.div variants={item} > <div id="catbase_item" onMouseOver={() => set('Child items')} onMouseLeave={() => set('')}    >            <img id="cat_img_list" src={child} alt="" />  </div> </motion.div>
                    <motion.div variants={item} > <div id="catbase_item" onMouseOver={() => set('Electronics')} onMouseLeave={() => set('')}    >            <img id="cat_img_list" src={electronics} alt="" />  </div> </motion.div>
                    <motion.div variants={item} > <div id="catbase_item" onMouseOver={() => set('Furniture')} onMouseLeave={() => set('')}      >        <img id="cat_img_list" src={furniture} alt="" />  </div> </motion.div>
                </motion.div>

                <AnimatePresence initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ delay: 1 }} >
                    <div id="cat_detail">
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: "spring", stiffness: 100, delay: 0.5 }}>{title}</motion.div>
                    </div>
                </AnimatePresence>
            </div>
        </>
    )
}
