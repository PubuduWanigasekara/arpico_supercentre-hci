import React, { useEffect, useState, useContext } from "react";
import WishlistProductCard from "../../components/WishlistProductCard";
import Lottie from 'react-lottie';
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import carrot from './carrot.json';
import wrong from './warning.json';
import "./wishlist.css";
import { AppContexts } from "../../contexts/AppContextsProvider";


export default function Wishlist() {
 // let [data, Setdata] = useState([]);
  let [stylererror, Setstylererror] = useState("d_hide msg_cantainer");
  let [stylersucsses, Setstylersucsses] = useState("d_hide msg_cantainer");
  let [playsucsses, Setplaysucsses] = useState(true);
  let [playerror, Setplayerror] = useState(true);
  let [addbuttestyle, Setaddbuttestyle] = useState("d_hide");
  const notify = () => toast("Wow so easy !");
  const {wishlistitems, setwishlistitems} = useContext(AppContexts);
  const {cartitems, setcartitems} = useContext(AppContexts);
  //let lastMove = '';



  const defaultOptions_carrot = {
    loop: false,
    autoplay: true,
    animationData: carrot,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const defaultOptions_wrong = {
    loop: false,
    autoplay: true,
    animationData: wrong,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("wishlistItems"))) {
      //Setdata(JSON.parse(localStorage.getItem("wishlistItems")));
      console.log("1");
      console.log(wishlistitems);
    } else {
      console.log("0");
    }
  }, []);




  useEffect(() => {
    console.log(wishlistitems.length);
    if (isDataEmpty()) {
      sucssespaln(false);
      errorpaln(true);
      addbuttenstylechanger(false);
    } else {
      var con = 0;
      var leng = wishlistitems.length;
      for (var i = 0; i < leng; i++) {
        if (wishlistitems[i].isAddedToCart) {
          con++;
        }
      }

      if (con == leng) {
          sucssespaln(true);
          errorpaln(false);
          addbuttenstylechanger(false);
        
      }else{
        sucssespaln(false);
        errorpaln(false);
        addbuttenstylechanger(true);
      }
    }

  }, [wishlistitems]);

  let sdata = {
    id: 4,
    name: "test",
    price: 300,
    qty: 2,
    isAddedToCart: false
  };

  const adddamy = () => {
    setwishlistitems([...wishlistitems, wishlistitems]);
    setwishlistitems(wishlistitems.filter(item => item.id != -99));
    console.log(wishlistitems);
  };

  const add = () => {
    sdata.id =Math.random();
    setwishlistitems([...wishlistitems, sdata]);
    console.log(wishlistitems);
  };


  const isDataEmpty = () => {
    if (wishlistitems.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  const addToCartOneByOne = (index) => {
    var message = '';
    for (var i = 0; i < wishlistitems.length; i++) {
      if (wishlistitems[i].id == index) {
        wishlistitems[i].isAddedToCart = true
        setcartitems([...cartitems,wishlistitems[i]]);
        message = wishlistitems[i].name;
      }
    }
    toast.success("You added "+message+" to your shopping cart.");
    adddamy();
  }
  const remove = (id) => {
    var message = '';
    setwishlistitems(wishlistitems.filter(item => {
      if(item.id != id){
        return item;
      }else{
        message = item.name;
      }
    }));
    toast.error("You removed "+message+" from wish list");
  };

  const removeall = () => {
    for (var i = 0; i < wishlistitems.length; i++) {
      if(!wishlistitems[i].isAddedToCart){
        wishlistitems[i].isAddedToCart = true
        setcartitems([...cartitems,wishlistitems[i]]);
      }
    }
    adddamy();
    sucssespaln(true);
    
  };

  const sucssespaln = (sty) => {
    if (sty) {
      Setstylersucsses("msg_cantainer");
      Setplaysucsses(false);
    } else {
      Setstylersucsses(" d_hide msg_cantainer");
      Setplaysucsses(true);
    }
  }

  const errorpaln = (sty) => {
    if (sty) {
      Setstylererror("msg_cantainer");
      Setplayerror(false);
    } else {
      Setstylererror(" d_hide msg_cantainer");
      Setplayerror(true);
    }
  }

  const addbuttenstylechanger = (sty) => {
    if(sty){
      Setaddbuttestyle("button_addToCart")
    }else{
      Setaddbuttestyle("d_hide")
    }
  }

  const acd = () => {
    Setplayerror(!playerror);
    Setplaysucsses(!playsucsses);
  }

  return (
      <div>

<div className={stylersucsses}>
  <div class="success-msg">
    All items are sented to cart<br />
    <Lottie options={defaultOptions_carrot}
      height={95}
      width={117}
      isStopped={playsucsses} />
  </div>
</div>

<div className={stylererror}>
  <div class="error-msg">
  You have no items in your wish list.<br />
    <Lottie options={defaultOptions_wrong}
      height={95}
      width={117}
      isStopped={playerror} />
  </div>
</div>

{wishlistitems.map((it, index) => {

  if (!it.isAddedToCart) {
    return (

      <WishlistProductCard
        name={it.name}
        key={index}
        qty={it.qty}
        price={it.price}
        item={it.id}
        remove={(id) => remove(id)}
        addToCartOneByOne={(index) => addToCartOneByOne(index)} />
    );
  }

})}


<button class={addbuttestyle} onClick={removeall}><span>Add all to cart </span></button>
<button onClick={add}>test</button>
<button onClick={acd}>test</button>
<button onClick={notify}>Notify !</button>
  <ToastContainer />
</div>
  );
}
