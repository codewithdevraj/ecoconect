import React, { useState, useEffect } from "react";
import "./style.css"; // Ensure you have the relevant CSS for styling

// const logout = () => {
//   localStorage.clear();
//   let signupButton = document.querySelector('.signup');
//   let loginButton = document.querySelector('.login');
//   let logoutButton = document.querySelector('.logout');
//   signupButton.classList.remove('hide');
//   loginButton.classList.remove('hide');
//   logoutButton.classList.add('hide');
// };

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [token, settoken] = useState(localStorage.getItem("token"));

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

  const userlogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
    settoken(localStorage.getItem("token"));
  }, []);

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
        {token ? (
          <button className="logout hide" onClick={userlogout}>
            Logout
          </button>
        ) : (
          <>
            <button
              className="login"
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              Login
            </button>
            <button
              className="signup"
              onClick={() => {
                window.location.href = "/registration";
              }}
            >
              Signup
            </button>
          </>
        )}
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
