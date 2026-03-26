import React, { useEffect } from "react";
import "./About.css";

const About = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    });

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="about-page">

      {/* ABOUT / HERO */}
      <section className="about-split">
        <div className="about-image fade-up"></div>

        <div className="about-content fade-up">
          <h2 className="about-title">About SNDF</h2>
          <h3>Professional Investigation Services</h3>

          <p className="common-text">
            Founded with a vision to deliver truth and transparency, our company began as a small investigation service focused on solving critical cases. Over the years, we have grown into a trusted agency handling corporate investigations, surveillance, and cyber analysis.

            With continuous innovation and modern technology, we maintain integrity, confidentiality, and accuracy. Today, we are known for professionalism and reliable results with a skilled team delivering precise insights.
          </p>
        </div>
      </section>

      {/* VIDEO */}
      <section className="video-split fade-up">
        <div className="video-content">
          <h2>See How We Work</h2>
          <p className="common-text">
            We combine advanced technology with field expertise to deliver fast and accurate investigation results with complete confidentiality. Our approach is built on precision, discretion, and reliability.

            Our team uses modern tools such as digital forensics, GPS tracking, surveillance systems, and data analysis.
          </p>
        </div>

        <div className="video-right">
          <iframe
            src="https://www.youtube.com/embed/ljPyV9mqm7o"
            title="video"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* ===== ADD FROM HERE (NEW SECTIONS) ===== */}

      {/* MISSION & VISION */}
      <section className="mission-vision fade-up">
        <div className="mv-box left">
          <h2>Our Mission</h2>
          <p>
            To deliver accurate, confidential, and professional investigation
            services using advanced tools and expert knowledge.
          </p>
        </div>

        <div className="mv-box right">
          <h2>Our Vision</h2>
          <p>
            To become a leading and trusted investigation agency known
            for innovation and excellence.
          </p>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="values fade-up">
        <h2>Our Core Values</h2>

        <div className="values-grid">

          <div className="about-card">
            <h3>Integrity</h3>
            <p>We maintain honesty in every investigation.</p>
            <span className="arrow">→</span>
          </div>

          <div className="about-card">
            <h3>Confidentiality</h3>
            <p>Your data is always secure and private.</p>
            <span className="arrow">→</span>
          </div>

          <div className="about-card">
            <h3>Accuracy</h3>
            <p>We deliver precise and verified results.</p>
            <span className="arrow">→</span>
          </div>

          <div className="about-card">
            <h3>Commitment</h3>
            <p>Dedicated team focused on client success.</p>
            <span className="arrow">→</span>
          </div>

      </div>
    </section>
  );
};

export default About;