// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './comp/Layout/layout'; 
import Products from './pages/products';
import Home from './pages/home';
import Contact from './pages/contact';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} /> 
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
