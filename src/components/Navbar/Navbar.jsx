import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import logo from "../../assets/images/LOGO.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <img src={logo} alt="SNDF Logo" />
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu */}
      <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>

        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>

        {/* Services Dropdown */}
        <li className="dropdown">
          Services
          <ul className="dropdown-menu">
             <li><a href="#">Security Guard</a></li>
            <li><a href="#">Event Security</a></li>
            <li><a href="#">Personal Security</a></li>
            <li><a href="#">Corporate Security</a></li>
            <li><a href="#">Industrial Security</a></li>
          </ul>
        </li>

        {/* Media */}
        <li className="dropdown">
          Media
          <ul className="dropdown-menu">
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Videos</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </li>

        {/* Branches */}
        <li className="dropdown">
          Branches
          <ul className="dropdown-menu">
            <li><a href="#">Delhi</a></li>
            <li><a href="#">Mumbai</a></li>
            <li><a href="#">Pune</a></li>
            <li><a href="#">Bangalore</a></li>
            <li><a href="#">Hyderabad</a></li>
          </ul>
        </li>

        <li><a href="/courses">Courses</a></li>

        {/* Cases */}
        <li className="dropdown">
          Cases
          <ul className="dropdown-menu">
            <li><a href="#">Case 1</a></li>
            <li><a href="#">Case 2</a></li>
            <li><a href="#">Case 3</a></li>
            <li><a href="#">Case 4</a></li>
          </ul>
        </li>

        <li><a href="/blog">Blog</a></li>
        <li><a href="/team">Team</a></li>
        <li><a href="/career">Career</a></li>
        <li><a href="/contact">Contact</a></li>

        {/* Language */}
        <li className="language">
          <FaGlobe /> EN
        </li>

        {/* Enquiry Button */}
        <li>
          <button className="enquiry-btn">Enquiry</button>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;