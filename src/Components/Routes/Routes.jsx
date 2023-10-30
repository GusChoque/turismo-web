import { createBrowserRouter } from "react-router-dom";
import Main from "../Infraestructure/Main";
import Home from "../Landing/Home";
import Travels from "../Landing/Travels"
import About from "../About/AboutUs"
import Contact from "../Contact/Contact"
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
          <Main>
              <Home />
              <Travels />
          </Main>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        element: (
          <Main>
              <Home />
              <About />
          </Main>
        ),
        
      },
      {
        path: "/contact",
        element: (
          <Main>
              <Home />
              <Contact />
          </Main>
        ),
        
      },
  ]);

export default router;