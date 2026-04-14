import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import gps from "../assets/images/gps.png";
import gsm from "../assets/images/minia83.png";
import go from "../assets/images/gosmart.png"
import wire from "../assets/images/wirecamrea.png"
import vehicle from "../assets/images/vehiclegps2.png"
import gg from "../assets/images/4ggps2.png"
import camera from "../assets/images/SQ112.png"
import USB from "../assets/images/USBEndoscopeCamera.png"
import watch from "../assets/images/watch2.png"
import power from "../assets/images/powerbank.png"
import mat from "../assets/images/matlogix.png"
import tag from "../assets/images/xtag2.png"
import z from "../assets/images/zasco.png"
import voice from "../assets/images/voicerecorder2.png"
import pen from "../assets/images/pencamera.png"
import glass from "../assets/images/glasscamera.png"
import alcohol from "../assets/images/alcoholtester2.png"
import police from "../assets/images/car2.png"
import truck from "../assets/images/truck2.png"
import army from "../assets/images/armytruck2.png"
import Jeep from "../assets/images/jeep.png"
import toyt from "../assets/images/toytruck.png"
import spy from "../assets/images/spytruck2.png"
import flight from "../assets/images/aroplane2.png"
import green from "../assets/images/greencar2.png"






import { ImPointRight } from "react-icons/im";

function ProductDetails() {

  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  // ✅ FULL DYNAMIC PRODUCTS
  const productsData = [
    {
      id: 1,
      name: "ADVANCED GPS DETECTOR",
      price: "₹2,999",
      img: gps,
      desc: "Detect hidden GPS trackers and spy devices with high accuracy.Detect hidden GPS trackers and spy devices with high accuracy. This advanced GPS detector is designed for personal safety, anti-surveillance protection, and professional security use. It helps you locate hidden tracking devices, bugs, and wireless signals quickly and effectively.",
      features: [
        
        "GPS Tracker Detection",
        "Anti Spy Protection",
        "Wide Signal Coverage",
        "Portable & Lightweight"
      ],
      specs: [
        "Battery: 6-8 Hours",
        "Range: 10–15m",
        "Frequency: 1MHz – 6.5GHz"
      ],
      policies: [
        "Cash on Delivery Available",
        "7 Days Easy Replacement",
        "1 Year Warranty",
        "100% Secure Payment"
      ]
    },
    {
      id: 2,
      name: "Mini A8 GPS Tracker",
      price: "₹4,999",
      img: gsm,
      desc: "Mini A8 tracker supports live listening, SMS tracking, and sound alerts.",
      features: [
        "Live Location Tracking",
        "Voice Monitoring",
        "SOS Alert",
        "Sound Detection Alarm"
      ],
      specs: [
        "Battery: 5 Hours",
        "Network: GSM",
        "Control: SMS Commands"
      ],
      policies: [
        "Cash on Delivery",
        "5 Days Replacement",
        "6 Months Warranty",
        "Secure Checkout"
      ]
    },
    {
      id: 3,
      name: "Ajjas Go Smart GPS Tracker",
      price: "₹7,999",
      img: go,
      desc: "Wireless CCTV camera with HD quality and remote mobile monitoring.",
      features: [
        "HD Video Recording",
        "Night Vision",
        "Mobile App Control",
        "Motion Detection"
      ],
      specs: [
        "Resolution: 1080p",
        "Storage: SD Card",
        "Connectivity: WiFi"
      ],
      policies: [
        "Free Delivery",
        "7 Days Return",
        "1 Year Warranty",
        "Secure Payment"
      ]
    },
    {
      id: 4,
      name: "Smartphone Wire Camera",
      price: "₹4,999",
      img: wire,
      desc: "Mini A8 tracker supports live listening, SMS tracking, and sound alerts.",
      features: [
        "Live Location Tracking",
        "Voice Monitoring",
        "SOS Alert",
        "Sound Detection Alarm"
      ],
      specs: [
        "Battery: 5 Hours",
        "Network: GSM",
        "Control: SMS Commands"
      ],
      policies: [
        "Cash on Delivery",
        "5 Days Replacement",
        "6 Months Warranty",
        "Secure Checkout"
      ]
    },{
      id: 5,
      name: "Fleettrack GPS Vehicle Tracker",
      price: "₹4,999",
      img: vehicle,
      desc: "Mini A8 tracker supports live listening, SMS tracking, and sound alerts.",
      features: [
        "Live Location Tracking",
        "Voice Monitoring",
        "SOS Alert",
        "Sound Detection Alarm"
      ],
      specs: [
        "Battery: 5 Hours",
        "Network: GSM",
        "Control: SMS Commands"
      ],
      policies: [
        "Cash on Delivery",
        "5 Days Replacement",
        "6 Months Warranty",
        "Secure Checkout"
      ]
    },{
      id: 6,
      name: "BOLDTRACK 4G Mini Vehicle GPS Tracker",
      price: "₹4,999",
      img: gg,
      desc: "Mini A8 tracker supports live listening, SMS tracking, and sound alerts.",
      features: [
        "Live Location Tracking",
        "Voice Monitoring",
        "SOS Alert",
        "Sound Detection Alarm"
      ],
      specs: [
        "Battery: 5 Hours",
        "Network: GSM",
        "Control: SMS Commands"
      ],
      policies: [
        "Cash on Delivery",
        "5 Days Replacement",
        "6 Months Warranty",
        "Secure Checkout"
      ]
    },{
      id: 7,
      name: "Mini A8 GPS Tracker",
      price: "₹4,999",
      img: camera,
      desc: "Mini A8 tracker supports live listening, SMS tracking, and sound alerts.",
      features: [
        "Live Location Tracking",
        "Voice Monitoring",
        "SOS Alert",
        "Sound Detection Alarm"
      ],
      specs: [
        "Battery: 5 Hours",
        "Network: GSM",
        "Control: SMS Commands"
      ],
      policies: [
        "Cash on Delivery",
        "5 Days Replacement",
        "6 Months Warranty",
        "Secure Checkout"
      ]
    },

{
      id: 8,
      name: "USB Endoscope Camera",
      price: "₹4,999",
      img: USB,
      desc: "Mini A8 tracker supports live listening, SMS tracking, and sound alerts.",
      features: [
        "Live Location Tracking",
        "Voice Monitoring",
        "SOS Alert",
        "Sound Detection Alarm"
      ],
      specs: [
        "Battery: 5 Hours",
        "Network: GSM",
        "Control: SMS Commands"
      ],
      policies: [
        "Cash on Delivery",
        "5 Days Replacement",
        "6 Months Warranty",
        "Secure Checkout"
      ]
    },

{
      id: 9,
      name: "Hidden Camera Wrist Watch",
      price: "₹4,999",
      img: watch,
      desc: "Mini A8 tracker supports live listening, SMS tracking, and sound alerts.",
      features: [
        "Live Location Tracking",
        "Voice Monitoring",
        "SOS Alert",
        "Sound Detection Alarm"
      ],
      specs: [
        "Battery: 5 Hours",
        "Network: GSM",
        "Control: SMS Commands"
      ],
      policies: [
        "Cash on Delivery",
        "5 Days Replacement",
        "6 Months Warranty",
        "Secure Checkout"
      ]
    },

{
      id: 10,
      name: "Night Vision Power Bank Camera",
      price: "₹4,999",
      img: power,
      desc: "Mini A8 tracker supports live listening, SMS tracking, and sound alerts.",
      features: [
        "Live Location Tracking",
        "Voice Monitoring",
        "SOS Alert",
        "Sound Detection Alarm"
      ],
      specs: [
        "Battery: 5 Hours",
        "Network: GSM",
        "Control: SMS Commands"
      ],
      policies: [
        "Cash on Delivery",
        "5 Days Replacement",
        "6 Months Warranty",
        "Secure Checkout"
      ]
    },

{
      id: 11,
      name: "MATLOGIX GF-07 Mini GPS Tracker Device",
      price: "₹4,999",
      img: mat,
      desc: "Mini A8 tracker supports live listening, SMS tracking, and sound alerts.",
      features: [
        "Live Location Tracking",
        "Voice Monitoring",
        "SOS Alert",
        "Sound Detection Alarm"
      ],
      specs: [
        "Battery: 5 Hours",
        "Network: GSM",
        "Control: SMS Commands"
      ],
      policies: [
        "Cash on Delivery",
        "5 Days Replacement",
        "6 Months Warranty",
        "Secure Checkout"
      ]
    },

{
      id: 12,
      name: "X Tag Smart Bluetooth Tracker",
      price: "₹4,999",
      img: tag,
      desc: "Mini A8 tracker supports live listening, SMS tracking, and sound alerts.",
      features: [
        "Live Location Tracking",
        "Voice Monitoring",
        "SOS Alert",
        "Sound Detection Alarm"
      ],
      specs: [
        "Battery: 5 Hours",
        "Network: GSM",
        "Control: SMS Commands"
      ],
      policies: [
        "Cash on Delivery",
        "5 Days Replacement",
        "6 Months Warranty",
        "Secure Checkout"
      ]
    },

{
      id: 13,
      name: "ZASCO GPS Vehicle Tracking Device (Anti-Theft GPS Tracker)",
      price: "₹4,999",
      img: z,
      desc: "Mini A8 tracker supports live listening, SMS tracking, and sound alerts.",
      features: [
        "Live Location Tracking",
        "Voice Monitoring",
        "SOS Alert",
        "Sound Detection Alarm"
      ],
      specs: [
        "Battery: 5 Hours",
        "Network: GSM",
        "Control: SMS Commands"
      ],
      policies: [
        "Cash on Delivery",
        "5 Days Replacement",
        "6 Months Warranty",
        "Secure Checkout"
      ]
    },
{
      id: 14,
      name: "Digital Voice Recorder",
      price: "₹4,999",
      img: voice,
      desc: "Mini A8 tracker supports live listening, SMS tracking, and sound alerts.",
      features: [
        "Live Location Tracking",
        "Voice Monitoring",
        "SOS Alert",
        "Sound Detection Alarm"
      ],
      specs: [
        "Battery: 5 Hours",
        "Network: GSM",
        "Control: SMS Commands"
      ],
      policies: [
        "Cash on Delivery",
        "5 Days Replacement",
        "6 Months Warranty",
        "Secure Checkout"
      ]
    },{
      id: 15,
      name: "HD Camera Pen",
      price: "₹4,999",
      img: pen,
      desc: "Mini A8 tracker supports live listening, SMS tracking, and sound alerts.",
      features: [
        "Live Location Tracking",
        "Voice Monitoring",
        "SOS Alert",
        "Sound Detection Alarm"
      ],
      specs: [
        "Battery: 5 Hours",
        "Network: GSM",
        "Control: SMS Commands"
      ],
      policies: [
        "Cash on Delivery",
        "5 Days Replacement",
        "6 Months Warranty",
        "Secure Checkout"
      ]
    },{
      id: 16,
      name: "Hidden Camera Glasses",
      price: "₹4,999",
      img: glass,
      desc: "Mini A8 tracker supports live listening, SMS tracking, and sound alerts.",
      features: [
        "Live Location Tracking",
        "Voice Monitoring",
        "SOS Alert",
        "Sound Detection Alarm"
      ],
      specs: [
        "Battery: 5 Hours",
        "Network: GSM",
        "Control: SMS Commands"
      ],
      policies: [
        "Cash on Delivery",
        "5 Days Replacement",
        "6 Months Warranty",
        "Secure Checkout"
      ]
    },{
      id: 17,
      name: "Digital breath alcohol tester",
      price: "₹4,999",
      img: alcohol,
      desc: "Mini A8 tracker supports live listening, SMS tracking, and sound alerts.",
      features: [
        "Live Location Tracking",
        "Voice Monitoring",
        "SOS Alert",
        "Sound Detection Alarm"
      ],
      specs: [
        "Battery: 5 Hours",
        "Network: GSM",
        "Control: SMS Commands"
      ],
      policies: [
        "Cash on Delivery",
        "5 Days Replacement",
        "6 Months Warranty",
        "Secure Checkout"
      ]
    },{
      id: 18,
      name: "Spy Police Car",
      price: "₹4,999",
      img: police,
      desc: "Mini A8 tracker supports live listening, SMS tracking, and sound alerts.",
      features: [
        "Live Location Tracking",
        "Voice Monitoring",
        "SOS Alert",
        "Sound Detection Alarm"
      ],
      specs: [
        "Battery: 5 Hours",
        "Network: GSM",
        "Control: SMS Commands"
      ],
      policies: [
        "Cash on Delivery",
        "5 Days Replacement",
        "6 Months Warranty",
        "Secure Checkout"
      ]
    },{
      id: 19,
      name: "Spy Fire Truck with Hidden Camera",
      price: "₹4,999",
      img: truck,
      desc: "Mini A8 tracker supports live listening, SMS tracking, and sound alerts.",
      features: [
        "Live Location Tracking",
        "Voice Monitoring",
        "SOS Alert",
        "Sound Detection Alarm"
      ],
      specs: [
        "Battery: 5 Hours",
        "Network: GSM",
        "Control: SMS Commands"
      ],
      policies: [
        "Cash on Delivery",
        "5 Days Replacement",
        "6 Months Warranty",
        "Secure Checkout"
      ]
    },{
      id: 20,
      name: "Military Spy Missile Truck with Hidden Camera",
      price: "₹4,999",
      img: army,
      desc: "Mini A8 tracker supports live listening, SMS tracking, and sound alerts.",
      features: [
        "Live Location Tracking",
        "Voice Monitoring",
        "SOS Alert",
        "Sound Detection Alarm"
      ],
      specs: [
        "Battery: 5 Hours",
        "Network: GSM",
        "Control: SMS Commands"
      ],
      policies: [
        "Cash on Delivery",
        "5 Days Replacement",
        "6 Months Warranty",
        "Secure Checkout"
      ]
    },
    {
      id: 21,
      name: "Recon Spy Jeep with Hidden Camera",
      price: "₹4,999",
      img: Jeep,
      desc: "Mini A8 tracker supports live listening, SMS tracking, and sound alerts.",
      features: [
        "Live Location Tracking",
        "Voice Monitoring",
        "SOS Alert",
        "Sound Detection Alarm"
      ],
      specs: [
        "Battery: 5 Hours",
        "Network: GSM",
        "Control: SMS Commands"
      ],
      policies: [
        "Cash on Delivery",
        "5 Days Replacement",
        "6 Months Warranty",
        "Secure Checkout"
      ]
    },{
      id: 22,
      name: "Hidden Surveillance Toy Truck with Micro Cameras",
      price: "₹4,999",
      img: toyt,
      desc: "Mini A8 tracker supports live listening, SMS tracking, and sound alerts.",
      features: [
        "Live Location Tracking",
        "Voice Monitoring",
        "SOS Alert",
        "Sound Detection Alarm"
      ],
      specs: [
        "Battery: 5 Hours",
        "Network: GSM",
        "Control: SMS Commands"
      ],
      policies: [
        "Cash on Delivery",
        "5 Days Replacement",
        "6 Months Warranty",
        "Secure Checkout"
      ]
    },{
      id: 23,
      name: "Hidden Camera Spy Truck ",
      price: "₹4,999",
      img: spy,
      desc: "Mini A8 tracker supports live listening, SMS tracking, and sound alerts.",
      features: [
        "Live Location Tracking",
        "Voice Monitoring",
        "SOS Alert",
        "Sound Detection Alarm"
      ],
      specs: [
        "Battery: 5 Hours",
        "Network: GSM",
        "Control: SMS Commands"
      ],
      policies: [
        "Cash on Delivery",
        "5 Days Replacement",
        "6 Months Warranty",
        "Secure Checkout"
      ]
    },{
      id: 24,
      name: "hidden spy camera plane",
      price: "₹4,999",
      img: flight,
      desc: "Mini A8 tracker supports live listening, SMS tracking, and sound alerts.",
      features: [
        "Live Location Tracking",
        "Voice Monitoring",
        "SOS Alert",
        "Sound Detection Alarm"
      ],
      specs: [
        "Battery: 5 Hours",
        "Network: GSM",
        "Control: SMS Commands"
      ],
      policies: [
        "Cash on Delivery",
        "5 Days Replacement",
        "6 Months Warranty",
        "Secure Checkout"
      ]
    },{
      id: 25,
      name: "hidden spy camera car",
      price: "₹4,999",
      img: green,
      desc: "Mini A8 tracker supports live listening, SMS tracking, and sound alerts.",
      features: [
        "Live Location Tracking",
        "Voice Monitoring",
        "SOS Alert",
        "Sound Detection Alarm"
      ],
      specs: [
        "Battery: 5 Hours",
        "Network: GSM",
        "Control: SMS Commands"
      ],
      policies: [
        "Cash on Delivery",
        "5 Days Replacement",
        "6 Months Warranty",
        "Secure Checkout"
      ]
    },


  
  ];
  

  const product = productsData.find((p) => p.id === Number(id));

  if (!product) {
    return <h2 style={{ color: "white" }}>Product not found</h2>;
  }

  const handleBuy = () => {
    const msg = `Hello, I want to buy ${product.name} for ${product.price}`;
    window.open(`https://wa.me/91234678902?text=${encodeURIComponent(msg)}`);
  };

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product Added to Cart ✅");
  };

  return (
    <div className="details-page">

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="details-container">

        {/* IMAGE */}
        <div className="image-section">
          <img src={product.img} alt={product.name} />

          <div className="action-buttons">
            <button className="buy-now" onClick={handleBuy}>
              Buy via WhatsApp
            </button>

            <button className="add-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>

        {/* INFO */}
        <div className="info-section">
          <h1>{product.name}</h1>
          <h2>{product.price}</h2>

          <p className="desc">{product.desc}</p>

          <ul className="features">
            {product.features.map((f, i) => (
              <li key={i}><ImPointRight /> {f}</li>
            ))}
          </ul>

          {/* 🔥 POLICIES DYNAMIC */}
          
        </div>

        {/* RIGHT SIDE */}
        <div className="extra-section">

          <div className="box">
            <h3>📦 Features</h3>
            {product.features.map((f, i) => (
              <p key={i}>• {f}</p>
            ))}
          </div>

          <div className="box">
            <h3>⚙ Specs</h3>
            {product.specs.map((s, i) => (
              <p key={i}>{s}</p>
            ))}
          </div>

          <div className="box">
            <h3>🚚 Product Polishes</h3>
            <p>✔ pay and buy Delivery</p>
            <p>✔ 3-5 Days</p>
            <p>✔ Secure Packaging</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ProductDetails;

