import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './CartItem.css';

const Cart = () => {
  const items = useSelector(state => state.cart.items);

  // Calculate overall total
  const totalAmount = items.reduce((sum, item) => sum + item.cost * item.quantity, 0);

  // Calculate total number of items
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>🛒 Your Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          {items.map((item) => (
            <CartItem key={item.name} item={item} />
          ))}

          <p className="total_cart_amount">Total Items: {totalQuantity}</p>
          <p className="total_cart_amount">Total Amount: ₹{totalAmount}</p>

          <button className="get-started-button1">Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
