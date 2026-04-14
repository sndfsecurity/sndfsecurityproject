import React, { useState } from "react";
import "./Blog.css";
import { Helmet } from "react-helmet-async";

const blogs = [
  {
  id: 1,
  title: "Corporate Investigation",
  category: "Investigation",
  desc: "Protecting Your Business from Hidden Risks.",
  image: "src/assets/images/corporate investigation.jpg",

  content: `
Corporate investigation is a crucial process that helps businesses identify fraud, misconduct, and hidden risks within an organization. In today’s fast-paced and competitive environment, companies face various internal and external threats that can impact their operations and reputation.

Through professional investigation methods such as employee verification, financial audits, and surveillance, businesses can detect suspicious activities early. This not only helps in preventing financial losses but also ensures transparency and trust within the organization.

Modern corporate investigations use advanced tools like digital forensics, data analysis, and monitoring systems to gather accurate and reliable information. These techniques allow companies to make informed decisions and maintain secure operations.

In conclusion, corporate investigation plays a vital role in protecting businesses from risks and ensuring long-term success.
`
},
  {
  id: 2,
  title: "Cyber Security",
  category: "Security",
  desc: "Protecting company data from cyber threats.",
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475",

  content: `
Cyber security plays a vital role in protecting company data from growing digital threats such as hacking, data breaches, and malware attacks. In today’s digital world, businesses must ensure strong security systems to safeguard sensitive information and maintain trust.

By using advanced tools like firewalls, encryption, and real-time monitoring, organizations can prevent unauthorized access and reduce risks. A strong cyber security strategy not only protects data but also ensures smooth and secure business operations.
`
},
  {
  id: 3,
  title: "Background Verification",
  category: "HR",
  desc: "Employee background verification process.",
  image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",

  content: `
Background verification is an essential process that helps organizations ensure the credibility and reliability of employees before hiring. It involves verifying personal, professional, and legal details to reduce hiring risks.

This process includes checking criminal records, address verification, employment history, and identity validation. By conducting proper background checks, companies can prevent fraud, improve workplace safety, and build a trustworthy workforce.

A strong background verification system supports better hiring decisions and ensures long-term organizational stability.
`
},
 {
  id: 4,
  title: "Surveillance Services",
  category: "Investigation",
  desc: "Modern surveillance tools and tracking systems.",
  image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd",

  content: `
Surveillance services play a key role in modern investigations by tracking activities and gathering real-time evidence. Using advanced tools like GPS tracking, hidden cameras, and monitoring systems, investigators can ensure accurate and reliable results while maintaining complete confidentiality.
`
},

{
  id: 5,
  title: "Fraud Detection",
  category: "Finance",
  desc: "Identify and prevent financial fraud.",
  image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",

  content: `
Fraud detection helps businesses identify and prevent financial crimes that can impact operations and trust. By using data analysis, audits, and investigation techniques, organizations can detect irregularities early and protect their financial stability.
`
},

{
  id: 6,
  title: "Personal Investigation",
  category: "Private",
  desc: "Confidential personal investigation services.",
  image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",

  content: `
Personal investigation services provide confidential solutions for individual concerns such as background checks and relationship verification. These services ensure privacy, accuracy, and reliable information to help individuals make informed decisions.
`
}
];

function Blog() {
  const [selected, setSelected] = useState(null);

  return (

    <>

    <Helmet>
      <title>Security & Investigation Insights | SNDF Blog</title>
      <meta name="description" content="Explore latest insights, tips, and updates on security, surveillance, and investigation from SNDF experts." />
    </Helmet>


    <div className="blog-container">

      {/* HERO */}
      <div className="blog-hero">
        <h1>Welcome to the SNDF Knowledge Hub</h1>
        <p>Gain valuable insights, expert perspectives, and trusted investigation solutions tailored for modern challenges.</p>
      </div>

      {/* LIST */}
      {!selected && (
        <div className="blog-grid">
          {blogs.map((item) => (
            <div className="blog-card" key={item.id}>
              <img src={item.image} alt="" />
              <div className="blog-content">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button onClick={() => setSelected(item)}>
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* DETAILS */}
      {selected && (
        <div className="blog-details">
          <button onClick={() => setSelected(null)} className="back-btn">
            ← Back
          </button>

          <img src={selected.image} alt="" />
          <h1>{selected.title}</h1>
          <p>{selected.content}</p>
        </div>
      )}
    </div>

    </>
  );
}

export default Blog;