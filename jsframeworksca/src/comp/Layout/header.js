import React from "react";
import Navigation from "./navigation";

const Header = () => {
 return (
   <header className="bg-gray-800 p-4">
     <div className="container mx-auto flex justify-between items-center">
       <div className="text-white text-lg font-bold">The E-Commerce Store</div>
       <Navigation />
     </div>
   </header>
 );
};

export default Header;
