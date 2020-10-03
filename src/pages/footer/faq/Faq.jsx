import React from "react";

export default function Faq() {
  const questiondiv = {
    justifyContent: "center",
    marginLeft: "10%",
  };
  const questionnumbers = {
    width: "50%",
    height: "60px",
    borderRadius: "15px",
    // border: "15px",
    // backgroundColor: "#f0f0f0",
    border: "3px solid #1A2572",
    outline: "none",
    padding: "0px 0px 0px 130px",
    fontSize: "20px",
    alignItems: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  };

  const plusbutton = {
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: "8px 5px 10px 5px",
    outline: "none",
    border: "none",
    backgroundColor: "#1A2572",
    cursor: "pointer",
  };

  const ans = {
    width: "50%",
    height: "60px",
    borderRadius: "15px",
    border: "1px solid #58575785",
    background: "none",
    outline: "none",
    padding: "0px 0px 0px 80px",
    marginLeft: "10%",
    fontSize: "15px",
    marginTop: "10px",
  };

  const arrowfqa = {
    rotation: "180deg",
    size: "15%",
  };

  const faqsearch = {
    width: "50%",
    height: "40px",
    borderRadius: "40px",
    border: "1px solid #58575785",
    background: "none",
    outline: "none",
    padding: "0px 0px 0px 80px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    marginTop: "-15px",
    fontSize: "15px",
  };

  const questionandansdiv = {
    // marginLeft: "auto",
    // marginRight: "auto",
    // display: "block",
    margin: "auto",
    // backgroundColor: "red",
  };

  return (
    <>
      <div id="recent_title">Do you have any question?</div>
      <div id="subs">
        <input
          type="email"
          name=""
          style={faqsearch}
          placeholder="Type in a key word to find your answers"
        />
      </div>

      <div style={questionandansdiv}>
        <div >
          <div style={questiondiv}>
            <div style={questionnumbers}>
              Q1 How much do you charge for the delivery service?
              <button style={plusbutton}> + </button>
            </div>
          </div>
          <div style={ans}>
            We charge Rs.350for any delivery within the specified delivery grid
            and we are not doing any deliveries to cities outside the specified
            grid at the moment
          </div>
        </div>

        <div>
          <div style={questiondiv}>
            <div style={questionnumbers}>
              Q2. What are your delivery hours?
              <button style={plusbutton}> + </button>
            </div>
          </div>
          <div style={ans}>
            You can usually have your shopping delivered between 11am-1pm and
            6pm-8pm. You can pick your order 2 hours after the order is placed
            during open hours. Please bring your NIC to prove your identity.
            Products are subject to availability of the selected outlet.
          </div>
        </div>
      </div>
    </>
  );
}
