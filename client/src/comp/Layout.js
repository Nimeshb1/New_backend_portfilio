import React from "react";
import { NavBars } from "./NavBars";
import { Footer } from "./Footer";

const Layout = ({ children }) => {
  return (
    <div style={{ backgroundColor: "#1b1f24" }}>
      <NavBars />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
