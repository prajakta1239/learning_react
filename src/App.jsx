import React, { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import Navbar from './Navbar';
import Cart from './Cart';
import './App.css';

function App() {
  const [view, setView] = useState("home"); // home, products, cart

  const handleGetStartedClick = () => setView("products");
  const handleHomeClick = () => setView("home");
  const handleCartClick = () => setView("cart");

  return (
    <div className="app-container">
      {/* ✅ Navbar always visible */}
      <Navbar onHomeClick={handleHomeClick} onCartClick={handleCartClick} />

      {view === "home" && (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="content">
            <div className="landing_content">
              <h1>Welcome To Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>
              <button className="get-started-button" onClick={handleGetStartedClick}>
                Get Started
              </button>
            </div>
            <div className="aboutus_container">
              <AboutUs />
            </div>
          </div>
        </div>
      )}

      {view === "products" && <ProductList />}
      {view === "cart" && <Cart />}
    </div>
  );
}

export default App;
