import React from 'react';
import './ProductCard.css';
import {Link } from 'react-router-dom'

const ProductCard = ({ product }) => (
    <div className = "product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price}</p> 
        <button><Link to='/cart'> Add to Cart</Link></button>    
    </div>
);

export default ProductCard;
