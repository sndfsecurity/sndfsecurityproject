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

import "./AdminSidebar.css";

export default function AdminSidebar() {

  const [showSidebar, setShowSidebar] = useState(false);

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

          <li className="active">
            <FaTachometerAlt />
            <span>Dashboard</span>
          </li>

          <li>
            <FaEnvelope />
            <span>Enquiries</span>
          </li>

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

        <button className="logout-btn">

          <FaSignOutAlt />

          Logout

        </button>

      </aside>

    </>
  );
}


// import "./AdminSidebar.css";

// export default function AdminSidebar() {
//   return (

//     <div className="admin-sidebar">

//       <h2 className="sidebar-logo">SNDF ADMIN</h2>

//       <ul className="sidebar-menu">

//         <li>Dashboard</li>

//         <li>Enquiries</li>

//         <li>Careers</li>

//         <li>Orders</li>

//         <li>Payments</li>

//       </ul>

//     </div>
//   );
// }