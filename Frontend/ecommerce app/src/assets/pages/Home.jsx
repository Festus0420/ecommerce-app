// import axios from 'axios';
// import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import image1 from '../images/Headphone.PNG';
import image2 from '../images/Laptop.PNG';
import image3 from '../images/Smartphones.jpg';
import image4 from '../images/Watch.PNG';  

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
            image: image1
        },
        {
            _id: 2,
            name: "Smart Watch",
            price: 199.99,
            description: "Feature-rich smartwatch with health tracking",
            image: image3
        },
        {
            _id: 3,
            name: "Laptop",
            price: 999.99,
            description: "Powerful laptop for work and gaming",
            image: image2
        },
        {
            _id: 4,
            name: "Smartphone",
            price: 699.99,
            description: "Latest smartphone with advanced camera",
            image: image4
        }
    ];


    return (
        <div className="container">
            <h1 className="page-title">Discover Our Products</h1>
            <div className="product-grid">
                {dummyProducts.map(product => (
                    <ProductCard 
                        key={product._id} 
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;