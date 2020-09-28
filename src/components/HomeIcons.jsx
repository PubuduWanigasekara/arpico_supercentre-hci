import React from 'react'
import  Tag from '../assets/tag.svg'
import  Star from '../assets/star.svg'
import  Deliver from '../assets/deliver.svg'
import Creditcard from '../assets/creditcard.svg'
import './iconcontainer.css'
export default function HomeIcons() {
    return (
        <>

        <div id="icon_container">
            <div id="icon_img"><img src={Tag} alt=""/>
            <div id="text">
            + 8,000 products
                </div>
                <div id="text_sub">
                Home needs,Electronics etc
                </div>
                </div>
            <div id="icon_img"><img src={Star} alt=""/>
            <div id="text">
            More than 20 Categories
                </div>
                <div id="text_sub">
                Meats, Grocery Items
                </div></div>
            <div id="icon_img"><img src={Deliver} alt=""/>
            <div id="text">
            Doorstep delivery
                </div>
                <div id="text_sub">
                24 Hours Delivery
                </div></div>
            <div id="icon_img"><img src={Creditcard} alt=""/>
            <div id="text">
            Earn Privilege Points
                </div>
                <div id="text_sub">
                100% guarantee
                </div></div>
        </div>
            
        </>
    )
}
