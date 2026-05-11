import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

function Cart() {

  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useContext(CartContext);

  const navigate = useNavigate();


  const toggleSelect = (id) => {

  const updatedCart = cart.map((item) =>
    item.id === id
      ? { ...item, selected: !item.selected }
      : item
  );

  localStorage.setItem(
    "cart",
    JSON.stringify(updatedCart)
  );

  window.location.reload();

};

const selectedItems = cart.filter(
  (item) => item.selected !== false
);

const selectedTotal = selectedItems.reduce(
  (total, item) =>
    total +
    parseInt(
      item.price.replace(/[₹,]/g, "")
    ) *
      item.quantity,
  0
);


  return (

    <>

      <Helmet>

        <title>Your Cart | SNDF Store</title>

        <meta
          name="description"
          content="Review your selected security products and continue checkout at SNDF Store."
        />

      </Helmet>

      <style>{`

        .cart-page{

          min-height:70vh;

          padding:300px 20px;

          background-size:cover;
          background-position:center;

        }

        .cart-container{

          max-width:1200px;

          margin:auto;

          display:grid;

          grid-template-columns:1fr 340px;

          gap:25px;

          align-items:start;

        }

        .cart-left{

          background:white;

          border-radius:18px;

          overflow:hidden;

          box-shadow:
          0 10px 35px rgba(0,0,0,0.25);

        }

        .cart-header{

          background:
          linear-gradient(
            135deg,
            #0c1d72,
            #2457c5
          );

          padding:28px;

        }

        .cart-header h1{

          color:white;

          font-size:38px;

          font-weight:700;

          margin-bottom:15px;

          letter-spacing:1px;

        }

        .cart-header p{

          color:#dfe7ff;

          font-size:19px;
          letter-spacing:1px;


        }

        .cart-items{

          padding:25px;

        }

        .cart-card{

          display:flex;

          justify-content:space-between;

          align-items:center;

          gap:20px;

          padding:18px;

          border-radius:16px;

          background:#f7f8fc;

          margin-bottom:18px;

          border:1px solid #e6e6e6;

        }

        .select-box{

          width:24px;

          height:24px;

          cursor:pointer;

          accent-color:#10257d;

        }

        .cart-product{

          display:flex;

          gap:16px;

          align-items:center;

          flex:1;

        }

        .cart-product img{

          width:95px;

          height:95px;

          object-fit:cover;

          border-radius:14px;

          background:white;

          border:1px solid #ddd;

        }

        .cart-info h3{

          color:#111;

          font-size:20px;

          margin-bottom:12px;

          font-weight:800;

          letter-spacing:1px;

        }

        .cart-info p{

          color:#cc0000;

          font-size:20px;

          font-weight:800;
          
          letter-spacing:1px;


        }

        .qty-box{

          display:flex;

          align-items:center;

          gap:10px;

          margin-top:12px;

        }

        .qty-btn{

          width:34px;

          height:34px;

          border:none;

          border-radius:8px;

          background:#10257d;

          color:white;

          font-size:18px;

          cursor:pointer;

          font-weight:700;

        }

        .qty-number{

          font-size:20px;

          font-weight:bold;

          color:#111;

        }

        .remove-btn{

          border:none;

          background:#d90000;

          color:white;

          padding:10px 16px;

          border-radius:10px;

          font-size:19px;

          cursor:pointer;

          font-weight:700;

          letter-spacing:0.5px

        }

        .cart-right{

          display:flex;

          flex-direction:column;

          gap:20px;

        }

        .summary-card{

          background:white;

          border-radius:18px;

          padding:28px;

          box-shadow:
          0 10px 35px rgba(0,0,0,0.25);

        }

        .summary-card h2{

          color:#111;

          font-size:30px;

          margin-bottom:20px;

          font-weight:800;

        }

        .summary-row{

          display:flex;

          justify-content:space-between;

          margin-bottom:14px;

          font-size:16px;

          color:#333;

        }

        .summary-total{

          margin-top:20px;

          padding-top:20px;

          border-top:2px solid #eee;

        }

        .summary-total h1{

          color:#c40000;

          font-size:42px;

          margin-top:10px;

          font-weight:800;

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

          font-size:17px;

          font-weight:700;

          cursor:pointer;

          margin-top:20px;

        }

        .continue-btn{

          width:100%;

          border:2px solid #10257d;

          background:white;

          color:#10257d;

          padding:14px;

          border-radius:12px;

          font-size:16px;

          font-weight:700;

          cursor:pointer;

          margin-top:12px;

        }

        .empty-cart{

          padding:60px 30px;

          text-align:center;

        }

        .empty-cart h2{

          color:#111;

          font-size:34px;

          margin-bottom:14px;

        }

        .empty-cart p{

          color:#666;

          margin-bottom:25px;

          font-size:16px;

        }

        @media(max-width:950px){

          .cart-container{

            grid-template-columns:1fr;

          }

        }

        @media(max-width:700px){

          .cart-page{

            padding:190px 12px;
            padding-bottom:100px;

          }

          .cart-card{

            flex-direction:column;

            align-items:flex-start;

          }

          .cart-product{

            flex-direction:column;

            align-items:flex-start;

          }

          .cart-product img{

            width:100%;

            height:220px;

          }

          .cart-header h1{

            font-size:28px;

          }

          .summary-total h1{

            font-size:36px;

          }

        }

      `}</style>

      <div className="cart-page">

        <div className="cart-container">

          <div className="cart-left">

            <div className="cart-header">

              <h1>Your Shopping Cart</h1>

              <p>
                Review your selected security products before checkout
              </p>

            </div>

            <div className="cart-items">

              {cart.length === 0 ? (

                <div className="empty-cart">

                  <h2>Cart is Empty</h2>

                  <p>
                    Add products to continue shopping
                  </p>

                  <button
                    className="checkout-btn"
                    onClick={() => navigate("/shop")}
                  >
                    Continue Shopping
                  </button>

                </div>

              ) : (

                cart.map((item) => (

                  <div
                    className="cart-card"
                    key={item.id}
                  >

                    <div className="cart-product">

                        <input
                              type="checkbox"
                              className="select-box"
                              checked={item.selected !== false}
                              onChange={() =>
                                toggleSelect(item.id)
                              }/>

                      <img
                        src={item.img}
                        alt={item.name}/>

                      <div className="cart-info">

                        <h3>{item.name}</h3>

                        <p>{item.price}</p>

                        <div className="qty-box">

                          <button
                            className="qty-btn"
                            onClick={() =>
                              decreaseQuantity(item.id)
                            }
                          >
                            -
                          </button>

                          <span className="qty-number">
                            {item.quantity}
                          </span>

                          <button
                            className="qty-btn"
                            onClick={() =>
                              increaseQuantity(item.id)
                            }
                          >
                            +
                          </button>

                        </div>

                      </div>

                    </div>

                    <button
                      className="remove-btn"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      Remove
                    </button>

                  </div>

                ))

              )}

            </div>

          </div>

          {cart.length > 0 && (

            <div className="cart-right">

              <div className="summary-card">

                <h2>Order Summary</h2>

                <div className="summary-row">

                  <span>Total Products</span>

                  <span>{selectedItems.length}</span>

                </div>

                <div className="summary-row">

                  <span>Delivery</span>

                  <span>Free</span>

                </div>

                <div className="summary-total">

                  <div className="summary-row">

                    <strong>Total Amount</strong>

                  </div>

                  <h1>₹{selectedTotal}</h1>

                </div>

                <button

                  className="checkout-btn"

                  onClick={() =>
                      navigate("/checkout", {
                        state: {
                          cartItems: selectedItems,
                        },
                      })
                    } >
                      
                  Proceed To Checkout
                </button>

                <button
                  className="continue-btn"
                  onClick={() =>
                    navigate("/shop")
                  }
                >
                  Continue Shopping
                </button>

              </div>

            </div>

          )}

        </div>

      </div>

    </>

  );
}

export default Cart;



