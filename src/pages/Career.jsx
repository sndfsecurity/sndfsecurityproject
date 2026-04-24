import React from "react";
import "./Career.css";
import logo from "../assets/images/ndf-logo.webp"; // ✅ IMPORTANT

const Career = () => {
  return (
    <div className="career-page">

      <div className="notice-bar">
        ⚠️ Latest Update: NDF Special Entry Recruitment 2025-26 is OPEN
      </div>

      <div className="career-header">
        {/* ✅ CORRECT IMAGE */}
        <img src={logo} alt="NDF Logo" />

        <h1>Start Your Career with Nationalist Detective Force (NDF)</h1>
        <p>Official Recruitment Portal 2025-26</p>
      </div>

      <div className="notice-board">
        <h2>📢 Notice Board</h2>
        <ul>
          <li className="blink">🚨 Special Entry Recruitment 2025-26 Started [click apply button]</li>
          <li>Recruitment 2025-26 (615 Posts) - CLOSED</li>
        </ul>
      </div>

      <div className="table-section">
        <h2>📄 Recruitment Details</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Post Name</th>
                <th>Advertisement No.</th>
                <th>Location</th>
                <th>Vacancies</th>
                <th>Last Date</th>
                <th>Status</th>
                <th>Apply</th>
              </tr>
            </thead>

            <tbody>
              <tr className="highlight">
                <td>Detective (NDF)</td>
                <td>NDF/SE/2025</td>
                <td>All India</td>
                <td>Not Fixed</td>
                <td>Open</td>
                <td><span className="open">OPEN</span></td>
                <td>
                  <a
                    href="https://recruitment.ndfdetective.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apply-btn blink-btn"
                  >
                    Apply
                  </a>
                </td>
              </tr>

              <tr className="closed-row">
                <td>Security Guard / Officer</td>
                <td>NDF/2025</td>
                <td>All India</td>
                <td>615</td>
                <td>Closed</td>
                <td><span className="closed">CLOSED</span></td>
                <td>
                  <button className="closed-btn">Closed</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="important-links">
        <div className="links-box">
          <a
            href="https://recruitment.ndfdetective.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="apply-main-btn blink-btn"
          >
            📝 Apply Online
          </a>
        </div>
      </div>

    </div>
  );
};

export default Career;