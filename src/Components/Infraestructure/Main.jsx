import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

/* eslint-disable react/prop-types */
const Main = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Main;