import logo from "../../assets/images/LOGO.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      {/* 🔴 TOP BAR */}
      <div className="top-bar">

        {/* LEFT */}
        <div className="top-left">
          <FaFacebookF style={{ color: "#1877F2" }} />
          <FaInstagram style={{ color: "#E4405F" }} />
          <FaTwitter style={{ color: "#1DA1F2" }} />
          <FaWhatsapp style={{ color: "#25D366" }} />
          <FaYoutube style={{ color: "#FF0000" }} />
        </div>

        {/* CENTER */}
        <div className="top-center">
          <div className="scroll-text">
            SNDF वेबसाइट पर आपका स्वागत है, यहाँ आने के लिए आपका धन्यवाद।
          </div>
        </div>

        {/* RIGHT */}
        <div className="top-right">
          <select className="form-select form-select-sm">
            <option>ENGLISH</option>
            <option>हिंदी</option>
            <option>मराठी</option>
          </select>

          <button className="btn btn-danger btn-sm">Enquiry</button>
        </div>

      </div>

      {/* 🔵 MAIN NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark px-3">

        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" />
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
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>

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

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Media
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item">Gallery</a></li>
                <li><a className="dropdown-item">Videos</a></li>
                <li><a className="dropdown-item">News</a></li>
                <li><a className="dropdown-item">Press</a></li>
                <li><a className="dropdown-item">Events</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Branches
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item">Delhi</a></li>
                <li><a className="dropdown-item">Mumbai</a></li>
                <li><a className="dropdown-item">Pune</a></li>
                <li><a className="dropdown-item">Bangalore</a></li>
                <li><a className="dropdown-item">Hyderabad</a></li>
              </ul>
            </li>

            <li className="nav-item"><a className="nav-link">Courses</a></li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Cases
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item">Case 1</a></li>
                <li><a className="dropdown-item">Case 2</a></li>
                <li><a className="dropdown-item">Case 3</a></li>
              </ul>
            </li>

            <li className="nav-item"><a className="nav-link">Blog</a></li>
            <li className="nav-item"><a className="nav-link">Team</a></li>
            <li className="nav-item"><a className="nav-link">Career</a></li>
            <li className="nav-item"><a className="nav-link">Contact</a></li>

          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;