import React from "react";
import "./Assam.css";

const AssamBranch = () => {
  return (
    <section className="sndf-assam-hero">
      <div className="sndf-assam-container">

        {/* LEFT CONTENT */}
        <div className="sndf-assam-left">
          <span className="sndf-assam-badge">SNDF Branch Office</span>

          <h1>
            Assam <span>Branch</span>
          </h1>

          <p>
            SNDF provides trusted investigation and security services across
            Guwahati and North-East India with complete confidentiality,
            professionalism, and quick response support.
          </p>

          <div className="sndf-assam-btns">
            <button className="sndf-assam-btn-primary">
              Send Enquiry
            </button>

            <a href="tel:+918007341905" className="sndf-assam-btn-secondary">
              Call Now
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="sndf-assam-right">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80"
            alt="Assam Office"
          />
        </div>

      </div>
    </section>
  );
};

export default AssamBranch;