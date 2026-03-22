import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import aboutImg from "../assets/images/hero.jpeg"; // replace with your image


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { Autoplay } from "swiper/modules";

<Swiper
  modules={[Autoplay, Pagination]}
  loop={true}
  speed={800}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  pagination={{ clickable: true }}
  spaceBetween={25}
  breakpoints={{
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
></Swiper>

import {
  FaUserShield,
  FaUserSecret,
  FaSearch,
  FaUserCheck,     // ✅ for Owl Security
  FaShieldAlt,
  FaUserLock       // ✅ for Spy Defence
} from "react-icons/fa";

import { FaCheckCircle } from "react-icons/fa";

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <div className="hero-text" data-aos="fade-up">

            <span className="hero-tag">Trusted Security Network</span>

            <h1>
              Protecting What Matters <br />
              <span>Across India</span>
            </h1>

            <p>
              SNDF is a leading security and investigation organization <br />
              managing multiple units nationwide, delivering trusted protection and intelligence services.
            </p>

            <div className="hero-buttons">
              <button className="btn btn-danger">Get Protection</button>
              <button className="btn btn-outline-light">Explore Services</button>
            </div>

            <div className="hero-trust">
              <div>✔ 3500+ Clients</div>
              <div>✔ 5+ Years</div>
              <div>✔ PAN India</div>
            </div>

          </div>
        </div>
      </section>



      {/* about section.............................................. */}
       <section className="about">
      <div className="about-container">

        {/* IMAGE */}
        <div className="about-image">
          <img src={aboutImg} alt="about" />
        </div>

        {/* CONTENT */}
        <div className="about-content">
          <span className="about-tag">WELCOME TO SNDF</span>

          <h2>
            Your Trusted Partner in <br />
            <span>Security & Investigation</span>
          </h2>

          <p>
            At SNDF, we go beyond basic security services. We deliver
            reliable, discreet, and result-driven solutions designed
            to protect what matters most to our clients.
          </p>

          <p>
            Our experienced professionals combine real-world expertise
            with modern technology to handle complex cases with
            precision and confidentiality.
          </p>

          {/* FEATURES */}
          <div className="about-features">
            <div className="feature">✔ 3500+ Happy Clients</div>
            <div className="feature">✔ Quick Response Team</div>
            <div className="feature">✔ Verified Professionals</div>
            <div className="feature">✔ 24/7 Support</div>
          </div>

          {/* BUTTON */}
          <a href="/about" className="about-btn">
            Read More →
          </a>

        </div>

      </div>
    </section>
     
     


      {/* ================= SERVICES ================= */}
      
  <section className="services">
  <div className="container">

    <div className="services-header" data-aos="fade-up">
      <h2>Our Services</h2>
      <p>Trusted security & investigation solutions across India</p>
    </div>

    <div className="services-grid">

      {/* 1 */}
      <div className="service-card" data-aos="fade-up">
        <div className="icon"><FaUserShield /></div>
        <h3>Security Services</h3>
        <p>
          Highly trained security personnel providing protection for residential,
          commercial, and event environments.
        </p>
      </div>

      {/* 2 */}
      <div className="service-card" data-aos="fade-up" data-aos-delay="100">
        <div className="icon"><FaUserSecret /></div>
        <h3>Detective Investigation Services</h3>
        <p>
          Professional and confidential investigation services for personal,
          legal, and corporate cases handled discreetly.
        </p>
      </div>

      {/* 3 */}
      <div className="service-card" data-aos="fade-up" data-aos-delay="200">
        <div className="icon"><FaSearch /></div>
        <h3>Surveillance & Monitoring</h3>
        <p>
          Advanced surveillance solutions including tracking, monitoring,
          and intelligence gathering for enhanced security.
        </p>
      </div>

      {/* 4 */}
      <div className="service-card" data-aos="fade-up" data-aos-delay="300">
        <div className="icon"><FaUserCheck /></div>
        <h3>Owl Security Services</h3>
        <p>
          Night surveillance and specialized security services ensuring
          continuous protection during high-risk hours.
        </p>
      </div>

      {/* 5 */}
      <div className="service-card" data-aos="fade-up" data-aos-delay="400">
        <div className="icon"><FaShieldAlt /></div>
        <h3>Guard Services</h3>
        <p>
          Reliable and disciplined guard services for offices, industries,
          and private properties with full safety assurance.
        </p>
      </div>

      {/* 6 */}
      <div className="service-card" data-aos="fade-up" data-aos-delay="500">
        <div className="icon"><FaUserLock /></div>
        <h3>Spy Defence</h3>
        <p>
          Training and counter-surveillance programs to detect threats,
          prevent espionage, and ensure personal security awareness.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="why">
        <div className="container why-container">

          {/* LEFT */}
          <div className="why-left" data-aos="fade-right">
            <h2>Why Choose SNDF?</h2>

            <p>
              We deliver trusted security and investigation services with professionalism,
              confidentiality, and nationwide presence.
            </p>

            <div className="why-points">
              <div><FaCheckCircle /> Experienced & Verified Team</div>
              <div><FaCheckCircle /> 100% Confidential Investigations</div>
              <div><FaCheckCircle /> Live Monitoring</div>
              <div><FaCheckCircle /> Fast Response & Support</div>
              <div><FaCheckCircle /> Advanced Surveillance Technology</div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="why-right">

            <div className="why-card">
              <h3>3500+</h3>
              <p>Happy Clients</p>
            </div>

            <div className="why-card">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>

            <div className="why-card">
              <h3>1200+</h3>
              <p>Cases Solved</p>
            </div>

            <div className="why-card">
              <h3>24/7</h3>
              <p>Support</p>
            </div>

          </div>

        </div>
      </section>


      {/* testimonial sections///////////////////////////////////////////////////// */}

      
<section className="testimonial">
  <div className="testimonial-container">

    <h2 className="section-title" data-aos="fade-up">Testimonials</h2>
    <p className="section-subtitle" data-aos="fade-up">
      What our clients say about our trusted security services
    </p>

    <Swiper
      modules={[Autoplay, Pagination]}
      loop={true}
      speed={900}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
        el: ".custom-pagination"
      }}
      spaceBetween={30}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >

      {[
        {
          badge: "Confidential Client",
          text: "Highly professional and discreet service. Everything handled with full confidentiality.",
          name: "Corporate Client"
        },
        {
          badge: "Verified Client",
          text: "Quick response and very reliable security staff. Felt completely safe.",
          name: "Event Organizer"
        },
        {
          badge: "Confidential Case",
          text: "Investigation handled carefully without any information leak.",
          name: "Private Client"
        },
        {
          badge: "Verified Client",
          text: "Excellent coordination and professional guards. Highly recommended.",
          name: "Business Owner"
        },
        {
          badge: "Confidential Client",
          text: "Very responsive and trustworthy investigation team with accurate results.",
          name: "Legal Client"
        },
        {
          badge: "Verified Case",
          text: "Smooth service and strong communication. Felt secure throughout.",
          name: "Event Manager"
        }
      ].map((item, index) => (
        <SwiperSlide key={index}>
          <div className="testimonial-card">
            <span className="badge">{item.badge}</span>

            <div className="stars">⭐⭐⭐⭐⭐</div>

            <p>{item.text}</p>

            <h4>{item.name}</h4>
          </div>
        </SwiperSlide>
      ))}

    </Swiper>

    {/* OUTSIDE PAGINATION */}
    <div className="custom-pagination"></div>

  </div>
</section>
    
    </>
  );
};

export default Home;