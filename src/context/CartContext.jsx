import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  // ✅ Load cart from localStorage initially
  const [cart, setCart] = useState(() => {

    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];

  });

  // ✅ Save cart whenever updated
  useEffect(() => {

    localStorage.setItem("cart", JSON.stringify(cart));

  }, [cart]);


  // ✅ Add product to cart
  const addToCart = (product) => {

  setCart((prev) => {

    const existingProduct = prev.find(
      (item) => item.id === product.id
    );

    // ✅ If already exists increase quantity
    if (existingProduct) {

      return prev.map((item) =>

        item.id === product.id
          ? {
              ...item,
              quantity: (item.quantity || 1) + 1,
            }
          : item

      );
    }

    // ✅ First time add product
    return [
      ...prev,
      {
        ...product,
        quantity: 1,
      },
    ];
  });
};


  // ✅ Remove product completely
  const removeFromCart = (id) => {

    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);
  };

  // ✅ Increase quantity
  const increaseQuantity = (id) => {

    const updatedCart = cart.map((item) =>

      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item

    );

    setCart(updatedCart);
  };

  // ✅ Decrease quantity
  const decreaseQuantity = (id) => {

    const updatedCart = cart
      .map((item) =>

        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item

      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  // ✅ Clear cart after successful order
  const clearCart = () => {

    setCart([]);

  };

  // ✅ Total price calculation
  const totalPrice = cart.reduce((acc, item) => {

    const numericPrice = Number(
      item.price.replace(/[^0-9]/g, "")
    );

    return acc + numericPrice * item.quantity;

  }, 0);

  return (

    <CartContext.Provider
      value={{
        cart,
         setCart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalPrice,
      }}
    >

      {children}

    </CartContext.Provider>

  );
};

