import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./comp/Layout/layout";
import Cart from "./pages/cart";
import Home from "./pages/home";
import Contact from "./pages/contact";
import ProductDetails from "./pages/productDetails";
import CheckoutSuccess from "./pages/checkoutSuccess";
import Navigation from "./comp/Layout/navigation";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const totalQuantity = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  return (
    <Router>
      <Layout>
        <Navigation totalQuantity={totalQuantity} />
        <Routes>
          <Route
            path="/cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/product/:id"
            element={<ProductDetails addToCart={addToCart} />}
          />
          <Route
            path="/checkoutSuccess"
            element={<CheckoutSuccess setCart={setCart} />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
