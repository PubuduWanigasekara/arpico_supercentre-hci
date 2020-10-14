import React, { useEffect, useState } from "react";

export default ({key,item,name,price,qty,removeItem})=> {
  return (
    <div id="w_cardBase">
      <div id="w_card_container">
        <div id="c_card_img_container">
          <img id="c_img" src="http://lorempixel.com/270/200/food/" alt="" />
        </div>
        <div id="w_card_product_details_container">
          <div id="c_card_des">
            {name} {key} <div id="c_card_number">{qty}X</div>
          </div>
          <div id="c_card_price">{price} LKR</div>
        </div>
        <div>
          <div id="cart_controllers">
            <button id="c_card_r_button" onClick={() => removeItem(item)}>
              <i class="ar-remove c_card_r_button_remove_icon"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
