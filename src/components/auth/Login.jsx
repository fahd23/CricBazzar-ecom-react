import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { useAuth } from "context/auth-context";

const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  return (
    <div className="container">
      <div class="login-form-container card-with-shadow">
        <form
          class="login-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1 class="form-title">Log In</h1>
          <label for="email-id">Email Address </label>
          <input
            type="email"
            id="email-id"
            placeholder="Enter your email id"
            required
          />
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
          />
          <div class="remember-me-section">
            <label for="remember-me">
              <input type="checkbox" id="remember-me" /> Remember Me
            </label>
          </div>
          <div class="login-form-footer">
            <button class="btn btn-icon danger">
              <FiLogIn />
              Log In
            </button>
          </div>
        </form>
        <button
          class="btn default guest-btn"
          onClick={() => {
            !isLoggedIn && setIsLoggedIn((isLoggedIn) => !isLoggedIn);
            navigate(from, { replace: true });
          }}
        >
          LogIn As the Guest
        </button>
        <Link to="/signup" className="flex jtfy-c-center margin-top">
          New to CricBazzar? Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
