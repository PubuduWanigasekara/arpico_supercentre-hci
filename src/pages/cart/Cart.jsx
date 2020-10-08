import React, { useEffect, useState } from "react";
import CartProductCard from "../../components/CartProductCard";

export default function Cart() {
  const maindiv = {
    backgroudColor: "red",
    hight: "100px",
    margin: "70px",
  };
  const rightdiv = {
    display: "inline",
    float: "right",
    borderRadius: "10px",
    border: "3px solid #1A2572",
    width: "55%",
  };
  const leftdiv = {
    display: "inline",
    float: "left",
    // backgroundColor: "red",
    borderRadius: "10px",
    border: "3px solid #1A2572",
    width: "40%",
  };

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
        <h3>Home/My CART</h3>
        <div style={maindiv}>
          {/* left */}
          <div style={leftdiv}>
            <div>
              <h5>Shipping Address</h5>

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
              <h5>Shipping Methods</h5>
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
          <div style={rightdiv}>
            <h5>Order Summary</h5>
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
