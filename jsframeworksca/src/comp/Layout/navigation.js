import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navigation = ({ cart }) => {
  const [totalQuantity, setTotalQuantity] = useState(0);

  const updateCartQuantity = () => {
    console.log("update da?");
    if (cart) {
      console.log("if her da?:", cart);
      const newTotalQuantity = cart.reduce(
        (total, product) => total + product.quantity,
        0
      );
      setTotalQuantity(newTotalQuantity);
    }
  };

  console.log("cart:", cart);

  useEffect(() => {
    updateCartQuantity();
  }, [cart]);

  console.log("antall:", totalQuantity);

  return (
    <nav className="md:flex space-x-4">
      {" "}
      <Link to="/" className="text-white hover:text-gray-300">
        {" "}
        Home{" "}
      </Link>{" "}
      <Link to="/contact" className="text-white hover:text-gray-300">
        {" "}
        Contact{" "}
      </Link>{" "}
      <Link to="/cart" className="text-white hover:text-gray-300">
        <span>
          <i className="fas fa-shopping-cart"></i> ({totalQuantity}){" "}
        </span>
      </Link>
    </nav>
  );
};

export default Navigation;
