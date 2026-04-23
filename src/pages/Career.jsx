import React, { useState } from "react";
import "./Career.css";
import { Helmet } from "react-helmet-async";

const Career = () => {
  const [step, setStep] = useState(1);

  return (

    <>


   <Helmet>
      <title>Careers at SNDF | Join Security & Investigation Team</title>
      <link rel="canonical" href="https://www.sndfndf.com/career" />
      <meta name="description" content="Start your career with SNDF. Explore opportunities in security services, investigation, and surveillance across India." />
    </Helmet>

    <div className="career-page">

      {/* STEP 1 - JOB CARD */}
      {step === 1 && (
        <div className="job-card">
          <div className="left">
            <img src="https://via.placeholder.com/80" alt="logo" />
          </div>

          <div className="center">
            <h2>NDF Special Entry Recruitment 2025-26</h2>
            <p>Nationalist Detective Force</p>

            <div className="meta">
              <span>📍 All India</span>
              <span>💼 Full Time</span>
            </div>

            <p><b>Post Name:</b> Detective (NDF)</p>

            <p className="msg">
              Selection will be based on interview only. Vacancies not fixed.
            </p>
          </div>

          <div className="right">
            <button className="apply" onClick={() => setStep(2)}>
              Apply Now »
            </button>
          </div>
        </div>
      )}

      {/* STEP 2 - FORM */}
      {step === 2 && (
        <div className="form-bg">
          <div className="form-box">
            <h2>Application Form</h2>

            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email ID" />
            <input type="tel" placeholder="Mobile Number" />

            <button onClick={() => setStep(3)}>Next</button>
          </div>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="form-bg">
          <div className="form-box">
            <h2>Additional Details</h2>

            <input type="text" placeholder="Address" />
            <input type="date" />
            <select>
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>

            <button onClick={() => setStep(4)}>Next</button>
          </div>
        </div>
      )}

      {/* STEP 4 */}
      {step === 4 && (
        <div className="form-bg">
          <div className="form-box">
            <h2>Upload Documents</h2>

            <input type="file" />
            <input type="file" />

            <button className="submit">Submit</button>
          </div>
        </div>
      )}

    </div>

    </>
  );
};

export default Career;