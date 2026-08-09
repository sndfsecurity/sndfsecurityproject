import React from "react";
import "./Career.css";

const Career = () => {
  return (
    <div className="career-page">

      {/* Recruitment Announcement */}
      <section className="career-coming-soon">

        <div className="career-content">

          <span className="career-label">
            NDF / SNDF RECRUITMENT 2026–27
          </span>

          <h1>
            Recruitment Coming Soon
          </h1>

          <p className="career-description">
            The next NDF / SNDF recruitment opportunity will be announced
            shortly. Complete recruitment details and application information
            will be shared officially once the recruitment is announced.
          </p>

          <div className="career-divider"></div>

          <div className="career-update-box">

            <div className="update-icon">
              <span>📢</span>
            </div>

            <div className="update-content">
              <h3>Stay Connected for Official Updates</h3>

              <p>
                Please keep checking the official SNDF website regularly
                for the latest recruitment announcements and updates.
              </p>
            </div>

          </div>

          <div className="career-status">
            <span className="status-dot"></span>
            <span>Official recruitment information will be updated here</span>
          </div>

        </div>

      </section>

    </div>
  );
};

export default Career;
