import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    cart.push(product);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    // Update cart count in header
    window.location.reload();
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
      ))}
    </div>
  );
}

export default ProductList;
