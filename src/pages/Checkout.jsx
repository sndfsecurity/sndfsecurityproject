import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Helmet } from "react-helmet-async";

function Checkout() {

  const { totalPrice } = useContext(CartContext);

  const handlePayment = () => {
    const msg = `I want to pay ₹${totalPrice}`;
    window.open(`https://wa.me/91234678902?text=${encodeURIComponent(msg)}`);
  };

  return (

    <>

    <Helmet>
      <title>Secure Checkout | SNDF Store</title>
      <meta name="description" content="Complete your purchase securely with SNDF. Safe and reliable checkout for all security products." />
    </Helmet>


    <div style={{ padding: "120px", color: "white", background: "#141250" }}>
      <h1>Checkout</h1>

      <h2>Total: ₹{totalPrice}</h2>

      <button onClick={handlePayment}>
        Pay Now
      </button>
    </div>

    </>
  );
}

export default Checkout;