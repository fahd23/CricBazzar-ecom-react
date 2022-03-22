const ForgetPass = () => {
  return (
    <div class="login-form-container card-with-shadow">
      <form class="login-form">
        <h1 class="form-title">Forgot Password</h1>
        <label for="email-id">Email Address </label>
        <input
          type="email"
          id="email-id"
          placeholder="Enter your email id"
          required=""
        />
        <label for="password">New Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your new password"
          required=""
        />
        <div class="login-form-footer">
          <button class="btn btn-icon danger">Reset Password</button>
        </div>
      </form>
    </div>
  );
};

export default ForgetPass;
