import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Cart() {

  const { cart, removeFromCart, totalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  return (

    <>

    <Helmet>
      <title>Your Cart | SNDF Store</title>
      <meta name="description" content="Review selected security products in your cart and proceed with secure checkout at SNDF store." />
    </Helmet>

    <div style={{ padding: "120px", color: "white", background: "#141250" }}>

      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <h3>{item.name}</h3>
              <p>{item.price}</p>

              <button onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </div>
          ))}

          <h2>Total: ₹{totalPrice}</h2>

          <button onClick={() => navigate("/checkout")}>
            Checkout
          </button>
        </>
      )}
    </div>

    </>
  );
}

export default Cart;