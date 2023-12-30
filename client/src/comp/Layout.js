import React, { useState } from "react";
import { NavBars } from "./NavBars";
import { Footer } from "./Footer";

const Layout = ({ children }) => {
  const [timer, settimer] = useState(true);

  setTimeout(() => {
    settimer(false);
  }, 5000);

  return (
    <>
      {timer === true ? (
        <div className="newdiv">
          <div className="nimesh">Nimesh</div>
          <div className="bista">Bista</div>
        </div>
      ) : (
        <div style={{ backgroundColor: "#1b1f24" }}>
          <NavBars />
          {children}
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layout;
