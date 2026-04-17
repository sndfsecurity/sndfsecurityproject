import React, { useEffect } from "react";
import "./About.css";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";



const About = () => {

  const navigate = useNavigate();

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
    <>
      <Helmet>
        <title>About SNDF | Expert Security & Investigation Team</title>
        <meta 
          name="description" 
          content="Learn about SNDF’s experienced team delivering trusted security and private investigation services across India." 
        />
      </Helmet>

      <div className="about-page">

        {/* ABOUT / HERO */}
        <section className="about-split">
          <div className="about-image fade-up"></div>

          <div className="about-content fade-up">
            <h2 className="about-title">About SNDF</h2>
            <h3>Professional Investigation Services</h3>

            <p className="common-text">
              SNDF Private Limited, established in 2020, is a professional investigation and security services company committed to integrity, transparency, and excellence. Starting as a focused investigation unit, it has grown into a structured organization with specialized divisions including NDF, SNDF Guard, OWL, SPY, and DIC.

The company provides expert solutions in security operations, surveillance, confidential investigations, and cyber intelligence, backed by advanced technology and a skilled team. SNDF is recognized as a reliable and trusted name, delivering accurate, confidential, and result-oriented services.
            </p>
          </div>
        </section>

        {/* VIDEO */}
        <section className="video-split fade-up">
          <div className="video-content">
            <h2>See How We Work</h2>
            <p className="common-text">
              Our workflow is built on precision, planning, and confidentiality. From understanding client needs to execution, we ensure every step is handled with professionalism, accuracy, and a commitment to reliable results.
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

        {/* MISSION & VISION */}
        <section className="mission-vision fade-up">
          <div className="mv-box left">
            <h2>Our Mission</h2>
            <p>
              To deliver accurate, confidential, and professional investigation services using advanced tools and expert knowledge.
            </p>
          </div>

          <div className="mv-box right">
            <h2>Our Vision</h2>
            <p>
              To become a leading and trusted investigation agency known for innovation and excellence.
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
            </div>

            <div className="about-card">
              <h3>Confidentiality</h3>
              <p>Your data is always secure and private.</p>
            </div>

            <div className="about-card">
              <h3>Accuracy</h3>
              <p>We deliver precise and verified results.</p>
            </div>

            <div className="about-card">
              <h3>Commitment</h3>
              <p>Dedicated team focused on client success.</p>
            </div>
          </div>
        </section>

        {/* NEED HELP */}
        <section className="need-help fade-up">
          <h2>Need Professional Help?</h2>
          <p>
            Connect with us today for secure, professional, and confidential solutions.
          </p>

          <button onClick={() => navigate("/contact#enquiry-form")}>
            Contact Us
          </button>
        </section>

      </div>
    </>
  );
};

export default About;