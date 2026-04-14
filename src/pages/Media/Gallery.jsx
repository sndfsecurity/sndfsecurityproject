import "./Gallery.css";
import { useState } from "react";

/* 🔥 IMAGES (50 TOTAL) */
const galleryData = [
  // 🔴 NDF (10)
  ...Array.from({ length: 10 }).map((_, i) => ({
    url: `https://source.unsplash.com/800x600/?security,guard&sig=ndf${i}`,
    type: "NDF",
  })),

  // 🔵 SNDF GUARD (10)
  ...Array.from({ length: 10 }).map((_, i) => ({
    url: `https://source.unsplash.com/800x600/?security,personnel&sig=sndf${i}`,
    type: "SNDF GUARD",
  })),

  // 🟢 OWL (10)
  ...Array.from({ length: 10 }).map((_, i) => ({
    url: `https://source.unsplash.com/800x600/?cctv,monitoring&sig=owl${i}`,
    type: "OWL",
  })),

  // 🟡 SPY (10)
  ...Array.from({ length: 10 }).map((_, i) => ({
    url: `https://source.unsplash.com/800x600/?spy,detective&sig=spy${i}`,
    type: "SPY",
  })),

  // 🟣 DIC (10)
  ...Array.from({ length: 10 }).map((_, i) => ({
    url: `https://source.unsplash.com/800x600/?investigation,crime&sig=dic${i}`,
    type: "DIC",
  })),
];

function Gallery() {
  const [filter, setFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [loaded, setLoaded] = useState({});

  const filtered =
    filter === "all"
      ? galleryData
      : galleryData.filter((img) => img.type === filter);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = () =>
    setLightboxIndex((prev) => (prev + 1) % filtered.length);

  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev === 0 ? filtered.length - 1 : prev - 1
    );

  return (
    <div className="ultra-gallery">

      {/* HERO */}
      <div className="ultra-hero">
        <h1>Our Gallery</h1>
        <p>Premium Visual Showcase</p>
      </div>

      {/* FILTER */}
      <div className="filter-bar">
        {["all", "NDF", "SNDF GUARD", "OWL", "SPY", "DIC"].map((f) => (
          <button
            key={f}
            className={filter === f ? "active" : ""}
            onClick={() => setFilter(f)}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      {/* 🔥 MASONRY GRID */}
      <div className="masonry">
        {filtered.map((img, i) => (
          <div className="masonry-item" key={i}>
            
            {!loaded[i] && <div className="skeleton"></div>}

            <img
              src={img.url}
              alt=""
              onLoad={() => setLoaded((prev) => ({ ...prev, [i]: true }))}
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/400x300?text=SNDF+Gallery";
              }}
              onClick={() => openLightbox(i)}
            />

            <div className="overlay">
              <span>{img.type}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 LIGHTBOX */}
      {lightboxIndex !== null && (
        <div className="lightbox">
          <span className="close" onClick={closeLightbox}>×</span>
          <span className="prev" onClick={prevImage}>‹</span>
          
          <img src={filtered[lightboxIndex].url} alt="" />
          
          <span className="next" onClick={nextImage}>›</span>
        </div>
      )}
    </div>
  );
}

export default Gallery;