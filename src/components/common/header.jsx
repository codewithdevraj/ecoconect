import React, { useState, useEffect } from "react";
import "./style.css"; // Ensure you have the relevant CSS for styling

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isActive &&
        !event.target.closest("nav") &&
        !event.target.closest(".hamburger")
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isActive]);

  useEffect(() => {
    const nav = document.querySelector("nav");
    if (nav) {
      if (isActive) {
        nav.classList.add("active");
      } else {
        nav.classList.remove("active");
      }
    }
  }, [isActive]);

  return (
    <header>
      <div className="logo" id="logo">
        <h1>Eco Connect Hub</h1>
      </div>
      <div className="search" id="search">
        <input type="text" placeholder="Search here.." />
        <i className="fas fa-search"></i>
      </div>
      <div className="cta-buttons">
        <button className="login">Login</button>
        <button className="signup">Signup</button>
      </div>
      <div
        className={`hamburger ${isActive ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="line" id="line1"></div>
        <div className="line" id="line2"></div>
        <div className="line" id="line3"></div>
      </div>
    </header>
  );
};

export default Header;
