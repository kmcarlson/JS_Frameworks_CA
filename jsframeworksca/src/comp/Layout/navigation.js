import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ totalQuantity }) => {
  return (
    <nav className="md:flex space-x-4">
      <Link to="/" className="text-white hover:text-gray-300">
        Home
      </Link>
      <Link to="/contact" className="text-white hover:text-gray-300">
        Contact
      </Link>
      <Link to="/cart" className="text-white hover:text-gray-300">
        <p>Cart ({totalQuantity})</p>
      </Link>
    </nav>
  );
};

export default Navigation;
