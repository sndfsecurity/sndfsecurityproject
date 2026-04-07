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

import Sndfprivacy from "./pages/Sndfprivacy";
import Sndfterms from "./pages/Sndfterms";
import Sndfdisclaimer from "./pages/Sndfdisclaimer";

import Pune from "./pages/branches/Pune";
import Assam from "./pages/branches/Assam";
import Career from "./pages/Career";

import Gallery from "./pages/Media/Gallery";

<<<<<<< HEAD
/* SHOP */
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
=======
import Ndf from "./pages/Services/Ndf";   
import Sndf from "./pages/Services/Sndf"; 
import Owl from "./pages/Services/Owl"; 
import Spydefence from "./pages/Services/Spydefence";


>>>>>>> f91e9ff262fb705a9a8993acee94004d88908c9c

function App() {
  return (

    
   <>


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

<<<<<<< HEAD
        {/* SHOP */}
        <Route path="/shop" element={<Shop />} />
<Route path="/product/:id" element={<ProductDetails />} />
<Route path="/cart" element={<Cart />} />
<Route path="/checkout" element={<Checkout />} />
        {/* BRANCHES */}
        <Route path="/branches/pune" element={<Pune />} />
        <Route path="/branches/assam" element={<Assam />} />

        {/* MEDIA */}
        <Route path="/media/gallery" element={<Gallery />} />
=======
        <Route path="/privacy-policy" element={<Sndfprivacy />} />
        <Route path="/sndfterms" element = {< Sndfterms/>}/>
        <Route path="/sndfdisclaimer" element = {< Sndfdisclaimer/>}/>


    
        {/* Branch pages */}
       <Route path="/branches/pune" element={<Pune />} />
       <Route path="/branches/assam" element={<Assam />} />

       
       <Route path="/media/gallery" element={<Gallery />} />


        <Route path="/services/ndf" element={<Ndf />} />
        <Route path="/services/sndf" element={<Sndf />} />
        <Route path="/services/owl" element={<Owl/>} />
        <Route path="/services/spydefence" element={<Spydefence/>} />

        



>>>>>>> f91e9ff262fb705a9a8993acee94004d88908c9c
      </Routes>

      <Footer />
      <FloatingButtons />

    </Router>

    </>
  );
}

export default App;