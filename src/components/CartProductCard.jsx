import React, { useEffect, useState } from "react";

export default ({key,item,name,price,qty,removeItem})=> {
  return (
    <div id="c_cardBase">
      <div id="c_card_container">
        <div id="c_card_img_container">
          <img id="c_img" src="https://images.all-free-download.com/images/graphicthumb/two_green_apple_hd_picture_167248.jpg" alt="" />
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
