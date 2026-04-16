import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// 🔥 BUTTON SCROLL FUNCTION (Hero button)
const scrollToForm = () => {
  const form = document.getElementById("enquiry-form");

  if (form) {
    form.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      const input = form.querySelector("input");
      if (input) input.focus();
    }, 500);
  }
};

const Contact = () => {

  const location = useLocation();

  // 🔥 FIXED HASH SCROLL (IMPORTANT)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });

          // focus first input
          const input = el.querySelector("input");
          if (input) input.focus();

        }, 200);
      }
    }
  }, [location]);

  return (
    
   
<>

<Helmet>
  <title>Contact SNDF Detective Agency | Call & Enquiry</title>

  <meta 
    name="description" 
    content="Contact SNDF detective agency for investigation, surveillance and security services. Call now or send enquiry for quick response." />

  <link rel="canonical" href="https://www.sndfndf.com/contact" />
</Helmet>

<section className="contact-hero">
  <div className="hero-glowcn"></div>

  <div className="container hero-containercn">
    <div className="hero-contentcn">

      <span className="hero-tagcn">CONTACT SNDF</span>

      <h1>
        Get In Touch With <br />
        <span className="gradient-textcn">Our Expert Team</span>
      </h1>

      <p>
        Connect with India’s trusted security and investigation professionals.
        We are available 24/7 to assist you with complete confidentiality.
      </p>

      <div className="hero-btnscn">
        <a href="tel:+919970383155" className="btn-red">Call Now</a>
        <button onClick={scrollToForm} className="contact-btn-outline">
        Send Enquiry
        </button>      
        </div>
     
    </div>
  </div>
</section>

{/* CONTACT CARDS */}
<section className="contact-cards">
  <div className="container cards-container">

        {/* CALL CARD */}
        <div className="card">
          <FaPhoneAlt className="icon" />
          <h3>Call Us</h3>
          <p>+91 9970383155</p>
          <a href="tel:+919970383155">Call Now</a>
        </div>

        {/* EMAIL CARD */}
        <div className="card">
          <FaEnvelope className="icon" />
          <h3>Email Us</h3>
          <p>info@sndfndf.com</p>
          <a href="mailto:info@sndfndf.com">Send Mail</a>
        </div>

        {/* WHATSAPP CARD */}
        <div className="card whatsapp-card">
          <FaWhatsapp className="icon" />
          <h3>WhatsApp</h3>
          <p>Chat with us instantly for quick support</p>
          <a
            href="https://wa.me/919970383155?text=Hello%20SNDF,%20I%20want%20enquiry"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Chat
          </a>
        </div>

  </div>
</section>

{/* FORM */}
<section className="contact-bottom">
  <div className="contact-bottom-container">

    {/* LEFT FORM */}
    <div className="enquiry-form" id="enquiry-form">
      <h2>Enquiry Form</h2>
      <p>Fill the form and our team will contact you shortly.</p>

          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Mobile Number" />
          <input type="text" placeholder="Address" />
          <textarea rows="4" placeholder="Your Requirement"></textarea>

          <button>Submit Enquiry</button>
        </div>

    {/* RIGHT SIDE */}
    <div className="office-info">

      <h2>Head Office</h2>

          {/* ADDRESS CARD */}
          <div className="office-card">
            <div className="location-icon">📍</div>

        <p>
          SNDF Head Office, Ground Floor,
          Yashashree Phase 2, D Wing,
          Sukhsagar Nagar, Near Ekadashi Hotel,
          Katraj-Kondhwa Road, Katraj,
          Pune, Maharashtra - 411046
        </p>

        {/* SOCIAL */}
        <div className="social-title">Follow Us</div>

<div className="office-socials">

  <a href="https://www.facebook.com/share/1E8sd7bNqr/" target="_blank" rel="noopener noreferrer">
    <FaFacebookF />
  </a>

  <a href="https://www.instagram.com/nationalist_detective_force?igsh=MXZycWM1czA0ZHdneg==" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>


  <a href="https://wa.me/919970383155" target="_blank" rel="noopener noreferrer">
    <FaWhatsapp />
  </a>

  <a href="https://youtube.com/@ndfdetective3968?si=fsmB5O0GL4IY3dNu" target="_blank" rel="noopener noreferrer">
    <FaYoutube />
  </a>

</div>

</div>

      {/* BRANCHES */}
      <div className="branches-card">
        <h3>Visit Our Branches</h3>

            <div className="branches-grid">
              <Link to="/branches/pune">Pune</Link>
              <Link to="/branches/mumbai">Mumbai</Link>
              <Link to="/branches/hyderabad">Hyderabad</Link>
              <Link to="/branches/assam">Assam</Link>             
              {/* <Link to="/branches/delhi">Delhi</Link>
              <Link to="/branches/nashik">Nashik</Link> */}
            </div>
          </div>

    </div>

  </div>
</section>


    {/* map.............................................. */}
<section className="map-section">
  <div className="map-container">

    <h2>Our Location</h2>
    <p>Visit our head office in Pune</p>

    <div className="map-box">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15138.751197603708!2d73.871484!3d18.452479!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29583f03b9aff%3A0xf083a5f416201118!2sNDF%20-%20Nationalist%20detective%20force!5e0!3m2!1sen!2sin!4v1773960981494!5m2!1sen!2sin"
        loading="lazy"
        title="SNDF Location"
      ></iframe>

      <div className="map-overlay">
        <h3>SNDF Head Office</h3>
        <p>Katraj, Pune, Maharashtra</p>

        <a
          href="https://www.google.com/maps/dir/?api=1&destination=18.452479,73.871484"
          target="_blank"
          rel="noopener noreferrer"
          className="direction-btn"
        >
          📍 Get Directions
        </a>
      </div>

    </div>

  </div>
</section>
   
  
</>

  );
};

export default Contact;