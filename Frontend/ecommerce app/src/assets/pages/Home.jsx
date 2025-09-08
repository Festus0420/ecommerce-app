// import axios from 'axios';
// import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';

const Home = () => {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     axios.get('/api/products').then(res => setProducts(res.data))
    // }, []);
     const dummyProducts = [
        {
            _id: 1,
            name: "Wireless Headphones",
            price: 99.99,
            description: "High-quality wireless headphones with noise cancellation",
            image: "https://placehold.co/300x300?text=Headphones"
        },
        {
            _id: 2,
            name: "Smart Watch",
            price: 199.99,
            description: "Feature-rich smartwatch with health tracking",
            image: "https://placehold.co/300x300?text=Watch"
        },
        {
            _id: 3,
            name: "Laptop",
            price: 999.99,
            description: "Powerful laptop for work and gaming",
            image: "https://placehold.co/300x300?text=Laptop"
        },
        {
            _id: 4,
            name: "Smartphone",
            price: 699.99,
            description: "Latest smartphone with advanced camera",
            image: "https://placehold.co/300x300?text=Phone"
        }
    ];


    return (
        <div className="product-grid">
            {/* {products.map(p => <ProductCard key={p._id} product={p} />)} */}
           
       <div className="container">
            <h1 className="page-title">Featured Products</h1>
            <div className="product-grid">
                {dummyProducts.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
        </div>
    );
};

export default Home;