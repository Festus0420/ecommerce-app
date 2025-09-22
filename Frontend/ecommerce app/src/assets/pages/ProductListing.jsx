import React from 'react';
import './ProductListing.css';


function ProductListing({ products }) {

  return (
    <div className="listing-container">
      <h2 className="listing-title">🛍️ Explore Our Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product._id}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span className="price">${product.price.toFixed(2)}</span>
              <button className="add-btn" > Add to Cart </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;