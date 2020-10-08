import React from 'react'
import './categories.css'
import {motion } from 'framer-motion'

export default function Categories(props) {
    return (
        <>
            <div id="cat_container">

                <button onClick={()=> props.openCat()} id="pop_close_btn">
                    <i class="ar-plus"></i>
                </button>

                <motion.div id="cat_base" animate={{y:0}} initial={{y:50}} staggerChildren={100}>
                    <motion.div>1</motion.div>
                    <motion.div>2</motion.div>
                    <motion.div>3</motion.div>
                    <motion.div>1</motion.div>
                    <motion.div>2</motion.div>
                    <motion.div>3</motion.div>
                </motion.div>
               
            </div>
        </>
    )
}
