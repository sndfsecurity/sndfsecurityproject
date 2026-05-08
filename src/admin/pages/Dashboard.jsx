import "./Dashboard.css";
import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {

const API = import.meta.env.VITE_API_URL;

const [stats, setStats] = useState({
  totalEnquiries: 0,
  newEnquiries: 0,
  inProgress: 0,
  completed: 0,
});


useEffect(() => {

  const fetchDashboardStats = () => {

        const token = localStorage.getItem("token");

        axios.get(`${API}/api/admin/dashboard/stats`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        })
        .then((response) => {
        setStats(response.data);
        })
        .catch((error) => {
        console.log(error);
        });

    };

  // First load
  fetchDashboardStats();

  // Auto refresh every 5 seconds
  const interval = setInterval(() => {
    fetchDashboardStats();
  }, 5000);

  // Cleanup
  return () => clearInterval(interval);

}, []);


  return (

     <>
    
        <AdminSidebar />
        <AdminHeader />

      <div className="dashboard-page">

      {/* TOP */}

      <div className="dashboard-top">

        <h2>Dashboard Overview</h2>

        <p>
          Monitor enquiries, careers, orders and overall admin activity.
        </p>

      </div>



      {/* ENQUIRY CARDS */}

      <div className="dashboard-section-title">
        Enquiry Management
      </div>

      <div className="dashboard-stats">

        <div className="dashboard-card blue">
          <div className="card-top">
            <span>Total Enquiries</span>
          </div>

          <h3>{stats.totalEnquiries}</h3>

          <p>All enquiries received from website forms.</p>
        </div>



        <div className="dashboard-card green">
          <div className="card-top">
            <span>New Enquiries</span>
          </div>

          <h3>{stats.newEnquiries}</h3>

          <p>Fresh enquiries waiting for admin response.</p>
        </div>



        <div className="dashboard-card orange">
          <div className="card-top">
            <span>In Progress</span>
          </div>

          <h3>{stats.inProgress}</h3>

          <p>Cases currently being handled by team.</p>
        </div>



        <div className="dashboard-card purple">
          <div className="card-top">
            <span>Completed</span>
          </div>

          <h3>{stats.completed}</h3>

          <p>Successfully completed enquiry cases.</p>
        </div>

      </div>



      {/* OTHER MODULES */}

      <div className="dashboard-section-title second-title">
        Other Modules
      </div>

      <div className="dashboard-stats second-row">

        <div className="dashboard-card pink">
          <div className="card-top">
            <span>Careers</span>
          </div>

          <h3>0</h3>

          <p>Career applications management module.</p>
        </div>



        <div className="dashboard-card red">
          <div className="card-top">
            <span>Orders</span>
          </div>

          <h3>0</h3>

          <p>Track customer orders and service requests.</p>
        </div>



        <div className="dashboard-card dark">
          <div className="card-top">
            <span>Payments</span>
          </div>

          <h3>0</h3>

          <p>Manage invoices and payment records.</p>
        </div>

      </div>



      {/* QUICK ACCESS */}

      <div className="dashboard-bottom">

        <div className="dashboard-box">

          <h3>Quick Access</h3>

        
            <div className="quick-links">

            <Link to="/admin/enquiries" className="quick-link">
                <button>View All Enquiries</button>
            </Link>

            <Link to="/admin/enquiries/contact" className="quick-link">
                <button>Check Contact Forms</button>
            </Link>

            <Link to="/admin/enquiries/quick" className="quick-link">
                <button>Quick Enquiry Requests</button>
            </Link>

            <Link  to="/admin/enquiries?status=COMPLETED" className="quick-link">
                <button>Manage Completed Cases</button>
            </Link>

        </div>




        </div>



        <div className="dashboard-box">

          <h3>System Activity</h3>

          <div className="activity-list">

            <div className="activity-item">
              New enquiry received from website.
            </div>

            <div className="activity-item">
              Admin updated enquiry status.
            </div>

            <div className="activity-item">
              Dashboard successfully secured with JWT.
            </div>

            <div className="activity-item">
              Website and admin panel running live.
            </div>

          </div>

        </div>

      </div>

    </div>


    </>

  );
}