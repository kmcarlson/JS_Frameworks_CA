import React from "react";
import { Link } from "react-router-dom";

function CheckoutSuccess({ setCart }) {
  React.useEffect(() => {
    setCart([]);
  }, [setCart]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Thank you for your order!</h1>
      <p className="text-lg mb-4">We appreciate your support.</p>
      <p className="text-lg mb-4">
        Your order will be processed and shipped as soon as possible.
      </p>
      <p className="text-lg mb-4">
        Feel free to contact us if you have any questions.
      </p>
      <Link to="/">
        <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
          Back to store
        </button>
      </Link>
    </div>
  );
}

export default CheckoutSuccess;
