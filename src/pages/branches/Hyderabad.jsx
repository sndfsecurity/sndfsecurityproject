import React from 'react';
import "./Hyderabad.css";
import { Helmet } from "react-helmet-async";

import {
  FaMapMarkerAlt,
  FaClock,
  FaShieldAlt
} from "react-icons/fa";

import {
  FaUserSecret,
  FaTasks,
  FaFileAlt
} from "react-icons/fa";


import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";


import hyd1 from "../../assets/images/hyd1.webp";
import hyd2 from "../../assets/images/hyd2.webp";
import hyd3 from "../../assets/images/hyd3.webp";
import hyd4 from "../../assets/images/hyd4.webp";

const Hyderabad = () => {

    const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        });
    }
    };

return (

<main>

<Helmet>
        
    <title>Detective Agency in Hyderabad | Private Investigation & Security Services</title>
    <link rel="canonical" href="https://www.sndfndf.com/branches/hyderabad" />
    <meta 
    name="description" 
    content="Looking for a reliable detective agency in Hyderabad? SNDF offers private investigation, surveillance and professional security services with complete confidentiality. Contact us today." />

</Helmet>


<section className="sndf-hyd-hero">
  <div className="sndf-hyd-hero__container">

    {/* LEFT */}
    <div className="sndf-hyd-hero__content">

      <span className="sndf-hyd-hero__badge">
        SNDF • South India Regional Operations
      </span>

      <h1 className="sndf-hyd-hero__title">
        Hyderabad <span>Branch</span>
      </h1>

      <h3 className="sndf-hyd-hero__sub">
        A Strategic Hub for Security & Investigation Services 
      </h3>

      <p className="sndf-hyd-hero__desc">
        As a key regional branch of SNDF Support Services Pvt. Ltd. our Hyderabad office delivers professional security, surveillance and investigation solutions across Telangana and surrounding regions.
      </p>

      <p className="sndf-hyd-hero__desc">
        Backed by trained personnel, modern operational systems and a commitment to confidentiality, we ensure reliable protection and actionable intelligence for individuals, corporates and institutions.
      </p>

      {/* BUTTONS */}
      <div className="sndf-hyd-hero__buttons">

        <button className="sndf-btn sndf-btn--primary" aria-label="Scroll to contact section" onClick={() => scrollToSection("contact-section")}>
          Contact Office
        </button>

        <button className="sndf-btn sndf-btn--outline"  aria-label="Scroll to details section" onClick={() => scrollToSection("details-section")}>
          View Details
        </button>

      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="sndf-hyd-hero__image-wrap">
      <div className="sndf-hyd-hero__image-card">
        <img src={hyd3} alt="SNDF Hyderabad office interior and workspace"/>
        <span className="sndf-hyd-hero__tag">South HQ</span>
      </div>
    </div>

  </div>

  {/* ✅ CENTER TRUST STRIP */}
  <div className="sndf-hyd-hero__trust">
    <div>
      <FaMapMarkerAlt aria-hidden="true" />
      <span>Hyderabad, Telangana</span>
    </div>

    <div>
      <FaClock aria-hidden="true" />
      <span>24/7 Operational Support</span>
    </div>

    <div>
      <FaShieldAlt aria-hidden="true" />
      <span>Confidential & Trusted Services</span>
    </div>
  </div>
</section>


{/* ✅ Inside SNDF Hyderabad.................... */}

      <section className="sndf-hyd-inside-pro" id="details-section">

      <div className="sndf-hyd-inside-pro__container">

        {/* LEFT SIDE */}
        <div className="sndf-hyd-inside-pro__left">

          <span className="sndf-hyd-inside-pro__tag">
            Behind the Operations
          </span>

          <h2>
            Inside <span>SNDF Hyderabad</span>
          </h2>

          <p>
            A closer look at how our Hyderabad team operates behind the scenes — where every assignment is handled with precision, coordination and controlled execution.
          </p>

          <p>
            With trained personnel and structured workflows, we ensure every operation delivers reliable outcomes while maintaining strict confidentiality.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="sndf-hyd-inside-pro__right">

          <div className="sndf-hyd-inside-pro__grid">

            <div className="sndf-hyd-pro-card">
              <FaUserSecret aria-hidden="true" />
              <h4>Field Coordination</h4>
              <p>Efficient planning ensures smooth on-ground execution.</p>
            </div>

            <div className="sndf-hyd-pro-card">
              <FaTasks aria-hidden="true" />
              <h4>Case Handling</h4>
              <p>Assignments managed with precision and accuracy.</p>
            </div>

            <div className="sndf-hyd-pro-card full">
              <FaFileAlt aria-hidden="true" />
              <h4>Reporting System</h4>
              <p>Confidential, structured and timely reports for every case handled.</p>
            </div>

          </div>

        </div>

      </div>

    </section>

    {/* gallary section............................ */}

     <section className="sndf-hyd-gallery-dark">

      <div className="sndf-hyd-gallery-dark__container">

        {/* Heading */}
        <div className="sndf-hyd-gallery-dark__header">
          <h2>
            Hyderabad <span>Gallery</span>
          </h2>
          <p>
            A quick look inside our Hyderabad branch operations and workspace environment.
          </p>
        </div>

        {/* Grid (UNCHANGED STRUCTURE) */}
        <div className="sndf-hyd-gallery-dark__grid">

          <div className="sndf-hyd-gallery-dark__item large">
            <img src={hyd2} alt="SNDF Hyderabad office environment" />
          </div>

          <div className="sndf-hyd-gallery-dark__item">
            <img src={hyd1} alt="SNDF Hyderabad workspace setup"  />
          </div>

          <div className="sndf-hyd-gallery-dark__item">
            <img src={hyd4} alt="SNDF Hyderabad operations team workspace" />
          </div>

        </div>

      </div>

    </section>

    {/* cta section................................................ */}

      <section className="sndfHydCtaPro" id="contact-section">

      <div className="sndfHydCtaPro__container">

        {/* LEFT CONTENT */}
        <div className="sndfHydCtaPro__content">

          <h2>
            Get Professional Help from <span>SNDF Hyderabad</span>
          </h2>

          <p>
            Connect with our Hyderabad team for reliable security and investigation services.
            Our experts ensure quick response, strict confidentiality, and professional execution.
          </p>

          {/* TRUST POINTS */}
          <div className="sndfHydCtaPro__trust">
            <span>✔ 24/7 Support</span>
            <span>✔ Confidential Handling</span>
            <span>✔ Quick Response</span>
          </div>

          {/* BUTTONS */}
          <div className="sndfHydCtaPro__buttons">

            <a
              href="https://wa.me/919948966901"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with SNDF Hyderabad on WhatsApp"
              className="sndfHydBtnPro sndfHydBtnWhatsapp">
              <FaWhatsapp className="sndfHydBtnPro__icon" aria-hidden="true" />Connect on WhatsApp
            </a>

          </div>

          <p className="sndfHydCtaPro__micro">
                    Typically responds within 10 minutes  •  100% Confidential
                </p>

          {/* CONTACT INFO */}
               <div className="sndfHydCtaPro__contactLine">

                    {/* PHONE */}
                    <div className="sndfHydCtaPro__contactItem sndfHydCtaPro__contactItem--phone">
                        <FaPhoneAlt className="sndfHydCtaPro__contactIcon" aria-hidden="true" />
                        <a href="tel:+919948966901"  aria-label="Call SNDF Hyderabad">+91 9948966901</a>
                    </div>

                    {/* EMAIL */}
                    <div className="sndfHydCtaPro__contactItem sndfHydCtaPro__contactItem--email">
                        <FaEnvelope className="sndfHydCtaPro__contactIcon" aria-hidden="true" />
                        <a href="mailto:hyderabadndf@gmail.com" aria-label="Email SNDF Hyderabad">hyderabadndf@gmail.com</a>
                    </div>

                </div>

          {/* ADDRESS */}
          <div className="sndfHydCtaPro__address">
            <FaMapMarkerAlt aria-hidden="true" />
            <p>
                Csk colony Sagar residency,
                shivramplly, Near by Thalassemia & Sickle Cell Society, Blood Bank,
                <br></br>Hyderabad - 500052.
            </p>
          </div>

        </div>

        {/* RIGHT MAP */}
        <div className="sndfHydCtaPro__mapWrap">
        <iframe
            src="https://www.google.com/maps?q=Csk+Colony+Sagar+Residency+Shivramplly+Near+Thalassemia+Sickle+Cell+Society+Blood+Bank+Hyderabad+500052&output=embed"
            loading="lazy"
            title="SNDF Hyderabad Office Location Map"
        ></iframe>
        </div>

      </div>

    </section>

 
   </main>

  );
};

export default Hyderabad;