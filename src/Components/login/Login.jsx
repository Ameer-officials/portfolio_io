import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <form
        // action="http://localhost:3000"
        // method="post"
        className="login-form"
      >
        <input
          type="email"
          className="email-class"
          name="Email"
          required
          placeholder="email"
        />
        <input
          type="password"
          className="password-class"
          name="Password"
          required
          placeholder="password"
          autoComplete="off"
        />
        <button className="login-submit" type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
