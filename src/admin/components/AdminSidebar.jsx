import {
  FaTachometerAlt,
  FaEnvelope,
  FaBriefcase,
  FaShoppingCart,
  FaCreditCard,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";

import logo from "../../assets/images/LOGO.webp";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./AdminSidebar.css";
import { useNavigate } from "react-router-dom";


export default function AdminSidebar() {
  const location = useLocation();

  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  const handleAuthError = (err) => {
    if (err.response?.status === 401 || err.response?.status === 403) {
      localStorage.removeItem("token");
      window.location.href = "/admin/login";
      return true;
    }
    return false;
  };


  return (
    <>

      {/* MOBILE HEADER */}

      <div className="mobile-header">

        <div className="mobile-brand">

          <img src={logo} className="main-logo" loading="lazy" alt="logo"   />

          <span>SNDF ADMIN</span>

        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <FaBars />
        </button>

      </div>

      {/* OVERLAY */}

      {showSidebar && (
        <div
          className="sidebar-overlay"
          onClick={() => setShowSidebar(false)}
        ></div>
      )}

      {/* SIDEBAR */}

      <aside className={`admin-sidebar ${showSidebar ? "show-sidebar" : ""}`}>

        {/* TOP */}

        <div className="sidebar-top">

        <img src={logo} className="main-logo" loading="lazy" alt="logo"   />


          <h3>SNDF Security</h3>

          <p>Admin Panel</p>

        </div>

        {/* MENU */}

        <ul className="sidebar-menu">

          {/* <li className="active">
            <FaTachometerAlt />
            <span>Dashboard</span>
          </li> */}

          <Link to="/admin/dashboard" className="sidebar-link">

          <li className={location.pathname === "/admin/dashboard" ? "active" : ""}>
            <FaTachometerAlt />
            <span>Dashboard</span>
          </li>

        </Link>

         <Link to="/admin/enquiries" className="sidebar-link">

          <li className={location.pathname === "/admin/enquiries" ? "active" : ""}>
            <FaEnvelope />
            <span>Enquiries</span>
          </li>

        </Link>

          {/* <li>
            <FaEnvelope />
            <span>Enquiries</span>
          </li> */}

          <li>
            <FaBriefcase />
            <span>Careers</span>
          </li>

          <li>
            <FaShoppingCart />
            <span>Orders</span>
          </li>

          <li>
            <FaCreditCard />
            <span>Payments</span>
          </li>

        </ul>

        {/* LOGOUT */}

        <button className="logout-btn" onClick={handleLogout}>

          <FaSignOutAlt />

          Logout

        </button>

      </aside>

    </>
  );
}

