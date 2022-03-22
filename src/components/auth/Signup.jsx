import { Link } from "react-router-dom";
import { GoSignIn } from "react-icons/go";

const Signup = () => {
  return (
    <div class="sign-up login-form-container card-with-shadow">
      <form class="login-form">
        <h1 class="form-title">Create New Account</h1>
        <label for="name">Name </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your Name"
          required=""
        />
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
        <label for="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          placeholder="Confirm password"
          required=""
        />
        <label for="accept-all-terms">
          <input type="checkbox" id="accept-all-terms" required="" /> I accept
          all terms &amp; conditions
        </label>
        <div class="login-form-footer">
          <button class="btn btn-icon danger">
            <GoSignIn />
            Create New Account
          </button>
          <Link to="/login">Already have an account.</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
