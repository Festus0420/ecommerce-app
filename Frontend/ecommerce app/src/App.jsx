import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './assets/pages/Home';
import Login from './assets/pages/Login';
import Cart from './assets/pages/Cart';
import Register from './assets/pages/Register';
import UserProfile from './assets/pages/UserProfile';
import ProductListing from './assets/pages/ProductListing';
import image1 from './assets/images/Headphone.PNG';
import image2 from './assets/images/Laptop.PNG';
import image3 from './assets/images/Smartwatch.PNG';
import image4 from './assets/images/Smartphone.jpg';

const InstagramIcon = () => (
  <svg width="24" height="24" fill="currentColor"><circle cx="12" cy="12" r="10" stroke="#E1306C" strokeWidth="2" fill="none"/><circle cx="12" cy="12" r="4" fill="#E1306C"/><rect x="17" y="7" width="2" height="2" rx="1" fill="#E1306C"/></svg>
);
const FacebookIcon = () => (
  <svg width="24" height="24" fill="currentColor"><circle cx="12" cy="12" r="10" stroke="#1877F3" strokeWidth="2" fill="none"/><path d="M13 17v-4h2l.5-3H13V8.5c0-.5.2-1 .8-1H15V5.5c-.3 0-1.2-.5-2.2-.5C10.3 5 10 6.2 10 7.5V10H8v3h2v4h3z" fill="#1877F3"/></svg>
);
const TwitterIcon = () => (
  <svg width="24" height="24" fill="currentColor"><circle cx="12" cy="12" r="10" stroke="#1DA1F2" strokeWidth="2" fill="none"/><path d="M17 9.5c-.4.2-.8.3-1.2.4.4-.3.7-.7.8-1.2-.4.2-.9.4-1.3.5-.4-.4-.9-.7-1.5-.7-1.1 0-2 .9-2 2 0 .2 0 .3.1.5-1.7-.1-3.2-.9-4.2-2.1-.2.3-.3.7-.3 1.1 0 .7.4 1.3 1 1.7-.4 0-.7-.1-1-.3v.1c0 1 .7 1.8 1.6 2-.2.1-.5.1-.7.1-.2 0-.3 0-.5-.1.3.8 1 1.3 1.8 1.3-1 .8-2.2 1.2-3.5 1.2-.2 0-.4 0-.6-.1C7.7 16.3 9.3 17 11 17c5.2 0 8-4.3 8-8v-.4c.5-.4.8-.7 1.1-1.1z" fill="#1DA1F2"/></svg>
);

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">E-commerce</div>
    <ul className="navbar-links">
      <li><a href="/home">Home</a></li>
      <li><a href="/productlisting">Products</a></li>
      <li><a href="/cart">Cart</a></li>
      <li><a href="/profile">Profile</a></li>
      <li className="dropdown">
        <button className="dropbtn">More ▼</button>
        <div className="dropdown-content">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
      </li>
    </ul>
  </nav>
);

const Footer = () => (
  <footer className="footer">
    <div>© {new Date().getFullYear()} E-commerce. All rights reserved.</div>
    <div className="footer-icons">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
    </div>
  </footer>
);


const products = [
  {
    _id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    description: "High-quality wireless headphones with noise cancellation",
    image: image1
  },
  {
    _id: 2,
    name: "Smartwatch",
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

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item._id === product._id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/productlisting" element={<ProductListing products={products} onAddToCart={handleAddToCart}/>} /> 
      </Routes>
      <Footer/>
      </BrowserRouter> 
        
    </div>
  )
}


export default App;

