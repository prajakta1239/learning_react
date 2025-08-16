import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";

const Navbar = ({ onHomeClick, onCartClick }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="logo" onClick={onHomeClick} style={{ cursor: "pointer" }}>
        🌱 Paradise Nursery
      </div>
      <ul className="nav-links">
        <li onClick={onHomeClick} style={{ cursor: "pointer" }}>Home</li>
        <li onClick={onCartClick} style={{ cursor: "pointer" }}>
          🛒
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
