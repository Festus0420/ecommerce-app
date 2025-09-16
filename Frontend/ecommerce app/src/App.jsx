import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './assets/pages/Home'
import Login from './assets/pages/Login'
import Cart from './assets/pages/Cart'
import ProductListing from './assets/pages/ProductListing'

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
    image: iamge2
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
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter> 
        
    </div>
  )
}

export default App;

