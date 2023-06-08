import React from "react";
import "./Footer.css";

import { FaTwitter, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-main">
        <div className="company-container">
          <h5>Follow us On: </h5>
          <div className="social-link">
            <a
              className="social-media"
              href="https://www.twitter.com/FnVServices"
            >
              <FaTwitter className="social" color="white" size={30} />
              <p className="social">@FnVServices</p>
            </a>
            <a className="social-media" href="./">
              <FaInstagramSquare className="social" color="white" size={30} />
              <p className="social">FnVServices</p>
            </a>
          </div>
        </div>
        <div className="company-address">
          <h5> W Flores Construction </h5>
          <h5>103 Admirality Dr </h5>
          <h5>Grandy, NC 27939</h5>
        </div>
      </div>
      <div className="webinfo-container">
        <h6>Website created on May 2, 2023 by Matthew T. Hanrahan</h6>
      </div>
    </div>
  );
};

export default Footer;
