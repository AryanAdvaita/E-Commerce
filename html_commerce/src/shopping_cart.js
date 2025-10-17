import React from 'react';
const ShoppingCart = ({ cartItems, onRemove }) => {
    if (cartItems.length === 0) {
        return <p>Your cart is empty.</p>;
    }

    const total = cartItems.reduce((sum, it) => sum + (it.price || 0), 0);
    return (
    <div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {cartItems.map((item, index) => (
          <li key={item.id ?? index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span>{item.name} - ${item.price}</span>
            <button onClick={() => onRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p><strong>Total:</strong> ${total}</p>
    </div>
  );
}
export default ShoppingCart;
//session 9 here