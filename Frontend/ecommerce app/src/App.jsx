import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './assets/pages/Home'
import Login from './assets/pages/Login'
import Cart from './assets/pages/Cart'
import ProductListing from './assets/pages/ProductListing'

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

export default App

