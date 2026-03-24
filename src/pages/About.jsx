import React from "react";

function About() {
  return (
    <section style={{ padding: "60px 20px", background: "#f9f9f9" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        
        {/* TITLE */}
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          About Us
        </h1>

        {/* DESCRIPTION */}
        <p style={{ textAlign: "center", marginBottom: "40px", color: "#555" }}>
          We provide trusted security and investigation services across India.
          Our team is committed to confidentiality, professionalism, and delivering
          accurate results for every client.
        </p>

        {/* CONTENT */}
        <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
          
          {/* LEFT */}
          <div style={{ flex: "1", minWidth: "280px" }}>
            <h3>Who We Are</h3>
            <p>
              SNDF is a leading detective and security agency offering services
              like personal investigation, corporate investigation, surveillance,
              and background verification.
            </p>
          </div>

          {/* RIGHT */}
          <div style={{ flex: "1", minWidth: "280px" }}>
            <h3>Our Mission</h3>
            <p>
              Our mission is to deliver reliable and confidential investigation
              services with advanced technology and experienced professionals.
            </p>
          </div>

        </div>

        {/* EXTRA SECTION */}
        <div style={{ marginTop: "40px" }}>
          <h3>Why Choose Us?</h3>
          <ul>
            <li>✔ Experienced Investigators</li>
            <li>✔ 100% Confidentiality</li>
            <li>✔ Fast & Accurate Reports</li>
            <li>✔ Nationwide Services</li>
          </ul>
        </div>


         <div style={{ marginTop: "40px" }}>
          <h3>Why Choose Us?</h3>
          <ul>
            <li>✔ Experienced Investigators</li>
            <li>✔ 100% Confidentiality</li>
            <li>✔ Fast & Accurate Reports</li>
            <li>✔ Nationwide Services</li>
          </ul>
        </div>

         <div style={{ marginTop: "40px" }}>
          <h3>Why Choose Us?</h3>
          <ul>
            <li>✔ Experienced Investigators</li>
            <li>✔ 100% Confidentiality</li>
            <li>✔ Fast & Accurate Reports</li>
            <li>✔ Nationwide Services</li>
          </ul>
        </div>
        

      </div>
    </section>
  );
}

export default About;