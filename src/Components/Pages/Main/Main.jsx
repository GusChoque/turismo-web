import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Whatsapp from "../../Utils/Whatsapp";
import Home from "../Landing/Home";

/* eslint-disable react/prop-types */
const Main = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />
      <Whatsapp />
      <Home />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Main;
