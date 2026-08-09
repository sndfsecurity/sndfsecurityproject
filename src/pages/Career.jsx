import React from "react";
import "./Career.css";
import logo from "../assets/images/ndf-logo.webp";

const Career = () => {
  return (
    <div className="career-page">

      {/* TOP NOTICE */}
      <div className="notice-bar">
        <p>📢 NDF / SNDF Recruitment 2026–27 Coming Soon</p>
      </div>

      {/* HEADER */}
      <div className="career-header">
        <img
          src={logo}
          alt="Nationalist Detective Force NDF Logo"
        />

        <h1>
          Start Your Career with Nationalist Detective Force (NDF)
        </h1>

        <p>
          NDF / SNDF Recruitment 2026–27
        </p>
      </div>

      {/* RECRUITMENT UPDATE */}
      <section className="recruitment-coming-soon">

        <div className="coming-soon-icon">
          📢
        </div>

        <span className="coming-soon-label">
          RECRUITMENT UPDATE
        </span>

        <h2>
          Recruitment 2026–27 Coming Soon
        </h2>

        <p>
          NDF / SNDF Recruitment 2026–27 is expected to be announced soon.
          Complete recruitment details, eligibility criteria, vacancies,
          application dates and other important information will be shared
          officially once the recruitment process begins.
        </p>

        <div className="stay-connected">
          <strong>Stay Connected for Official Updates</strong>

          <span>
            Keep checking the SNDF website regularly for the latest
            recruitment announcements and application updates.
          </span>
        </div>

      </section>

      {/* IMPORTANT INFORMATION */}
      <section className="recruitment-info">

        <h2>📄 Important Information</h2>

        <div className="info-list">

          <div className="info-item">
            <span>✓</span>
            <p>
              Recruitment details will be announced officially soon.
            </p>
          </div>

          <div className="info-item">
            <span>✓</span>
            <p>
              Application dates and vacancies will be updated after
              the official announcement.
            </p>
          </div>

          <div className="info-item">
            <span>✓</span>
            <p>
              Candidates are advised to follow the official SNDF website
              for the latest updates.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default Career;
