import React from "react";
import "./Footer.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Do you have Something<br></br>to Sell through Us?</h2>
        <button className="sell-btn">Sell your car today</button>
      </div>
      <div className="footer-content">
        <div className="footer-links">
          <div className="column">
            <h3>Overview</h3>
            <ul>
              <li>About Us</li>
              <li>Features</li>
              <li>Cars</li>
              <li>Testimonials</li>
              <li>FAQ's</li>
            </ul>
          </div>
          <div className="column">
            <h3>Explore</h3>
            <ul>
              <li>Blogs</li>
              <li>Press mentions</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
        <div className="contact-box">
          <p><FaMapMarkerAlt /> 7th b main Btm 1st stage Bangalore Karnataka 560029</p>
          <p><FaEnvelope /> hello@email.com</p>
          <p><FaPhone /> +91 8310955920</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <div className="social-icons">
          <FaFacebookF />
          <FaLinkedinIn />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
