import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

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
import Sndfdisclaimer from "./pages/Sndfdisclaimer";
import Refund from "./pages/Refund";

/* BRANCHES */
import Pune from "./pages/branches/Pune";
import Assam from "./pages/branches/Assam";
import Mumbai from "./pages/branches/Mumbai";
import Hyderabad from "./pages/branches/Hyderabad";


/* SHOP */
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

/* SERVICES */
import Ndf from "./pages/Services/Ndf";   
import Sndf from "./pages/Services/Sndf"; 
import Owl from "./pages/Services/Owl"; 
import Spydefence from "./pages/Services/Spydefence";


import Enquiries from "./admin/pages/Enquiries";
import ContactEnquiries from "./admin/pages/ContactEnquiries";
import QuickEnquiries from "./admin/pages/QuickEnquiries";

import AdminLayout from "./admin/AdminLayout";

/* MEDIA */
import Gallery from "./pages/Gallery";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {

 const isAdmin = localStorage.getItem("admin");

  return (
    <>
  
     
      <Toaster
        position="top-right"
        containerStyle={{
          top: 180,
          right: 200,
          zIndex: 999999
        }}
      />
  

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SecurityService",
            "name": "SNDF Security Services",
            "url": "https://www.sndfndf.com",
            "logo": "https://www.sndfndf.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+919970383155",
              "contactType": "customer service",
              "areaServed": "IN"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pune",
              "addressRegion": "Maharashtra",
              "postalCode": "411046",
              "addressCountry": "IN"
            }
          })}
        </script>
      </Helmet>

      <Router>
        <Navbar />
        <ScrollToTop />

        <Routes>

          {/* MAIN */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/career" element={<Career />} />
          <Route path="/gallery" element={<Gallery />} />

          {/* COURSE */}
          <Route path="/course" element={<Course />} />
          <Route path="/course/dic" element={<Course />} />

          {/* SHOP */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* LEGAL */}
          <Route path="/privacy-policy" element={<Sndfprivacy />} />
          <Route path="/sndfterms" element={<Sndfterms />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/Sndfdisclaimer" element={<Sndfdisclaimer />} />

          {/* BRANCHES */}
          <Route path="/branches/pune" element={<Pune />} />
          <Route path="/branches/assam" element={<Assam />} />
          <Route path="/branches/mumbai" element={<Mumbai />} />
          <Route path="/branches/hyderabad" element={<Hyderabad />} />

          {/* SERVICES */}
          <Route path="/services/ndf" element={<Ndf />} />
          <Route path="/services/sndf" element={<Sndf />} />
          <Route path="/services/owl" element={<Owl />} />
          <Route path="/services/spydefence" element={<Spydefence />} />

          
          <Route
  path="/admin/enquiries"
  element={
    <ProtectedRoute>
      <Enquiries />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/enquiries/contact"
  element={
    <ProtectedRoute>
      <ContactEnquiries />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/enquiries/quick"
  element={
    <ProtectedRoute>
      <QuickEnquiries />
    </ProtectedRoute>
  }
/>

<Route path="/admin/login" element={<AdminLayout />} />


           {/* <Route
          path="/admin/enquiries"
          element={
          isAdmin ? <Enquiries /> : <Navigate to="/admin/adminlayout" /> }/> */}

          {/* <Route path="/admin/enquiries/contact" element={<ContactEnquiries />} />
          <Route path="/admin/enquiries/quick" element={<QuickEnquiries />} /> */}

          




        </Routes>

        <Footer />
        <FloatingButtons />
      </Router>
    </>
  );
}

export default App;