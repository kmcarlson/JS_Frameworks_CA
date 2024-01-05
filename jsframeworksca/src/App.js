// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './comp/header';
import Footer from './comp/footer';
import Products from './pages/products';
import Contact from './pages/contact';
import './App.css';

const Home = () => (
  <div>
    <h1>Welcome to the Home Page!</h1>
    <p>This is the content for the home page.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
