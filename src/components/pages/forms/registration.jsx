import React, { useState } from "react";
import axios from "axios";
import "./index.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    birthDate: "",
    gender: "",
    address: "",
    address2: "",
    country: "",
    city: "",
    region: "",
    postalCode: "",
  });

  const {
    fullName,
    email,
    password,
    phone,
    birthDate,
    gender,
    address,
    address2,
    country,
    city,
    region,
    postalCode,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  console.log(formData)

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/.netlify/functions/server/register",
        formData
      );
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data.errors);
    }
  };

  return (
    <section className="formbody">
      <section className="container">
        <p className="header">Registration Form</p>
        <form className="form" onSubmit={onSubmit}>
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
              type="text"
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
                type="number"
                name="phone"
                value={phone}
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
                  checked={gender === "male"}
                  onChange={onChange}
                />
                <label htmlFor="check-male">Male</label>
              </div>
              <div className="gender">
                <input
                  type="radio"
                  id="check-female"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={onChange}
                />
                <label htmlFor="check-female">Female</label>
              </div>
              <div className="gender">
                <input
                  type="radio"
                  id="check-other"
                  name="gender"
                  value="other"
                  checked={gender === "other"}
                  onChange={onChange}
                />
                <label htmlFor="check-other">Prefer not to say</label>
              </div>
            </div>
          </div>
          <div className="input-box address">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={onChange}
              placeholder="Enter street address"
              required
            />
            <input
              type="text"
              name="address2"
              value={address2}
              onChange={onChange}
              placeholder="Enter street address line 2"
            />
            <div className="column">
              <div className="select-box">
                <select name="country" value={country} onChange={onChange}>
                  <option hidden>Country</option>
                  <option>America</option>
                  <option>Japan</option>
                  <option>India</option>
                  <option>Nepal</option>
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
                type="number"
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
      </section>
    </section>
  );
};

export default RegistrationForm;
