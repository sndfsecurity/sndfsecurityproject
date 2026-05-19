import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import axios from "axios";
import "./EnquiryTable.css";
import toast from "react-hot-toast";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";


const EnquiryTable = ({ source }) => {

const API = import.meta.env.VITE_API_URL;

const [searchParams] = useSearchParams();

const statusFromUrl = searchParams.get("status");


const [statusFilter, setStatusFilter] = useState(
  statusFromUrl || "ALL"
);

const [enquiries, setEnquiries] = useState([]);
const [loading, setLoading] = useState(true);

const [searchTerm, setSearchTerm] = useState("");

const [page, setPage] = useState(0);
const [totalPages, setTotalPages] = useState(0);
const [totalElements, setTotalElements] = useState(0);

const PAGE_SIZE = 5;

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


  const formatDateTime = (dateString) => {

  // ✅ Force IST timezone parsing
  const date = new Date(dateString + "Z");

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
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
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

    const params = {
      page: page,
      size: PAGE_SIZE,
    };

    if (source) {
      params.source = source;
    }

    const res = await axios.get(url, {
      params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(res.data);

    // ✅ if backend sends paginated response
    if (res.data.content) {

      const sortedData = res.data.content.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      setEnquiries(sortedData);

      setTotalPages(res.data.totalPages || 0);
      setTotalElements(res.data.totalElements || 0);

    }

    // ✅ fallback if backend sends normal array
    else if (Array.isArray(res.data)) {

      const sortedData = res.data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      // frontend pagination fallback
      const start = page * PAGE_SIZE;
      const end = start + PAGE_SIZE;

      setEnquiries(sortedData.slice(start, end));

      setTotalPages(Math.ceil(sortedData.length / PAGE_SIZE));
      setTotalElements(sortedData.length);
    }

      } catch (err) {

        if (handleAuthError(err)) return;

        console.error("Error fetching enquiries", err);

      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchEnquiries();
    }, [source, page]);


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

  }, [page, source]);


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


  // const filteredEnquiries =
  // statusFilter === "ALL"
  //   ? enquiries
  //   : enquiries.filter((e) => e.status === statusFilter);

  const filteredEnquiries = enquiries.filter((e) => {

  const matchesStatus =
    statusFilter === "ALL" || e.status === statusFilter;

  const matchesSearch =
    e.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.phone?.includes(searchTerm) ||
    e.service?.toLowerCase().includes(searchTerm.toLowerCase());

  return matchesStatus && matchesSearch;
});

  return (

    <>

    <AdminSidebar />
    <AdminHeader />

    <div className="admin-wrapper">

      {/* <button className="logout-btn" onClick={handleLogout}>
          Logout
      </button> */}


    <div className="filter-buttonss">
      <button
        className={`filter-btns ${statusFilter === "ALL" ? "active" : ""}`}
        onClick={() => { setStatusFilter("ALL");  setPage(0);}}>
        ALL
      </button>

      <button
        className={`filter-btns ${statusFilter === "NEW" ? "active" : ""}`}
          onClick={() => { setStatusFilter("NEW"); 
          setPage(0); }}>
        NEW
      </button>

      <button
        className={`filter-btns ${statusFilter === "IN_PROGRESS" ? "active" : ""}`}
        onClick={() => { setStatusFilter("IN_PROGRESS"); setPage(0); }}>
        IN_PROGRESS
      </button>

      <button
        className={`filter-btns ${statusFilter === "COMPLETED" ? "active" : ""}`}
        onClick={() => { setStatusFilter("COMPLETED"); setPage(0); }}>
        COMPLETED
      </button>
      
    </div>


     

      <div className="admin-container">   

        {/* Header */}
        <div className="admin-header">
          <h2>Enquiries</h2>
          <span className="admin-badge">{source || "ALL"}</span>
        </div>

          <div className="search-box">
              <input
                type="text"
                placeholder="Search name, phone, service..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>

        {/* Table */}
        <div className="table-wrapper">

          <table className="admin-table">
            <thead>
              <tr>
              
              <th>Name</th>
              <th>Phone</th>
              <th>Service</th>
              <th>Address</th>
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

                  <td data-label="Address">
                    {e.address || "-"}
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

                        {/* <button
                            className="admin-btn"
                            onClick={() => updateStatus(e.id, "COMPLETED")}
                            disabled={e.status === "COMPLETED"}  >
                            Done
                          </button> */}

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


      {/* pagination................................. */}

        <div className="pagination">
  
          <button
            className="page-btn"
            disabled={page === 0}
            onClick={() => setPage(page - 1)}>
            Previous
          </button>

          <span className="page-info">
            Page {page + 1} of {totalPages}
          </span>

          <button
            className="page-btn"
            disabled={page + 1 >= totalPages}
            onClick={() => setPage(page + 1)}>
            Next
          </button>

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
        <p className="address-text">
          {e.address || "-"}
        </p>
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

      </>
  );
};

export default EnquiryTable;