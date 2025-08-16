import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./Cart.css";   // ✅ here


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      // remove "$" if cost is a string like "$15"
      const price = typeof item.cost === "string" ? parseFloat(item.cost.replace("$", "")) : item.cost;
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <div className="cart-container">
      <h2>🛒 Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.name} item={item} />
          ))}

          <div className="cart-summary">
            <h3>Total: ₹{calculateTotal()}</h3>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
