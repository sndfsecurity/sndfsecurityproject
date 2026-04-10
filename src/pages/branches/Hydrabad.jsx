import React, { useState } from 'react';
import "./Hyderabad.css";

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaArrowRight } from "react-icons/fa";

const Hyderabad = () => {

  const officeImageUrl = "https://cdn.pixabay.com/photo/2016/11/29/03/53/office-1867185_1280.jpg";

  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      url: "https://cdn.pixabay.com/photo/2016/11/29/03/53/office-1867185_1280.jpg",
      title: "Main Office Building",
      description: "SNDF Hyderabad Headquarters exterior view"
    },
    {
      id: 2,
      url: "https://cdn.pixabay.com/photo/2015/01/20/12/51/office-605503_1280.jpg",
      title: "Training Center",
      description: "Modern detective training facilities"
    },
    {
      id: 3,
      url: "https://cdn.pixabay.com/photo/2017/07/31/11/46/meeting-2558746_1280.jpg",
      title: "Conference Hall",
      description: "Strategic operations meeting room"
    },
    {
      id: 4,
      url: "https://cdn.pixabay.com/photo/2016/03/27/07/32/office-1282323_1280.jpg",
      title: "Command Center",
      description: "24/7 surveillance and monitoring hub"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hyderabad-hero-section">
        <div className="branch-herobr">
          <div className="hero-contentbr">
            <h1>Hyderabad Branch</h1>
            <p>Nationalist Detective Force - South Headquarters</p>
            <div className="est-badgebr">Established December 2024</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="hyderabad-about-section">
        <div className="hyderabad-container">
          <div className="hyderabad-split-layout">

            <div className="hyderabad-about-card">
              <h2 className="hyderabad-about-title">Hyderabad Headquarters</h2>
              <p className="hyderabad-about-description">
                The South command hub of SNDF, managing operations, detective training,
                and investigative services across Hyderabad and surrounding states with precision,
                confidentiality, and regional expertise.
              </p>

              <a href="#contact-section" className="hyderabad-contact-btn">
                Contact Us
              </a>

              <div className="hyderabad-stats-container">
                <div className="hyderabad-stat-item">
                  <span className="hyderabad-stat-number">8+</span>
                  <span className="hyderabad-stat-label">Batches Completed</span>
                </div>
                <div className="hyderabad-stat-item">
                  <span className="hyderabad-stat-number">18+</span>
                  <span className="hyderabad-stat-label">Cases Solved</span>
                </div>
                <div className="hyderabad-stat-item">
                  <span className="hyderabad-stat-number">100%</span>
                  <span className="hyderabad-stat-label">Success Rate</span>
                </div>
              </div>
            </div>

            <div className="hyderabad-image-wrapper">
              <img
                src={officeImageUrl}
                alt="SNDF Hyderabad Headquarters Office Building"
                className="hyderabad-office-img"
                loading="eager"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/600x400/2c3e50/ffffff?text=SNDF+Hyderabad+HQ";
                }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="gallery-container">

          <div className="gallery-header">
            <h2 className="gallery-title">Our Office Gallery</h2>
            <p className="gallery-subtitle">
              Take a virtual tour of our Hyderabad headquarters and training facilities
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

      {/* Contact Section */}
      <section id="contact-section" className="hyderabad-contact-section">
        <div className="hyderabad-contact-container">

          <div className="hyderabad-contact-header">
            <span className="hyderabad-contact-badge">Contact Us</span>
            <h2 className="hyderabad-contact-title">Get in touch</h2>
            <p className="hyderabad-contact-subtitle">
              Reach out to us for any inquiries, course details or investigative services
            </p>
          </div>

          <div className="hyderabad-contact-wrapper">

            <div className="hyderabad-contact-info">
              <div className="hyderabad-contact-card">

                <div className="hyderabad-contact-item">
                  <div className="hyderabad-icon-box"><FaPhone /></div>
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:+919881235508">+91 98812 35508</a>
                  </div>
                </div>

                <div className="hyderabad-contact-item">
                  <div className="hyderabad-icon-box"><FaEnvelope /></div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:info@ndfdetective.com">info@ndfdetective.com</a>
                  </div>
                </div>

                <div className="hyderabad-contact-item">
                  <div className="hyderabad-icon-box"><FaMapMarkerAlt /></div>
                  <div>
                    <h4>Address</h4>
                    <p>
                      SNDF Hyderabad Office,<br />
                      Near Main City Center,<br />
                      Hyderabad, Telangana
                    </p>
                  </div>
                </div>

                <div className="hyderabad-contact-item">
                  <div className="hyderabad-icon-box"><FaClock /></div>
                  <div>
                    <h4>Working Hours</h4>
                    <p>Monday - Saturday: 9:00 AM - 7:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>

              </div>

              <a 
                href="https://maps.google.com/?q=Hyderabad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hyderabad-map-link"
              >
                View on Google Maps →
              </a>

            </div>

            <div className="hyderabad-contact-form">
              <div className="hyderabad-form-card">
                <h3 className="hyderabad-form-heading">Send us an Inquiry</h3>

                <form className="hyderabad-form">
                  <input type="text" placeholder="Full Name" className="hyderabad-input" />
                  <input type="tel" placeholder="Phone Number" className="hyderabad-input" />
                  <input type="email" placeholder="Email Address" className="hyderabad-input" />
                  <textarea rows="4" placeholder="Your Message" className="hyderabad-textarea"></textarea>

                  <button type="submit" className="hyderabad-submit-btn">
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

export default Hyderabad;