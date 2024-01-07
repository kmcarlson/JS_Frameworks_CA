import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ addToCart }) => {
 const [product, setProduct] = useState(null);
 const { id } = useParams();

 useEffect(() => {
   fetch(`https://api.noroff.dev/api/v1/online-shop/${id}`)
     .then((res) => res.json())
     .then((data) => setProduct(data))
     .catch((error) => console.error("Error fetching product:", error));
 }, [id]);

 return (
   <div>
     {product ? (
       <div>
         <h1>{product.title}</h1>
         <p>{product.description}</p>
         <p>Price: ${product.price}</p>
         <img src={product.imageUrl} alt={product.title} />
         <button onClick={() => addToCart(product)}>Add to cart</button>
       </div>
     ) : (
       <p>Loading...</p>
     )}
   </div>
 );
};

export default ProductDetails;
