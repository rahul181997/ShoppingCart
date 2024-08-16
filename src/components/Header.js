import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(sessionStorage.getItem('cart')) || [];
    setCartCount(cartItems.length);
  }, []);

  return (
    <header className="header">
      <h1 className="title">Shopping Cart</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>
    </header>
  );
}

export default Header;
