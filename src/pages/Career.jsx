import React from "react";
import "./Career.css";
import { Helmet } from "react-helmet-async";
import { FaUserCheck } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { MdPayments } from "react-icons/md";


import {
FaCalendarAlt,
FaMoneyBillWave,
FaClipboardList,
FaFileAlt
} from "react-icons/fa";

const Career = () => {


return (

<main>
  
    <Helmet>
        <title>SNDF Recruitment 2026–27 | Apply Online</title>

        <meta
          name="description"
          content="Apply online for SNDF Recruitment 2026–27. Check vacancies, salary, eligibility, age limit and selection process."
        />

        <link
          rel="canonical"
          href="https://sndfndf.com/career"/>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": "General Duty Recruitment 2026–27",
            "description":
            "Apply online for General Duty Recruitment 2026–27 through the official SNDF Recruitment Portal.",
            "employmentType": "FULL_TIME",
            "hiringOrganization": {
              "@type": "Organization",
              "name": "SNDF Support Services Pvt. Ltd.",
              "url": "https://sndfndf.com"
            },
            "jobLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              }
            },
            "applicantLocationRequirements": {
              "@type": "Country",
              "name": "India"
            }
          })}
        </script>
      </Helmet>


<div className="career-page">

  <section id="overview"  className="career-hero">

  <span className="career-badge">
    NDF / SNDF Recruitment 2026–27
  </span>

  <h1>Applications Now Open</h1>

  <p className="sr-only">
  SNDF Recruitment 2026–27 official application page for General Duty recruitment.
  Check eligibility, salary, vacancies and selection process before applying.
  </p>

  <p>
    Online applications are now open for <strong>General Duty (Male Candidates)</strong>.
    Eligible candidates from all States and Union Territories of India can apply through
    the Official Recruitment Portal.
  </p>

  <div className="career-buttons">

    <a
      href="https://recruitment.ndfdetective.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="apply-btn"
      aria-label="Apply Online for SNDF Recruitment 2026-27">
      Apply Now
    </a>

    <a href="https://recruitment.ndfdetective.in/"
     target="_blank"
     rel="noopener noreferrer"
     className="outline-btn"
     aria-label="View SNDF Recruitment Details">
      Recruitment Details
    </a>

  </div>

</section>


<section id="highlights" className="career-stats">

  <div className="stat-cardc">
    <h2>8,710</h2>
    <p>Total Vacancies</p>
  </div>

  <div className="stat-cardc">
    <h2>All India</h2>
    <p>Job Location</p>
  </div>

  <div className="stat-cardc">
    <h2>10th Pass</h2>
    <p>Minimum Qualification</p>
  </div>

  <div className="stat-cardc">
    <h2>18–31</h2>
    <p>Age Limit</p>
  </div>
 
</section>


<section  id="recruitment-info" className="recruitment-info">

    <div className="section-heading">

        <span>RECRUITMENT INFORMATION</span>

        <h2>Everything You Need Before Applying</h2>

        <p>
           Review the important recruitment information below.
           Complete eligibility criteria and official instructions
           are available on the Recruitment Portal.
        </p> 

    </div>

    <div className="info-grid">

        <div className="info-card">
            <div className="info-icon"> <MdEventAvailable /> </div>
            <h3>Schedule</h3>
            <p>Applications Open<br /><strong>20 August 2026</strong></p>
        </div>

        <div className="info-card">
            <div className="info-icon"> <MdPayments /> </div>
            <h3>Salary</h3>
            <p>₹22,000 – ₹25,000<br />Including Allowances</p>
        </div>

        <div className="info-card">
            <div className="info-icon"> <FaUserCheck /> </div>
            <h3>Selection</h3>
            <p>Physical Test →<br />Medical → Written Exam</p>
        </div>

        <div className="info-card">
            <div className="info-icon"><MdNotificationsActive /></div>
            <h3>Notification</h3>
            <p>Read the official notification before applying.</p>
        </div>

    </div>


</section>


<section id="official-portal" className="career-final-cta">
  <div className="career-final-cta-card">

    <h2>Ready to Submit Your Application?</h2>

    <p>
      This page provides only a quick overview of the recruitment process.
      Before submitting your application, please visit the Official
      Recruitment Portal to read the complete Recruitment Notification,
      eligibility criteria, examination pattern, important instructions
      and application guidelines.
    </p>

    <a
      href="https://recruitment.ndfdetective.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="career-final-btn">
      Visit Official Recruitment Portal
    </a>

  </div>
</section>

</div>

</main>
  );
};

export default Career;


