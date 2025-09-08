import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products').then(res => setProducts(res.data))
    }, []);

    return (
        <div className="product-grid">
            {products.map(p => <ProductCard key={p._id} product={p} />)}
    
       
        </div>
    );
};

export default Home;