import React,{useEffect,useState} from 'react'
import {useHistory} from 'react-router-dom'
import './view_product.css'

export default function Viewproduct({match , props}) {

    
    let data = require('../assets/products.json')
    let index = match.params.index
    
    let [productdata , set] = useState({
        name : '',
        price:'',
        des:'',
        image:'',
        stock:''
    })
  
    console.log(match)
    
useEffect(() => {
    let productarr = data[index]
    let productDetails = productarr.find(product => product.id === `${match.params.product}`);
   
    set({...productdata,name:productDetails.tital,price:productDetails.price,des:productDetails.description,image:productDetails.image , stock:productDetails.inStock})
}, [match.params])

let history = useHistory()

const totop = ()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
      
    return (
        <>
            {/* {productdata.name}{productdata.price} {productdata.des} 
            <img src={productdata.image} alt=""/> */}


            <div id="view_product_container">
                <div id="view_product_image">
                <img src={productdata.image} alt="" id="product_img"/>
                </div>
                <div id="view_product_details">
                    <div id="vp_title">{productdata.name}</div>
                    <div id="vp_des">{productdata.des}</div>
                    <div id="vp_price">Rs {productdata.price}.00 <span id={productdata.stock ? 'vp_in' : 'vp_out'}>{productdata.stock ? 'in stock' : 'out of stock'}</span></div>
                    <button id="vp_goBack" onClick={()=> history.goBack()}>  <i class="ar-up" id="vp-back"></i>  Go back</button>
                </div>
            </div>
        </>
    )
}
