import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
const Login = () => {
  return (
    <div class="login-form-container card-with-shadow">
      <form class="login-form">
        <h1 class="form-title">Log In</h1>
        <label for="email-id">Email Address </label>
        <input
          type="email"
          id="email-id"
          placeholder="Enter your email id"
          required=""
        />
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          required=""
        />
        <div class="remember-me-section">
          <label for="remember-me">
            <input type="checkbox" id="remember-me" /> Remember Me
          </label>
          <Link to="/forgotpassword">Forgot Password ?</Link>
        </div>
        <div class="login-form-footer">
          <button class="btn btn-icon danger">
            <FiLogIn />
            Log In
          </button>
          <Link to="/signup">New to CricBazzar? Sign up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
