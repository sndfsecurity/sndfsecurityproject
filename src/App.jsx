import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <Router>

      {/* 🔵 HEADER */}
      <Navbar />

      {/* 🔥 ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* 🔵 FOOTER */}
      <Footer />

    </Router>
  );
}

export default App;