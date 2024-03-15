import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, removeFromCart }) => {
	// console.log(cart);
  const totalPrice = cart.reduce((total, product) => {
    const price = product.discountedPrice || product.price;
    return total + price;
  }, 0);

  const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0);
  // console.log(totalQuantity)

  return (
    <div className="p-4">
      {cart.map((product) => (
        <div key={product.id} className="border-b p-2 my-2">
          <h2 className="font-bold text-lg">{product.title}</h2>
          <p className="text-sm text-gray-600">{product.description}</p>

          <p
            className={`${
              product.discountedPrice ? "text-red-600" : "text-gray-600"
            } mb-2`}
          >
            Price: ${product.discountedPrice || product.price}
          </p>

          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            onClick={() => removeFromCart(product.id)}
          >
            Delete
          </button>
        </div>
      ))}
      {cart.length > 0 && (
        <div className="mt-4 flex items-center">
          <p className="text-lg font-bold mr-4">
            Total Price: ${totalPrice.toFixed(2)}
          </p>
          <p className="text-sm text-gray-600 mr-4">
            Total Quantity: {totalQuantity}
          </p>

          <Link
            to="/checkoutSuccess"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          >
            Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;