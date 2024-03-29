import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, totalQuantity }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header totalQuantity={totalQuantity} />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
