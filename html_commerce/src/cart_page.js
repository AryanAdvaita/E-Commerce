import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './store';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div style={{ padding: 20 }}>
      <h1>Shopping Cart</h1>
      {cart.length === 0 && <p>Your cart is empty</p>}
      {cart.map((item, index) => (
        <div key={index} style={{ borderBottom: '1px solid #ccc', padding: 10 }}>
          <strong>{item.name}</strong> – ${item.price}
          <button
            onClick={() => dispatch(removeFromCart(index))}
            style={{ marginLeft: 10 }}
          >
            Remove
          </button>

        </div>
      ))}
      <h3>Your total price is: {totalPrice}</h3>
    </div>
  );
};

export default CartPage;
 //session 9 here
