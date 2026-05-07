import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import FloatingButtons from "./components/FloatingButtons";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Course from "./pages/Course";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Career from "./pages/Career";

/* LEGAL */
import Sndfprivacy from "./pages/Sndfprivacy";
import Sndfterms from "./pages/Sndfterms";
import Refund from "./pages/Refund";

/* BRANCHES */
import Pune from "./pages/branches/Pune";
import Mumbai from "./pages/branches/Mumbai";

/* SHOP */
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

/* SERVICES */
import Ndf from "./pages/Services/Ndf";
import Sndf from "./pages/Services/Sndf";

/* MEDIA */
import Gallery from "./pages/Gallery";

function App() {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SecurityService",
            "name": "SNDF Security Services",
            "url": "https://www.sndfndf.com"
          })}
        </script>
      </Helmet>

      <Router>
        <ScrollToTop />

        <Routes>

          {/* MAIN */}
          <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
          <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
          <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
          <Route path="/team" element={<><Navbar /><Team /><Footer /></>} />
          <Route path="/blog" element={<><Navbar /><Blog /><Footer /></>} />
          <Route path="/career" element={<><Navbar /><Career /><Footer /></>} />
          <Route path="/gallery" element={<><Navbar /><Gallery /><Footer /></>} />

          {/* COURSE */}
          <Route path="/course" element={<><Navbar /><Course /><Footer /></>} />

          {/* SHOP */}
          <Route path="/shop" element={<><Navbar /><Shop /><Footer /></>} />
          <Route path="/product/:id" element={<><Navbar /><ProductDetails /><Footer /></>} />
          <Route path="/cart" element={<><Navbar /><Cart /><Footer /></>} />
          <Route path="/checkout" element={<><Navbar /><Checkout /><Footer /></>} />

          {/* LEGAL */}
          <Route path="/privacy-policy" element={<><Navbar /><Sndfprivacy /><Footer /></>} />
          <Route path="/sndfterms" element={<><Navbar /><Sndfterms /><Footer /></>} />
          <Route path="/refund" element={<><Navbar /><Refund /><Footer /></>} />

          {/* BRANCHES */}
          <Route path="/branches/pune" element={<><Navbar /><Pune /><Footer /></>} />
          <Route path="/branches/mumbai" element={<><Navbar /><Mumbai /><Footer /></>} />

          {/* SERVICES */}
          <Route path="/services/ndf" element={<><Navbar /><Ndf /><Footer /></>} />
          <Route path="/services/sndf" element={<><Navbar /><Sndf /><Footer /></>} />

        </Routes>

        <FloatingButtons />
      </Router>
    </>
  );
}

export default App;
