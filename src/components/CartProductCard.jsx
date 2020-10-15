import React, { useEffect, useState } from "react";

export default ({ key, item, name, price, qty, removeItem }) => {
  return (
    <div id="c_cardBase">
      <div id="c_card_container">
        <div id="c_card_img_container">
          <img
            id="c_img"
            src="https://images.all-free-download.com/images/graphicthumb/two_green_apple_hd_picture_167248.jpg"
            alt=""
          />
        </div>

        <div id="c_card_product_details_container">
          <div id="c_card_des">{name}</div>
        </div>

        <div id="c_card_product_details_container2">
          <button id="card_round_btn">-</button>
          <input type="text" name="" value={qty} id="card_number" />
          <button id="card_round_btn">+</button>
        </div>

        <div id="c_card_product_details_container3">
          <div id="c_card_price">LKR{price} </div>
        </div>

        <div id="c_card_product_details_container4">
          <button id="c_card_r_button" onClick={() => removeItem(item)}>
            <i class="ar-remove c_card_r_button_remove_icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
