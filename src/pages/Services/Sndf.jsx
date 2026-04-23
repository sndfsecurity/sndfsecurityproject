import React, { useRef } from "react";import "./Sndf.css";

import sndf from "../../assets/images/img1.webp";
import { Helmet } from "react-helmet-async";

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";


import {
  FaUserShield,
  FaShieldAlt,
  FaUsers,
  FaBuilding,
  FaHome,
  FaIndustry,
  FaBolt,
  FaUserTie
} from "react-icons/fa";

const Sndf = () => {

  const formRef = useRef(null);

const scrollToForm = () => {
  if (formRef.current) {
    formRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

  return (

    <main>

    <Helmet>
      <title>SNDF Guard Services | Trusted Protection Solutions</title>
      <link rel="canonical" href="https://www.sndfndf.com/services/sndf" />
      <meta name="description" content="SNDF provides expert security services including trained guards, surveillance, and risk management." />

    </Helmet>

    <section className="sndfSplitHero">

      <div className="sndfSplitHero-container container">

        {/* LEFT CONTENT */}
        <div className="sndfSplitHero-left">

          <h2>
            Trusted <span>Security <br></br> Guard Services</span><br />
            for Complete Protection
          </h2>

          <p className="sndfSplitHero-desc">
            SNDF provides professionally trained and highly disciplined security guards
            to protect residential societies, corporate offices, industries,
            construction sites, and events. Our focus is on safety, vigilance,
            and rapid response to ensure complete peace of mind.
          </p>

          <div className="sndfSplitHero-points">
            <div>✔ Trained & Verified Personnel</div>
            <div>✔ 24/7 Security Coverage</div>
            <div>✔ Corporate & Industrial Expertise</div>
            <div>✔ Event & VIP Security Support</div>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="sndfSplitHero-right">
          <img
            src={sndf}
            alt="Professional security guards from SNDF team"
            loading="lazy"/>
        </div>

      </div>

    </section>

    {/* services section........................................ */}

     <section className="sndf-guard-section">
      <div className="sndf-guard-container">

        <h2 className="sndf-guard-heading">Our Guard Services</h2>
        <p className="sndf-guard-subtitle">
          Professional security solutions tailored for every requirement
        </p>

        <div className="sndf-guard-grid">

          {/* ITEM */}
          <div className="sndf-guard-card">
            <div className="sndf-guard-top">
              <FaUserShield className="sndf-guard-icon" />
              <h3>VIP Protection</h3>
            </div>
            <p>
              Professional close protection for high-profile individuals
              ensuring complete safety and privacy.
            </p>
          </div>

          <div className="sndf-guard-card">
            <div className="sndf-guard-top">
              <FaShieldAlt className="sndf-guard-icon" />
              <h3>Licensed Armed Security</h3>
            </div>
            <p>
              Highly trained armed guards deployed in high-risk environments
              with strict security protocols.
            </p>
          </div>

          <div className="sndf-guard-card">
            <div className="sndf-guard-top">
              <FaUsers className="sndf-guard-icon" />
              <h3>Event Security</h3>
            </div>
            <p>
              Efficient crowd management and event protection ensuring smooth
              and safe operations.
            </p>
          </div>

          <div className="sndf-guard-card">
            <div className="sndf-guard-top">
              <FaUserTie className="sndf-guard-icon" />
              <h3>Guard Services</h3>
            </div>
            <p>
              Professional guards ensuring discipline, alertness, and
              continuous on-site protection.
            </p>
          </div>

          <div className="sndf-guard-card">
            <div className="sndf-guard-top">
              <FaHome className="sndf-guard-icon" />
              <h3>Residential Security</h3>
            </div>
            <p>
              Reliable home and society security solutions with 24/7
              monitoring and vigilance.
            </p>
          </div>

          <div className="sndf-guard-card">
            <div className="sndf-guard-top">
              <FaBuilding className="sndf-guard-icon" />
              <h3>Commercial Security</h3>
            </div>
            <p>
              Office and business protection with trained personnel ensuring
              complete workplace safety.
            </p>
          </div>

          <div className="sndf-guard-card">
            <div className="sndf-guard-top">
              <FaIndustry className="sndf-guard-icon" />
              <h3>Industrial Security</h3>
            </div>
            <p>
              Advanced security for factories and industrial sites preventing
              risks, theft, and damage.
            </p>
          </div>

          <div className="sndf-guard-card">
            <div className="sndf-guard-top">
              <FaBolt className="sndf-guard-icon" />
              <h3>Quick Response Team</h3>
            </div>
            <p>
              24/7 rapid response team ready to handle emergencies with quick
              deployment and action.
            </p>
          </div>

        </div>
      </div>
    </section>


    {/* cta........................................... */}
      <section className="sndfguard-cta-section">
      <div className="sndfguard-cta-wrapper">

        <h2 className="sndfguard-cta-heading">
          Need Reliable Security Services?
        </h2>

        <p className="sndfguard-cta-text">
          Get trained and professional security personnel for your business,
          events, and personal protection. We are available 24/7 across India.
        </p>

        <div className="sndfguard-cta-actions">

          <a
            href="tel:+918956159486"
            className="sndfguard-cta-btn sndfguard-cta-call"
          >
            📞 Call Now
          </a>

          <button
            className="sndfguard-cta-btn sndfguard-cta-enquiry"
            onClick={scrollToForm}
            aria-label="Scroll to enquiry form">
            Get Free Consultation
          </button>

        </div>

       
       {/* ===== EXTRA CONTACT (CTA CLEAN) ===== */}
<div className="sndfguard-extra-contact">

  {/* EMAIL ONLY */}
  <div className="sndfguard-extra-contact-info">

    <a href="mailto:info@sndf.com" className="sndfguard-extra-item">
      <FaEnvelope className="sndfguard-extra-icon email" />
      sndfguard@gmail.com
    </a>

  </div>

  {/* SOCIAL */}
  <div className="sndfguard-extra-social">

    <a href="https://wa.me/918956159486" target="_blank" rel="noreferrer"  aria-label="Whatsapp" className="sndfguard-extra-social-icon whatsapp">
      <FaWhatsapp />
    </a>

    <a href="#" target="_blank" rel="noreferrer"  aria-label="Facebook" className="sndfguard-extra-social-icon facebook">
      <FaFacebookF />
    </a>

    <a href="https://www.instagram.com/sndf_guards?igsh=bHAxcTY3OWtmcXUy&utm_source=qr" target="_blank" rel="noreferrer"  aria-label="Instagram" className="sndfguard-extra-social-icon instagram">
      <FaInstagram />
    </a>

    <a href="#" target="_blank" rel="noreferrer"  aria-label="Youtube" className="sndfguard-extra-social-icon youtube">
      <FaYoutube />
    </a>

  </div>
  
</div>
        

      </div>
    </section>


    {/* form */}
  <section ref={formRef} className="sndfguard-form-section">
  <div className="sndfguard-form-wrapper">

    <h2 className="sndfguard-form-heading">
      Request a Callback
    </h2>

    <p className="sndfguard-form-subtext">
      Fill in your details and our team will get back to you shortly.
    </p>

    <form className="sndfguard-form-box">

      <div className="sndfguard-form-group">
        <input id="name" name="name" type="text" required />
        <label htmlFor="name">Your Name</label>
      </div>

    <div className="sndfguard-form-group">
      <input id="mobile" name="mobile" type="tel" required />
      <label htmlFor="mobile">Mobile Number</label>
    </div>

    <div className="sndfguard-form-group">
      <select id="service" name="service" required>
        <option value="" disabled selected>Select Service</option>
        <option>VIP Protection</option>
        <option>Armed Security</option>
        <option>Event Security</option>
        <option>Residential Security</option>
        <option>Commercial Security</option>
        <option>Industrial Security</option>
      </select>
      <label htmlFor="service">Select Service</label>
    </div>

    <div className="sndfguard-form-group">
      <textarea id="message" name="message" required></textarea>
      <label htmlFor="message">Your Message</label>
    </div>

      <button type="submit" className="sndfguard-form-submit">
        Submit Enquiry
      </button>

    </form>

  </div>
</section>

 



</main>

  );
};

export default Sndf;