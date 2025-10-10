import './App.css';
import Header from './Components/Header';
import Card from './Components/prodectList/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';   
import { useState } from 'react';
import Cart from './Components/Cart';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  
  const handleSearch = (term) => {
    setSearchTerm(term)
  }
  
  const handleAddToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id)
    if (existingItem) {
      const updatedCart = cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
      setCart(updatedCart)
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const handleUpdateCart = (updatedCart) => {
    setCart(updatedCart)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header cart={cart} onSearch={handleSearch} />
          <Card onAddToCart={handleAddToCart} searchTerm={searchTerm} />
        </>
      )
    },
    {
      path: "/cart",
      element: (
        <>
          <Header cart={cart} onSearch={handleSearch} />
          <Cart cart={cart} onUpdateCart={handleUpdateCart} />
        </>
      )
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
