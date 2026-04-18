import React, { useState } from "react";
import "./Blog.css";
import { Helmet } from "react-helmet-async";

const blogs = [
{
id:1,
title:"Corporate Investigation",
category:"Investigation",
desc:"Protecting Your Business from Hidden Risks.",
image:"src/assets/images/corporate investigation.jpg",
content:`
Corporate investigation is a crucial process that helps businesses identify fraud, misconduct, and hidden risks within an organization.

Through professional investigation methods such as employee verification, financial audits, and surveillance, businesses can detect suspicious activities early.

Modern corporate investigations use advanced tools like digital forensics, data analysis, and monitoring systems to gather accurate and reliable information.

In conclusion, corporate investigation plays a vital role in protecting businesses from risks and ensuring long-term success.
`
},

{
id:2,
title:"Cyber Security",
category:"Security",
desc:"Protecting company data from cyber threats.",
image:"https://images.unsplash.com/photo-1518770660439-4636190af475",
content:`
Cyber security plays a vital role in protecting company data from growing digital threats.

By using advanced tools like firewalls, encryption, and real-time monitoring, organizations can prevent unauthorized access and reduce risks.
`
},

{
id:3,
title:"Background Verification",
category:"HR",
desc:"Employee background verification process.",
image:"https://images.unsplash.com/photo-1521791136064-7986c2920216",
content:`
Background verification helps organizations ensure the credibility and reliability of employees before hiring.

This process includes checking criminal records, address verification, employment history, and identity validation.
`
},

{
id:4,
title:"Surveillance Services",
category:"Investigation",
desc:"Modern surveillance tools and tracking systems.",
image:"https://images.unsplash.com/photo-1502920917128-1aa500764cbd",
content:`
Surveillance services play a key role in modern investigations by tracking activities and gathering real-time evidence.
`
},

{
id:5,
title:"Fraud Detection",
category:"Finance",
desc:"Identify and prevent financial fraud.",
image:"https://images.unsplash.com/photo-1554224155-6726b3ff858f",
content:`
Fraud detection helps businesses identify and prevent financial crimes that can impact operations and trust.
`
},

{
id:6,
title:"Personal Investigation",
category:"Private",
desc:"Confidential personal investigation services.",
image:"https://images.unsplash.com/photo-1492724441997-5dc865305da7",
content:`
Personal investigation services provide confidential solutions for individual concerns such as background checks.
`
}

];

function Blog(){

const [selected,setSelected]=useState(null);

return(
<>

<Helmet>
<title>Security & Investigation Insights | SNDF Blog</title>
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