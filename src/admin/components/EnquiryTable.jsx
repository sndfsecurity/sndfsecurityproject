import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import "./EnquiryTable.css";
import toast from "react-hot-toast";


const EnquiryTable = ({ source }) => {

const API = import.meta.env.VITE_API_URL;

const [statusFilter, setStatusFilter] = useState("ALL");

  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // 🔐 Protect route
  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
    }
  }, []);

  const handleLogout = () => {
  localStorage.removeItem("token");
  navigate("/admin/login");
};


  // datetime added
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();

    const diffMs = now - date;
    const diffMin = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMin / 60);

    if (diffMin < 1) return "Just now";
    if (diffMin < 60) return `${diffMin} min ago`;
    if (diffHours < 24) return `${diffHours} hr ago`;

    return date.toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  // 🔐 Common logout handler
  const handleAuthError = (err) => {
    if (err.response?.status === 401 || err.response?.status === 403) {
      localStorage.removeItem("token");
      window.location.href = "/admin/login";
      return true;
    }
    return false;
  };

  // Fetch enquiries
  const fetchEnquiries = async () => {
    try {
    
      let url = `${API}/api/enquiry`;
      if (source) url += `?source=${source}`;

      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setEnquiries(
        res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    } catch (err) {
      if (handleAuthError(err)) return;

      console.error("Error fetching enquiries", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, [source]);

  // Update status
  const updateStatus = async (id, newStatus) => {
    try {
          await axios.put(
          `${API}/api/enquiry/${id}/status?status=${newStatus}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(`Status updated to ${newStatus}`);
      fetchEnquiries();
    } catch (err) {
      if (handleAuthError(err)) return;

      console.error("Error updating status", err);
      toast.error("Failed to update status");
    }
  };

  // auto refresh
  useEffect(() => {
    const interval = setInterval(() => {
      fetchEnquiries();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // delete
  const deleteEnquiry = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this enquiry?");
    if (!confirmDelete) return;

    try {
        await axios.delete(`${API}/api/enquiry/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Enquiry deleted successfully");
      fetchEnquiries();
    } catch (err) {
      if (handleAuthError(err)) return;

      console.error("Delete error", err);
      toast.error("Failed to delete enquiry");
    }
  };

  if (loading) return <p className="loading">Loading enquiries...</p>;


  const filteredEnquiries =
  statusFilter === "ALL"
    ? enquiries
    : enquiries.filter((e) => e.status === statusFilter);

  return (

    <div className="admin-wrapper">

      <button className="logout-btn" onClick={handleLogout}>
          Logout
      </button>


    <div className="filter-buttonss">
      <button
        className={`filter-btns ${statusFilter === "ALL" ? "active" : ""}`}
        onClick={() => setStatusFilter("ALL")}>
        ALL
      </button>

      <button
        className={`filter-btns ${statusFilter === "NEW" ? "active" : ""}`}
        onClick={() => setStatusFilter("NEW")}>
        NEW
      </button>

      <button
        className={`filter-btns ${statusFilter === "IN_PROGRESS" ? "active" : ""}`}
        onClick={() => setStatusFilter("IN_PROGRESS")}>
        IN_PROGRESS
      </button>

      <button
        className={`filter-btns ${statusFilter === "COMPLETED" ? "active" : ""}`}
        onClick={() => setStatusFilter("COMPLETED")}>
        COMPLETED
      </button>
      
    </div>


     

      <div className="admin-container">   

        {/* Header */}
        <div className="admin-header">
          <h2>Enquiries</h2>
          <span className="admin-badge">{source || "ALL"}</span>
        </div>

       

        {/* Table */}
        <div className="table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
              
              <th>Name</th>
              <th>Phone</th>
              <th>Service</th>
              <th>Source</th>
              <th>Status</th>
              <th>Time</th>   
              <th>Action</th>
               
              </tr>
            </thead>

            <tbody>
              {filteredEnquiries.map((e) => (
                <tr key={e.id}>
                  <td data-label="Name">{e.name}</td>
                  <td data-label="Phone">{e.phone}</td>

                  <td data-label="Service" className="service">
                    {e.service}
                  </td>

                  <td data-label="Source">
                    <span className={`tag ${e.source.toLowerCase()}`}>
                      {e.source}
                    </span>
                  </td>

                  <td data-label="Status">

                    <select
                          className="status-select"
                          value={e.status}
                          onChange={(ev) =>
                            updateStatus(e.id, ev.target.value)
                          }
                          disabled={e.status === "COMPLETED"}   // ✅ ADD THIS
                        >
                      <option value="NEW">NEW</option>
                      <option value="IN_PROGRESS">IN_PROGRESS</option>
                      <option value="COMPLETED">COMPLETED</option>
                    </select>
                  </td>
      
                  <td className="time-cell">{formatDateTime(e.createdAt)}</td>

                  <td className="action-cell">

                        <button
                            className="admin-btn"
                            onClick={() => updateStatus(e.id, "COMPLETED")}
                            disabled={e.status === "COMPLETED"}  >
                            Done
                          </button>

                        <button
                            className="delete-btn"
                            onClick={() => deleteEnquiry(e.id)}>
                            Delete
                        </button>
                </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>


{/* mobile cards............................... */}

<div className="mobile-cards">
      {filteredEnquiries.map((e) => (
        <div className="enquiry-card" key={e.id}>

      <div className="card-grid">

      {/* LEFT */}
      <div className="card-left">
        <h3>{e.name}</h3>
        <p className="phone">{e.phone}</p>
        <p className="service-text">{e.service}</p>
      </div>

  
        {/* RIGHT */}
        <div className="card-right">
          <span className="source-label">SOURCE</span>

          <span className={`tag ${e.source.toLowerCase()}`}>
            {e.source}
          </span>

          <select
              value={e.status}
              onChange={(ev) => updateStatus(e.id, ev.target.value)}
              disabled={e.status === "COMPLETED"}   // ✅ ADD THIS
            >

            <option value="NEW">NEW</option>
            <option value="IN_PROGRESS">IN_PROGRESS</option>
            <option value="COMPLETED">COMPLETED</option>
          </select>

            <p className="time">{formatDateTime(e.createdAt)}</p>

        </div>

   </div>

{/* 🔥 BUTTONS NOW FULL WIDTH */}
          <div className="actions">

            <button className="done"
              onClick={() => updateStatus(e.id, "COMPLETED")}
              disabled={e.status === "COMPLETED"}   >
              Done
            </button>

            <button
              className="delete"
              onClick={() => deleteEnquiry(e.id)}>
              Delete
            </button>
          </div>

</div>

 
  ))}
</div>


      </div>
    </div>
  );
};

export default EnquiryTable;