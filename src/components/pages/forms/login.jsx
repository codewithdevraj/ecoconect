import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://main-server-ecoconecthub.netlify.app/.netlify/functions/server/login",
        {
          email,
          password,
        }
      );
      toast.success(res.data.msg); // Show success message
      console.log(res.data);
    } catch (err) {
      console.log(err)
      toast.error(err.response.data.msg); // Show error message
    }
  };

  return (
    <section className="formbody">
      <div className="container">
        <p className="header">Login Form</p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-box">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Enter email address"
              required
            />
          </div>
          <div className="input-box">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Enter password"
              required
            />
          </div>
          <button type="submit">Login</button>
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
        <ToastContainer />
      </div>
    </section>
  );
};

export default LoginForm;
