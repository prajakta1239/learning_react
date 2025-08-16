import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from './CartSlice';
import './CartItem.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = () => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <p className="cart-item-name">{item.name}</p>
        <p className="cart-item-cost">₹{item.cost}</p>

        <div className="cart-item-quantity">
          <button className="cart-item-button" onClick={decreaseQuantity}>-</button>
          <span className="cart-item-quantity-value">{item.quantity}</span>
          <button className="cart-item-button" onClick={increaseQuantity}>+</button>
        </div>

        <p className="cart-item-total">Subtotal: ₹{item.cost * item.quantity}</p>
        <button className="cart-item-delete" onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
