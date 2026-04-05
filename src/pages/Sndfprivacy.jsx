import React from "react";
import "./Sndfprivacy.css";

const Sndfprivacy = () => {
  return (
    <section className="pp2-page">

      {/* HERO */}
      <div className="pp2-hero">
        <h1>Privacy Policy</h1>
        <p>SNDF Security Services</p>
      </div>

      {/* DOCUMENT BOX */}
      <div className="pp2-doc">

        <div className="pp2-header">
          <h2>Privacy Policy</h2>
          <span>Last Updated: March 2026</span>
        </div>

        <p className="pp2-intro">
          At SNDF Security Services, we specialize in professional security,
          investigation, and training services. Protecting your personal
          information is a top priority. This Privacy Policy explains how we
          collect, use, and safeguard your data when you interact with our
          website or services.
        </p>

        {/* SECTIONS */}

        <div className="pp2-block">
          <h3>1. Information We Collect</h3>
          <p>
            We may collect personal details including your name, phone number,
            email address, city, and other relevant information when you submit
            enquiry forms or contact us. We may also collect non-personal data
            such as browser type, device information, and usage patterns.
          </p>
        </div>

        <div className="pp2-block">
          <h3>2. Purpose of Data Collection</h3>
          <p>
            Your information is used to respond to enquiries, provide services,
            improve operations, and maintain effective communication.
          </p>
        </div>

        <div className="pp2-block">
          <h3>3. Data Security & Confidentiality</h3>
          <p>
            As a professional security and investigation organization, we follow
            strict confidentiality protocols. Your data is protected using
            appropriate security measures to prevent unauthorized access or misuse.
          </p>
        </div>

        <div className="pp2-block">
          <h3>4. Sharing of Information</h3>
          <p>
            We do not sell or rent your personal information. Data is only shared
            when required by law or necessary to deliver services.
          </p>
        </div>

        <div className="pp2-block">
          <h3>5. Investigation & Sensitive Data Handling</h3>
          <p>
            All investigation-related information is handled with strict
            confidentiality and accessed only by authorized personnel. We do not
            disclose such data unless legally required.
          </p>
        </div>

        <div className="pp2-block">
          <h3>6. Cookies & Website Tracking</h3>
          <p>
            We may use cookies to improve website functionality and user
            experience. You can disable cookies in your browser settings.
          </p>
        </div>

        <div className="pp2-block">
          <h3>7. Your Rights</h3>
          <p>
            You have the right to access, update, or request deletion of your
            personal data by contacting us.
          </p>
        </div>

        <div className="pp2-block">
          <h3>8. Contact Information</h3>
          <div className="pp2-contact">
            <p>📞 +91 99711 11904</p>
            <p>📧 sndfguard@gmail.com</p>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Sndfprivacy;