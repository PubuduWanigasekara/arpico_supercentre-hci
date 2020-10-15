import React from 'react'
import {useHistory} from 'react-router-dom'

export default function ProductCard(props) {

    const history = useHistory();

    let product = {
        title:props.title,
        price:props.price,
        description:props.des,
        image:props.img,
        stock:props.stock,
        id:props.id,
        index:props.index
    }
    return (
        <div id="cardBase">
            <div id="card_container">
                {!product.stock && <div id="stock_status">out of stock</div>}
                <img src={product.image} alt=""/>
                
                <div id="card_title">
                    {product.title}
                </div>
                <div id="card_des">
                {product.description}
                </div>
                <div id="card_price">
                Rs {product.price}.00 
                </div>
                <div id="card_quantity">
                    <button id="card_round_btn">
                        -
                    </button>
                    <input type="text" name="" value="1" id="card_number"/>
                        <button id="card_round_btn">
                            +
                        </button>
                </div>

                <div id="card_controllers">
                <button id="card_r_view" onClick={()=> history.push(`view/${product.index}/${product.id}`)}>
                    view
                </button>
                    <button id="card_r_wishlist">
+
                    </button>
                </div>
            </div>
        </div>
    )
}
