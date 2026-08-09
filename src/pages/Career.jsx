import React from "react";
import "./Career.css";

const Career = () => {
  return (
    <div className="career-page">

      {/* =========================
          HERO / COMING SOON
      ========================== */}

      <section className="career-hero">

        {/* Decorative Background Elements */}
        <div className="career-glow career-glow-one"></div>
        <div className="career-glow career-glow-two"></div>
        <div className="career-circle career-circle-one"></div>
        <div className="career-circle career-circle-two"></div>

        <div className="career-hero-content">

          {/* Small Badge */}
          <div className="career-badge">
            <span className="badge-dot"></span>
            NDF / SNDF RECRUITMENT 2026–27
          </div>

          {/* Main Heading */}
          <h1>
            Something Big
            <span> Is Coming Soon</span>
          </h1>

          {/* Subtitle */}
          <p className="career-hero-subtitle">
            A New Recruitment Opportunity Is on the Way
          </p>

          {/* Description */}
          <p className="career-hero-description">
            Get ready for the upcoming NDF / SNDF Recruitment 2026–27.
            The official recruitment announcement and complete application
            details will be revealed soon.
          </p>

          {/* Accent Line */}
          <div className="career-accent-line">
            <span></span>
          </div>

          {/* Main Update Card */}
          <div className="career-announcement-card">

            <div className="announcement-icon">
              <span className="announcement-icon-symbol">!</span>
            </div>

            <div className="announcement-content">

              <span className="announcement-label">
                OFFICIAL ANNOUNCEMENT COMING SOON
              </span>

              <h2>
                Get Ready for the Next Opportunity
              </h2>

              <p>
                Recruitment dates, vacancies, eligibility requirements,
                application instructions and other important information
                will be shared officially once the recruitment is announced.
              </p>

            </div>

          </div>

          {/* Bottom Status */}
          <div className="career-stay-connected">

            <span className="live-dot"></span>

            <p>
              Stay connected with the official SNDF website for the latest
              recruitment announcement and updates.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          WHAT TO EXPECT
      ========================== */}

      <section className="career-expect-section">

        <div className="career-section-heading">

          <span>
            RECRUITMENT UPDATES
          </span>

          <h2>
            More Information Will Be Revealed Soon
          </h2>

          <p>
            Everything you need to know about the upcoming recruitment
            will be shared through the official announcement.
          </p>

        </div>


        <div className="career-feature-grid">

          {/* Card 1 */}
          <div className="career-feature-card">

            <div className="feature-number">
              01
            </div>

            <div className="feature-icon">
              <span>📢</span>
            </div>

            <h3>
              Official Announcement
            </h3>

            <p>
              The official recruitment announcement will be published
              once all details are finalized.
            </p>

          </div>


          {/* Card 2 */}
          <div className="career-feature-card">

            <div className="feature-number">
              02
            </div>

            <div className="feature-icon">
              <span>📋</span>
            </div>

            <h3>
              Complete Details
            </h3>

            <p>
              Recruitment eligibility, vacancies, dates and application
              information will be shared officially.
            </p>

          </div>


          {/* Card 3 */}
          <div className="career-feature-card">

            <div className="feature-number">
              03
            </div>

            <div className="feature-icon">
              <span>🔔</span>
            </div>

            <h3>
              Stay Updated
            </h3>

            <p>
              Keep visiting the official SNDF website so you do not
              miss the latest recruitment updates.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          FINAL CTA
      ========================== */}

      <section className="career-final-section">

        <div className="career-final-content">

          <span>
            YOUR NEXT OPPORTUNITY MAY BE CLOSER THAN YOU THINK
          </span>

          <h2>
            Stay Ready. Stay Connected.
          </h2>

          <p>
            The official recruitment information will be announced soon.
            Keep checking the SNDF website for the latest updates.
          </p>

          <div className="career-final-line"></div>

        </div>

      </section>

    </div>
  );
};

export default Career;
