import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Home from "../Pages/Landing/Home";
import Travels from "../Pages/Landing/Travels"
import About from "../Pages/About/AboutUs"
import Contact from "../Pages/Contact/Contact"
import ErrorPage from "./ErrorPage";
import Trip from "../Pages/Trips/Trip";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
          <Main>
              <Travels />
          </Main>
        ),
        errorElement: <ErrorPage />,
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
      {
        path: "/:formattedName",
        element: (
          <Main>
              <Trip />
          </Main>
        ),
      },
  ]);

export default router;