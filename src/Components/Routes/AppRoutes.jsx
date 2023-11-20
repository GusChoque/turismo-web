import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Travels from "../Pages/Landing/Travels";
import About from "../Pages/About/AboutUs";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "./ErrorPage";
import Trip from "../Pages/Trips/Trip";
import Home from "../Pages/Landing/Home";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main><Home /><Travels /></Main>} />
        <Route path="/about" element={<Main><Home /><About /></Main>} />
        <Route path="/contact" element={<Main><Home /><Contact /></Main>} />
        <Route path="/:formattedName" element={<Main><Home /><Trip /></Main>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
