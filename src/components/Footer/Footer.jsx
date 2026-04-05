import React from "react";
import "./Footer.css";
import logo from "../../assets/images/LOGO.png";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
        <div className="footer-container">

        {/* Brand */}
        <div className="footer-col brand">
          <img src={logo} alt="logo" className="footer-logo" />

          <p>
    SNDF is a professional security and detective organization providing
    reliable surveillance, investigation, and protection services across India.
  </p>

  {/* Professional Points */}
  <ul className="brand-points">
    <li>✔ Trained Security Personnel</li>
    <li>✔ Private Investigation Services</li>
    <li>✔ 24/7 Surveillance Support</li>
  </ul>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>

            <a href="https://youtube.com" target="_blank">
              <FaYoutube className="yt" />
            </a>

            <a href="https://wa.me/919876543210" target="_blank">
              <FaWhatsapp className="wa" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>

            <li><Link to="/">Home</Link> </li>
            <li><Link to="/about">About</Link> </li>
            <li><Link to="/services/sndf">Services</Link> </li>
            <li><Link to="/contact">Contact</Link> </li>
            <li><Link to="/">Career</Link> </li>
            
          </ul>
        </div>

        {/* Important Links */}
        <div className="footer-col">
          <h3>Important Links</h3>
          <ul>
            <li>Terms & Conditions</li>


            <li><Link to="/privacy-policy">Privacy Policy</Link> </li>

            {/* <li>Privacy Policy</li> */}
            <li>Refund Policy</li>
            <li>Disclaimer</li>
          </ul>
        </div>

        {/* Head Office */}
        <div className="footer-col">
          <h3>Head Office</h3>

          <p className="notranslate">
            <FaMapMarkerAlt />S.N.D.F. Office,Yashshree Phase 2,Katraj
            Pune - 411046
          </p>

          <p className="notranslate">
            <FaPhone /> <a href="tel:+919876543210">+91 9876543210</a>
          </p>

          <p>
            <FaEnvelope /> <a href="mailto:ndfdetective@gmail.com">ndfdetective@gmail.com</a>
          </p>

          {/* Google Map */}
          <div className="map">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15138.751197603708!2d73.871484!3d18.452479!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29583f03b9aff%3A0xf083a5f416201118!2sNDF%20-%20Nationalist%20detective%20force!5e0!3m2!1sen!2sin!4v1773960981494!5m2!1sen!2sin"
    width="100%"
    height="250"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="map"
  ></iframe>
</div>
        </div>

        {/* Branches */}
        <div className="footer-col">
          <h3>Our Branches</h3>
          <ul>
            <li>Pune Branch</li>
            <li>Mumbai Branch</li>
            <li>Delhi Branch</li>
            <li>Bangalore Branch</li>
            <li>Hyderabad Branch</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} SNDF. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;