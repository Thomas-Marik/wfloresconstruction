import React from "react";
import Logo from "../../assets/images/wfred.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={Logo} alt="logo" />
      </div>

      <div className="navbar-container">
        <a href="/">Home</a>

        <a href="/services">Services</a>
        <a href="/area">Area</a>
        <a href="/gallery">Gallery</a>
      </div>
    </div>
  );
};

export default Header;
