import React, { useState } from 'react'
import { ReactComponent as Cat_btn } from '../../assets/category_btn.svg'
import { ReactComponent as Search_btn } from '../../assets/search_btn.svg'
import { ReactComponent as Down } from '../../assets/down.svg'
import Hero_right from '../../assets/hero_right.svg'
import Location from '../../components/Location'
import { motion, AnimatePresence } from "framer-motion"
import ProductCard from '../../components/ProductCard'

export default function Home() {

    let [loc, setLoc] = useState('Hydepark corner');
    let [open, setopen] = useState(false);

    const locationUpdate = (location) => {
        setLoc(loc = location);
        setopen(open = !open);
    }

    const locationToggle = () => {
        setopen(open = !open);
    }


    return (
        <div id="container">


            {/* hero section */}

            <div id="hero">
                <div id="left">
                    <div id="herotext">
                        <span className="intro">Shop with confidence</span>
                        <span className="intro_sub">Search our entire store in  <span id="location">{loc}</span><Down id="drop" onClick={locationToggle} className={open ? 'rotate' : null} /></span>
                    </div>

                    <div id="search_container">
                        <Cat_btn id="cat_btn" /> <Search_btn id="search_btn" /><input type="text" name="" id="search" />
                    </div>
                </div>
                <AnimatePresence>
                    <motion.div id="right" >

                        {!open && <motion.img src={Hero_right} alt="" id="hero_right" initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }} />}

                       {open && <motion.div initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                        <Location updatelocation={locationUpdate} />
                        </motion.div>}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* recent products */}
            <section id="recentProducts">
               <div id="recent_title">
               Recent products
               </div>
        <section id="recent_container">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        </section>
</section>
        </div>
    )
}
