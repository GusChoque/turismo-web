import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Travels from "../Pages/Landing/Travels";
import About from "../Pages/About/AboutUs";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "./ErrorPage";
import Trip from "../Pages/Trips/Trip";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main><Travels /></Main>} />
        <Route path="/about" element={<Main><About /></Main>} />
        <Route path="/contact" element={<Main><Contact /></Main>} />
        <Route path="/:formattedName" element={<Main><Trip /></Main>} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
