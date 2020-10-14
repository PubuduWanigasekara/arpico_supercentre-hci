import React from "react";
import "./signup.css";

export default function Signup() {
  return (
    <>
      <div id="signup_container">
        <div className="row">
          <div className="column">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/hciapp-7355d.appspot.com/o/NTB-Arpico.jpg?alt=media&token=b7a4bb8b-bb4f-4677-a5ce-00fc982a9355"
              alt=""
              id="signupImg"
            />
          </div>
          <div className="column">
            <div id="signup_form">
              <div id="inputs">
                {/* Main Title Section */}
                <div>
                  <h1 id="signup_title">Create New Account </h1>
                  {/* <p id="signup_sub_title">
                    Creating an account is easy. Just fill in the form below.
                  </p> */}
                </div>
                {/*End  Main Title Section */}

                <div id="signup-card">
                  <div className="row">
                    <h3 id="personal_title1">Personal Information</h3>
                  </div>
                  <div className="row" id="input_one">
                    <input
                      type="text"
                      name="fname"
                      id="fname"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="row" id="input_one">
                    <input
                      type="text"
                      name="lname"
                      id="lname"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <div className="row" id="input_one">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className="row">
                    <input type="checkbox" id="check_box" name="check_box" />
                    <label for="Checkbox" id="signup_checkbox_label">
                      Sign Up for Newsletter{" "}
                    </label>
                  </div>
                  <div className="row">
                    <select>
                      <option value="gender">Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="row">
                    <h3 id="personal_title">SIGN-IN INFORMATION</h3>
                  </div>

                  <div className="row" id="input_one">
                    {" "}
                    {/* <Pass id="icons" className="pass"/> */}
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="row" id="input_one">
                    <input
                      type="password"
                      name="cnf-password"
                      id="cnf-password"
                      placeholder="Confirm Password"
                      required
                    />
                  </div>
                </div>
                <div className="row" id="input_one">
                  <button>CREATE AN ACCOUNT</button>
                </div>
                <div className="row" id="input_one">
                  <a href="Login.jsx" target="_blank">
                    Already Have an Account?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
