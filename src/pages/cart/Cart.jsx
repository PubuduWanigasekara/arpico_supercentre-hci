import React, { useEffect, useState, useContext } from "react";
import CartProductCard from "../../components/CartProductCard";
import { AppContexts } from "../../contexts/AppContextsProvider";
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Cart() {
  //   cart
  let [total, Settotal] = useState(0);
  const {cartitems, setcartitems} = useContext(AppContexts);
  var t=0;
  useEffect(() => {
    for(var i=0;i<cartitems.length;i++){
      t = t+ cartitems[i].qty*cartitems[i].price
      console.log(t);
      Settotal(t);
      console.log(total);
    }
  }, []);



  let sdata = {
    id: 4,
    name: "test",
    price: 300,
    qty: 2,
    isAddedToCart: true
  };

  const add = () => {
    setcartitems([...cartitems, sdata]);
    console.log(cartitems);
  };

  const remove = (id) => {
    var message = '';
    console.log(id);
    setcartitems(cartitems.filter(item => {
      if(item.id != id){
        return item;
      }else{
        message = item.name;
        var subTot = total-(item.qty*item.price);
        Settotal(subTot)
      }
    }));
    toast.error("You removed "+message+" from wish list",{position: toast.POSITION.BOTTOM_RIGHT});
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
                  LKR{total}
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
              {cartitems.map((it, index) => {
                return (
                  <CartProductCard
                    key={index}
                    item={it.id}
                    name={it.name}
                    price={it.price}
                    qty={it.qty}
                    removeItem={(itm) => remove(itm)}
                  />
                );
              })}

              <button onClick={add}>test</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
