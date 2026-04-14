import logo from "../../assets/images/LOGO.png";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { useState } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Navbar() {


const closeNavbar = () => {
  // Only run on mobile (Bootstrap breakpoint < 992px)
  if (window.innerWidth < 992) {
    const nav = document.getElementById("navbarContent");
    if (nav && nav.classList.contains("show")) {
      new window.bootstrap.Collapse(nav).hide();
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
      {showModal && (
        <div className="sn-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="sn-modal-box" onClick={(e) => e.stopPropagation()}>
            <span className="sn-close-btn" onClick={() => setShowModal(false)}>×</span>

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
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>

            <button className="sn-submit-btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}
      
<div className="py-2 px-3 d-flex justify-content-between align-items-center">

  <div className="d-flex gap-3 fs-5">

      <a href="https://www.facebook.com/share/1E8sd7bNqr/" target="_blank" rel="noopener noreferrer">
        <FaFacebookF style={{ color: "#1877F2", cursor: "pointer" }} />
      </a>

      <a href="https://www.instagram.com/nationalist_detective_force?igsh=MXZycWM1czA0ZHdneg==" target="_blank" rel="noopener noreferrer">
        <FaInstagram style={{ color: "#E4405F", cursor: "pointer" }} />
      </a>

      <a href="https://www.linkedin.com/in/nationalist-detective-force-034907376" target="_blank" rel="noopener noreferrer">
        <FaLinkedin style={{ color: "#0A66C2", cursor: "pointer" }} />
      </a>

      <a href="https://wa.me/919970383155" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp style={{ color: "#25D366", cursor: "pointer" }} />
      </a>

      <a href="https://youtube.com/@ndfdetective3968?si=fsmB5O0GL4IY3dNu" target="_blank" rel="noopener noreferrer">
        <FaYoutube style={{ color: "#FF0000", cursor: "pointer" }} />
      </a>

</div>

        <div className="scroll-container">
          <div className="scroll-text">
            Welcome to SNDF – Thank you for visiting our website. &nbsp;&nbsp;&nbsp;
            SNDF वेबसाइट पर आपका स्वागत है – यहाँ आने के लिए आपका धन्यवाद। &nbsp;&nbsp;&nbsp;
            SNDF वेबसाइटवर आपले स्वागत आहे – येथे भेट दिल्याबद्दल धन्यवाद।
          </div>
        </div>

        <div className="d-flex align-items-center gap-2">
          <select className="form-select form-select-sm w-auto">
            <option>ENGLISH</option>
            <option>हिंदी</option>
            <option>मराठी</option>
          </select>

          <button className="enquiry-btn btn btn-danger btn-sm" onClick={() => setShowModal(true)}>
            Enquiry
          </button>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" width="90" style={{ borderRadius: "50%" }} />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto" style={{ gap: "10px" }}>

            <li className="nav-item"><Link className="nav-link" to="/" onClick={closeNavbar}>Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about" onClick={closeNavbar}>About</Link></li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</a>
              <ul className="dropdown-menu">
                <li><Link to="/services/ndf" className="dropdown-item" onClick={closeNavbar}>NDF Detective</Link></li>
                <li><Link to="/services/sndf" className="dropdown-item" onClick={closeNavbar}>SNDF Guard</Link></li>
                <li><Link to="/services/owl" className="dropdown-item" onClick={closeNavbar}>Owl Security</Link></li>
                <li><Link to="/services/spydefence" className="dropdown-item" onClick={closeNavbar}>Spy Defence</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Media</a>
              <ul className="dropdown-menu">
                <li><Link to="/media/gallery" className="dropdown-item" onClick={closeNavbar}>Gallery</Link></li>
                <li><a className="dropdown-item" onClick={closeNavbar}>Videos</a></li>
                <li><a className="dropdown-item" onClick={closeNavbar}>News</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Branches</a>
              <ul className="dropdown-menu">
                <li><Link to="/branches/pune" className="dropdown-item" onClick={closeNavbar}>Head Office (Pune)</Link></li>
                <li><a className="dropdown-item">Mumbai</a></li>
                <li><Link to="" className="dropdown-item" onClick={closeNavbar}>Hyderabad</Link></li>
                <li><Link to="/branches/assam" className="dropdown-item" onClick={closeNavbar}>Assam</Link></li>

              </ul>
            </li>

            <li className="nav-item"><Link to="/course" className="nav-link" onClick={closeNavbar}>Course</Link></li>
            <li className="nav-item"><Link to="/shop" className="nav-link" onClick={closeNavbar}>Shop</Link></li>
            <li className="nav-item"><Link to="/blog" className="nav-link" onClick={closeNavbar}>Blog</Link></li>
            <li className="nav-item"><Link to="/team" className="nav-link" onClick={closeNavbar}>Team</Link></li>
            <li className="nav-item"><Link to="/career" className="nav-link" onClick={closeNavbar}>Career</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link" onClick={closeNavbar}>Contact</Link></li>

          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
