import React, { useContext } from "react";
import { UserContext } from "../data/context";

export const Login = () => {
  const {
    successLogin,
    setSuccessLogin,
    GetToken,
    setCurrentPage,
    email,
    setEmail,
    setPassword,
    password,
    token,
  } = useContext(UserContext);

  return (
    <>
      <div className="myForm">
        <div className="item">
          {/* <h2>{t("Login.2")}</h2> */}
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            name="email"
            className="text-input"
            placeholder="email"
          />

          <div className="passShow"></div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            name="password"
            value={password}
            // onKeyUp={validatePassword}
            className="password-input"
            placeholder="password"
          />

          <button
            type="button"
            className="forwardButton"
            disabled={false}
            onClick={() => {
              GetToken();
            }}
          >
            <b>Login</b>
          </button>
          <h3>
            Dont have an account? <br />
            Sign Up
          </h3>
        </div>
      </div>
    </>
  );
};

export default Login;
