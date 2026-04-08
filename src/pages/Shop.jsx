import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Shop.css";

const productsData = [
  {
    id: 1,
    name: "Advanced Gps dectector",
    price: "₹2,999",
    category: "SPY",
    img: "src/assets/images/GPSTRACTOR.jpg"
  },
  {
    id: 2,
    name: "Mini A8 GPS Tracker",
    price: "₹4,999",
    category: "SECURITY",
    img: "src/assets/images/minia82.jpg"
  },
  {
    id: 3,
    name: "Ajjas Go Smart GPS Tracker",
    price: "₹7,999",
    category: "TECH",
    img: "src/assets/images/aijas.png"
  },
  {
    id: 4,
    name: "Smartphone Wire Camera",
    price: "₹3,499",
    category: "COMM",
    img: "src/assets/images/wirecamera2.png"
  },
  {
    id: 5,
    name: "Fleettrack GPS Vehicle Tracker",
    price: "₹12,999",
    category: "TECH",
    img: "src/assets/images/vehiclegps.jpg"
  },
{
    id: 6,
    name: "BOLDTRACK 4G Mini Vehicle GPS Tracker",
    price: "₹12,999",
    category: "TECH",
    img: "src/assets/images/4ggps.png"
  },
  {
    id: 7,
    name: "SQ11 Mini Camera",
    price: "₹12,999",
    category: "TECH",
    img: "src/assets/images/SQ11.png"
  },
  {
    id: 8,
    name: "USB Endoscope Camera",
    price: "₹12,999",
    category: "TECH",
    img: "src/assets/images/USBEndoscopeCamera.png"
  },
  {
    id: 9,
    name: "Hidden Camera Wrist Watch",
    price: "₹12,999",
    category: "TECH",
    img: "src/assets/images/watch.png"
  },
  {
    id: 10,
    name: "Night Vision Power Bank Camera",
    price: "₹12,999",
    category: "TECH",
    img: "src/assets/images/powerbank.png"
  },
  {
    id: 11,
    name: "MATLOGIX GF-07 Mini GPS Tracker Device",
    price: "₹12,999",
    category: "TECH",
    img: "src/assets/images/matlogix.png"
  },
  {
    id: 12,
    name: "X Tag Smart Bluetooth Tracker",
    price: "₹12,999",
    category: "TECH",
    img: "src/assets/images/xtag.png"
  },
  {
    id: 13,
    name: "ZASCO GPS Vehicle Tracking Device (Anti-Theft GPS Tracker)",
    price: "₹12,999",
    category: "TECH",
    img: "src/assets/images/zasco.png"
  },
  {
    id: 14,
    name: "Digital Voice Recorder",
    price: "₹12,999",
    category: "TECH",
    img: "src/assets/images/voicerecorder.png"
  },
  {
    id: 15,
    name: "HD Camera Pen",
    price: "₹12,999",
    category: "TECH",
    img: "src/assets/images/pencamera2.png"
  },
  {
    id: 16,
    name: "Hidden Camera Glasses ",
    price: "₹12,999",
    category: "TECH",
    img: "src/assets/images/glasscamera.png"
  },{
    id: 17,
    name: "Digital breath alcohol tester ",
    price: "₹12,999",
    category: "TECH",
    img: "src/assets/images/alcoholtester.png"
  },{
    id: 18,
    name: "Spy Police Car ",
    price: "₹12,999",
    category: "SPY TOY",
    img: "src/assets/images/car.png"
  },{
    id: 19,
    name: "Spy Fire Truck with Hidden Camera ",
    price: "₹12,999",
    category: "SPY TOY",
    img: "src/assets/images/truck.png"
  },{
    id: 20,
    name: "Military Spy Missile Truck with Hidden Camera ",
    price: "₹12,999",
    category: "SPY TOY",
    img: "src/assets/images/armytruck.png"
  },{
    id: 21,
    name: "Recon Spy Jeep with Hidden Camera ",
    price: "₹12,999",
    category: "SPY TOY",
    img: "src/assets/images/jeep.png"
  },{
    id: 22,
    name: "Hidden Surveillance Toy Truck with Micro Cameras ",
    price: "₹12,999",
    category: "SPY TOY",
    img: "src/assets/images/toytruck.png"
  },{
    id: 23,
    name: "Hidden Camera Spy Truck ",
    price: "₹12,999",
    category: "SPY TOY",
    img: "src/assets/images/spytruck.png"
  },{
    id: 24,
    name: "hidden spy camera plane",
    price: "₹12,999",
    category: "SPY TOY",
    img: "src/assets/images/aroplane.png"
  },{
    id: 25,
    name: "hidden spy camera car ",
    price: "₹12,999",
    category: "SPY TOY",
    img: "src/assets/images/greencar.png"
  },

];


// depatmentwise products //
function Shop() {

  const navigate = useNavigate();
  const [filter, setFilter] = useState("ALL");

  const filteredProducts =
    filter === "ALL"
      ? productsData
      : productsData.filter((p) => p.category === filter);

  return (
    <div className="shop-page">

      <div className="shop-header">
        <h1>Investigation Equipment Store</h1>
        <p>Professional Tools for Surveillance & Security Operations</p>

        <div className="filter-buttons">
          <button onClick={() => setFilter("ALL")} className={filter === "ALL" ? "active" : ""}>ALL</button>
          <button onClick={() => setFilter("SPY")} className={filter === "GPS" ? "active" : ""}>SPY</button>
          <button onClick={() => setFilter("TECH")} className={filter === "TECH" ? "active" : ""}>TECH</button>
          <button onClick={() => setFilter("SECURITY")} className={filter === "SECURITY" ? "active" : ""}>SECURITY</button>
          <button onClick={() => setFilter("COMM")} className={filter === "SPY TOY" ? "active" : ""}>COMM</button>
        </div>
      </div>

      <div className="product-grid">
        {filteredProducts.map((item) => (
          <div className="product-card" key={item.id}>

            <img src={item.img} alt={item.name} />

            <div className="product-info">
              <h3>{item.name}</h3>
              <p>{item.price}</p>

              <button
                className="buy-btn"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                Buy Now
              </button>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Shop;