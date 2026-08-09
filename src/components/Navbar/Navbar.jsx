import GoogleTranslate from "../GoogleTranslate";
import logo from "../../assets/images/LOGO.webp";
import logo1 from "../../assets/images/ndf-logo.webp";
import logo2 from "../../assets/images/guard-logo.webp";
import logo3 from "../../assets/images/owl-logo.webp";
import logo4 from "../../assets/images/spy-logo.webp";
import logo5 from "../../assets/images/dic-logo.webp";

import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Collapse from "bootstrap/js/dist/collapse";

function Navbar() {

  // ✅ ONLY FIX (dropdown + mobile close issue)
  const closeNavbar = () => {
    if (window.innerWidth < 992) {
      const nav = document.getElementById("navbarContent");
      if (nav && nav.classList.contains("show")) {
        Collapse.getOrCreateInstance(nav).hide();
      }
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [errors, setErrors] = useState({ name: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

const API = import.meta.env.VITE_API_URL;

const handleSubmit = async () => {

  let newErrors = {};

if (!name.trim()) {
  newErrors.name = "Name is required";
} else if (!/^[A-Za-z\s]+$/.test(name)) {
  newErrors.name = "Only letters allowed";
}  

if (!phone) newErrors.phone = "Mobile number is required";
else if (phone.length !== 10) newErrors.phone = "Enter valid number";

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  setLoading(true);

  const payload = {
  name,
  phone,
  service: "Quick Enquiry", // ✅ DEFAULT VALUE (invisible to user)
  requirement: msg,
  source: "QUICK"
};

  try {
    const res = await fetch(`${API}/api/enquiry`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

   
  if (res.ok) {

  setLoading(false);

  setShowModal(false);
  setName("");
  setPhone("");
  setMsg("");

  setShowSuccess(true);

} else {

  const message = await res.text();

  alert(message);

  setLoading(false);

  // ✅ Clear form
  setName("");
  setPhone("");
  setMsg("");

  // ✅ Close popup
  setShowModal(false);

}

} 
  
  catch (err) {
  console.error(err);
  setLoading(false);
  alert("Server error ❌");
}

};

  return (
    <>
      {/* ===== MODAL (UNCHANGED) ===== */}
      {showModal && (
        <div className="sn-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="sn-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="sn-close-btn" onClick={() => setShowModal(false)}>×</button>

            <h3>Quick Enquiry</h3>

            <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => {
                const value = e.target.value;

                  // ❌ allow only letters and spaces
                  if (!/^[A-Za-z\s]*$/.test(value)) return;

                  setName(value);
                  setErrors({ ...errors, name: "" });
                }}
                className={errors.name ? "input-error" : ""}/>

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
              onChange={(e) => setMsg(e.target.value)}>
              </textarea>

            <button className="sn-submit-btn" onClick={handleSubmit} disabled={loading}>
              {loading ? "Sending..." : "Send Request 🚀"}
            </button>
            
          </div>
        </div>
      )}

      {showSuccess && (
  <div className="navbar-success-overlay">

    <div className="navbar-success-popup">

      <div className="navbar-success-icon">
        ✅
      </div>

      <h2>Thank You!</h2>

      <p className="navbar-success-main">
        Your enquiry has been submitted successfully.
      </p>

      <p className="navbar-success-sub">
        Our team will contact you shortly.
      </p>

      <p className="navbar-success-footer">
        Thank you for connecting with <strong>S.N.D.F.</strong>
      </p>

      <button
        className="navbar-success-btn"
        onClick={() => setShowSuccess(false)}
      >
        OK
      </button>

    </div>

  </div>
)}

      {/* ===== TOP BAR (UNCHANGED EXACTLY) ===== */}
      <div className="py-2 px-3 d-flex justify-content-between align-items-center">

        <div className="topbar-left-space"></div>

        <div className="scroll-container">
          <div className="scroll-text">
  📢 NDF Recruitment Date will be announced soon – Stay tuned for further updates. &nbsp;&nbsp;&nbsp;
  NDF भर्ती की तारीख जल्द ही घोषित की जाएगी – आगे की जानकारी के लिए जुड़े रहें। &nbsp;&nbsp;&nbsp;
  NDF भरतीची तारीख लवकरच जाहीर करण्यात येणार आहे – पुढील माहितीसाठी संपर्कात रहा।
</div>
        </div>

        <div className="d-flex gap-2">
          
           <label htmlFor="language-select" className="visually-hidden">
            Select Language
          </label>

          <div className="d-flex gap-2">

  <GoogleTranslate />

  <button
    className="btn btn-danger btn-sm"
    aria-label="Open enquiry form"
    onClick={() => setShowModal(true)}
  >
    Enquiry
  </button>

</div>
        </div>
      </div>

      {/* ===== NAVBAR (FIXED BIG SCREEN ISSUE) ===== */}

<nav className="navbar navbar-dark bg-primary px-3">

  {/* LEFT LOGOS */}
  <div className="d-flex align-items-center flex-shrink-0">

    <div className="logo-container">

      {/* MAIN LOGO */}
      <Link to="/">
        <img
          src={logo}
          className="main-logo"
          loading="lazy"
          alt="logo"
        />
      </Link>

      {/* SUB LOGOS */}
      <Link to="/services/ndf">
        <img
          src={logo1}
          loading="lazy"
          className="sub-logo"
          alt="ndf"
        />
      </Link>

      <Link to="/services/sndf">
        <img
          src={logo2}
          loading="lazy"
          className="sub-logo"
          alt="sndf"
        />
      </Link>

      <Link to="/services/owl">
        <img
          src={logo3}
          loading="lazy"
          className="sub-logo"
          alt="owl"
        />
      </Link>

      <Link to="/services/spydefence">
        <img
          src={logo4}
          loading="lazy"
          className="sub-logo"
          alt="spy"
        />
      </Link>

      <Link to="/course/dic">
        <img
          src={logo5}
          loading="lazy"
          className="sub-logo"
          alt="dic"
        />
      </Link>

     <span className="logo-info-text">
  <span className="blink-arrow">⤋</span>
  CLICK LOGOS FOR MORE INFO
</span>

    </div>
  </div>

  {/* MOBILE TOGGLE */}
  <button
    className="navbar-toggler"
    aria-label="Toggle navigation"
    type="button"
    onClick={() => {

      const nav = document.getElementById("navbarContent");

      if (nav.classList.contains("show")) {
        Collapse.getOrCreateInstance(nav).hide();
      } else {
        Collapse.getOrCreateInstance(nav).show();
      }

    }}
  >
    <span className="navbar-toggler-icon"></span>
  </button>

  {/* MENU */}
  <div className="navbar-collapse" id="navbarContent">

    <ul
      className="navbar-nav ms-auto flex-row flex-wrap align-items-center"
      style={{ gap: "14px" }}
    >

      <li>
        <Link
          className="nav-link"
          to="/"
          aria-label="About SNDF"
          onClick={closeNavbar}
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          className="nav-link"
          to="/about"
          aria-label="About SNDF"
          onClick={closeNavbar}
        >
          About
        </Link>
      </li>

      {/* SERVICES */}
      <li className="nav-item dropdown">

        <a
          className="nav-link dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
        >
          Services
        </a>

        <ul className="dropdown-menu">

          <li>
            <Link
              to="/services/ndf"
              aria-label="NDF"
              className="dropdown-item"
              onClick={closeNavbar}
            >
              NDF Detective
            </Link>
          </li>

          <li>
            <Link
              to="/services/sndf"
              aria-label="SNDF Guard"
              className="dropdown-item"
              onClick={closeNavbar}
            >
              SNDF Guard
            </Link>
          </li>

          <li>
            <Link
              to="/services/owl"
              aria-label="Owl"
              className="dropdown-item"
              onClick={closeNavbar}
            >
              Owl Security
            </Link>
          </li>

          <li>
            <Link
              to="/services/spydefence"
              aria-label="Spydefence"
              className="dropdown-item"
              onClick={closeNavbar}
            >
              Spy Defence
            </Link>
          </li>

        </ul>
      </li>

      {/* GALLERY */}
      <li>
        <Link
          className="nav-link"
          to="/gallery"
          aria-label="Gallery"
          onClick={closeNavbar}
        >
          Gallery
        </Link>
      </li>

      {/* BRANCHES */}
      <li className="nav-item dropdown">

        <a
          className="nav-link dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
        >
          Branches
        </a>

        <ul className="dropdown-menu">

          <li>
            <Link
              to="/branches/pune"
              aria-label="Pune Branch"
              className="dropdown-item"
              onClick={closeNavbar}
            >
              Head Office (Pune)
            </Link>
          </li>

          <li>
            <Link
              to="/branches/mumbai"
              aria-label="Mumbai Branch"
              className="dropdown-item"
              onClick={closeNavbar}
            >
              Mumbai
            </Link>
          </li>

          <li>
            <Link
              to="/branches/hyderabad"
              aria-label="Hyderabad Branch"
              className="dropdown-item"
              onClick={closeNavbar}
            >
              Hyderabad
            </Link>
          </li>

          <li>
            <Link
              to="/branches/assam"
              aria-label="Assam Branch"
              className="dropdown-item"
              onClick={closeNavbar}
            >
              Assam
            </Link>
          </li>

        </ul>
      </li>

      {/* OTHER LINKS */}

      <li>
        <Link
          to="/course"
          className="nav-link"
          aria-label="Course"
          onClick={closeNavbar}
        >
          Course
        </Link>
      </li>

      <li>
        <Link
          to="/shop"
          className="nav-link"
          aria-label="Shop"
          onClick={closeNavbar}
        >
          Shop
        </Link>
      </li>

      <li>
        <Link
          to="/blog"
          className="nav-link"
          aria-label="Blog"
          onClick={closeNavbar}
        >
          Blog
        </Link>
      </li>

      <li>
        <Link
          to="/career"
          className="nav-link"
          aria-label="Career"
          onClick={closeNavbar}
        >
          Career
        </Link>
      </li>

      <li>
        <Link
          to="/contact"
          className="nav-link"
          aria-label="Contact"
          onClick={closeNavbar}
        >
          Contact
        </Link>
      </li>

    </ul>
  </div>
</nav>
    </>
  );
}

export default Navbar;
