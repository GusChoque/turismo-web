import { createBrowserRouter } from "react-router-dom";
import Main from "../Infraestructure/Main";
import Home from "../Landing/Home";
import Travels from "../Landing/Travels"
import About from "../About/AboutUs"
import Contact from "../Contact/Contact"

const router = createBrowserRouter([
    {
        path: "/",
        element: (
          <Main>
              <Home />
              <Travels />
          </Main>
        ),
        
      },
      {
        path: "/about",
        element: (
          <Main>
              <About />
          </Main>
        ),
        
      },
      {
        path: "/contact",
        element: (
          <Main>
              <Contact />
          </Main>
        ),
        
      },
  ]);

export default router;