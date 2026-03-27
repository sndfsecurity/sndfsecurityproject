import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // ✅ add useNavigate
import products from "../data/products";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // ✅ important

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h2>Product Not Found ❌</h2>
      </div>
    );
  }

  return (
    <div className="pd-page">

      {/* 🔙 BACK BUTTON */}
      <button className="back-btn" onClick={() => navigate("/shop")}>
        ← Back to Shop
      </button>

      <div className="pd-container">

        <div className="pd-image">
          <img src={product.img} alt={product.name} />
        </div>

        <div className="pd-info">
          <h1>{product.name}</h1>
          <h2>{product.price}</h2>
          <p>{product.desc}</p>

          <button>Buy Now</button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;