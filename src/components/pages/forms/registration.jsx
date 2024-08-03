import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    birthDate: "",
    gender: "",
    streetAddress: "",
    streetAddressLine2: "",
    country: "",
    city: "",
    region: "",
    postalCode: "",
  });

  const {
    fullName,
    email,
    password,
    phoneNumber,
    birthDate,
    gender,
    streetAddress,
    streetAddressLine2,
    country,
    city,
    region,
    postalCode,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://ecoserver.netlify.app/.netlify/functions/server/register",
        {
          fullName,
          email,
          password,
          phoneNumber,
          birthDate,
          gender,
          address: {
            streetAddress,
            streetAddressLine2,
            country,
            city,
            region,
            postalCode,
          },
        }
      );
      toast.success(res.data.msg); // Show success message
    } catch (err) {
      toast.error(err.response.data.msg); // Show error message
    }
  };

  return (
    <section className="formbody">
      <section className="container">
        <p className="header">Registration Form</p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-box">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={onChange}
              placeholder="Enter full name"
              required
            />
          </div>
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
          <div className="column">
            <div className="input-box">
              <label>Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={phoneNumber}
                onChange={onChange}
                placeholder="Enter phone number"
                required
              />
            </div>
            <div className="input-box">
              <label>Birth Date</label>
              <input
                type="date"
                name="birthDate"
                value={birthDate}
                onChange={onChange}
                placeholder="Enter birth date"
                required
              />
            </div>
          </div>
          <div className="gender-box">
            <h3>Gender</h3>
            <div className="gender-option">
              <div className="gender">
                <input
                  type="radio"
                  id="check-male"
                  name="gender"
                  value="male"
                  onChange={onChange}
                  checked={gender === "male"}
                />
                <label htmlFor="check-male">Male</label>
              </div>
              <div className="gender">
                <input
                  type="radio"
                  id="check-female"
                  name="gender"
                  value="female"
                  onChange={onChange}
                  checked={gender === "female"}
                />
                <label htmlFor="check-female">Female</label>
              </div>
              <div className="gender">
                <input
                  type="radio"
                  id="check-other"
                  name="gender"
                  value="prefer not to say"
                  onChange={onChange}
                  checked={gender === "prefer not to say"}
                />
                <label htmlFor="check-other">Prefer not to say</label>
              </div>
            </div>
          </div>
          <div className="input-box address">
            <label>Address</label>
            <input
              type="text"
              name="streetAddress"
              value={streetAddress}
              onChange={onChange}
              placeholder="Enter street address"
              required
            />
            <input
              type="text"
              name="streetAddressLine2"
              value={streetAddressLine2}
              onChange={onChange}
              placeholder="Enter street address line 2"
            />
            <div className="column">
              <div className="select-box">
                <select name="country" value={country} onChange={onChange}>
                  <option hidden>Country</option>
                  <option value="America">America</option>
                  <option value="Japan">Japan</option>
                  <option value="India">India</option>
                  <option value="Nepal">Nepal</option>
                </select>
              </div>
              <input
                type="text"
                name="city"
                value={city}
                onChange={onChange}
                placeholder="Enter your city"
                required
              />
            </div>
            <div className="column">
              <input
                type="text"
                name="region"
                value={region}
                onChange={onChange}
                placeholder="Enter your region"
                required
              />
              <input
                type="text"
                name="postalCode"
                value={postalCode}
                onChange={onChange}
                placeholder="Enter postal code"
                required
              />
            </div>
          </div>
          <button type="submit">Submit</button>
          <div className="help-btn">
            <div className="signupref">
              <p>Already have an account?</p>
              <a href="/login">Login Now</a>
            </div>
          </div>
        </form>
        <ToastContainer />
      </section>
    </section>
  );
};

export default RegistrationForm;
