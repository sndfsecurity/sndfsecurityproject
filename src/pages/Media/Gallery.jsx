import React, { useState } from "react";
import "./Gallery.css";

// NDF Images
import ndf1 from ".src/assets/images/ndf (1).webp";
// import ndf2 from "./assets/ndf/img2.jpg";
// import ndf3 from "./assets/ndf/img3.jpg";
// import ndf4 from "./assets/ndf/img4.jpg";
// import ndf5 from "./assets/ndf/img5.jpg";
// import ndf6 from "./assets/ndf/img6.jpg";
// import ndf7 from "./assets/ndf/img7.jpg";
// import ndf8 from "./assets/ndf/img8.jpg";
// import ndf9 from "./assets/ndf/img9.jpg";
// import ndf10 from "./assets/ndf/img10.jpg";

// SNDF Images (same pattern - blank path replace later)
// import sndf1 from "./assets/sndf/img1.jpg";
// import sndf2 from "./assets/sndf/img2.jpg";
// import sndf3 from "./assets/sndf/img3.jpg";
// import sndf4 from "./assets/sndf/img4.jpg";
// import sndf5 from "./assets/sndf/img5.jpg";
// import sndf6 from "./assets/sndf/img6.jpg";
// import sndf7 from "./assets/sndf/img7.jpg";
// import sndf8 from "./assets/sndf/img8.jpg";
// import sndf9 from "./assets/sndf/img9.jpg";
// import sndf10 from "./assets/sndf/img10.jpg";

// // OWL
// import owl1 from "./assets/owl/img1.jpg";
// import owl2 from "./assets/owl/img2.jpg";
// import owl3 from "./assets/owl/img3.jpg";
// import owl4 from "./assets/owl/img4.jpg";
// import owl5 from "./assets/owl/img5.jpg";
// import owl6 from "./assets/owl/img6.jpg";
// import owl7 from "./assets/owl/img7.jpg";
// import owl8 from "./assets/owl/img8.jpg";
// import owl9 from "./assets/owl/img9.jpg";
// import owl10 from "./assets/owl/img10.jpg";

// // SPY
// import spy1 from "./assets/spy/img1.jpg";
// import spy2 from "./assets/spy/img2.jpg";
// import spy3 from "./assets/spy/img3.jpg";
// import spy4 from "./assets/spy/img4.jpg";
// import spy5 from "./assets/spy/img5.jpg";
// import spy6 from "./assets/spy/img6.jpg";
// import spy7 from "./assets/spy/img7.jpg";
// import spy8 from "./assets/spy/img8.jpg";
// import spy9 from "./assets/spy/img9.jpg";
// import spy10 from "./assets/spy/img10.jpg";

// // DIC
// import dic1 from "./assets/dic/img1.jpg";
// import dic2 from "./assets/dic/img2.jpg";
// import dic3 from "./assets/dic/img3.jpg";
// import dic4 from "./assets/dic/img4.jpg";
// import dic5 from "./assets/dic/img5.jpg";
// import dic6 from "./assets/dic/img6.jpg";
// import dic7 from "./assets/dic/img7.jpg";
// import dic8 from "./assets/dic/img8.jpg";
// import dic9 from "./assets/dic/img9.jpg";
// import dic10 from "./assets/dic/img10.jpg";

function Gallery() {
  const [activeTab, setActiveTab] = useState("ALL");

  const data = {
    NDF: [ndf1, ndf2, ndf3, ndf4, ndf5, ndf6, ndf7, ndf8, ndf9, ndf10],
    SNDF: [sndf1, sndf2, sndf3, sndf4, sndf5, sndf6, sndf7, sndf8, sndf9, sndf10],
    OWL: [owl1, owl2, owl3, owl4, owl5, owl6, owl7, owl8, owl9, owl10],
    SPY: [spy1, spy2, spy3, spy4, spy5, spy6, spy7, spy8, spy9, spy10],
    DIC: [dic1, dic2, dic3, dic4, dic5, dic6, dic7, dic8, dic9, dic10],
  };

  const getImages = () => {
    if (activeTab === "ALL") {
      return Object.values(data).flat();
    }
    return data[activeTab];
  };

  return (
    <div className="container">
      <h1>Our Gallery</h1>
      <p>Premium Visual Showcase</p>

      {/* Buttons */}
      <div className="buttons">
        {["ALL", "NDF", "SNDF", "OWL", "SPY", "DIC"].map((item) => (
          <button
            key={item}
            className={activeTab === item ? "active" : ""}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Images */}
      <div className="grid">
        {getImages().map((img, index) => (
          <div key={index} className="card">
            <img src={img} alt="gallery" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;