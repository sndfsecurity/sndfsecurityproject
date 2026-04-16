import React from "react";
import "./Owl.css";
import owl from "../../assets/images/monitoring.jpeg";
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
        <meta
          name="description"
          content="OWL offers advanced surveillance and monitoring solutions ensuring safety and real-time protection."
        />
      </Helmet>

      {/* HERO */}
      <section className="owl-hero">
        <div className="owl-hero-container">

          {/* LEFT */}
          <div className="owl-hero-left">
            <span className="owl-tag">SMART SURVEILLANCE SERVICE</span>

            <h1>
              Owl Security <span>Services</span>
            </h1>

            <p>
              Advanced night surveillance and intelligent monitoring solutions
              designed to protect your property and assets 24/7 with complete reliability.
            </p>

            <div className="owl-buttons">
              <a href="tel:+918956159489" className="owl-btn-primary">
                Call Now
              </a>

              <a href="#owl" className="owl-btn-outline">
                Send Enquiry
              </a>
            </div>

            <div className="owl-points">
              <span>✔ 24/7 Monitoring</span>
              <span>✔ Quick Response</span>
              <span>✔ Trusted Service</span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="owl-hero-right">
            <img src={owl} alt="security" />
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="owl-services-section">
        <div className="container">

          <div className="owl-services-header">
            <h2>Our Owl Security Services</h2>
            <p>
              Smart surveillance, trained personnel, and rapid response solutions
              designed for complete protection and peace of mind.
            </p>
          </div>

          <div className="owl-services-grid">

            <div className="owl-service-card">
              <FaVideo className="owl-icon" />
              <h3>24/7 CCTV Live Monitoring</h3>
              <p>
                Real-time monitoring ensuring continuous surveillance and quick detection.
              </p>
            </div>

            <div className="owl-service-card">
              <FaUserShield className="owl-icon" />
              <h3>Surveillance Security Guards</h3>
              <p>
                Professionally trained guards managing security with full vigilance.
              </p>
            </div>

            <div className="owl-service-card">
              <MdDirectionsWalk className="owl-icon" />
              <h3>Mobile Patrol Services</h3>
              <p>
                Regular patrols to prevent unauthorized access and maintain safety.
              </p>
            </div>

            <div className="owl-service-card">
              <MdOutlineSecurity className="owl-icon" />
              <h3>Quick Response Team (QRT)</h3>
              <p>
                Immediate action during emergencies for quick threat resolution.
              </p>
            </div>

            <div className="owl-service-card">
              <FaTools className="owl-icon" />
              <h3>CCTV Installation & Maintenance</h3>
              <p>
                Complete CCTV setup, maintenance, and upgrades.
              </p>
            </div>

            <div className="owl-service-card">
              <FaMoon className="owl-icon" />
              <h3>Night Surveillance Services</h3>
              <p>
                Specialized night monitoring for high-risk hours.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="owl-process-section">
        <div className="container">

          <div className="owl-process-header">
            <h2>How Owl Security Works</h2>
          </div>

          <div className="owl-process-steps">

            <div className="owl-step">
              <div className="owl-step-number">01</div>
              <h3>Requirement Analysis</h3>
              <p>Understanding your security needs.</p>
            </div>

            <div className="owl-step">
              <div className="owl-step-number">02</div>
              <h3>Security Setup</h3>
              <p>Deploy systems and trained personnel.</p>
            </div>

            <div className="owl-step">
              <div className="owl-step-number">03</div>
              <h3>24/7 Monitoring</h3>
              <p>Continuous surveillance and tracking.</p>
            </div>

            <div className="owl-step">
              <div className="owl-step-number">04</div>
              <h3>Quick Response</h3>
              <p>Immediate action during emergencies.</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="owl" className="owl-cta-section">
        <div className="container owl-cta-container">

          <div className="owl-cta-left">
            <h2>Need Immediate Security Support?</h2>

            <p>
              Get professional Owl Security services with 24/7 monitoring and quick response.
            </p>

            <a href="tel:+918956159489" className="owl-btn-primary">
              Call Now
            </a>

            <div className="owl-extra-contact">

              <a href="mailto:owls.surveillance@gmail.com" className="owl-extra-email">
                <FaEnvelope /> owls.surveillance@gmail.com
              </a>

              <div className="owl-extra-social">
                <a href="https://wa.me/918956159489" target="_blank" rel="noreferrer">
                  <FaWhatsapp />
                </a>
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaYoutube /></a>
              </div>

            </div>
          </div>

          <div className="owl-cta-form">
            <h3>Send Enquiry</h3>

            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="tel" placeholder="Mobile Number" required />
              <textarea placeholder="Your Message"></textarea>

              <button type="submit" className="owl-btn-primary">
                Submit
              </button>
            </form>
          </div>

        </div>
      </section>

    </>
  );
}

export default Owl;