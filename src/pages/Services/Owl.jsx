import React from "react";
import "./Owl.css";
import owlImg from "../../assets/images/owl.jpg";
import { Helmet } from "react-helmet-async";

import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";


import {
  FaVideo,
  FaUserShield,
  FaTools,
  FaMoon
} from "react-icons/fa";

import {
  MdOutlineSecurity,
  MdDirectionsWalk
} from "react-icons/md";


function Owl() {
  return (

    <>

    <Helmet>
      <title>OWL Surveillance Services | Advanced Monitoring</title>
      <meta name="description" content="OWL offers advanced surveillance and monitoring solutions ensuring safety and real-time protection." />
    </Helmet>

    <section className="owl-hero">
      <div className="owl-hero-container">

        {/* LEFT */}
        <div className="owl-hero-left">
          <span className="owl-tag">SMART SURVEILLANCE SERVICE</span>

          <h1>
            Owl Security 
            <span> Services</span>
          </h1>

          <p>
            Advanced night surveillance and intelligent monitoring solutions
            designed to protect your property and assets 24/7 with complete reliability.
          </p>

          <div className="owl-buttons">
            <a href="tel:+918956159489" className="owl-btn-primary">
              Call Now
            </a>

            <a href="#owl" className="owl-btn-outline">Send Enquiry</a>
            
          </div>

          <div className="owl-points">
            <span>✔ 24/7 Monitoring</span>
            <span>✔ Quick Response</span>
            <span>✔ Trusted Service</span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="owl-hero-right">
          <img src={owlImg} alt="security" />
        </div>

      </div>
    </section>

  {/* services section.............................................. */}

  
<section className="owl-services-section">
  <div className="container">

    {/* HEADER */}
    <div className="owl-services-header">
      <h2>Our Owl Security Services</h2>
      <p>
        Smart surveillance, trained personnel, and rapid response solutions 
        designed for complete protection and peace of mind.
      </p>
    </div>

    {/* GRID */}
    <div className="owl-services-grid">

      <div className="owl-service-card">
        <FaVideo className="owl-icon" />
        <h3>24/7 CCTV Live Monitoring</h3>
        <p>
          Real-time monitoring from a dedicated control room ensuring continuous 
          surveillance and immediate detection of any suspicious activity.
        </p>
      </div>

      <div className="owl-service-card">
        <FaUserShield className="owl-icon" />
        <h3>Surveillance Security Guards</h3>
        <p>
          Professionally trained guards equipped to monitor CCTV systems and 
          manage on-site security with complete vigilance and control.
        </p>
      </div>

      <div className="owl-service-card">
        <MdDirectionsWalk className="owl-icon" />
        <h3>Mobile Patrol Services</h3>
        <p>
          Regular patrolling services designed to prevent unauthorized access 
          and maintain a visible security presence across the premises.
        </p>
      </div>

      <div className="owl-service-card">
        <MdOutlineSecurity className="owl-icon" />
        <h3>Quick Response Team (QRT)</h3>
        <p>
          Highly responsive emergency team ready to act instantly during critical 
          situations, ensuring safety and quick resolution of threats.
        </p>
      </div>

      <div className="owl-service-card">
        <FaTools className="owl-icon" />
        <h3>CCTV Installation & Maintenance</h3>
        <p>
          Complete CCTV solutions including installation, regular maintenance, 
          and system upgrades for uninterrupted security operations.
        </p>
      </div>

      <div className="owl-service-card">
        <FaMoon className="owl-icon" />
        <h3>Night Surveillance Services</h3>
        <p>
          Specialized night monitoring services focused on high-risk hours 
          with enhanced vigilance and advanced surveillance support.
        </p>
      </div>

    </div>
  </div>
</section>


  {/* how it works section.............................................. */}

  <section className="owl-process-section">
  <div className="container">

    {/* HEADER */}
    <div className="owl-process-header">
      <h2>How Owl Security Works</h2>
      <p>
        Our structured approach ensures complete surveillance, rapid response,
        and reliable protection at every stage.
      </p>
    </div>

    {/* STEPS */}
    <div className="owl-process-steps">

      <div className="owl-step">
        <div className="owl-step-number">01</div>
        <h3>Requirement Analysis</h3>
        <p>We understand your security needs and identify potential risk areas.</p>
      </div>

      <div className="owl-step">
        <div className="owl-step-number">02</div>
        <h3>Security Setup</h3>
        <p>Installation of CCTV systems and deployment of trained personnel.</p>
      </div>

      <div className="owl-step">
        <div className="owl-step-number">03</div>
        <h3>24/7 Monitoring</h3>
        <p>Continuous surveillance, patrolling, and real-time monitoring.</p>
      </div>

      <div className="owl-step">
        <div className="owl-step-number">04</div>
        <h3>Quick Response</h3>
        <p>Immediate action by our QRT team during emergencies.</p>
      </div>

    </div>

  </div>
</section>


 {/* cta section.......................................... */}

 <section id="owl" className="owl-cta-section">
  <div className="container owl-cta-container">
    {/* LEFT CONTENT */}
    <div className="owl-cta-left">
      <h2>Need Immediate Security Support?</h2>
      <p>
        Get professional Owl Security services with 24/7 monitoring,
        trained staff, and quick response teams ready to protect you.
      </p>

      <div className="owl-cta-buttons">
        <a href="tel:+918956159489" className="owl-btn-primary">
          Call Now
        </a>
      </div>

      <div className="owl-cta-points">
        <span>✔ 24/7 Availability</span>
        <span>✔ Fast Response</span>
        <span>✔ Trusted Service</span>
      </div>


      {/* ===== OWL EXTRA CONTACT ===== */}
<div className="owl-extra-contact">

  {/* EMAIL */}
  <a href="mailto:owls.surveillance@gmail.com" className="owl-extra-email">
    <FaEnvelope className="owl-extra-email-icon" />
     owls.surveillance@gmail.com
  </a>

  {/* SOCIAL ICONS */}
  <div className="owl-extra-social">

    <a href="https://wa.me/918956159489" target="_blank" rel="noreferrer" className="owl-extra-icon whatsapp">
      <FaWhatsapp />
    </a>

    <a href="#" target="_blank" rel="noreferrer" className="owl-extra-icon facebook">
      <FaFacebookF />
    </a>

    <a href="#" target="_blank" rel="noreferrer" className="owl-extra-icon instagram">
      <FaInstagram />
    </a>

    <a href="#" target="_blank" rel="noreferrer" className="owl-extra-icon youtube">
      <FaYoutube />
    </a>

  </div>

</div>

    </div>

    {/* RIGHT FORM */}
    <div className="owl-cta-form">
      <h3>Send Enquiry</h3>

      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="tel" placeholder="Mobile Number" required />
        <input type="text" placeholder="Service Required" />
        <textarea placeholder="Your Message"></textarea>

        <button type="submit" className="owl-btn-primary">
          Submit Enquiry
        </button>
      </form>
    </div>

  </div>
</section>



    </>
  );
}

export default Owl;