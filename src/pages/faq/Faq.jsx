import React, { useState } from 'react'
import './faq.css'
import { motion, AnimatePresence } from 'framer-motion'
import Faqbase from '../../components/FaqBase'

export default function Faq() {

    let [status, setStatus] = useState()

    const setActive =(item)=>{
        setStatus(item)
    }


    return (
        <>
            <div id="faq_search_c">
                <div id="faq_search_bar">
                    <input type="text" />
                </div>
            </div>

            <div id="faq_container">

                {/* 
                
                - pass the question number as number prop 
                - question as question prop
                - answer inside the faqbase as a child 
                
                */}

                <Faqbase activecheck={setActive}  item={status}  number={1} question={'whats your name ?'}>

                    im gota
                </Faqbase>

                <Faqbase activecheck={setActive}  item={status}  number={2} question={'who is your elder brother ?'}>

                    mahinda rajapaksha
                </Faqbase>
                </div>
           
        </>
    )
}
