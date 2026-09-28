import "./Mumbai.css";
import mumbaiOffice from "../../assets/images/mumbai.webp";
import { Helmet } from "react-helmet-async";

import { useEffect, useState } from "react";


import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";

import {
  FaShieldAlt,
  FaUserSecret,
  FaVideo,
  FaBuilding,
  FaSearchLocation,
  FaBolt,
} from "react-icons/fa";


const Mumbai = () => {

  const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
      if (!selectedImage) return;

      const handleKeyDown = (event) => {
        if (event.key === "Escape") {
          setSelectedImage(null);
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [selectedImage]);

  const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 100; // navbar height adjust
    const position = element.offsetTop - offset;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  }
};

  return (

    <main>


     <Helmet>
       <title>Detective Agency in Mumbai | SNDF Security & Investigation Services</title>
        <link rel="canonical" href="https://www.sndfndf.com/branches/mumbai" />
       <meta 
         name="description" 
         content="SNDF is a trusted detective agency in Mumbai offering private investigation, surveillance and professional security services across Mumbai and nearby areas. Contact our expert team today." />
     </Helmet> 

    <section className="sndf-mumbai-hero">
      <div className="sndf-mumbai-hero__container">

        {/* LEFT */}
        <div className="sndf-mumbai-hero__left">

          <span className="sndf-mumbai-hero__badge">
            SNDF Regional Office
          </span>

          <h1 className="sndf-mumbai-hero__title">
            Mumbai <span>Branch</span>
          </h1>

          <p className="sndf-mumbai-hero__desc">
            The Mumbai branch serves as the Western Region headquarters of SNDF,
            managing operations, coordination and training across Maharashtra
            with a strong focus on professionalism and confidentiality.
          </p>

          <div className="sndf-mumbai-hero__buttons">

            <button
              className="sndf-btn sndf-btn--primary"
              onClick={() => scrollToSection("contact-section")}>
              Contact Office
            </button>

            <button
              className="sndf-btn sndf-btn--outline"
              onClick={() => scrollToSection("details-section")}>
              View Details
            </button>

          </div>

          {/* INFO STRIP (UNIQUE BUT MATCHING) */}
          <div className="sndf-mumbai-hero__info">
            <span><strong>Mumbai</strong>, Maharashtra</span>
            <span>•</span>
            <span>Established <strong>2025</strong></span>
            <span>•</span>
            <span>Western Region</span>
          </div>

        </div>

        {/* RIGHT */}
        <div className="sndf-mumbai-hero__right">

          <div className="sndf-mumbai-hero__image-box">
            <img
              src={mumbaiOffice}
              alt="Mumbai Branch"
            />

            <div className="sndf-mumbai-hero__tag">
              Western HQ
            </div>
          </div>

        </div>

      </div>
    </section>


    {/* second section......................................... */}

     <section className="sndf-mum-ops" id="details-section">
      <div className="sndf-mum-ops-container">

        {/* LEFT CONTENT */}
        <div className="sndf-mum-ops-left">
          <span className="sndf-mum-ops-tag">
            SNDF Mumbai Branch Operations
          </span>

          <h2>
            Professional Security & Investigation Services in{" "}
            <span>Mumbai & Western India</span>
          </h2>

          <p>
            The SNDF Mumbai Branch operates as a regional execution unit under
            the Head Office in Pune, delivering reliable and confidential
            security, detective and surveillance services across Maharashtra.
            Our Mumbai team focuses on on-ground operations, rapid response
            and professional case handling for individuals, corporates and
            legal requirements.
          </p>

          <p>
            With trained personnel, advanced surveillance systems and
            operational discipline, we ensure every assignment is handled with
            accuracy, confidentiality and efficiency.
          </p>

          <p className="sndf-mum-ops-trust">
            Trusted by individuals, corporates and legal professionals for reliable
            security and confidential investigation services in Mumbai.
          </p>

          <div className="sndf-mum-ops-divider"></div>

          {/* SERVICES LIST */}
          <div className="sndf-mum-ops-services">

            <div>
              <FaShieldAlt /> Security Guard Services
            </div>

            <div>
              <FaUserSecret /> Private Detective Investigation
            </div>

            <div>
              <FaVideo /> Surveillance & Monitoring
            </div>

            <div>
              <FaBuilding /> Corporate Investigation Services
            </div>

            <div>
              <FaSearchLocation /> Intelligence & Field Operations
            </div>

            <div>
              <FaBolt /> Rapid Response & Deployment
            </div>

          </div>
        </div>

        {/* RIGHT SIDE STRUCTURE (NOT CARDS) */}
        <div className="sndf-mum-ops-right">

          <div className="sndf-mum-ops-block">
            <h4>Regional Execution Unit</h4>
            <p>
              Supports Pune Head Office with field operations, case execution
              and coordination across Mumbai and Western India.
            </p>
          </div>

          <div className="sndf-mum-ops-block">
            <h4>On-Ground Operations</h4>
            <p>
              Active teams deployed for security services, investigations and
              surveillance assignments with real-time monitoring.
            </p>
          </div>

          <div className="sndf-mum-ops-block">
            <h4>Confidential Case Handling</h4>
            <p>
              All operations are handled with strict confidentiality,
              professionalism and legal compliance.
            </p>
          </div>

        </div>

      </div>
    </section>


{/* gallary............................... */}
     
<section className="sndf-mum-gallery">
  <div className="sndf-mum-gallery__container">

    <div className="sndf-mum-gallery__header">
      <h2 className="sndf-mum-gallery__title">
        Mumbai <span>Branch Gallery</span>
      </h2>

      <p className="sndf-mum-gallery__subtitle">
        Explore our Mumbai branch office environment, operational setup
        and professional workspace supporting security and investigation services.
      </p>
    </div>

    <div className="sndf-mum-gallery__grid">

      <button
        type="button"
        className="sndf-mum-gallery__item"
        onClick={() => setSelectedImage(mumbaiOffice)}
        aria-label="View Mumbai Branch Office Entrance"
      >
        <img
          src={mumbaiOffice}
          alt="SNDF Mumbai Branch Office Entrance"
        />
      </button>

      <button
        type="button"
        className="sndf-mum-gallery__item"
        onClick={() => setSelectedImage(mumbaiOffice)}
        aria-label="View Mumbai Office Front View"
      >
        <img
          src={mumbaiOffice}
          alt="SNDF Mumbai Office Front View"
        />
      </button>

      <button
        type="button"
        className="sndf-mum-gallery__item"
        onClick={() => setSelectedImage(mumbaiOffice)}
        aria-label="View Mumbai Branch Setup"
      >
        <img
          src={mumbaiOffice}
          alt="SNDF Mumbai Branch Setup"
        />
      </button>

      <button
        type="button"
        className="sndf-mum-gallery__item"
        onClick={() => setSelectedImage(mumbaiOffice)}
        aria-label="View Mumbai Security Operations"
      >
        <img
          src={mumbaiOffice}
          alt="SNDF Mumbai Security Operations"
        />
      </button>

    </div>
  </div>

      {selectedImage && (
      <div
        className="gallery-lightbox"
        onPointerDown={(event) => {
          const img = event.currentTarget.querySelector(".lightbox-image");

          if (!img) {
            setSelectedImage(null);
            return;
          }

          const rect = img.getBoundingClientRect();
          const imageRatio = img.naturalWidth / img.naturalHeight;
          const boxRatio = rect.width / rect.height;

          let visibleWidth = rect.width;
          let visibleHeight = rect.height;

          if (imageRatio > boxRatio) {
            visibleHeight = rect.width / imageRatio;
          } else {
            visibleWidth = rect.height * imageRatio;
          }

          const left = rect.left + (rect.width - visibleWidth) / 2;
          const top = rect.top + (rect.height - visibleHeight) / 2;

          const isInsideImage =
            event.clientX >= left &&
            event.clientX <= left + visibleWidth &&
            event.clientY >= top &&
            event.clientY <= top + visibleHeight;

          if (!isInsideImage) {
            setSelectedImage(null);
          }
        }}
        role="presentation"
      >
        <button
          type="button"
          className="lightbox-close"
          onClick={() => setSelectedImage(null)}
          aria-label="Close image"
        >
          &times;
        </button>

        <img
          src={selectedImage}
          alt="Enlarged Mumbai Branch view"
          className="lightbox-image"
        />
      </div>
    )}
 
</section>


{/* cta section....................................... */}
 
 <section className="sndf-contact" id="contact-section">

      <div className="sndf-contact-container">

        {/* LEFT SIDE */}
        <div className="sndf-left">

          <h2>
            Contact <span>Mumbai Branch</span>
          </h2>

          <p>
            Reach out to our Mumbai office for professional security & investigation services.
          </p>

          <div className="sndf-info">

            <a href="tel:+918007341570" className="sndf-card">
              <FaPhoneAlt />
              <div>
                <h4>Call Us</h4>
                <p>+91 8007341570</p>
              </div>
            </a>

            <a href="https://wa.me/919970383155?text=Hello%20SNDF%20Mumbai,%20I%20need%20more%20information%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="sndf-card">

                <FaWhatsapp className="wa" />
                <div>
                  <h4>Chat on WhatsApp</h4>
                  <p>Instant support available</p>
                </div>
              </a>

            <a href="mailto:support@sndfpunesecurity.in" className="sndf-card">
              <FaEnvelope />
              <div>
                <h4>Email Us</h4>
                <p>support@sndfpunesecurity.in</p>
              </div>
            </a>

            <div className="sndf-card">
              <FaMapMarkerAlt />
              <div>
                <h4>Visit Our Office</h4>
                <p>Office No. F-6, Upper Side, 1st Floor, Haware Fantasia Business Park,
                   Plot No. 47, Sector 30A, Vashi, Navi Mumbai - 400703</p>
              </div>
            </div>

          </div>

        </div>


       {/* RIGHT SIDE INFO CARD */}
          <div className="sndf-form">

              <h3>Why Choose SNDF Mumbai</h3>

              <div className="sndf-highlights">

                <div className="sndf-highlight-box">
                  <span>✔</span>
                  <p>Confidential Investigations</p>
                </div>

                <div className="sndf-highlight-box">
                  <span>✔</span>
                  <p>Experienced Field Officers</p>
                </div>

                <div className="sndf-highlight-box">
                  <span>✔</span>
                  <p>Corporate & Personal Cases</p>
                </div>

                <div className="sndf-highlight-box">
                  <span>✔</span>
                  <p>Fast Mumbai-Wide Support</p>
                </div>

                <div className="sndf-highlight-box">
                  <span>✔</span>
                  <p>Trusted Security Solutions</p>
                </div>

              </div>

              <div className="sndf-bottom-note">
                Serving clients across Navi Mumbai & nearby regions.
              </div>

          </div>

      </div>

      {/* GOOGLE MAP FULL WIDTH */}
  <div className="sndf-map-container">

    <iframe
      src="https://www.google.com/maps?q=Haware+Fantasia+Business+Park+Sector+30A+Vashi+Navi+Mumbai&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
    ></iframe>

    {/* Overlay (NO ADDRESS REPEAT) */}
    <div className="sndf-map-overlay">

      <div className="sndf-map-badge">
        📍 Mumbai Branch Location
      </div>

      <a
        href="https://www.google.com/maps/search/?api=1&query=Haware+Fantasia+Business+Park+Vashi+Navi+Mumbai"
        target="_blank"
        rel="noopener noreferrer"
        className="sndf-map-btn"
      >
        Open in Google Maps →
      </a>

    </div>

  </div>

</section>



</main>
  );
};

export default Mumbai;