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

              <div>
                <label>First Name : </label>
                <input id="Cartlabel" type="text" placeholder="" />
                <br />
                <label>Last Name : </label>
                <input id="Cartlabel" type="text" placeholder="" />
                <br />
                <label>Address : </label>
                <input id="Cartlabel" type="text" placeholder="" />
                <br />
                <label>Phone Number : </label>
                <input id="Cartlabel" type="text" placeholder="" />
                <br />
              </div>
            </div>
            <div>
              <h5 id="cart_subtitle">Shipping Methods</h5>
              <div id="cartbuttonsdiv">
                <button className="button primary filled">LKR350.00</button>
                <button className="button primary filled">
                  Arpico Delivery
                </button>
                <button className="button primary filled">
                  Arpico Doorstep delivery
                </button>
              </div>
              <button className="button primary filled">Next</button>
            </div>
          </div>
          {/* right */}
          <div id="cart_right_div">
            <h5 id="cart_subtitle">Order Summary</h5>
            <div>
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
