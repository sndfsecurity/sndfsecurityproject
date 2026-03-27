import "./Pune.css";
import { FaShieldAlt, FaUsers, FaBuilding } from "react-icons/fa";
 import puneOffice from "../../assets/images/hero.jpeg";
import course2 from "../../assets/images/course-bg.jpg";

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";



const PuneHero = () => {



  const galleryRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
  const container = galleryRef.current;
  if (!container) return;

  let scrollAmount = 0;
  let interval;

  const startScroll = () => {
    interval = setInterval(() => {
      if (window.innerWidth > 768) return;

      scrollAmount += container.offsetWidth;

      if (scrollAmount >= container.scrollWidth) {
        scrollAmount = 0;
      }

      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 2500);
  };

  const stopScroll = () => clearInterval(interval);

  startScroll();

  container.addEventListener("touchstart", stopScroll);
  container.addEventListener("touchend", startScroll);

  return () => {
    clearInterval(interval);
    container.removeEventListener("touchstart", stopScroll);
    container.removeEventListener("touchend", startScroll);
  };
}, []);
  

return (
<>

<section className="pune-hero">
  <div className="container hero-wrapper">

    {/* LEFT CONTENT */}
    <div className="hero-text" data-aos="fade-up">
      <span className="hero-badge">Head Office</span>

      <h1>
        Pune <span>Headquarters</span>
      </h1>

      <p>
        The central command hub of SNDF, managing operations, investigations,
        and security services with precision, confidentiality, and nationwide coordination.
      </p>

      <div className="hero-buttonsb">
            <button 
                className="btn-outline"
                onClick={() => navigate("/contact")}>
                Contact Us
            </button>
      </div>

      {/* STATS */}
      <div className="hero-stats">
        <div className="stat-card">
          <h3>5+</h3>
          <p>Years Experience</p>
        </div>

        <div className="stat-card">
          <h3>10+</h3>
          <p>Branches</p>
        </div>

        <div className="stat-card">
          <h3>500+</h3>
          <p>Staff</p>
        </div>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="hero-image" data-aos="fade-left">
      <img src={puneOffice} alt="Head Office" />
    </div>

  </div>
</section>


{/* about sndf ...........................................*/}

    <section className="office-info-alt">
  <div className="container">

    <h2>
      Welcome to <span>Nationalist Detective Force</span>
    </h2>

    <p className="intro">
      The Head Office is the central hub where all major operations, planning,
      and decision-making take place. It serves as the brain of the organization,
      ensuring smooth coordination across all branches.
    </p>

    {/* INTERACTIVE TIMELINE STYLE */}
    <div className="info-timeline">

      <div className="info-item">
        <h4>Operations & Management</h4>
        <p>
          Manages all branches and departments, ensuring proper coordination,
          execution, and monitoring of field operations.
        </p>
      </div>

      <div className="info-item">
        <h4>Administration & Records</h4>
        <p>
          Handles important documents, records, scheduling, and internal
          processes with complete professionalism.
        </p>
      </div>

      <div className="info-item">
        <h4>Communication & Coordination</h4>
        <p>
          Acts as the central communication hub for clients and internal teams,
          ensuring fast and reliable responses.
        </p>
      </div>

      <div className="info-item">
        <h4>Training & Development</h4>
        <p>
          Conducts professional training programs including the DIC course,
          helping individuals build careers in investigation.
        </p>
      </div>

      <div className="info-item">
        <h4>Decision Making</h4>
        <p>
          Responsible for solving cases, planning strategies, and making key
          organizational decisions.
        </p>
      </div>

      <div className="info-item">
        <h4>Career Foundation</h4>
        <p>
          Provides guidance, training, and support to help individuals grow and
          succeed in the investigation field.
        </p>
      </div>

    </div>

  </div>
</section>

  <section className="mini-gallery">
  <div className="container">

    <h2>Office Glimpse</h2>

    <div className="gallery-grid" ref={galleryRef}>
      <img src={course2} alt="office" />
      <img src={puneOffice} alt="office" />
      <img src={course2} alt="office" />
      <img src={puneOffice} alt="office" />
    </div>

    <div className="gallery-btn">
      <button>View Full Gallery →</button>
    </div>

  </div>
</section>


{/* branches.............................. */}
{/* 🔥 PUNE BRANCH NETWORK */}
<section className="pune-branches">
  <div className="container">

    <h2 className="section-titlebr">
      Pune <span>Branch Network</span>
    </h2>

    <p className="section-subtitlebr">
      Serving across Pune with strategically located offices for faster response
    </p>

    <div className="branch-grid">

      {/* Wakad */}
      <div className="branch-card">
        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80" alt="Wakad" />
        <div className="branch-info">
          <h4>Wakad Branch</h4>
          <p>Office 203, Prime Plaza, Near Wakad Chowk, Pune - 411057</p>
          <p className="branch-phone">+91 80073 41905</p>

          <div className="branch-actions">
            <a href="tel:+918007341905">Call</a>
            <a href="https://wa.me/918007341905">WhatsApp</a>
          </div>
        </div>
      </div>

      {/* Karve Road */}
      <div className="branch-card">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="Karve Road" />
        <div className="branch-info">
          <h4>Karve Road Branch</h4>
          <p>2nd Floor, Shree Complex, Karve Nagar, Pune - 411052</p>
          <p className="branch-phone">+91 80073 41905</p>

          <div className="branch-actions">
            <a href="tel:+918007341905">Call</a>
            <a href="https://wa.me/918007341905">WhatsApp</a>
          </div>
        </div>
      </div>

      {/* Warje */}
      <div className="branch-card">
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" alt="Warje" />
        <div className="branch-info">
          <h4>Warje Branch</h4>
          <p>Office 5, City Tower, Warje Malwadi, Pune - 411058</p>
          <p className="branch-phone">+91 80073 41905</p>

          <div className="branch-actions">
            <a href="tel:+918007341905">Call</a>
            <a href="https://wa.me/918007341905">WhatsApp</a>
          </div>
        </div>
      </div>

      {/* Pimpri */}
      <div className="branch-card">
        <img src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=800&q=80" alt="Pimpri" />
        <div className="branch-info">
          <h4>Pimpri-Chinchwad Branch</h4>
          <p>3rd Floor, Metro Square, Pimpri, Pune - 411018</p>
          <p className="branch-phone">+91 80073 41905</p>

          <div className="branch-actions">
            <a href="tel:+918007341905">Call</a>
            <a href="https://wa.me/918007341905">WhatsApp</a>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>

{/* contact ............................. */}

  {/* ================= LOCATION + CONTACT ================= */}
<section className="office-contact">
  <div className="container">

    <h2>Visit Our <span>Office</span></h2>
    <p className="contact-subtext">
      Connect with our team for confidential and professional assistance.
    </p>

    <div className="contact-wrapper">

      {/* LEFT INFO */}
      <div className="contact-info">

        <div className="info-line">
  <h4>📍 Address</h4>
  <p>
    SNDF Head Office, Ground Floor,
    Yashashree Phase 2, D Wing,<br />
    Sukhsagar Nagar, Near Ekadashi Hotel,
    Katraj-Kondhwa Road, Katraj,<br />
    Pune, Maharashtra, India - 411046
  </p>
</div>

        <div className="info-line">
          <h4>📞 Call Us</h4>
          <p>+91 8007341905</p>
        </div>

        <div className="info-line">
          <h4>✉️ Email</h4>
          <p>detectiveenquiry@gmail.com</p>
        </div>

        <div className="info-line">
          <h4>🕒 Working Hours</h4>
          <p>Mon - Sun : 9:00 AM - 9:00 PM</p>
        </div>

        <div className="contact-buttons">
          <a href="tel:+918007341905" className="call-btn">Call Now</a>
          <a href="https://wa.me/918007341905" target="_blank" className="whatsapp-btn">WhatsApp</a>
        </div>

      </div>

      {/* RIGHT MAP */}
      <div className="contact-map">
        <iframe
         src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15138.751197603708!2d73.871484!3d18.452479!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29583f03b9aff%3A0xf083a5f416201118!2sNDF%20-%20Nationalist%20detective%20force!5e0!3m2!1sen!2sin!4v1773960981494!5m2!1sen!2sin"
          title="map"
          loading="lazy"
        ></iframe>
      </div>

    </div>
  </div>
</section>


{/* ================= EXTRA CTA STRIP ================= */}
<section className="quick-strip">
  <div className="container">
    <p>Need immediate assistance? Our team is available 24/7 for urgent cases.</p>
    <a href="tel:+918007341905">Call Now →</a>
  </div>
</section>

    </>
  );
};

export default PuneHero;