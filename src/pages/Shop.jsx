import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Shop.css";
import { Helmet } from "react-helmet-async";

import gps from "../assets/images/GPSTRACTOR.webp";
import gsm from "../assets/images/minia82.webp";
import go from "../assets/images/aijas.webp"
import wire from "../assets/images/wirecamera2.webp"
import vehicle from "../assets/images/vehiclegps.webp"
import gg from "../assets/images/4ggps.webp"
import camera from "../assets/images/SQ11.webp"
import USB from "../assets/images/USBEndoscopeCamera.webp"
import watch from "../assets/images/watch.webp"
import power from "../assets/images/powerbank.webp"
import mat from "../assets/images/matlogix.webp"
import tag from "../assets/images/xtag.webp"
import z from "../assets/images/zasco.webp"
import voice from "../assets/images/voicerecorder.webp"
import pen from "../assets/images/pencamera2.webp"
import glass from "../assets/images/glasscamera.webp"
import alcohol from "../assets/images/alcoholtester.webp"
import police from "../assets/images/car.webp"
import truck from "../assets/images/truck.webp"
import army from "../assets/images/armytruck.webp"
import Jeep from "../assets/images/jeep.webp"
import toyt from "../assets/images/toytruck.webp"
import spy from "../assets/images/spytruck.webp"
import flight from "../assets/images/aroplane.webp"
import green from "../assets/images/greencar.webp"
import LegalNotice from "../components/LegalNotice";



const productsData = [
  {
    id: 1,
    name: "Advanced Gps dectector",
    price: "₹8,000",
    category: "GPS",
    img: gps,
  },
  {
    id: 2,
    name: "Mini A8 GPS Tracker",
    price: "₹5,999",
    category: "GPS",
    img: gsm,
  },
  {
    id: 3,
    name: "Ajjas Go Smart GPS Tracker",
    price: "₹5,999",
    category: "GPS",
    img: go,
  },
  {
    id: 4,
    name: "Smartphone Wire Camera",
    price: "₹4,499",
    category: "CAMERA",
    img: wire,
  },
  {
    id: 5,
    name: "Fleettrack GPS Vehicle Tracker",
    price: "₹6,999",
    category: "GPS",
    img: vehicle,
  },
{
    id: 6,
    name: "BOLDTRACK 4G Mini Vehicle GPS Tracker",
    price: "₹9,999",
    category: "GPS",
    img: gg,
  },
  {
    id: 7,
    name: "SQ11 Mini Camera",
    price: "₹10,999",
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
    price: "₹15,999",
    category: "CAMERA",
    img: watch,
  },
  {
    id: 10,
    name: "Night Vision Power Bank Camera",
    price: "₹18,999",
    category: "CAMREA",
    img: power,
  },
  {
    id: 11,
    name: "MATLOGIX GF-07 Mini GPS Tracker Device",
    price: "₹11,999",
    category: "GPS",
    img: mat,
  },
  {
    id: 12,
    name: "X Tag Smart Bluetooth Tracker",
    price: "₹11,000",
    category: "GPS",
    img: tag,
  },
  {
    id: 13,
    name: "ZASCO GPS Vehicle Tracking Device (Anti-Theft GPS Tracker)",
    price: "₹16,999",
    category: "GPS",
    img: z,
  },
  {
    id: 14,
    name: "Digital Voice Recorder",
    price: "₹34,999",
    category: "TECH",
    img: voice,
  },
  {
    id: 15,
    name: "HD Camera Pen",
    price: "₹12,000",
    category: "CAMERA",
    img: pen,
  },
  {
    id: 16,
    name: "Hidden Camera Glasses ",
    price: "₹22,999",
    category: "CAMERA",
    img: glass,
  },{
    id: 17,
    name: "Digital breath alcohol tester ",
    price: "₹23,899",
    category: "TECH",
    img: alcohol,
  },{
    id: 18,
    name: "Spy Police Car ",
    price: "₹13,999",
    category: "SPY TOY",
    img: police,
  },{
    id: 19,
    name: "Spy Fire Truck with Hidden Camera ",
    price: "₹17,900",
    category: "SPY TOY",
    img: truck,
  },{
    id: 20,
    name: "Military Spy Missile Truck with Hidden Camera ",
    price: "₹16,999",
    category: "SPY TOY",
    img: army,
  },{
    id: 21,
    name: "Recon Spy Jeep with Hidden Camera ",
    price: "₹9,999",
    category: "SPY TOY",
    img: Jeep,
  },{
    id: 22,
    name: "Hidden Surveillance Toy Truck with Micro Cameras ",
    price: "₹17,999",
    category: "SPY TOY",
    img: toyt,
  },{
    id: 23,
    name: "Hidden Camera Spy Truck ",
    price: "₹14,999",
    category: "SPY TOY",
    img: spy,
  },{
    id: 24,
    name: "hidden spy camera plane",
    price: "₹24,999",
    category: "SPY TOY",
    img: flight,
  },{
    id: 25,
    name: "hidden spy camera car ",
    price: "₹8,999",
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

    <main>

    <Helmet>
      <title>Security Products | SNDF Shop</title>
      <link rel="canonical" href="https://www.sndfndf.com/shop" />
      <meta name="description" content="Browse security tools and products from SNDF. Reliable solutions for surveillance, safety, and protection needs." />
    </Helmet>


    <div className="shop-page">


   <LegalNotice />

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

    </main>
  );
}

export default Shop;