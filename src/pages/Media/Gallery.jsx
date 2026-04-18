import React, { useState } from "react";
import "./Gallery.css";

const departments = [
  "All",
  "NDF",
  "SNDF GUARD",
  "OWL",
  "SPY",
  "DIC",
];

const allImages = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/600/400?random=${i + 1}`,
  category: departments[(i % 5) + 1],
}));

const Gallery = () => {
  const [activeDept, setActiveDept] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(null);

  const filteredImages =
    activeDept === "All"
      ? allImages
      : allImages
          .filter((img) => img.category === activeDept)
          .slice(0, 10);

  const openImage = (index) => {
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setCurrentIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="gallery-page">

      {/* HERO */}
      <div className="gallery-hero">
        <h1>SNDF Gallery</h1>
        <p>Explore our departments and work visuals</p>
      </div>

      {/* TABS */}
      <div className="gallery-tabs">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => setActiveDept(dept)}
            className={`tab-btn ${activeDept === dept ? "active" : ""}`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="gallery-grid">
        {filteredImages.map((img, index) => (
          <div
            className="gallery-card"
            key={img.id}
            onClick={() => openImage(index)}
          >
            <img src={img.src} alt="gallery" />
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {currentIndex !== null && (
        <div className="lightbox" onClick={closeImage}>
          
          {/* CLOSE */}
          <span className="close-btn">&times;</span>

          {/* PREV */}
          <span className="nav-btn prev" onClick={prevImage}>
            &#10094;
          </span>

          {/* IMAGE */}
          <img
            src={filteredImages[currentIndex].src}
            alt="preview"
          />

          {/* NEXT */}
          <span className="nav-btn next" onClick={nextImage}>
            &#10095;
          </span>
        </div>
      )}
    </div>
  );
};

export default Gallery;