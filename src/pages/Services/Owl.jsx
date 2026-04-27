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
    <main>
      <Helmet>
        <title>Owl Surveillance Services in India | 24/7 CCTV & Security Monitoring</title> 
        <link rel="canonical" href="https://www.sndfndf.com/services/owl" />
       <meta
          name="description"
          content="Professional Owl Surveillance Services in India with 24/7 CCTV monitoring, mobile patrol, night surveillance, and quick response teams. Secure your property today."
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
              <a href="tel:+918956159489" className="owl-btn-primary"  aria-label="Call us for Owl security services">
                Call Now
              </a>

              <a href="#owl" className="owl-btn-outline"  aria-label="Send enquiry for Owl security services">
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
            <img src={owl} alt="Owl surveillance security monitoring service in India" loading="lazy" />
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
                Complete CCTV setup, maintenance and upgrades.
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

              <a href="mailto:owls.surveillance@gmail.com" className="owl-extra-email"  aria-label="Send email to Owl surveillance team">
                <FaEnvelope className="owl-extra-email-icon"/> owls.surveillance@gmail.com
              </a>

  {/* SOCIAL ICONS */}
  <div className="owl-extra-social">

    <a href="https://wa.me/918956159489" target="_blank" rel="noreferrer" className="owl-extra-icon whatsapp"  aria-label="Chat with us on WhatsApp">
      <FaWhatsapp aria-hidden="true"/>
    </a>

    {/* <a href="#" target="_blank" rel="noreferrer" className="owl-extra-icon facebook" aria-label="Visit our Facebook page">
      <FaFacebookF aria-hidden="true"/>
    </a> */}

    <a href="#" target="_blank" rel="noreferrer" className="owl-extra-icon instagram">
      <FaInstagram />
    </a>

    {/* <a href="#" target="_blank" rel="noreferrer" className="owl-extra-icon youtube"  aria-label="Visit our YouTube channel">
      <FaYoutube aria-hidden="true"/>
    </a> */}


  </div>

  <p className="social-proof">
  Follow us for latest updates and security insights.
</p>


            </div>
          </div>

          <div className="owl-cta-form">
            <h3>Send Enquiry</h3>

            <form>

             <input type="text" placeholder="Your Name" required aria-label="Your Name" />
              <input type="tel" placeholder="Mobile Number" required aria-label="Mobile Number" />
              <textarea placeholder="Your Message" aria-label="Your Message"></textarea>

              <button type="submit" className="owl-btn-primary">
                Submit
              </button>
            </form>
          </div>

        </div>
      </section>

<p style={{display: "none"}}>
  owl surveillance services, cctv monitoring india, night security service, mobile patrol security, quick response team security india
</p>

    </main>
  );
}


export default Owl;