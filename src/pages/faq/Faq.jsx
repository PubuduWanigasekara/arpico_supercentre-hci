import React, { useState } from "react";
import "./faq.css";
import { motion, AnimatePresence } from "framer-motion";
import Faqbase from "../../components/FaqBase";

export default function Faq() {
  let [status, setStatus] = useState();

  const setActive = (item) => {
    setStatus(item);
  };

  return (
    <>
      <div id="faq_head">
        <div id="faq_title">How we can help you?</div>
        <i id="card_search_icon" class="ar-search"></i>
        <div>
          <input type="text" name="" id="faq_search_bar" placeholder=""></input>
        </div>
      </div>

      <div id="faq_container">
        {/* 
                
                - pass the question number as number prop 
                - question as question prop
                - answer inside the faqbase as a child 
                
                */}

        <Faqbase
          activecheck={setActive}
          item={status}
          number={1}
          question={"How much do you charge for the delivery service?"}
        >
          We charge Rs.350for any delivery within the specified delivery grid
          and we are not doing any deliveries to cities outside the specified
          grid at the moment
        </Faqbase>

        <Faqbase
          activecheck={setActive}
          item={status}
          number={2}
          question={"What are your delivery hours?"}
        >
          You can usually have your shopping delivered between 11am-1pm and
          6pm-8pm. You can pick your order 2 hours after the order is placed
          during open hours. Please bring your NIC to prove your identity.
          Products are subject to availability of the selected outlet.
        </Faqbase>

        <Faqbase
          activecheck={setActive}
          item={status}
          number={3}
          question={"What are your restrictions on liquor ?"}
        >
          Payment for liquor is only allowed from 9am to 8.30pm Delivery of
          liquor on poya days and some special holidays will be restricted. If
          an order is placed on such days, the order will be delivered on the
          next working day. You will not be able to order more than 7 bottles.
        </Faqbase>
      </div>
    </>
  );
}
