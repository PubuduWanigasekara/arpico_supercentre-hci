import React from "react";
import { ReactComponent as Search_btn } from "../../../assets/search_btn.svg";

export default function Faq() {
  const questionandansdiv = {
    margin: "auto",
    width: "75%",
    marginTop: "30px",
    // backgroundColor: "red",
  };

  const question = {
    width: "100%",
    height: "60px",
    borderRadius: "15px",
    // border: "15px",
    // backgroundColor: "#f0f0f0",
    border: "3px solid #1A2572",
    outline: "none",
    // padding: "0px 0px 0px 0px",
    // fontSize: "20px",
    alignItems: "10px",
    display: "flex",
    alignItems: "center",
    // justifyContent: "space-around",
    flexDirection: "row",
    // marginLeft: "auto",
    // marginRight: "auto",
    // display: "block",
  };

  const answer = {
    width: "100%",
    height: "60px",
    borderRadius: "15px",
    // border: "15px",
    // backgroundColor: "#f0f0f0",
    border: "3px solid #1A2572",
    outline: "none",
    // padding: "0px 0px 0px 0px",
    fontSize: "15px",
    alignItems: "10px",
    display: "flex",
    alignItems: "center",
    // justifyContent: "space-around",
    flexDirection: "row",
    // marginLeft: "auto",
    // marginRight: "auto",
    // display: "block",
  };

  const questionText = {
    marginLeft: "8%",
  };

  const questionButton = {
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: "8px 5px 10px 5px",
    margiLeft: "30%",
    outline: "none",
    border: "none",
    backgroundColor: "#1A2572",
    cursor: "pointer",
    color: "white",
    position: "absolute",
    right: "15%",
    // top: "calc(50% - .625rem)",
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

  const faqSearchIcon = {
    position: "absolute",
    margin: "10px 390px",
    // left: "300px",
  };

  const fqatitle = {
    textAlign: "center",
  };

  return (
    <>
      <div id="recent_title" style={fqatitle}>
        Do you have any question?
      </div>
      <div id="subs">
        {/* <Search_btn id="search_btn" /> */}
        <i class="ar-search" style={faqSearchIcon}></i>
        <input
          type="text"
          name=""
          style={faqsearch}
          placeholder="Type in a key word to find your answers"
        />
      </div>

      <div style={questionandansdiv}>
        <div>
          <div style={question}>
            <div style={questionText}>
              <b>Q1</b> How much do you charge for the delivery service?
            </div>
            <div style={questionButton}>+</div>
          </div>
        </div>
        <br />

        <div>
          <div style={question}>
            <div style={questionText}>
              We charge Rs.350for any delivery within the specified delivery
              grid and we are not doing any deliveries to cities<br/> outside the
              specified grid at the moment
            </div>
            <div style={questionButton}>-</div>
          </div>
        </div>
      </div>
    </>
  );
}
