const ForgetPass = () => {
  return (
    <div className="login-form-container card-with-shadow">
      <form className="login-form">
        <h1 className="form-title">Forgot Password</h1>
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
        <div className="login-form-footer">
          <button className="btn btn-icon danger">Reset Password</button>
        </div>
      </form>
    </div>
  );
};

export default ForgetPass;
