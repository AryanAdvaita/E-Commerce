import logo from './logo.svg';
import './App.css';
import ProductCard from './product_card';
import Productlisting from './product_listing';
import ProductDetails from './product_detail';
import ShoppingCart from './shopping_cart';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './home_page';
import ProductPage from './products';
import CartPage from './cart_page';
import cart from './cart_page';
import UserRegistration from './user';
import { AuthContext } from './auth_context';

function App() {
  const [cartItems, setCartItems] = useState([]);
  //session 9 here
  const [user, setUser] = React.useState(null);
  const login = userData => setUser(userData);
  const logout = () => setUser(null);

  const handleAddToCart = (productName) => {
    alert('${productName} added to cart!');
    setCartItems([...cartItems, productName]);
  };

  const handleRemoveFromCart = (index) => {
    alert('${productName} removed from cart!');
    setCartItems(cartItems.filter(item => item !== index));
  };

  const products = [
    { id: 1, name: 'Wood Watch', image: '/images/watch.jpg', price: 199, category: 'watches', inStock: true },
    { id: 2, name: 'Iphone', image: '/images/electronics.jpg', price: 499, category: 'electronics', inStock: false },
    { id: 3, name: 'To Kill A Mockingbird', image: '/images/book.jpg', price: 15, category: 'books', inStock: true },

    { id: 4, name: 'Metal Watch', image: '/images/watch.jpg', price: 199, category: 'watches', inStock: true },
    { id: 5, name: 'Ipad', image: '/images/electronics.jpg', price: 499, category: 'electronics', inStock: false },
    { id: 6, name: 'Lord of The Rings', image: '/images/book.jpg', price: 15, category: 'books', inStock: true }

  ];

  return (
    
  <AuthContext.Provider value={{ user, login, logout }}>
      {
      
      <Router>
      <nav style={{ padding: 10, background: '#eee' }}>
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/products" style={{ marginRight: 10 }}>Products</Link>
        <Link to="/shopping_cart" style={{ marginRight: 10 }}>Cart</Link>
        <Link to="/user">User Registration</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/products"
          element={<Productlisting products={products} onAddToCart={handleAddToCart}/>}
        />
        <Route path="/product/:id" element={<Productlisting products={products} onAddToCart={handleAddToCart} />} />
        <Route
          path="/shopping_cart"
          element={<CartPage cart={cart} onRemove={handleRemoveFromCart} />}
        />

        <Route
          path="/user"
          element={<UserRegistration />}
        />
      </Routes>
    </Router>

    //session 10 here
    }
  </AuthContext.Provider>
    
  );
}

export default App;
