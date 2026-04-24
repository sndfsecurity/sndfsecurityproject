import {React, useState} from 'react';
import "./Assam.css";
import { Helmet } from "react-helmet-async";
import assam from "../../assets/images/assam.webp";
import assam1 from "../../assets/images/assam1.webp";
import assam2 from "../../assets/images/assam2.webp";
import assam3 from "../../assets/images/assam3.webp";
import assam4 from "../../assets/images/assam4.webp";





import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaArrowRight } from "react-icons/fa";

const Assam = () => {



const officeImageUrl = assam;

  const [selectedImage, setSelectedImage] = useState(null);

    const galleryImages = [
    {
      id: 1,
      url: assam1,
      title: "Main Office Building",
      description: "SNDF Assam Headquarters exterior view"
    },
    {
      id: 2,
      url: assam2,
      title: "Training Center",
      description: "Modern detective training facilities"
    },
    {
      id: 3,
      url: assam3 ,
      title: "Conference Hall",
      description: "Strategic operations meeting room"
    },
    {
      id: 4,        
      url: assam4,
      title: "Command Center",
      description: "24/7 surveillance and monitoring hub"
    }
  ];


  return (
    <>

    <Helmet>
      <title>SNDF Assam Branch | Regional Security Services</title>
      <link rel="canonical" href="https://www.sndfndf.com/branches/assam" />
      <meta name="description" content="SNDF Assam branch offers trusted surveillance, investigation and protection services in the region." />
    </Helmet>

      {/* Hero Section */}
      <section className="assam-hero-section">
      <div className="branch-herobr">
        <div className="hero-contentbr">
          <h1>Assam Branch</h1>
          <p>Nationalist Detective Force - North East Headquarters</p>
          <div className="est-badgebr">Established December 2024</div>
        </div>
      </div>
      </section>


      {/* about section.................................. */}

      <section className="assam-about-section">
      <div className="assam-container">
        <div className="assam-split-layout">
          {/* LEFT SIDE: Content card */}
          <div className="assam-about-card">
            <h2 className="assam-about-title">Assam Headquarters</h2>
            <p className="assam-about-description">
              The North East command hub of SNDF, managing operations, detective training
              and investigative services across Assam and surrounding states with precision,
              confidentiality and regional expertise.
            </p>


            {/* <button className="assam-contact-btn">Contact Us</button> */}

              <a href="#contact-section" className="assam-contact-btn">
                Contact Us
              </a>

            <div className="assam-stats-container">
              <div className="assam-stat-item">
                <span className="assam-stat-number">8+</span>
                <span className="assam-stat-label">Batches Completed</span>
              </div>
              <div className="assam-stat-item">
                <span className="assam-stat-number">18+</span>
                <span className="assam-stat-label">Cases Solved</span>
              </div>
              <div className="assam-stat-item">
                <span className="assam-stat-number">100%</span>
                <span className="assam-stat-label">Success Rate</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Office image */}
          <div className="assam-image-wrapper">
            <img
              src={officeImageUrl}
              alt="SNDF Assam Headquarters Office Building"
              className="assam-office-img"
              loading="eager"
              onError={(e) => {
                // Fallback image if primary fails
                e.target.src = "https://via.placeholder.com/600x400/2c3e50/ffffff?text=SNDF+Assam+Headquarters";
              }}
            />
          </div>
        </div>
      </div>
    </section>


      
      {/* gallary section....................................................... */}

     <section className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="gallery-title">Our Office Gallery</h2>
          <p className="gallery-subtitle">
            Take a virtual tour of our state-of-the-art headquarters and training facilities
          </p>
        </div>

        <div className="gallery-gridas">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.url} alt={image.title} loading="lazy" />
              <div className="gallery-overlay">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
            <span className="modal-close">&times;</span>
            <img src={selectedImage.url} alt={selectedImage.title} />
            <div className="modal-caption">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>



    {/* cta section....................................................... */}
      <section id="contact-section" className="assam-contact-section">
      <div className="assam-contact-container">
        <div className="assam-contact-header">
          <span className="assam-contact-badge">Contact Us</span>
          <h2 className="assam-contact-title">Get in touch</h2>
          <p className="assam-contact-subtitle">
            Reach out to us for any inquiries, course details or investigative services
          </p>
        </div>

        <div className="assam-contact-wrapper">
          {/* Contact Info Column */}
          <div className="assam-contact-info">
            <div className="assam-contact-card">
              <div className="assam-contact-item">
                <div className="assam-icon-box">
                  <FaPhone />
                </div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+919881235508">+91 98812 35508</a>
                </div>
              </div>

              <div className="assam-contact-item">
                <div className="assam-icon-box">
                  <FaEnvelope />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:info@ndfdetective.com">info@ndfdetective.com</a>
                </div>
              </div>

              <div className="assam-contact-item">
                <div className="assam-icon-box">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4>Address</h4>
                  <p>
                    Nationalist Detective Force, Detective Investigation Course,<br />
                    Bolen Barmans Complex, 2nd Floor, Near Shani Mandir,<br />
                    Milan Nagar, Barbari, Hengrabari Tiniali,<br />
                    VIP Road, Guwahati - 781036
                  </p>
                </div>
              </div>

              <div className="assam-contact-item">
                <div className="assam-icon-box">
                  <FaClock />
                </div>
                <div>
                  <h4>Working Hours</h4>
                  <p>Monday - Saturday: 9:00 AM - 7:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>

            <a 
              href="https://maps.google.com/?q=Bolen+Barmans+Complex+Guwahati" 
              target="_blank" 
              rel="noopener noreferrer"
              className="assam-map-link"
            >
              View on Google Maps →
            </a>
          </div>

          {/* Inquiry Form Column */}
          <div className="assam-contact-form">
            <div className="assam-form-card">
              <h3 className="assam-form-heading">Send us an Inquiry</h3>
              <form className="assam-form">
                <div className="assam-form-row">
                  <input type="text" placeholder="Full Name" className="assam-input" />
                </div>
                <div className="assam-form-row">
                  <input type="tel" placeholder="Phone Number" className="assam-input" />
                </div>
                <div className="assam-form-row">
                  <input type="email" placeholder="Email Address" className="assam-input" />
                </div>
                <div className="assam-form-row">
                  <textarea rows="4" placeholder="Your Message" className="assam-textarea"></textarea>
                </div>
                <button type="submit" className="assam-submit-btn">
                  Submit Inquiry <FaArrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>


  
    
    </>
  );
};

export default Assam;