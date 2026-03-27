import logo from "../../assets/images/LOGO.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";

function Navbar() {
  return (
    <>
      {/* 🔴 TOP BAR */}
      <div className="py-2 px-3 d-flex justify-content-between align-items-center">

        {/* 🔵 LEFT - SOCIAL ICONS */}
        <div className="d-flex gap-3 fs-5">
          <FaFacebookF style={{ color: "#1877F2", cursor: "pointer" }} />
          <FaInstagram style={{ color: "#E4405F", cursor: "pointer" }} />
          <FaLinkedin style={{ color: "#1DA1F2", cursor: "pointer" }} />
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
          <select className="form-select form-select-sm w-auto">
            <option>ENGLISH</option>
            <option>हिंदी</option>
            <option>मराठी</option>

          </select>

          <button className="btn btn-danger btn-sm">Enquiry</button>
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
                <li><a className="dropdown-item">SNDF Guard</a></li>
                <li><a className="dropdown-item">NDF</a></li>
                <li><a className="dropdown-item">OWL</a></li>
                <li><a className="dropdown-item">SPY</a></li>
                <li><a className="dropdown-item">DIC</a></li>
              </ul>
            </li>

            {/* MEDIA */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Media
              </a>
              <ul className="dropdown-menu">
               <li><a className="dropdown-item">Gallery</a></li>
                <li><a className="dropdown-item">Videos</a></li>
                <li><a className="dropdown-item">News</a></li>
                
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
                <li><a className="dropdown-item">Assam</a></li>
                <li><a className="dropdown-item">Hyderabad</a></li>               
              </ul>
            </li>

            

             <li className="nav-item">
              <Link className="nav-link" to="/course">Course</Link>
            </li>

           <li className="nav-item">
              <Link to="/shop" className="nav-link">Shop</Link>
</li>

            <li className="nav-item">
              <Link to="/blog" className="nav-link">Blog</Link>
</li>

            {/* TEAM */}
           <li className="nav-item">
  <Link className="nav-link" to="/team">Team</Link>
</li>

           <li className="nav-item">
  <Link to="/career" className="nav-link">Career</Link>
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
