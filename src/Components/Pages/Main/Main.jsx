import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Whatsapp from "../../Utils/Whatsapp";

/* eslint-disable react/prop-types */
const Main = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />
      <Whatsapp />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Main;
