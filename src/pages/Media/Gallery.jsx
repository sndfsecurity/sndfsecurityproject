import "./Gallery.css";
import { useState } from "react";

/* 🔥 IMAGES */
const baseImages = [
  { url: "https://images.unsplash.com/photo-1581090700227-4c4f50d1b5a3?auto=format&fit=crop&w=800&q=80", type: "training" },
  { url: "https://images.unsplash.com/photo-1603415526960-f7e0328e9b8d?auto=format&fit=crop&w=800&q=80", type: "event" },
  { url: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=80", type: "dept" },
  { url: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80", type: "training" },
  { url: "https://images.unsplash.com/photo-1581091870627-3a3d2c7b9f42?auto=format&fit=crop&w=800&q=80", type: "event" },
  { url: "https://images.unsplash.com/photo-1581093588401-16c8b0b6e2c5?auto=format&fit=crop&w=800&q=80", type: "dept" },
];

/* 🔁 FILL GRID */
const galleryData = Array.from({ length: 24 }).map((_, i) => ({
  ...baseImages[i % baseImages.length],
}));

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
        {["all", "NDF", "SNDF GUARD", "OWL","SPY"].map((f) => (
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