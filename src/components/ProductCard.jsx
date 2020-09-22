import React from 'react'

export default function ProductCard() {
    return (
        <div id="cardBase">
            <div id="card_container">
                <img src="http://lorempixel.com/270/200/food/" alt=""/>
                <div id="card_title">
                    sample
                </div>
                <div id="card_des">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </div>
                <div id="card_price">
                    LKR 200
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
                <button id="card_r_view">
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
