import React, { useState } from "react";
import "./index.css";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/login", { email, password });
      console.log(res.data); // Handle success (e.g., save token, redirect)
    } catch (err) {
      setError("Invalid Credentials");
    }
  };

  return (
    <section className="formbody">
      <div className="container">
        <p className="header">Login Form</p>
        <form className="form" onSubmit={handleLogin}>
          <div className="input-box">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button>Login</button>
          <div className="help-btn">
            <div className="signupref">
              <p>Don't have an account?</p>
              <a href="/registration">Create account</a>
            </div>
            <div className="forget">
              <p>Didn't remember your password?</p>
              <a href="/resetpassword">Forget Password?</a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
