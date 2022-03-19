import React, { useState, useContext } from "react";
import "./SignUp.css";
import { Context } from "../Context/Context";

const Signup = () => {
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputPasswordValue, setInputPasswordValue] = useState("");
  const [inputEmailValue, setInputEmailValue] = useState("");
  const [inputEmailPasswordValue, setInputEmailPasswordValue] = useState("");

  const { setFindUser, userData } = useContext(Context);

  const hendleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3004/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: userData[userData.length - 1].id + 1 || 0,
        userEmail: inputEmailValue,
        userEmailPassword: inputEmailPasswordValue,
        username: inputNameValue,
        userPassword: inputPasswordValue,
      }),
    })
      .then((res) => res.json())
      .then((data) => setFindUser(data));
  };

  return (
    <div className="container container-centered">
      <form className="form-signup" onSubmit={(e) => hendleSubmit(e)}>
        <input
          type="email"
          placeholder="Enter email"
          required
          className="sign_up_email_input"
          onChange={(e) => setInputEmailValue(e.target.value)}
        />
        <input
          type="password"
          placeholder="Email password"
          required
          className="sign_up_email_password_input"
          onChange={(e) => setInputEmailPasswordValue(e.target.value)}
        />
        <input
          type="text"
          placeholder="Choose username"
          required
          className="sign_up_username_input"
          onChange={(e) => setInputNameValue(e.target.value)}
        />
        <input
          type="password"
          placeholder="Create password"
          required
          className="sign_up_username_password_input"
          onChange={(e) => setInputPasswordValue(e.target.value)}
        />
        <button type="submit" className="sign_up_btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
