import React, { useState } from 'react'
import { ReactComponent as Cat_btn } from '../../assets/category_btn.svg'
import { ReactComponent as Search_btn } from '../../assets/search_btn.svg'
import { ReactComponent as Down } from '../../assets/down.svg'
import Hero_right from '../../assets/hero_right.svg'
import Location from '../../components/Location'
import { motion, AnimatePresence } from "framer-motion"
import ProductCard from '../../components/ProductCard'
import HomeIcons from '../../components/HomeIcons'
import Categories from '../../components/Categories'


export default function Home() {


    let [loc, setLoc] = useState('Hydepark corner');
    let [open, setopen] = useState(false);
    let [catopen, setCatopen] = useState(false);

    const locationUpdate = (location) => {
        setLoc(loc = location);
        setopen(open = !open);
    }

    const locationToggle = () => {
        setopen(open = !open);
    }

    const catToggle = ()=>{
        setCatopen(!catopen);
        window.scrollTo({ top: 0, behavior: `smooth` });

        if(catopen == false){
            document.body.style.overflow = 'hidden'; 
        }else{
            document.body.style.overflow = ''; 
        }
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
                    <Cat_btn id="cat_btn" onClick={catToggle} /> <div id="separator"></div> <Search_btn id="search_btn" /><input type="text" name="" id="search" />
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
            <AnimatePresence>
            {catopen && 
            <motion.section id="cat_section" initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} transition={0.3}>
                 < Categories openCat={catToggle}/>
          
            </motion.section> }
            </AnimatePresence>

            {/* recent products */}
            <section id="recentProducts">
               <div id="recent_title">
               Recent products
               </div>
        <section id="recent_container">
        <ProductCard title="sample" des="description 1" price={100}/>
        <ProductCard title="sample 1" des="description 2" price={200}/>
        <ProductCard title="sample 2" des="description 3" price={300}/>
        <ProductCard title="sample 3" des="description 4" price={400}/>
        
        </section>
</section>


<section id="home_icons">
    <HomeIcons/>
</section>
        </div>
    )
}
