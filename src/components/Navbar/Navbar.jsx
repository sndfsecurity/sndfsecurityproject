import logo from "../../assets/images/LOGO.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

import { useState } from "react";

function Navbar() {

  const [showModal, setShowModal] = useState(false);
 
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    phone: ""
  });

  
  const handleSubmit = () => {

  let newErrors = {};

  if (!name) {
    newErrors.name = "Name is required";
  }

  if (!phone) {
    newErrors.phone = "Mobile number is required";
  } else if (phone.length !== 10) {
    newErrors.phone = "Enter valid 10-digit number";
  }

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  // ✅ WhatsApp message
  const text = `*New Enquiry - SNDF Website*%0A Name: ${name}%0A Phone: ${phone}%0A Requirement: ${msg}`;

  window.open(`https://wa.me/918007341905?text=${text}`, "_blank");

  // reset
  setName("");
  setPhone("");
  setMsg("");
  setErrors({ name: "", phone: "" });

  setShowModal(false);
};
  

   
  return (
    <>

{/* ✅ MODAL FIXED */}
      
      
  {showModal && (
  <div className="sn-modal-overlay" onClick={() => setShowModal(false)}>
    
    <div 
      className="sn-modal-box" 
      onClick={(e) => e.stopPropagation()}
    >
      <span 
        className="sn-close-btn"
        onClick={() => setShowModal(false)}
      >
        ×
      </span>

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


{/* PHONE */}
        <input 
          type="tel" 
          placeholder="Mobile Number"
          value={phone}
          maxLength="10"
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
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
          onChange={(e) => setMsg(e.target.value)} ></textarea>

          <button className="sn-submit-btn" onClick={handleSubmit}>
            Submit
          </button>

    </div>

  </div>
)}

      {/* 🔴 TOP BAR */}
     
      <div className="py-2 px-3 d-flex justify-content-between align-items-center">

        {/* 🔵 LEFT - SOCIAL ICONS */}
        <div className="d-flex gap-3 fs-5">
          <FaFacebookF style={{ color: "#1877F2", cursor: "pointer" }} />
          <FaInstagram style={{ color: "#E4405F", cursor: "pointer" }} />
          <FaTwitter style={{ color: "#1DA1F2", cursor: "pointer" }} />
          <FaWhatsapp style={{ color: "#25D366", cursor: "pointer" }} />
          <FaYoutube style={{ color: "#FF0000", cursor: "pointer" }} />
        </div>

        {/* 🟡 CENTER - SCROLL TEXT */}
        <div className="scroll-container">
          <div className="scroll-text">
            Welcome to SNDF – Thank you for visiting our website. &nbsp;&nbsp;&nbsp;
            SNDF वेबसाइट पर आपका स्वागत है – यहाँ आने के लिए आपका धन्यवाद। &nbsp;&nbsp;&nbsp;
            SNDF वेबसाइटवर आपले स्वागत आहे – येथे भेट दिल्याबद्दल धन्यवाद।
          </div>
        </div>

        {/* 🔴 RIGHT - LANGUAGE + ENQUIRY */}
        <div className="d-flex align-items-center gap-2">
          <select  className="form-select form-select-sm w-auto" >
            <option>ENGLISH</option>
            <option>हिंदी</option>
            <option>मराठी</option>
          </select>

        <button className="enquiry-btn btn btn-danger btn-sm"onClick={() => setShowModal(true)}>
            Enquiry</button>      

      </div>

      </div>

      {/* 🔵 MAIN NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">

        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img 
            src={logo} 
            alt="logo" 
            width="90" 
            style={{ borderRadius: "50%" }}
          />
        </a>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarContent">

          <ul className="navbar-nav ms-auto" style={{ gap: "10px" }}>

            {/* HOME */}
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>

            {/* ABOUT */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            {/* SERVICES */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Services
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item">Security Guard</a></li>
                <li><a className="dropdown-item">Event Security</a></li>
                <li><a className="dropdown-item">Personal Security</a></li>
                <li><a className="dropdown-item">Corporate Security</a></li>
                <li><a className="dropdown-item">Industrial Security</a></li>
              </ul>
            </li>

            {/* MEDIA */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Media
              </a>
              <ul className="dropdown-menu">

                <Link to="/media/gallery" className="dropdown-item">Gallery</Link>

                <li><a className="dropdown-item">Videos</a></li>
                <li><a className="dropdown-item">News</a></li>
                <li><a className="dropdown-item">Press</a></li>
                <li><a className="dropdown-item">Events</a></li>
              </ul>
            </li>

            {/* BRANCHES */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Branches
              </a>
        <ul className="dropdown-menu">

              <li>
              <Link to="/branches/pune" className="dropdown-item">
                📍 Head Office (Pune)
              </Link>
              </li>

                <li><a className="dropdown-item">Mumbai</a></li>


              <li>
              <Link to="/branches/assam" className="dropdown-item">
                📍 Branch Office (Assam)
              </Link>
              </li>
              
                <li><a className="dropdown-item">Hyderabad</a></li>               
              </ul>
            </li>

            

             <li className="nav-item">
              <Link className="nav-link" to="/course">Course</Link>
            </li>

            {/* CASES */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Cases
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item">Case 1</a></li>
                <li><a className="dropdown-item">Case 2</a></li>
                <li><a className="dropdown-item">Case 3</a></li>
                <li><a className="dropdown-item">Case 4</a></li>
                <li><a className="dropdown-item">Case 5</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/blog" className="nav-link">Blog</Link>
</li>

            {/* TEAM */}
           <li className="nav-item">
  <Link className="nav-link" to="/team">Team</Link>
</li>

            {/* CAREER */}
            <li className="nav-item">
              <a className="nav-link">Career</a>
            </li>

            {/* CONTACT */}
            {/* <li className="nav-item">
              <a className="nav-link">Contact</a>
            </li> */}

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

          </ul>

        </div>

      </nav>
    </>
  );
}

export default Navbar;
