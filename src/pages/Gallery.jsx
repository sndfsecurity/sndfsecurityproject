import React, { useState } from "react";
import "./Gallery.css";
import { Helmet } from "react-helmet-async";

/* your existing imports same */
import inv1 from "../assets/images/guard1.webp";
import inv2 from "../assets/images/guard2.webp";
import inv3 from "../assets/images/guard3.webp";
import inv4 from "../assets/images/guard4.webp";
import inv5 from "../assets/images/guard5.webp";
import inv6 from "../assets/images/guard6.webp";
import inv7 from "../assets/images/guard7.webp";
import inv8 from "../assets/images/guard8.webp";
import inv9 from "../assets/images/guard9.webp";
import inv10 from "../assets/images/guard10.webp";

import sur11 from "../assets/images/owl1.webp";
import sur12 from "../assets/images/owl2.webp";
import sur13 from "../assets/images/owl3.webp";
import sur14 from "../assets/images/owl4.webp";
import sur15 from "../assets/images/owl5.webp";
import sur16 from "../assets/images/owl6.webp";
import sur17 from "../assets/images/owl7.webp";
import sur18 from "../assets/images/owl8.webp";
import sur19 from "../assets/images/owl9.webp";
import sur20 from "../assets/images/owl10.webp";

import cyber21 from "../assets/images/spy1.webp";
import cyber22 from "../assets/images/spy2.webp";
import cyber23 from "../assets/images/spy3.webp";
import cyber24 from "../assets/images/spy4.webp";
import cyber25 from "../assets/images/spy5.webp";
import cyber26 from "../assets/images/spy6.webp";
import cyber27 from "../assets/images/spy7.webp";
import cyber28 from "../assets/images/spy8.webp";
import cyber29 from "../assets/images/spy9.webp";
import cyber30 from "../assets/images/spy10.webp";

import cor31 from "../assets/images/dicc1.webp";
import cor32 from "../assets/images/dicc2.webp";
import cor33 from "../assets/images/dicc3.webp";
import cor34 from "../assets/images/dicc4.webp";
import cor35 from "../assets/images/dicc5.webp";
import cor36 from "../assets/images/dicc6.webp";
import cor37 from "../assets/images/dicc7.webp";
import cor38 from "../assets/images/dicc8.webp";
import cor39 from "../assets/images/dicc9.webp";
import cor40 from "../assets/images/dicc10.webp";

const departments=["All","NDF","SNDF GUARD","OWL","SPY","DIC"];

const allImages=[
{id:1,src:inv1,category:"SNDF GUARD"},
{id:2,src:inv2,category:"SNDF GUARD"},
{id:3,src:inv3,category:"SNDF GUARD"},
{id:4,src:inv4,category:"SNDF GUARD"},
{id:5,src:inv5,category:"SNDF GUARD"},
{id:6,src:inv6,category:"SNDF GUARD"},
{id:7,src:inv7,category:"SNDF GUARD"},
{id:8,src:inv8,category:"SNDF GUARD"},
{id:9,src:inv9,category:"SNDF GUARD"},
{id:10,src:inv10,category:"SNDF GUARD"},

{id:11,src:sur11,category:"OWL"},
{id:12,src:sur12,category:"OWL"},
{id:13,src:sur13,category:"OWL"},
{id:14,src:sur14,category:"OWL"},
{id:15,src:sur15,category:"OWL"},
{id:16,src:sur16,category:"OWL"},
{id:17,src:sur17,category:"OWL"},
{id:18,src:sur18,category:"OWL"},
{id:19,src:sur19,category:"OWL"},
{id:20,src:sur20,category:"OWL"},

{id:21,src:cyber21,category:"SPY"},
{id:22,src:cyber22,category:"SPY"},
{id:23,src:cyber23,category:"SPY"},
{id:24,src:cyber24,category:"SPY"},
{id:25,src:cyber25,category:"SPY"},
{id:26,src:cyber26,category:"SPY"},
{id:27,src:cyber27,category:"SPY"},
{id:28,src:cyber28,category:"SPY"},
{id:29,src:cyber29,category:"SPY"},
{id:30,src:cyber30,category:"SPY"},

{id:31,src:cor31,category:"DIC"},
{id:32,src:cor32,category:"DIC"},
{id:33,src:cor33,category:"DIC"},
{id:34,src:cor34,category:"DIC"},
{id:35,src:cor35,category:"DIC"},
{id:36,src:cor36,category:"DIC"},
{id:37,src:cor37,category:"DIC"},
{id:38,src:cor38,category:"DIC"},
{id:39,src:cor39,category:"DIC"},
{id:40,src:cor40,category:"DIC"},
];

export default function Gallery(){

const [activeDept,setActiveDept]=useState("All");
const [currentIndex,setCurrentIndex]=useState(null);

const filteredImages=
activeDept==="All"
? allImages
: allImages.filter((img)=>img.category===activeDept).slice(0,10);

return(

 <main>

    <Helmet>
      <title>SNDF Media Gallery | Department & Work Visuals</title>
      <link rel="canonical" href="https://www.sndfndf.com/media/gallery" />
      <meta name="description" content="Explore SNDF's media gallery showcasing visuals from our departments, including SNDF Guard, OWL Surveillance, Spy Defence, and DIC training." />
    </Helmet>  

    
<div className="gallery-page">

<div className="gallery-hero">
<h1>Media Gallery</h1>
<p>Explore our departments and work visuals</p>
</div>

<div className="gallery-tabs">
{departments.map((dept)=>(
<button
key={dept}
onClick={()=>setActiveDept(dept)}
className={`tab-btn ${activeDept===dept ? "active":""}`}
>
{dept}
</button>
))}
</div>

<div className="gallery-grid">
{filteredImages.map((img,index)=>(
<div
className="gallery-card"
key={img.id}
onClick={()=>setCurrentIndex(index)}
>
<img src={img.src} alt="" />
</div>
))}
</div>

{currentIndex!==null &&(
<div className="lightbox">

<span
className="close-btn"
onClick={()=>setCurrentIndex(null)}
>
✕
</span>

<span
className="nav-btn prev"
onClick={()=>setCurrentIndex(
currentIndex===0
? filteredImages.length-1
: currentIndex-1
)}
>
&#10094;
</span>

<img
src={filteredImages[currentIndex].src}
alt=""
/>

<span
className="nav-btn next"
onClick={()=>setCurrentIndex(
currentIndex===filteredImages.length-1
? 0
: currentIndex+1
)}
>
&#10095;
</span>

</div>
)}

</div>

</main> 
);
} 


