import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

const products = [
  { name: "Rose Plant", cost: 200, image: "/images/rose.jpg" },
  { name: "Tulip Plant", cost: 150, image: "/images/tulip.jpg" },
  { name: "Sunflower Plant", cost: 180, image: "/images/sunflower.jpg" }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const isInCart = (name) => cartItems.some(item => item.name === name);

  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div>
      <h2>🌱 Paradise Nursery</h2>
      <p>🛒 Items in Cart: {calculateTotalQuantity()}</p>

      <div className="product-list">
        {products.map((product) => {
          const disabled = isInCart(product.name);
          return (
            <div className="product-card" key={product.name}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₹{product.cost}</p>
              <button
                onClick={() => handleAddToCart(product)}
                disabled={disabled}
                style={{
                  backgroundColor: disabled ? "gray" : "#4CAF50",
                  cursor: disabled ? "not-allowed" : "pointer"
                }}
              >
                {disabled ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
