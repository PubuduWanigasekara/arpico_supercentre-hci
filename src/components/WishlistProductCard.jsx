// import React, { useEffect, useState } from "react";
import React from "react";

export default ({name,key,qty,price,item,remove,addToCartOneByOne})=>(
    <div id="w_cardBase">
      <div id="w_card_container">
        <div id="w_card_img_container">
          <img id="w_img" src="https://images.all-free-download.com/images/graphicthumb/two_green_apple_hd_picture_167248.jpg" alt="" />
        </div>
        <div id="w_card_product_details_container">
          <div id="w_card_des">
            {name} {key} <div id="w_card_number">{qty}X</div>
          </div>
          <div id="w_card_price">LKR {price}</div>
        </div>
        <div>
          <div id="card_controllers">
            <button id="w_card_r_button" onClick={()=>addToCartOneByOne(item)}>
              <i class="ar-deliver w_card_r_button_cart_icon"></i>
            </button>
            <button id="w_card_r_button" onClick={() => remove(item)}>
              <i class="ar-remove w_card_r_button_remove_icon"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
)