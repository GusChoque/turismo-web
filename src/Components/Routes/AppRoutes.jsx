import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "../Pages/Main/Content";
import Travels from "../Pages/Landing/Travels";
import About from "../Pages/About/AboutUs";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "./ErrorPage";
import Trip from "../Pages/Trips/Trip";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Content><Travels /></Content>} />
        <Route path="/turismo-web" element={<Content><Travels /></Content>} />
        <Route path="/about" element={<Content><About /></Content>} />
        <Route path="/contact" element={<Content><Contact /></Content>} />
        <Route path="/:formattedName" element={<Content><Trip /></Content>} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
