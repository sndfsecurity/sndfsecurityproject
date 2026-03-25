import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Course from "./pages/Course";
import Contact from "./pages/Contact";
import Pune from "./pages/branches/Pune";
import FloatingButtons from "./components/FloatingButtons";


function App() {
  return (
    <Router>

      {/* 🔵 HEADER */}
      <Navbar />

      {/* 🔥 ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} /> 
        <Route path="/contact" element={<Contact />} /> 
         <Route path="/branches/pune" element={<Pune />} />

      </Routes>

      {/* 🔵 FOOTER */}
      <Footer />

      <FloatingButtons />

    </Router>
  );
}

export default App;