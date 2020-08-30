import React from 'react'
import {ReactComponent as Cat_btn} from '../../assets/category_btn.svg'
import {ReactComponent as Search_btn} from '../../assets/search_btn.svg'
import Hero_right from '../../assets/hero_right.svg'

export default function Home() {
    return (
        <div id="container">
            <div id="hero">
                <div id="left">
                <div id="herotext">
                    <span className="intro">Shop with confidence</span>
                    <span className="intro_sub">Search our entire store in  <span id="location">Hydepark corner</span><span id="drop">▼</span></span>
                </div>

                <div id="search_container">
                 <Cat_btn id="cat_btn"/> <Search_btn id="search_btn"/><input type="text" name="" id="search"/>
                </div>
                </div>
                <div id="right">
                    <img src={Hero_right} alt="" id="hero_right" />
                </div>
            </div>
        </div>
    )
}
