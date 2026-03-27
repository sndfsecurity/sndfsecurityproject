import React from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/products";
import "./Shop.css";

const Shop = () => {
  const navigate = useNavigate();

  return (
    <div className="shop-page">

      <div className="shop-header">
        <h1>Our Products</h1>
        <p>Security & Surveillance Gadgets</p>
      </div>

      <div className="shop-grid">
        {products.map((p) => (
          <div className="shop-card" key={p.id}>
            <div className="shop-img-box">
              <img src={p.img} alt={p.name} />
            </div>

            <div className="shop-info">
              <h3>{p.name}</h3>
              <p className="price">{p.price}</p>

              <button onClick={() => navigate(`/product/${p.id}`)}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Shop;