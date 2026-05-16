import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Helmet } from "react-helmet-async";

import {
  useNavigate,
  useLocation,
} from "react-router-dom";

function Checkout() {

  const navigate = useNavigate();

  const location = useLocation();

  const { cart, setCart } = useContext(CartContext);

  const checkoutItems =
  location.state?.cartItems || cart;


  const totalPrice = checkoutItems.reduce(
  (total, item) =>
    total +
    parseInt(
      item.price.replace(/[₹,]/g, "")
    ) *
      item.quantity,
  0
);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    city: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const [showPopup, setShowPopup] = useState(false);

const handleOrder = () => {

  if (
    !formData.name ||
    !formData.mobile ||
    !formData.address
  ) {

    alert("Please fill all required fields");

    return;
  }

  if (formData.mobile.length !== 10) {

    alert("Mobile number must be 10 digits");

    return;
  }

  setShowPopup(true);

  
  const orderItems = checkoutItems
  .map(
    (item, index) =>
  `
  ${index + 1}. ${item.name}

    Qty : ${item.quantity}
    Price : ${item.price}
  `
    )
    .join("\n━━━━━━━━━━━━━━━\n");

const whatsappMessage = `
🛒 *SNDF SECURITY ORDER REQUEST*

━━━━━━━━━━━━━━━

👤 *CUSTOMER DETAILS*

▪ Name : ${formData.name}
▪ Mobile : ${formData.mobile}
▪ City : ${formData.city}

━━━━━━━━━━━━━━━

📦 *ORDERED PRODUCTS*

${orderItems}

━━━━━━━━━━━━━━━

💰 *TOTAL AMOUNT*
₹${totalPrice}

━━━━━━━━━━━━━━━

📍 *DELIVERY ADDRESS*

${formData.address}

━━━━━━━━━━━━━━━

📝 *EXTRA MESSAGE*

${formData.message || "No extra message"}

━━━━━━━━━━━━━━━

✅ Please confirm this order.

📞 Team SNDF will contact shortly.

🌐 www.sndfndf.com
`;

 
setTimeout(() => {

  // Save success state
  localStorage.setItem(
    "orderSuccess",
    "true"
  );

  // Clear cart storage
  
  const updatedCart = cart.filter(
  (cartItem) =>
    !checkoutItems.some(
      (orderedItem) =>
        orderedItem.id === cartItem.id
    )
);

localStorage.setItem(
  "cart",
  JSON.stringify(updatedCart)
);

setCart(updatedCart);

  // Open WhatsApp
  window.open(
    `https://wa.me/919370899504?text=${encodeURIComponent(whatsappMessage)}`,
    "_blank"
  );

  // Hide popup
  setShowPopup(false);

  // Redirect to cart page
  window.location.href = "/cart";

}, 2000);

};
  

  return (

    <>

      <Helmet>
        <title>Secure Checkout | SNDF Store</title>

        <meta
          name="description"
          content="Complete your purchase securely with SNDF Store."
        />
      </Helmet>

      <style>{`



  

            .back-cart-btn {

            background: white;

            border: none;

            color: #10257d;

            padding: 10px 18px;

            border-radius: 10px;

            margin-bottom: 20px;

            font-size: 15px;

            font-weight: 600;

            cursor: pointer;

            transition: 0.3s;

          }

          .back-cart-btn:hover {

            transform: translateY(-2px);

          }


            .popup-overlay{

            position:fixed;

            inset:0;

            background:rgba(0,0,0,0.6);

            display:flex;

            justify-content:center;

            align-items:center;

            z-index:9999;

          }

          .success-popup{

            background:white;

            width:320px;

            padding:35px 25px;

            border-radius:18px;

            text-align:center;

            animation:popupShow 0.3s ease;

          }

          .success-popup h2{

            color:#10257d;

            margin-bottom:12px;

            font-size:28px;

          }

          .success-popup p{

            color:#444;

            line-height:1.6;

          }

          @keyframes popupShow{

            from{

              transform:scale(0.8);

              opacity:0;

            }

            to{

              transform:scale(1);

              opacity:1;

            }

          }

        .checkout-page{

          min-height:100vh;

          padding:180px 20px;

          background:
          linear-gradient(
            rgba(5,10,45,0.92),
            rgba(5,10,45,0.92)
          ),
          url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3");

          background-size:cover;
          background-position:center;

        }

        .checkout-container{

          max-width:1100px;

          margin:auto;

          display:grid;

          grid-template-columns: 1fr 320px;

          gap:24px;

          align-items:start;

        }

        .checkout-left{

          background:white;

          border-radius:18px;

          overflow:hidden;

          box-shadow:
          0 10px 35px rgba(0,0,0,0.25);

        }

        .checkout-top{

          background:
          linear-gradient(
            135deg,
            #0c1d72,
            #2457c5
          );

          padding:28px;

        }

        .checkout-top h1{

          color:white;

          font-size:42px;

          margin-bottom:10px;

          font-weight:700;

          letter-spacing:1px;

        }

        .checkout-top p{

          color:#dfe7ff;

          font-size:18px;

          letter-spacing:1px;
          margin-bottom:5px;

        }

        .checkout-form{

          padding:28px;

        }

        .input-group{

          margin-bottom:16px;


        }

        .input-group label{

          display:block;

          margin-bottom:7px;

          color:#111;

          font-size:16px;

          font-weight:700;
          letter-spacing:0.5px;


        }

        .input-group input,
        .input-group textarea{

          width:100%;

          padding:14px;

          // border:none;
                  
          outline:none;

          background:#f3f5fa;

          border-radius:12px;

          font-size:15px;

         border: 0.1px solid #1d4ed8 !important;


          transition:0.3s;

          border:2px solid transparent;

        }

        .input-group input:focus,
        .input-group textarea:focus{

          border-color:#1d4ed8;

          background:white;

        }

        .input-row{

          display:grid;

          grid-template-columns:1fr 1fr;

          gap:14px;

        }

        .input-group textarea{

          min-height:90px;

          resize:none;

        }

        .checkout-btn{

          width:100%;

          border:none;

          background:
          linear-gradient(
            90deg,
            #b10000,
            #ff1a1a
          );

          color:white;

          padding:15px;

          border-radius:12px;

          font-size:22px;

          font-weight:700;

          letter-spacing : 1px;

          cursor:pointer;

          transition:0.3s;

          margin-top:8px;

        }

        .checkout-btn:hover{

          transform:translateY(-2px);

          box-shadow:
          0 8px 20px rgba(255,0,0,0.35);

        }

        .checkout-right{

          display:flex;

          flex-direction:column;

          gap:18px;

        }

        .summary-card{

          background:#0a0f45;

          border-radius:18px;

          padding:22px;

          box-shadow:
          0 10px 30px rgba(0,0,0,0.25);

        }

        .summary-title{

          color:white;

          font-size:28px;

          font-weight:800;

          margin-bottom:25px;
          letter-spacing:1px;

        }

        .product-item{

          display:flex;

          gap:12px;

          align-items:center;

          background:rgba(255,255,255,0.06);

          padding:12px;

          border-radius:14px;

          margin-bottom:14px;

        }

        .product-item img{

          width:70px;

          height:70px;

          object-fit:cover;

          border-radius:10px;

          background:white;

        }

        .product-info h4{

          color:white;

          font-size:16px;

          margin-bottom:5px;
          lettter-spacing:0.5px;
          line-height:1.5;

        }

        .product-info p{

          color:#d7d7d7;

          font-size:16px;

          margin-bottom:4px;

        }

        .product-price{

          color:#ff3b3b !important;

          font-weight:800;

          font-size:19px !important;

        }

        .total-box{

          background:
          linear-gradient(
            135deg,
            #b10000,
            #d40000
          );

          border-radius:18px;

          padding:26px;

          text-align:center;
        

        }

        .total-box h3{

          color:white;

          font-size:20px;

          margin-bottom:10px;
           letter-spacing:1px;

        }

        .total-box h1{

          color:white;

          font-size:44px;

          font-weight:800;
          letter-spacing:1px;

        }

        .why-card{

          background:#0a0f45;

          border-radius:18px;

          padding:24px;

        }

        .why-card h2{

          color:white;

          margin-bottom:18px;

          font-size:24px;
          letter-spacing:1px;
          font-weight:bold;

        }

        .why-card ul{

          padding-left:18px;

        }

        .why-card li{

          color:#f1f1f1;

          margin-bottom:14px;

          line-height:1.5;
          text-align:start;
          letter-spacing:0.4px;

        }

        @media(max-width:950px){

          .checkout-container{

          grid-template-columns:1fr;

          }

          .checkout-right{

            order:-1;

          }

        }

        @media(max-width:600px){

          .checkout-page{

            padding:200px 12px;
            padding-bottom:100px;

          }

          .checkout-top{

            padding:22px;

          }

          .checkout-top h1{

            font-size:28px;

          }

          .checkout-form{

            padding:20px;

          }

          .input-row{

            grid-template-columns:1fr;

          }

          .summary-title{

            font-size:24px;

          }

          .total-box h1{

            font-size:38px;

          }

          

        }

      `}</style>

      {
  showPopup && (

    <div className="popup-overlay">

      <div className="success-popup">

        <h2>
          Redirecting To WhatsApp
        </h2>

        <p>
          Our SNDF team will contact you soon.
        </p>

      </div>

    </div>

  )
}

      <div className="checkout-page">

        <div className="checkout-container">

          <div className="checkout-left">

            <div className="checkout-top">

              <h1>Secure Checkout</h1>

              <p>
                Complete your security equipment order safely with SNDF Store
              </p>

            </div>

            <div className="checkout-form">

              <div className="input-group">

                <label>Full Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  onChange={handleChange}
                />

              </div>

              <div className="input-row">

                <div className="input-group">

                  <label>Mobile Number</label>

                  <input
                    type="text"
                    name="mobile"
                    placeholder="Enter mobile number"
                    onChange={handleChange}
                  />

                </div>

                <div className="input-group">

                  <label>City</label>

                  <input
                    type="text"
                    name="city"
                    placeholder="Enter city"
                    onChange={handleChange}
                  />

                </div>

              </div>

              <div className="input-group">

                <label>Full Address</label>

                <textarea
                  name="address"
                  placeholder="Enter complete delivery address"
                  onChange={handleChange}
                />

              </div>

              <div className="input-group">

                <label>Extra Message</label>

                <textarea
                  name="message"
                  placeholder="Any extra order instructions..."
                  onChange={handleChange}
                />

              </div>

              <button
                className="checkout-btn"
                onClick={handleOrder}
              >
                Order via WhatsApp
              </button>

            </div>

          </div>

          <div className="checkout-right">

            <button
            className="back-cart-btn"
            onClick={() => navigate("/cart")}>
            ← Back To Cart
          </button>

            <div className="summary-card">

              <h2 className="summary-title">
                Order Summary
              </h2>

              {checkoutItems.map((item, index) => (

                <div className="product-item" key={index}>

                  <img
                    src={item.img}
                    alt={item.name}
                  />

                  <div className="product-info">

                    <h4>{item.name}</h4>

                    <p>
                      Quantity: {item.quantity}
                    </p>

                    <p className="product-price">
                      {item.price}
                    </p>

                  </div>

                </div>

              ))}

              <div className="total-box">

                <h3>Total Amount</h3>

                <h1>₹{totalPrice}</h1>

              </div>

            </div>

            <div className="why-card">

              <h2>
                Why Order From SNDF?
              </h2>

              <ul>

                <li>
                  Professional Security Equipment
                </li>

                <li>
                  Trusted Investigation Solutions
                </li>

                <li>
                  Fast WhatsApp Support
                </li>

                <li>
                  Secure Order Assistance
                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>

    </>

  );
}


export default Checkout;

