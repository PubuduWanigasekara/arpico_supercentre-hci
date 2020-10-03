import React from "react";

export default function Faq() {
  const questiondiv = {
    justifyContent: "center",
  };
  const questionnumbers = {
    width: "50%",
    height: "60px",
    borderRadius: "15px",
    border: "none",
    backgroundColor: "#f0f0f0",
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
    backgroundColor: "#F26722",
    cursor: "pointer",
  };

  return (
    <>
      <div id="recent_title">FAQ</div>
      <div>
        <div style={questiondiv}>
          <div style={questionnumbers}>
            Q1 How much do you charge for the delivery service?
            <button style={plusbutton}> + </button>
          </div>
        </div>
        <div>
          We charge Rs.350for any delivery within the specified delivery grid
          and we are not doing any deliveries to cities outside the specified
          grid at the moment
        </div>
      </div>

      <div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
