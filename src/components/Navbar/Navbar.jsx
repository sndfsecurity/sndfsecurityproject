import logo from "../../assets/images/LOGO.png";
import logo1 from "../../assets/images/ndf-logo.png";
import logo2 from "../../assets/images/guard-logo.png";
import logo3 from "../../assets/images/owl-logo.png";
import logo4 from "../../assets/images/spy-logo.png";
import logo5 from "../../assets/images/dic-logo.png";

import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

// ✅ Bootstrap proper import
import Collapse from "bootstrap/js/dist/collapse";

function Navbar() {

  // ✅ Mobile navbar close fix
  const closeNavbar = () => {
    if (window.innerWidth < 992) {
      const nav = document.getElementById("navbarContent");
      if (nav && nav.classList.contains("show")) {
        new Collapse(nav).hide();
      }
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    phone: ""
  });

  // ✅ Submit fix
  const handleSubmit = () => {
    let newErrors = {};

    if (!name) newErrors.name = "Name is required";

    if (!phone) {
      newErrors.phone = "Mobile number is required";
    } else if (phone.length !== 10) {
      newErrors.phone = "Enter valid 10-digit number";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const text = `*New Enquiry - SNDF Website*%0A Name: ${name}%0A Phone: ${phone}%0A Requirement: ${msg}`;

    window.open(`https://wa.me/918007341905?text=${text}`, "_blank");

    setName("");
    setPhone("");
    setMsg("");
    setErrors({ name: "", phone: "" });
    setShowModal(false);
  };

  return (
    <>
      {/* ================= MODAL ================= */}
      {showModal && (
        <div
          className="sn-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-title"
          onClick={() => setShowModal(false)}
        >
          <div className="sn-modal-box" onClick={(e) => e.stopPropagation()}>
            
            <button
              type="button"
              className="sn-close-btn"
              aria-label="Close enquiry form"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>

            <h3 id="enquiry-title">Quick Enquiry</h3>

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors({ ...errors, name: "" });
              }}
              className={errors.name ? "input-error" : ""}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}

            <input
              type="tel"
              placeholder="Mobile Number"
              value={phone}
              maxLength="10"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
              onChange={(e) => {
                setPhone(e.target.value);
                setErrors({ ...errors, phone: "" });
              }}
              className={errors.phone ? "input-error" : ""}
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}

            <textarea
              placeholder="Requirement"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>

            <button className="sn-submit-btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}

      {/* ================= TOP BAR ================= */}
      <div className="py-2 px-3 d-flex justify-content-between align-items-center">

        {/* SOCIAL ICONS */}
        <div className="d-flex gap-3 fs-5">
          <a href="https://www.facebook.com/share/1E8sd7bNqr/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF style={{ color: "#1877F2", cursor: "pointer" }} />
          </a>

          <a href="https://www.instagram.com/nationalist_detective_force" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={{ color: "#E4405F", cursor: "pointer" }} />
          </a>

          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={{ color: "#0A66C2", cursor: "pointer" }} />
          </a>

          <a href="https://wa.me/919970383155" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp style={{ color: "#25D366", cursor: "pointer" }} />
          </a>

          <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
            <FaYoutube style={{ color: "#FF0000", cursor: "pointer" }} />
          </a>
        </div>

        {/* SCROLL TEXT */}
        <div className="scroll-container">
          <div className="scroll-text">
            Welcome to SNDF – Thank you for visiting our website. &nbsp;&nbsp;&nbsp;
            SNDF वेबसाइट पर आपका स्वागत है – धन्यवाद। &nbsp;&nbsp;&nbsp;
            SNDF वेबसाइटवर आपले स्वागत आहे – धन्यवाद।
          </div>
        </div>

        {/* LANGUAGE + BUTTON */}
        <div className="d-flex align-items-center gap-2">
          <select className="form-select form-select-sm w-auto">
            <option>ENGLISH</option>
            <option>हिंदी</option>
            <option>मराठी</option>
          </select>

          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => setShowModal(true)}
          >
            Enquiry
          </button>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
        
        <Link className="navbar-brand" to="/">
          <div className="logo-container">

            {/* MAIN LOGO */}
            <img src={logo} className="main-logo" alt="logo" />

            {/* SUB LOGOS */}
            <Link to="/services/ndf">
              <img src={logo1} className="sub-logo" alt="ndf" />
            </Link>

            <Link to="/services/sndf">
              <img src={logo2} className="sub-logo" alt="sndf" />
            </Link>

            <Link to="/services/owl">
              <img src={logo3} className="sub-logo" alt="owl" />
            </Link>

            <Link to="/services/spydefence">
              <img src={logo4} className="sub-logo" alt="spy" />
            </Link>

            <Link to="/course/dic">
              <img src={logo5} className="sub-logo" alt="dic" />
            </Link>

            <div className="logo-text">
              🢀 CLICK LOGO FOR MORE INFO
            </div>

          </div>
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto">

            <li><Link className="nav-link" to="/" onClick={closeNavbar}>Home</Link></li>
            <li><Link className="nav-link" to="/about" onClick={closeNavbar}>About</Link></li>

            <li><Link className="nav-link" to="/contact" onClick={closeNavbar}>Contact</Link></li>

          </ul>
        </div>

      </nav>
    </>
  );
}

export default Navbar;