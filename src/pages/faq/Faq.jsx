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
       
        <div id="faq_search_bar_base">
        <i id="card_search_icon" class="ar-search"></i>
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
          grid at the moment.
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

        <Faqbase
          activecheck={setActive}
          item={status}
          number={4}
          question={"Who can sign for a delivery?"}
        >
          Anyone in the household over the age of 18 may sign for deliveries
          from Arpico.com.
        </Faqbase>

        <Faqbase
          activecheck={setActive}
          item={status}
          number={5}
          question={"What if I have missing items?"}
        >
          If you find have an item missing from your delivery, please call our
          Customer Helpline on +94720100800.
        </Faqbase>

        <Faqbase
          activecheck={setActive}
          item={status}
          number={6}
          question={"What if I have damaged items?"}
        >
          You can hand any faulty or poor quality goods back to the sales
          assistant at the time of delivery. Also return them to any Arpico
          Supercentre (with proof of purchase) at a later date.
        </Faqbase>

        <Faqbase
          activecheck={setActive}
          item={status}
          number={7}
          question={"How do you deliver?"}
        >
          We keep your delivery at under supervised conditions during the whole
          journey. The sales assistant brings the shopping to your door, where
          you'll be given a delivery note to sign. If you ask, the driver will
          also take the shopping into your kitchen.
        </Faqbase>

        <Faqbase
          activecheck={setActive}
          item={status}
          number={8}
          question={
            "What happen if there is nobody at the delivery address to accept the order?"
          }
        >
          The driver will leave notification of attempted delivery and you will
          need to contact our Customer Service to re-arrange delivery.
        </Faqbase>

        <Faqbase
          activecheck={setActive}
          item={status}
          number={9}
          question={"How to order in grams for perishable items?"}
        >
          If you want to order 350 grams, enter 0.35 in the quantity field where
          the unit is in Kilograms (Kg).
        </Faqbase>

        <Faqbase
          activecheck={setActive}
          item={status}
          number={10}
          question={"How do I earn Privilege Points?"}
        >
          When you shop with us on-line you will earn points on all your
          purchases, just like you do in-store. For every Rs.100 you spend you
          will earn 1 point.
        </Faqbase>
      </div>
    </>
  );
}
