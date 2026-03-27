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
import Assam from "./pages/branches/Assam";
import Career from "./pages/Career";

import Gallery from "./pages/Media/Gallery";

/* SHOP */
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";

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
        <Route path="/career" element={<Career />} />

        {/* SHOP */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* BRANCHES */}
        <Route path="/branches/pune" element={<Pune />} />
        <Route path="/branches/assam" element={<Assam />} />

        {/* MEDIA */}
        <Route path="/media/gallery" element={<Gallery />} />
      </Routes>

      <Footer />
      <FloatingButtons />
    </Router>
  );
}

export default App;