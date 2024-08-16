import React, { useState, useEffect } from 'react';
import CartItem from '../components/CartItem';
import App from '../App';
import '../styles/CartPage.css';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    setCartItems(savedCart);
    calculateTotal(savedCart);
  }, []);

  const calculateTotal = (items) => {
    const total = items.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  };

  const handleQuantityChange = (id, delta) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: (item.quantity || 1) + delta };
      }
      return item;
    }).filter((item) => item.quantity > 0);
    setCartItems(updatedCart);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  return (
    <App>
      <div className="cart-page">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemoveItem={handleRemoveItem}
              />
            ))}
            <div className="cart-summary">
              <h3>Subtotal: ${totalPrice.toFixed(2)}</h3>
              <button>Checkout</button>
            </div>
          </div>
        )}
      </div>
    </App>
  );
}

export default CartPage;
