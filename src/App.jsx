import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import FloatingButtons from "./components/FloatingButtons";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Course from "./pages/Course";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Pune from "./pages/branches/Pune";


function App() {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />

        {/* Branch pages */}
       <Route path="/branches/pune" element={<Pune />} />

      </Routes>

      <Footer />

      <FloatingButtons />

    </Router>
  );
}

export default App;