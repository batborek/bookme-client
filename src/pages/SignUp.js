import React, { useContext } from "react";
import { UserContext } from "../data/context";



export const SignUp = () => {

  return (
    <>
      <div className="myForm">
        <div className="item">
          {/* <h2>{t("Login.2")}</h2> */}
         
          <input
           // onChange={(e) => setEmail(e.target.value)}
        //    value={email}
            type="text"
            id="email"
            name="email"
            className="text-input"
            placeholder="email"
          />
           <input
           // onChange={(e) => setEmail(e.target.value)}
        //    value={email}
            type="text"
            id="name"
            name="name"
            className="text-input"
            placeholder="Full name"
          />

          <div className="passShow"></div>
          <input
          //  onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            name="password"
           // value={password}
            // onKeyUp={validatePassword}
            className="password-input"
            placeholder="password"
          />

          <button
            type="button"
            className="forwardButton"
            disabled={false}
            // onClick={() => {
            //   GetToken();
            // }}
          >
            <b>Sign Up</b>
          </button>
          <h3>
            Do you have an account? <br />
            Log in
          </h3>
        </div>
      </div>
    </>
  );
};

export default SignUp;
