import React, { useState } from "react";
import "./Blog.css";
import { Helmet } from "react-helmet-async";
import img1 from "../assets/images/corporate.webp";
import img2 from "../assets/images/cyber.webp";
import img3 from "../assets/images/background.webp";
import img4 from "../assets/images/surivellence.webp";
import img5 from "../assets/images/fruad.webp";
import img6 from "../assets/images/personal.webp";

const blogs = [
{
id:1,
title:"Corporate Investigation",
category:"Investigation",
desc:"Protecting Your Business from Hidden Risks.",
image: img1, // ✅ changed
content:`IIn today’s fast-paced business environment, organizations face increasing risks from fraud, data breaches, employee misconduct, and financial irregularities. Corporate investigation plays a crucial role in identifying these threats, protecting company assets, and maintaining trust among stakeholders.

Corporate investigations involve a systematic examination of internal and external activities within a business. These investigations are often conducted to uncover issues such as financial fraud, intellectual property theft, compliance violations, or unethical behavior. By using advanced techniques like forensic accounting, digital forensics, and surveillance, investigators can gather accurate evidence and provide actionable insights.

One of the key benefits of corporate investigation is risk mitigation. Early detection of irregularities helps companies prevent financial losses and reputational damage. It also ensures that organizations remain compliant with legal and regulatory standards, reducing the chances of penalties or legal action.

Moreover, corporate investigations promote a culture of transparency and accountability. When employees know that unethical practices will be identified and addressed, it encourages integrity across all levels of the organization.

In conclusion, corporate investigation is not just about solving problems—it’s about preventing them. By investing in professional investigation services, businesses can create a secure, compliant, and trustworthy environment that supports long-term growth.`
},

{
id:2,
title:"Cyber Security",
category:"Security",
desc:"Protecting company data from cyber threats.",
image: img2,
content:`IIn the digital age, cyber security has become essential for businesses and individuals alike. With the rapid growth of online platforms, sensitive data is constantly at risk from hackers, malware, and cyber attacks. Cyber security focuses on protecting systems, networks, and data from unauthorized access and digital threats.

Cyber threats can take many forms, including phishing attacks, ransomware, data breaches, and identity theft. These attacks can lead to financial loss, reputational damage, and disruption of operations. As businesses rely more on technology, the importance of strong cyber security measures continues to grow.

Effective cyber security involves multiple layers of protection. This includes firewalls, antivirus software, data encryption, secure passwords, and regular system updates. Organizations also implement employee training programs to reduce human errors, which are often the weakest link in security systems.

One of the key benefits of cyber security is risk prevention. By identifying vulnerabilities early and strengthening defenses, businesses can avoid major security incidents. It also ensures compliance with data protection regulations and builds trust with customers and partners.

In conclusion, cyber security is not just a technical requirement—it is a business necessity. Investing in strong security practices helps safeguard valuable information, ensures smooth operations, and protects against ever-evolving cyber threats.`
},

{
id:3,
title:"Background Verification",
category:"HR",
desc:"Employee background verification process.",
image: img3,
content:`IIn today’s competitive and security-conscious environment, background verification has become a vital step for organizations before hiring employees or forming business partnerships. It ensures that the information provided by individuals is accurate, helping companies make informed and risk-free decisions.

Background verification involves checking key details such as identity, education, employment history, criminal records, and address verification. This process helps detect false information, fraudulent credentials, or any hidden risks that could impact the organization.

One of the major benefits of background verification is risk reduction. Hiring the wrong candidate can lead to financial losses, workplace misconduct, or damage to a company’s reputation. Proper verification ensures that only trustworthy and qualified individuals become part of the organization.

Additionally, background verification promotes a safe and secure work environment. It builds confidence among employees, clients, and stakeholders by ensuring transparency and accountability in hiring practices.

In conclusion, background verification is not just a formality—it is a critical step in safeguarding business integrity. By implementing a thorough verification process, organizations can enhance trust, reduce risks, and create a strong foundation for long-term success.`
},

{
id:4,
title:"Surveillance Services",
category:"Investigation",
desc:"Modern surveillance tools and tracking systems.",
image: img4,
content:`IIn an increasingly complex world, surveillance services play a critical role in maintaining safety, preventing crime, and gathering crucial evidence. Whether for corporate needs, personal matters, or legal cases, surveillance helps uncover the truth through careful observation and monitoring.

Surveillance services involve both physical and digital monitoring techniques. This includes CCTV monitoring, undercover operations, GPS tracking, and cyber surveillance. These methods are used to track suspicious activities, verify facts, and collect reliable evidence without alerting the subject.

One of the key advantages of surveillance is its ability to provide real-time insights. Businesses can monitor employee behavior, prevent internal theft, and ensure compliance with company policies. Individuals may use surveillance services for personal investigations such as matrimonial checks or missing person cases.

Moreover, surveillance plays a vital role in legal support. The evidence gathered through professional surveillance can be used in court proceedings, helping strengthen cases with factual proof.

In conclusion, surveillance services are essential for proactive security and informed decision-making. By using advanced tools and professional expertise, these services help detect risks early, ensure safety, and deliver accurate, actionable intelligence.`
},

{
id:5,
title:"Fraud Detection",
category:"Finance",
desc:"Identify and prevent financial fraud.",
image: img5,
content:`IIn today’s digital and business-driven world, fraud detection has become a critical function for organizations of all sizes. With increasing cases of financial fraud, cyber scams, and internal misconduct, businesses must adopt proactive strategies to identify and prevent fraudulent activities.

Fraud detection involves analyzing transactions, monitoring suspicious behavior, and identifying irregular patterns that may indicate deception. It can include financial fraud, identity theft, insurance fraud, employee embezzlement, and cyber fraud. Advanced tools such as data analytics, artificial intelligence, and forensic accounting are often used to detect anomalies and uncover hidden risks.

One of the primary benefits of fraud detection is early identification. Detecting fraud at an early stage helps minimize financial losses and prevents further damage to the organization. It also protects a company’s reputation and builds trust among clients, partners, and stakeholders.

Additionally, effective fraud detection ensures compliance with legal and regulatory standards. Organizations that actively monitor and prevent fraud are better equipped to avoid penalties, legal complications, and operational disruptions.

In conclusion, fraud detection is not just about catching wrongdoers—it’s about prevention and protection. By implementing strong monitoring systems and expert investigation techniques, businesses can secure their operations, reduce risks, and maintain long-term stability.`
},

{
id:6,
title:"Personal Investigation",
category:"Private",
desc:"Confidential personal investigation services.",
image: img6,
content:`IIn situations where clarity and truth are essential, personal investigation services provide individuals with reliable and confidential insights. Whether dealing with personal doubts, family matters, or sensitive relationships, these services help uncover facts with professionalism and discretion.

Personal investigations cover a wide range of cases, including matrimonial investigations, pre- and post-marriage verification, missing person searches, loyalty checks, and background verification. Investigators use techniques such as surveillance, digital tracking, and field inquiries to gather accurate information without compromising privacy.

One of the key advantages of personal investigation is confidentiality. Professional investigators ensure that all findings are handled discreetly, protecting the client’s identity and personal concerns. This allows individuals to make informed decisions without unnecessary exposure or risk.

Additionally, personal investigations provide factual evidence that can be useful in legal matters. Whether it’s a divorce case, custody dispute, or fraud concern, verified information strengthens decision-making and legal standing.

In conclusion, personal investigation services are about gaining clarity and peace of mind. By relying on experienced professionals, individuals can uncover the truth, resolve uncertainties, and take confident steps forward in their personal lives.`
}
];

function Blog(){

const [selected,setSelected]=useState(null);

return(
<>

    <Helmet>
    <title>Security & Investigation Insights | SNDF Blog</title>
    <link rel="canonical" href="https://www.sndfndf.com/blog" />
    <meta
    name="description"
    content="Explore latest insights, tips, and updates on security, surveillance, and investigation from SNDF experts."
    />
    </Helmet>

<div className="blog-container">

{/* HERO SHOW ONLY ON BLOG LIST */}
{!selected && (
<div className="blog-hero">
<h1>SNDF Resource Hub</h1>

<p>
  Trusted insights and modern solutions for evolving security challenges.
</p>

</div>
)}

{/* BLOG LIST */}
{!selected && (
<div className="blog-grid">

{blogs.map((item)=>(

<div className="blog-card" key={item.id}>

<img src={item.image} alt={item.title}/>

<div className="blog-content">

<span>{item.category}</span>

<h3>{item.title}</h3>

<p>{item.desc}</p>

<button onClick={()=>setSelected(item)}>
Read More →
</button>

</div>

</div>

))}

</div>
)}

{/* READ MORE DETAILS */}
{selected && (

<div className="blog-details">

<button
className="back-btn"
onClick={()=>setSelected(null)}
>
← Back
</button>

<img
src={selected.image}
alt={selected.title}
/>

<h1>{selected.title}</h1>

<p>{selected.content}</p>

</div>

)}

</div>

</>
);
}

export default Blog;