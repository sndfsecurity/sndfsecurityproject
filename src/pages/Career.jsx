import React from "react";
import "./Career.css";

const Career = () => {
  return (
    <div className="career-page">
      <section className="career-coming-soon">
        <div className="career-bg-shape career-bg-shape-one"></div>
        <div className="career-bg-shape career-bg-shape-two"></div>

        <div className="career-content">

          <div className="career-label">
            NDF / SNDF RECRUITMENT 2026–27
          </div>

          <h1>
            Something Big
            <span> Is Coming Soon</span>
          </h1>

          <p className="career-subtitle">
            A new recruitment opportunity is on the way.
          </p>

          <p className="career-description">
            Get ready for the upcoming NDF / SNDF Recruitment 2026–27.
            The official recruitment announcement and complete application
            information will be shared soon.
          </p>

          <div className="career-info-box">
            <div className="career-info-icon">!</div>

            <div className="career-info-content">
              <span className="career-info-label">
                OFFICIAL ANNOUNCEMENT COMING SOON
              </span>

              <h3>Get Ready for the Next Opportunity</h3>

              <p>
                Recruitment details, eligibility criteria, vacancies,
                application dates and other important information will be
                announced officially once the recruitment process begins.
              </p>
            </div>
          </div>

          <div className="career-status">
            <span className="status-dot"></span>
            <span>
              Stay connected with the official SNDF website for the latest
              recruitment announcements and updates.
            </span>
          </div>

          <div className="career-bottom-text">
            <span>OFFICIAL INFORMATION WILL BE UPDATED HERE</span>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Career;
