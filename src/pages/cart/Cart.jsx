import React, { useEffect, useState, useContext } from "react";
import CartProductCard from "../../components/CartProductCard";
import { AppContexts } from "../../contexts/AppContextsProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useHistory} from 'react-router-dom'

export default function Cart() {


  const history = useHistory();

  //   cart
  let [total, Settotal] = useState(0);
  const { cartitems, setcartitems } = useContext(AppContexts);
  let [addresshow, Setaddresshow] = useState("cart_d_none");
  let [toggal, Settoggal] = useState(true);
  var show = false;
  var t = 0;
  useEffect(() => {
    // localStorage.setItem('cartItems',JSON.stringify(cartitems))
    if (JSON.parse(localStorage.getItem("cartItems"))) {
      console.log("1");
      console.log(cartitems);
      setcartitems(JSON.parse(localStorage.getItem('cartItems')))
      window.addEventListener('storage', storageadd);

    } else {
      console.log("0");
    }

    for (var i = 0; i < cartitems.length; i++) {
      t = t + cartitems[i].qty * cartitems[i].price;
      console.log(t);
      Settotal(t);
      console.log(total);
    }
  }, []);

  const storageadd = () => { setcartitems(JSON.parse(localStorage.getItem('cartItems'))) }

  useEffect(() => {
    for (var i = 0; i < cartitems.length; i++) {
      t = t + cartitems[i].qty * cartitems[i].price;
      console.log(t);
      Settotal(t);
      console.log(total);
    }
  }, [cartitems]);

  let sdata = {
    id: 4,
    name: "test",
    price: 300,
    qty: 2,
    isAddedToCart: true,
  };

  const add = () => {
    setcartitems([...cartitems, sdata]);
    console.log(cartitems);
  };

  const togal = () => {
    if (show) {
      Setaddresshow("cart_d_none");
    } else {
      Setaddresshow("");
    }
    show = !show;
  };

  const remove = (id) => {
    var message = "";
    console.log(id);
    setcartitems(
      cartitems.filter((item) => {
        if (item.id != id) {
          return item;
        } else {
          message = item.name;
          var subTot = total - item.qty * item.price;
          Settotal(subTot);
        }
      })
    );
    toast.error("You removed " + message + " from wish list", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const qtyRemover = (index, newQty) => {
    console.log("index " + index + "newQty " + newQty);
    cartitems[index].qty = newQty;
    setcartitems([...cartitems]);
  };

  return (
    <>
      <div id="container">
        <h3 id="cart_ttitle">Shopping Cart</h3>
        <div id="cartmaindiv">
          {/* right */}
          <div id="card_rigit_main_div">
            <div id="cart_right_div">
              <div onClick={togal} title="click to see addres">
                <h5 id="cart_subtitle">
                  Shipping Address <i id="c_ar_down_1"></i>
                  <i class="ar-down-1" id="cart_rotate"></i>
                </h5>
              </div>

              <div id="cart_form" className={addresshow}>
                <label id="cart_label">First Name : </label>
                <input id="cart_input" type="text" placeholder="" />

                <label id="cart_label">Last Name : </label>
                <input id="cart_input" type="text" placeholder="" />

                <label id="cart_label">Address : </label>
                <input id="cart_input" type="text" placeholder="" />

                <label id="cart_label">Phone Number : </label>
                <input
                  id="cart_input"
                  style={{ marginBottom: "30px" }}
                  type="text"
                  placeholder=""
                />
              </div>
            </div>

            <div id="cart_right_div">
              <div id="card_dis_div">
                <h5 id="cart_subtitle">Order Summary</h5>
                <form>
                  <label id="cart_label">Sub Total :</label>
                  <label id="cart_price_label">LKR {total}</label>

                  <label id="cart_label">Shipping Fee :</label>
                  <label id="cart_price_label">LKR 375</label>

                  <div>
                    <label id="cart_label">Discount Code :</label>
                    <input id="cart_dis_label" type="text" placeholder="" />
                    <button className="button primary" id="dis_button">
                      Apply Discount
                    </button>
                  </div>

                  <hr id="card_line" />

                  <label id="cart_label">Order Total : </label>
                  <label id="cart_total_label">LKR {total + 375}</label>
                </form>
              </div>
              <br />
              <div>
                <h5 id="cart_subtitle">Shipping Methods </h5>
                <div id="cartbuttonsdiv">
                  <button className="button primary cart_button">
                    LKR {total + 375}
                  </button>
                  <button className="button primary cart_button">
                    Arpico Delivery
                  </button>
                  <button className="button primary cart_button">
                    Arpico Doorstep Delivery
                  </button>
                </div>
                <div id="cart_checkout_btn_div">
                  <button className="button primary" id="cart_checkout_button" onClick={()=> history.push('/payment')}>
                    Go to Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* left */}
          <div id="cart_left_div">
            <h5 id="cart_subtitle">My Cart</h5>
            <div id="c_items_div">
              {cartitems.map((it, index) => {
                console.log(index);
                return (
                  <CartProductCard
                    key={index}
                    mykey={index + 1}
                    item={it.id}
                    name={it.name}
                    price={it.price}
                    qty={it.qty}
                    img={it.img}
                    removeItem={(itm) => remove(itm)}
                    qtyRemover={(index, newQty) => qtyRemover(index, newQty)}
                  />
                );
              })}

              {/* <button onClick={add}>test</button> */}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
