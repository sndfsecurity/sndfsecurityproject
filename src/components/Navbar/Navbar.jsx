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

      {/* ===== TOP BAR (UNCHANGED EXACTLY) ===== */}
      <div className="py-2 px-3 d-flex justify-content-between align-items-center">

        <div className="d-flex gap-3 fs-5">
          <a href="#"><FaFacebookF aria-label="Facebook" style={{ color: "#1877F2" }} /></a>
          <a href="#"><FaInstagram aria-label="Instagram" style={{ color: "#E4405F" }} /></a>
          <a href="#"><FaLinkedin aria-label="LinkedIn" style={{ color: "#0A66C2" }} /></a>
          <a href="#"><FaWhatsapp aria-label="WhatsApp" style={{ color: "#25D366" }} /></a>
          <a href="#"><FaYoutube aria-label="YouTube" style={{ color: "#FF0000" }} /></a>
        </div>

        <div className="scroll-container">
          <div className="scroll-text">
            Welcome to SNDF – Thank you for visiting our website. &nbsp;&nbsp;&nbsp;
            SNDF वेबसाइट पर आपका स्वागत है – यहाँ आने के लिए आपका धन्यवाद। &nbsp;&nbsp;&nbsp;
            SNDF वेबसाइटवर आपले स्वागत आहे – येथे भेट दिल्याबद्दल धन्यवाद।
          </div>
        </div>

        <div className="d-flex gap-2">
          
           <label htmlFor="language-select" className="visually-hidden">
            Select Language
          </label>

          <select 
            id="language-select"
            className="form-select form-select-sm w-auto" >
            <option>ENGLISH</option>
            <option>हिंदी</option>
            <option>मराठी</option>
          </select>

          <button className="btn btn-danger btn-sm" aria-label="Open enquiry form" onClick={() => setShowModal(true)}>
            Enquiry
          </button>
        </div>
      </div>

      {/* ===== NAVBAR (UNCHANGED STRUCTURE) ===== */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">

        <div className="navbar-brand">
          <div className="logo-container">

            {/* MAIN LOGO CLICKABLE */}
            <Link to="/">
              <img src={logo} className="main-logo" loading="lazy" alt="logo"   />
            </Link>

            {/* SUB LOGOS */}
            <Link to="/services/ndf"><img src={logo1}  loading="lazy" className="sub-logo"  alt="ndf"/></Link>
            <Link to="/services/sndf"><img src={logo2} loading="lazy" className="sub-logo" alt="sndf" /></Link>
            <Link to="/services/owl"><img src={logo3} loading="lazy" className="sub-logo" alt="owl"/></Link>
            <Link to="/services/spydefence"><img src={logo4} loading="lazy" className="sub-logo" alt="spy" /></Link>
            <Link to="/course/dic"><img src={logo5}  loading="lazy"className="sub-logo" alt="dic"/></Link>

            <div className="logo-text">
              🢀 CLICK LOGO FOR MORE INFO
            </div>

          </div>
        </div>



<button
className="navbar-toggler"
aria-label="Toggle navigation"
type="button"
onClick={()=>{
const nav=document.getElementById("navbarContent");

if(nav.classList.contains("show")){
Collapse.getOrCreateInstance(nav).hide();
}else{
Collapse.getOrCreateInstance(nav).show();
}

}}
>
<span className="navbar-toggler-icon"></span>
</button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto" style={{ gap: "10px" }}>

            <li><Link className="nav-link" to="/" aria-label="About SNDF" onClick={closeNavbar}>Home</Link></li>
            <li><Link className="nav-link" to="/about" aria-label="About SNDF" onClick={closeNavbar}>About</Link></li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Services</a>
              <ul className="dropdown-menu">
                <li><Link to="/services/ndf" aria-label="NDF" className="dropdown-item" onClick={closeNavbar}>NDF Detective</Link></li>
                <li><Link to="/services/sndf" aria-label="SNDF Guard" className="dropdown-item" onClick={closeNavbar}>SNDF Guard</Link></li>
                <li><Link to="/services/owl" aria-label="Owl" className="dropdown-item" onClick={closeNavbar}>Owl Security</Link></li>
                <li><Link to="/services/spydefence" aria-label="Spydefence" className="dropdown-item" onClick={closeNavbar}>Spy Defence</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Media</a>
              <ul className="dropdown-menu">
                <li><Link to="/media/gallery" aria-label="Gallery"  className="dropdown-item" onClick={closeNavbar}>Gallery</Link></li>
                <li><Link to="/media/videos" aria-label="Videos" className="dropdown-item" onClick={closeNavbar}>Videos</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Branches</a>
              <ul className="dropdown-menu">
                <li><Link to="/branches/pune" aria-label="Pune Branch" className="dropdown-item" onClick={closeNavbar}>Head Office (Pune)</Link></li>
                <li><Link to="/branches/mumbai" aria-label="Mumbai Branch" className="dropdown-item" onClick={closeNavbar}>Mumbai</Link></li>
                <li><Link to="/branches/hyderabad" aria-label="Hyderabad Branch" className="dropdown-item" onClick={closeNavbar}>Hyderabad</Link></li>
                <li><Link to="/branches/assam" aria-label="Assam Branch" className="dropdown-item" onClick={closeNavbar}>Assam</Link></li>
              </ul>
            </li>

            <li><Link to="/course" className="nav-link" aria-label="Course" onClick={closeNavbar}>Course</Link></li>
            <li><Link to="/shop" className="nav-link" aria-label="Shop" onClick={closeNavbar}>Shop</Link></li>
            <li><Link to="/blog" className="nav-link" aria-label="Blog" onClick={closeNavbar}>Blog</Link></li>
            <li><Link to="/team" className="nav-link" aria-label="Team" onClick={closeNavbar}>Team</Link></li>
            <li><Link to="/career" className="nav-link" aria-label="Career" onClick={closeNavbar}>Career</Link></li>
            <li><Link to="/contact" className="nav-link" aria-label="Contact" onClick={closeNavbar}>Contact</Link></li>

          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;