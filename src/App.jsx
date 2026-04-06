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

import Gallery from "./pages/Media/Gallery";

import Ndf from "./pages/Services/Ndf";   
import Sndf from "./pages/Services/Sndf"; 
import Owl from "./pages/Services/Owl"; 
import Spydefence from "./pages/Services/Spydefence";



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

        



      </Routes>

      <Footer />

      <FloatingButtons />

    </Router>

    </>
  );
}

export default App;