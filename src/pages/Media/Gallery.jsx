import React, { useState } from "react";
import "./Gallery.css";

/* 🔴 NDF Images */
import ndf1 from "../assets/gallery/ndf/ndf1.jpg";
import ndf2 from "../assets/gallery/ndf/ndf2.jpg";
import ndf3 from "../assets/gallery/ndf/ndf3.jpg";
import ndf4 from "../assets/gallery/ndf/ndf4.jpg";
import ndf5 from "../assets/gallery/ndf/ndf5.jpg";
import ndf6 from "../assets/gallery/ndf/ndf6.jpg";
import ndf7 from "../assets/gallery/ndf/ndf7.jpg";
import ndf8 from "../assets/gallery/ndf/ndf8.jpg";
import ndf9 from "../assets/gallery/ndf/ndf9.jpg";
import ndf10 from "../assets/gallery/ndf/ndf10.jpg";

/* 🔵 SNDF Guard */
import sndf1 from "../assets/gallery/sndf/sndf1.jpg";
import sndf2 from "../assets/gallery/sndf/sndf2.jpg";
import sndf3 from "../assets/gallery/sndf/sndf3.jpg";
import sndf4 from "../assets/gallery/sndf/sndf4.jpg";
import sndf5 from "../assets/gallery/sndf/sndf5.jpg";
import sndf6 from "../assets/gallery/sndf/sndf6.jpg";
import sndf7 from "../assets/gallery/sndf/sndf7.jpg";
import sndf8 from "../assets/gallery/sndf/sndf8.jpg";
import sndf9 from "../assets/gallery/sndf/sndf9.jpg";
import sndf10 from "../assets/gallery/sndf/sndf10.jpg";

/* 🟢 OWL */
import owl1 from "../assets/gallery/owl/owl1.jpg";
import owl2 from "../assets/gallery/owl/owl2.jpg";
import owl3 from "../assets/gallery/owl/owl3.jpg";
import owl4 from "../assets/gallery/owl/owl4.jpg";
import owl5 from "../assets/gallery/owl/owl5.jpg";
import owl6 from "../assets/gallery/owl/owl6.jpg";
import owl7 from "../assets/gallery/owl/owl7.jpg";
import owl8 from "../assets/gallery/owl/owl8.jpg";
import owl9 from "../assets/gallery/owl/owl9.jpg";
import owl10 from "../assets/gallery/owl/owl10.jpg";

/* 🟡 SPY */
import spy1 from "../assets/gallery/spy/spy1.jpg";
import spy2 from "../assets/gallery/spy/spy2.jpg";
import spy3 from "../assets/gallery/spy/spy3.jpg";
import spy4 from "../assets/gallery/spy/spy4.jpg";
import spy5 from "../assets/gallery/spy/spy5.jpg";
import spy6 from "../assets/gallery/spy/spy6.jpg";
import spy7 from "../assets/gallery/spy/spy7.jpg";
import spy8 from "../assets/gallery/spy/spy8.jpg";
import spy9 from "../assets/gallery/spy/spy9.jpg";
import spy10 from "../assets/gallery/spy/spy10.jpg";

/* 🟣 DIC */
import dic1 from "../assets/gallery/dic/dic1.jpg";
import dic2 from "../assets/gallery/dic/dic2.jpg";
import dic3 from "../assets/gallery/dic/dic3.jpg";
import dic4 from "../assets/gallery/dic/dic4.jpg";
import dic5 from "../assets/gallery/dic/dic5.jpg";
import dic6 from "../assets/gallery/dic/dic6.jpg";
import dic7 from "../assets/gallery/dic/dic7.jpg";
import dic8 from "../assets/gallery/dic/dic8.jpg";
import dic9 from "../assets/gallery/dic/dic9.jpg";
import dic10 from "../assets/gallery/dic/dic10.jpg";

const galleryData = {
  ndf: [ndf1, ndf2, ndf3, ndf4, ndf5, ndf6, ndf7, ndf8, ndf9, ndf10],
  sndf: [sndf1, sndf2, sndf3, sndf4, sndf5, sndf6, sndf7, sndf8, sndf9, sndf10],
  owl: [owl1, owl2, owl3, owl4, owl5, owl6, owl7, owl8, owl9, owl10],
  spy: [spy1, spy2, spy3, spy4, spy5, spy6, spy7, spy8, spy9, spy10],
  dic: [dic1, dic2, dic3, dic4, dic5, dic6, dic7, dic8, dic9, dic10],
};

export default function Gallery() {
  const [active, setActive] = useState("all");

  const getImages = () => {
    if (active === "all") {
      return Object.values(galleryData).flat();
    }
    return galleryData[active];
  };

  return (
    <div className="gallery-container">
      <h2>Our Gallery sndf</h2>

      {/* 🔘 Buttons */}
      <div className="filters">
        {["all", "ndf", "sndf", "owl", "spy", "dic"].map((cat) => (
          <button
            key={cat}
            className={active === cat ? "active" : ""}
            onClick={() => setActive(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* 🖼 Images */}
      <div className="gallery-grid">
        {getImages().map((img, index) => (
          <div className="card" key={index}>
            <img src={img} alt="gallery" />
          </div>
        ))}
      </div>
    </div>
  );
}