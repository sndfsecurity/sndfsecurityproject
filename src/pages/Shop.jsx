import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Shop.css";

import gps from "../assets/images/GPSTRACTOR.jpg";
import gsm from "../assets/images/minia82.jpg";
import go from "../assets/images/aijas.png"
import wire from "../assets/images/wirecamera2.png"
import vehicle from "../assets/images/vehiclegps.jpg"
import gg from "../assets/images/4ggps.png"
import camera from "../assets/images/SQ11.png"
import USB from "../assets/images/USBEndoscopeCamera.png"
import watch from "../assets/images/watch.png"
import power from "../assets/images/powerbank.png"
import mat from "../assets/images/matlogix.png"
import tag from "../assets/images/xtag.png"
import z from "../assets/images/zasco.png"
import voice from "../assets/images/voicerecorder.png"
import pen from "../assets/images/pencamera2.png"
import glass from "../assets/images/glasscamera.png"
import alcohol from "../assets/images/alcoholtester.png"
import police from "../assets/images/car.png"
import truck from "../assets/images/truck.png"
import army from "../assets/images/armytruck.png"
import Jeep from "../assets/images/jeep.png"
import toyt from "../assets/images/toytruck.png"
import spy from "../assets/images/spytruck.png"
import flight from "../assets/images/aroplane.png"
import green from "../assets/images/greencar.png"












const productsData = [
  {
    id: 1,
    name: "Advanced Gps dectector",
    price: "₹2,999",
    category: "GPS",
    img: gps,
  },
  {
    id: 2,
    name: "Mini A8 GPS Tracker",
    price: "₹4,999",
    category: "GPS",
    img: gsm,
  },
  {
    id: 3,
    name: "Ajjas Go Smart GPS Tracker",
    price: "₹7,999",
    category: "GPS",
    img: go,
  },
  {
    id: 4,
    name: "Smartphone Wire Camera",
    price: "₹3,499",
    category: "CAMERA",
    img: wire,
  },
  {
    id: 5,
    name: "Fleettrack GPS Vehicle Tracker",
    price: "₹12,999",
    category: "GPS",
    img: vehicle,
  },
{
    id: 6,
    name: "BOLDTRACK 4G Mini Vehicle GPS Tracker",
    price: "₹12,999",
    category: "GPS",
    img: gg,
  },
  {
    id: 7,
    name: "SQ11 Mini Camera",
    price: "₹12,999",
    category: "CAMERA",
    img: camera,
  },
  {
    id: 8,
    name: "USB Endoscope Camera",
    price: "₹12,999",
    category: "CAMREA",
    img: USB,
  },
  {
    id: 9,
    name: "Hidden Camera Wrist Watch",
    price: "₹12,999",
    category: "CAMERA",
    img: watch,
  },
  {
    id: 10,
    name: "Night Vision Power Bank Camera",
    price: "₹12,999",
    category: "CAMREA",
    img: power,
  },
  {
    id: 11,
    name: "MATLOGIX GF-07 Mini GPS Tracker Device",
    price: "₹12,999",
    category: "GPS",
    img: mat,
  },
  {
    id: 12,
    name: "X Tag Smart Bluetooth Tracker",
    price: "₹12,999",
    category: "GPS",
    img: tag,
  },
  {
    id: 13,
    name: "ZASCO GPS Vehicle Tracking Device (Anti-Theft GPS Tracker)",
    price: "₹12,999",
    category: "GPS",
    img: z,
  },
  {
    id: 14,
    name: "Digital Voice Recorder",
    price: "₹12,999",
    category: "TECH",
    img: voice,
  },
  {
    id: 15,
    name: "HD Camera Pen",
    price: "₹12,999",
    category: "CAMERA",
    img: pen,
  },
  {
    id: 16,
    name: "Hidden Camera Glasses ",
    price: "₹12,999",
    category: "CAMERA",
    img: glass,
  },{
    id: 17,
    name: "Digital breath alcohol tester ",
    price: "₹12,999",
    category: "TECH",
    img: alcohol,
  },{
    id: 18,
    name: "Spy Police Car ",
    price: "₹12,999",
    category: "SPY TOY",
    img: police,
  },{
    id: 19,
    name: "Spy Fire Truck with Hidden Camera ",
    price: "₹12,999",
    category: "SPY TOY",
    img: truck,
  },{
    id: 20,
    name: "Military Spy Missile Truck with Hidden Camera ",
    price: "₹12,999",
    category: "SPY TOY",
    img: army,
  },{
    id: 21,
    name: "Recon Spy Jeep with Hidden Camera ",
    price: "₹12,999",
    category: "SPY TOY",
    img: Jeep,
  },{
    id: 22,
    name: "Hidden Surveillance Toy Truck with Micro Cameras ",
    price: "₹12,999",
    category: "SPY TOY",
    img: toyt,
  },{
    id: 23,
    name: "Hidden Camera Spy Truck ",
    price: "₹12,999",
    category: "SPY TOY",
    img: spy,
  },{
    id: 24,
    name: "hidden spy camera plane",
    price: "₹12,999",
    category: "SPY TOY",
    img: flight,
  },{
    id: 25,
    name: "hidden spy camera car ",
    price: "₹12,999",
    category: "SPY TOY",
    img: green,
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
          <button onClick={() => setFilter("GPS")} className={filter === "GPS" ? "active" : ""}>GPS</button>
          <button onClick={() => setFilter("CAMERA")} className={filter === "CAMERA" ? "active" : ""}>CAMERA</button>
          <button onClick={() => setFilter("SECURITY")} className={filter === "SECURITY" ? "active" : ""}>SECURITY</button>
          <button onClick={() => setFilter("SPY TOY")} className={filter === "SPY TOY" ? "active" : ""}>SPY TOY</button>
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