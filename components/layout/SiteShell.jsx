import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const SiteShell = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default SiteShell;
