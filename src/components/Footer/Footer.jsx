import React from "react";
import "./Footer.css";
import logo from "../../assets/images/LOGO.webp";
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


    <main>

    <footer id="footer" className="footer" role="contentinfo">
        <div className="footer-container">

        {/* Brand */}
  <div className="footer-col brand">

  <img src={logo} alt="SNDF Security Services Logo" className="footer-logo" loading="lazy"/>

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
  
  <a href="https://www.facebook.com/share/1E8sd7bNqr/" target="_blank" rel="noopener noreferrer"  aria-label="Facebook">
    <FaFacebookF aria-hidden="true"/>
  </a>

  <a href="https://www.instagram.com/nationalist_detective_force?igsh=MXZycWM1czA0ZHdneg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
    <FaInstagram aria-hidden="true"/>
  </a>

  <a href="https://www.linkedin.com/in/nationalist-detective-force-034907376" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
    <FaLinkedin aria-hidden="true"/>
  </a>

  <a href="https://youtube.com/@ndfdetective3968?si=fsmB5O0GL4IY3dNu" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
>
    <FaYoutube className="yt" aria-hidden="true"/>
  </a>

  <a href="https://wa.me/919970383155" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
    <FaWhatsapp className="wa" aria-hidden="true"/>
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
            <li><Link to="/career">Career</Link></li>
            
          </ul>
        </div>

        {/* Important Links */}
        <div className="footer-col">
          <h3>Important Links</h3>
          <ul>

            <li><Link to="/sndfterms">Terms & Conditions</Link></li>

            <li><Link to="/privacy-policy">Privacy Policy</Link> </li>

            <li><Link to="/refund">Refund Policy</Link> </li>
           
             <li><Link to="/Sndfdisclaimer">Disclaimer</Link> </li>
          </ul>
        </div>

        {/* Head Office */}
        <div className="footer-col">
          <h3>Head Office</h3>

          <p className="notranslate">
            <FaMapMarkerAlt  aria-hidden="true"/>S.N.D.F. Office,Yashshree Phase 2,Katraj
            Pune - 411046
          </p>

          <p className="notranslate">
            <FaPhone aria-hidden="true"/> <a href="tel:+919970383155" aria-label="Call SNDF +91 9970383155">+91 9970383155</a>
          </p>

          <p>
            <FaEnvelope  aria-hidden="true"/> <a href="mailto:info@sndfndf.com"  aria-label="Email SNDF">info@sndfndf.com</a>
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
    title="SNDF Office Location Map" > 
</iframe>
</div>
</div>

        {/* Branches */}
        {/* <div className="footer-col">
          <h3>Our Branches</h3>
          <ul>
            <li><Link to="/branches/pune">Pune Branch</Link></li>
            <li><Link to="/branches/mumbai">Mumbai Branch</Link></li>
            <li><Link to="/branches/hyderabad">Hyderabad Branch</Link></li>
            <li><Link to="/branches/assam">Assam Branch</Link></li>
          </ul>
        </div> */}

{/* Branches */}
<div className="footer-col">
  <h3>Our Branches</h3>
  <ul>

    {/* Pune Group */}
    <li style={{ cursor: "default", color: "#fff", marginTop: "5px", letterSpacing: "1px" }}>
      <strong>Pune Branches:</strong>
    </li>
    <li><Link to="/branches/pune">Karve Road</Link></li>
    <li><Link to="/branches/pune">Warje</Link></li>
    <li><Link to="/branches/pune">Wakad</Link></li>

    {/* 🔹 Add SPACE + DIVIDER EFFECT */}
    <li style={{ margin: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.2)" }}></li>

    {/* Other Cities */}
    <li><Link to="/branches/mumbai">Mumbai Branch</Link></li>
    <li><Link to="/branches/hyderabad">Hyderabad Branch</Link></li>
    <li><Link to="/branches/assam">Assam Branch</Link></li>

  </ul>
</div>


      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} SNDF. All rights reserved.
      </div>
    </footer>

    </main>
  );
};

export default Footer;


