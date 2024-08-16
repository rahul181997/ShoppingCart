import React from 'react';
// import './CartItem.css';

function CartItem({ item, onQuantityChange, onRemoveItem }) {
  const handleQuantityChange = (delta) => {
    onQuantityChange(item.id, delta);
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div>
        <h4>{item.title}</h4>
        <p>${item.price.toFixed(2)}</p>
        <button onClick={() => handleQuantityChange(-1)}>-</button>
        <span>{item.quantity || 1}</span>
        <button onClick={() => handleQuantityChange(1)}>+</button>
        <button onClick={() => onRemoveItem(item.id)}>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;
