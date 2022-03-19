import React, { useState, useContext } from "react";
import "./Login.css";
import { Context } from "../Context/Context";

const Login = () => {
  const { userData, setFindUser } = useContext(Context);

  const [inputNameValue, setInputNameValue] = useState("");
  const [inputPasswordValue, setInputPasswordValue] = useState("");

  const hendleSubmit = (e) => {
    e.preventDefault();

    const findUser = userData?.find(
      (u) =>
        u.username === inputNameValue && u.userPassword === inputPasswordValue
    );

    setFindUser(findUser || {});
  };

  return (
    <div className="container container-centered">
      <form className="form-login" onSubmit={(e) => hendleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter username"
          required
          className="login_username_input"
          onChange={(e) => setInputNameValue(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          required
          className="login_username_password_input"
          onChange={(e) => setInputPasswordValue(e.target.value)}
        />
        <button type="submit" className="login_btn">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
