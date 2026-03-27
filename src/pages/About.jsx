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
Founded in 2020, SNDF Private Limited began with a strong vision to deliver truth and transparency. Our company started as a small investigation service focused on solving critical and sensitive cases with accuracy and discretion.

Over the years, SNDF Private Limited has grown into a trusted and professional agency, offering a wide range of services including corporate investigations, surveillance, and cyber analysis. With continuous innovation and the use of modern technology, we ensure every case is handled with the highest level of integrity, confidentiality, and precision.

Today, we are recognized for our professionalism and reliable results. Our skilled and experienced team is dedicated to delivering accurate insights and dependable solutions, making SNDF Private Limited a trusted name in the investigation industry.
          </p>
        </div>
      </section>

      {/* VIDEO */}
      <section className="video-split fade-up">
        <div className="video-content">
          <h2>See How We Work</h2>
          <p className="common-text">
            We combine advanced technology with expert field operations to deliver fast, accurate, and confidential investigation results. Our process includes strategic planning, modern surveillance, cyber analysis, and verified reporting—ensuring reliable outcomes with complete integrity and professionalism.
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
          Contact us today for confidential investigation services.
        </p>
        <button>Contact Us</button>
      </section>

    </div>
  );
};

export default About;