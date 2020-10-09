import React, { useEffect, useState } from "react";
import CartProductCard from "../../components/CartProductCard";

export default function Cart() {
  //   cart
  let [data, Setdata] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("cartItems"))) {
      console.log("1");
      Setdata(JSON.parse(localStorage.getItem("cartItems")));
    } else {
      console.log("0");
    }
  }, []);

  let sdata = {
    name: "test",
    price: 300,
    qty: 2,
  };

  const add = () => {
    Setdata([...data, sdata]);

    console.log(data);
  };

  const remove = (itm) => {
    data.splice(itm, 1);
  };

  return (
    <>
      <div id="container">
        <h3 id="cart_ttitle">Shopping Cart</h3>
        <div id="cartmaindiv">
          {/* left */}
          <div id="cart_left_div">
            <div>
              <h5 id="cart_subtitle">Shipping Address</h5>

              <form id="cart_form">
                <label id="cart_label">First Name : </label>
                <input id="cart_input" type="text" placeholder="" />

                <label id="cart_label">Last Name : </label>
                <input id="cart_input" type="text" placeholder="" />

                <label id="cart_label">Address : </label>
                <input id="cart_input" type="text" placeholder="" />

                <label id="cart_label">Phone Number : </label>
                <input id="cart_input" type="text" placeholder="" />
              </form>
            </div>
            <div>
              <h5 id="cart_subtitle">Shipping Methods</h5>
              <div id="cartbuttonsdiv">
                <button className="button primary cart_button">
                  LKR350.00
                </button>
                <button className="button primary cart_button">
                  Arpico Delivery
                </button>
                <button className="button primary cart_button">
                  Arpico Doorstep delivery
                </button>
              </div>
              {/* <button className="button primary ">Next</button> */}
            </div>
          </div>
          {/* right */}
          <div id="cart_right_div">
            <h5 id="cart_subtitle">Order Summary</h5>
            <div id="c_items_div">
              {data.map((it, index) => {
                return (
                  <CartProductCard
                    removeItem={() => remove}
                    key={index}
                    item={index}
                    name={it.name}
                    price={it.price}
                    qty={it.qty}
                  />
                );
              })}

              <button onClick={add}>test</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
