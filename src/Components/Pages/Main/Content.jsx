import NavBar from "./NavBar";
import Footer from "./Footer";
import Whatsapp from "../../Utils/Whatsapp";
import Home from "../Landing/Home";
import { Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Content = ({ children }) => {
  return (
    <>
      <NavBar />
      <Whatsapp />
      <Home />
      {children}
      <Outlet />
      <Footer />
    </>
  );
};

export default Content;
