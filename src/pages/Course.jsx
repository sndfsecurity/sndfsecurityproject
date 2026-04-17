import "./Course.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaCalendarAlt, FaTools, FaUserTie, FaCertificate } from "react-icons/fa";
import { FaUserSecret, FaLaptopCode, FaSearch } from "react-icons/fa";

import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import dic1 from "../assets/images/dic1.webp";
import dic2 from "../assets/images/dic2.webp";
import dic3 from "../assets/images/dic3.webp";
import dic4 from "../assets/images/dic4.webp";
import { Helmet } from "react-helmet-async";



const Course = () => {

  // useEffect(() => {
  //   AOS.init({
  //     duration: 800,
  //     once: true,
  //   });
  // }, []);

  useEffect(() => {
  const loadAOS = async () => {
    const AOS = (await import("aos")).default;
    await import("aos/dist/aos.css");

    AOS.init({
      duration: 800,
      once: true,
    });
  };

  loadAOS();
}, []);

  return (
    <main>

    
<Helmet>
  <title>Detective Investigation Course (DIC) | SNDF Training Program</title>

  <meta
    name="description"
    content="Join SNDF Detective Investigation Course (DIC) and learn surveillance, field investigation, cybercrime basics, and real case handling with practical training."
  />

  <meta name="keywords" content="detective course india, investigation training, private detective course, surveillance training, SNDF course" />

  <link rel="canonical" href="https://www.sndfndf.com/course" />
</Helmet>



      {/* ===== HERO SECTION ===== */}

      <div className="course-page">

      <section className="course-hero">

        {/* Overlay */}
        <div className="hero-overlayc"></div>

        {/* Content */}
        <div className="hero-contentc" data-aos="fade-up">

          <h1>
            Detective Investigation <span>Course (DIC)</span>
          </h1>

          <p>
            Learn professional investigation skills with real-world training,<br></br>
            surveillance techniques, cybercrime basics, and field exposure.
          </p>

          {/* Badges */}
          <div className="hero-badges">
            <span>✔ Practical Training</span>
            <span>✔ Field Exposure</span>
            <span>✔ Certification</span>
          </div>

          {/* Mini Overview inside Hero */}
         
         <div className="hero-stats">

            <div className="stat-box" data-aos="zoom-in">
                <div className="stat-icon-box calendar">
                <FaCalendarAlt aria-hidden="true"/>
                </div>
                <h3>90+</h3>
                <p>Days Training</p>
            </div>

            <div className="stat-box" data-aos="zoom-in" data-aos-delay="100">
                <div className="stat-icon-box tools">
                <FaTools aria-hidden="true"/>
                </div>
                <h3>100%</h3>
                <p>Practical Work</p>
            </div>

            <div className="stat-box" data-aos="zoom-in" data-aos-delay="200">
                <div className="stat-icon-box user">
                <FaUserTie aria-hidden="true"/>
                </div>
                <h3>Offline</h3>
                <p>Mode</p>
            </div>

            <div className="stat-box" data-aos="zoom-in" data-aos-delay="300">
                <div className="stat-icon-box certificate">
                <FaCertificate aria-hidden="true"/>
                </div>
                <h3>Certified</h3>
                <p>Course</p>
            </div>

</div>

 </div>

</section>


{/* ///////////////////////////////////////////////////////////// */}

 <section className="dic-info" aria-labelledby="dic-heading">
      <div className="container">

        {/* HEADING */}
        <div className="dic-header" data-aos="fade-up">
          <h2 id="dic-heading">
            What is DIC Course?
          </h2>
          <p>
            The Detective Investigation Course (DIC) is designed to train individuals
            in professional investigation techniques with real-world exposure and practical learning.
          </p>
        </div>

        {/* CARDS */}
        <div className="dic-grid">

          <div className="dic-card" data-aos="zoom-in">
            <FaUserSecret className="dic-icon" aria-hidden="true"/>
            <h3>Field Investigation</h3>
            <p>Learn real-world investigation and surveillance techniques.</p>
          </div>

          <div className="dic-card" data-aos="zoom-in" data-aos-delay="100">
            <FaLaptopCode className="dic-icon" aria-hidden="true"/>
            <h3>Cyber Crime</h3>
            <p>Understand digital tracking and cybercrime basics.</p>
          </div>

          <div className="dic-card" data-aos="zoom-in" data-aos-delay="200">
            <FaSearch className="dic-icon" aria-hidden="true"/>
            <h3>Case Handling</h3>
            <p>Develop skills to manage and solve investigation cases.</p>
          </div>

          <div className="dic-card" data-aos="zoom-in" data-aos-delay="300">
            <FaCertificate className="dic-icon" aria-hidden="true"/>
            <h3>Certification</h3>
            <p>Get certified after successful course completion.</p>
          </div>

        </div>

      </div>
    </section>


    {/* module////////////////////////////////////////////////////// */}
     <section className="modules">
  <div className="container">

    <div className="modules-header" data-aos="fade-up">
      <h2>Course Modules</h2>
      <p>Structured training program designed to build professional investigation skills step by step.</p>
    </div>

    <div className="timeline">

      <div className="timeline-item" data-aos="fade-right">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <span>01</span>
          <h3>Investigation Ethics</h3>
          <p>Learn professional ethics, confidentiality, and legal responsibilities required in real-world investigations.</p>
        </div>
      </div>

      <div className="timeline-item" data-aos="fade-left">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <span>02</span>
          <h3>Information Gathering</h3>
          <p>Understand surveillance techniques, background checks, and intelligence collection methods.</p>
        </div>
      </div>

      <div className="timeline-item" data-aos="fade-right">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <span>03</span>
          <h3>Crime Investigation</h3>
          <p>Learn investigation procedures, evidence handling, and case-solving strategies.</p>
        </div>
      </div>

      <div className="timeline-item" data-aos="fade-left">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <span>04</span>
          <h3>Cyber Crime</h3>
          <p>Explore digital crimes, online fraud detection, and cyber security fundamentals.</p>
        </div>
      </div>

      <div className="timeline-item" data-aos="fade-right">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <span>05</span>
          <h3>Forensic Investigation</h3>
          <p>Basics of forensic science including fingerprints, evidence analysis, and reporting.</p>
        </div>
      </div>

      <div className="timeline-item" data-aos="fade-left">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <span>06</span>
          <h3>Field Training</h3>
          <p>Hands-on field experience to understand real investigation scenarios.</p>
        </div>
      </div>

      <div className="timeline-item" data-aos="fade-right">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <span>07</span>
          <h3>Self Defence</h3>
          <p>Basic self-protection techniques for safety during operations.</p>
        </div>
      </div>

      <div className="timeline-item" data-aos="fade-left">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <span>08</span>
          <h3>Expert Lectures</h3>
          <p>Sessions from industry professionals sharing real case experiences.</p>
        </div>
      </div>

      <div className="timeline-item" data-aos="fade-right">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <span>09</span>
          <h3>Spy Tools & Gadgets</h3>
          <p>Introduction to modern surveillance tools and investigation devices.</p>
        </div>
      </div>

      {/* NEW ADDED */}
      <div className="timeline-item" data-aos="fade-left">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <span>10</span>
          <h3>Case Study Analysis</h3>
          <p>Analyze real-life cases to understand investigation planning and execution.</p>
        </div>
      </div>

      <div className="timeline-item" data-aos="fade-right">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <span>11</span>
          <h3>Report Writing</h3>
          <p>Learn how to prepare professional investigation reports with proper documentation.</p>
        </div>
      </div>

    </div>

  </div>
</section>


{/* what you will learn/////////////////////// */}
<section className="learn-premium">
  <div className="container">

    <div className="learn-header">
      <h2>What You Will Learn</h2>
      <p>
        Build strong investigative skills with practical knowledge,
        modern tools, and real-world exposure.
      </p>
    </div>

    <div className="learn-wrapper">

      <div className="learn-line"></div>

      <div className="learn-list">

        <div className="learn-item" data-aos="fade-up" data-aos-delay="100">
          <div className="learn-dot"></div>
          <div className="learn-card">
            <h3>Advanced Investigation Techniques</h3>
            <p>
              Learn <span>professional investigation methods</span> including
              surveillance, tracking, and intelligence gathering.
            </p>
          </div>
        </div>

        <div className="learn-item">
          <div className="learn-dot"></div>
          <div className="learn-card">
            <h3>Surveillance & Intelligence</h3>
            <p>
              Master discreet monitoring and <span>background verification </span>
              techniques used in real-world operations.
            </p>
          </div>
        </div>

        <div className="learn-item">
          <div className="learn-dot"></div>
          <div className="learn-card">
            <h3>Cyber Crime Fundamentals</h3>
            <p>
              Understand <span>digital fraud detection</span>, online tracking,
              and cyber investigation basics.
            </p>
          </div>
        </div>

        <div className="learn-item">
          <div className="learn-dot"></div>
          <div className="learn-card">
            <h3>Legal & Ethical Practices</h3>
            <p>
              Learn <span>investigation laws</span>, ethical standards,
              and confidentiality protocols.
            </p>
          </div>
        </div>

        <div className="learn-item">
          <div className="learn-dot"></div>
          <div className="learn-card">
            <h3>Field Training</h3>
            <p>
              Gain hands-on experience through <span>real-life case simulations</span>.
            </p>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>


{/* gallary//////////////////////////////////// */}
<section className="course-gallery">
  <div className="container">

    <div className="gallery-header">
      <h2>Training Gallery</h2>
      <p>Explore real training sessions, field work, and practical learning moments.</p>
    </div>

    {/* ===== PHOTOS ===== */}
    <div className="gallery-grid">

      <div className="gallery-item">
        <img src={dic1} alt="Detective training session at SNDF"  loading="lazy" />
      </div>

      <div className="gallery-item">
        <img src={dic2} alt="Detective training session at SNDF" loading="lazy"/>
      </div>

      <div className="gallery-item">
        <img src={dic3} alt="Detective training session at SNDF" loading="lazy" />
      </div>

      <div className="gallery-item">
        <img src={dic4} alt="Detective training session at SNDF" loading="lazy" />
      </div>

    </div>

    {/* ===== VIDEOS ===== */}
    <div className="video-section">
      <div className="video-card">
        <iframe
          src="https://www.youtube.com/embed/SBZvwDqWQyE?rel=0"
          title="SNDF detective training video"
          loading="lazy"
          width="560"
          height="315"
          style={{ border: "none" }}

          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="video-card">
        <iframe
          src="https://www.youtube.com/embed/gJQ_2VIzbE4?rel=0"
          title="SNDF detective training video2"
          loading="lazy"
          width="560"
          height="315"
          style={{ border: "none" }}

          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

    </div>

  </div>
</section>


{/* career opportunities..................................... */}
<section className="career-premium">
  <div className="container career-container">

    {/* LEFT CONTENT */}
    <div className="career-left" data-aos="fade-right">
      <h2>Career Opportunities</h2>

      <p>
        Build a strong career in the investigation and security industry.
        This course prepares you with practical skills, real case exposure,
        and industry-ready training.
      </p>

      <ul className="career-points">
        <li>✔ Real Investigation Experience</li>
        <li>✔ Industry Recognized Training</li>
        <li>✔ Field & Practical Learning</li>
        <li>✔ Career Guidance Support</li>
      </ul>


    <div className="eligibility-box">
    <h4>Who Can Join?</h4>
    <ul>
        <li>✔ Minimum 10th / 12th Pass</li>
        <li>✔ Students, Job Seekers & Professionals</li>
        <li>✔ No prior experience required</li>
    </ul>
    </div>

    </div>

    {/* RIGHT CARDS */}
    <div className="career-right" data-aos="fade-left">

      <div className="career-box">
        <h3>Private Detective</h3>
        <p>Handle personal & corporate investigation cases.</p>
      </div>

      <div className="career-box">
        <h3>Corporate Investigator</h3>
        <p>Work with companies for fraud & verification cases.</p>
      </div>

      <div className="career-box">
        <h3>Security Officer</h3>
        <p>Manage security operations and safety systems.</p>
      </div>

      <div className="career-box">
        <h3>Surveillance Expert</h3>
        <p>Specialize in tracking and intelligence gathering.</p>
      </div>

    </div>

  </div>
</section>



{/* student reviews..................... */}
<section className="premium-reviews">
  <div className="container">

    <div className="section-header">
      <h2>Student Reviews</h2>
      <p>Real feedback from our training participants</p>
    </div>

    <div className="reviews-wrapper">

      <div className="review-card">
        <div className="stars">★★★★★</div>
        <p>
          Training was very practical and easy to understand. I learned real investigation methods.
        </p>
        <h4>Rahul Patil</h4>
        <span>Completed Training</span>
      </div>

      <div className="review-card">
        <div className="stars">★★★★★</div>
        <p>
          Good experience for beginners. Trainers explained everything step by step.
        </p>
        <h4>Priya Sharma</h4>
        <span>Student</span>
      </div>

      <div className="review-card">
        <div className="stars">★★★★☆</div>
        <p>
          Field training helped me gain confidence. Overall very useful course.
        </p>
        <h4>Amit Verma</h4>
        <span>Completed Training</span>
      </div>

      <div className="review-card">
        <div className="stars">★★★★★</div>
        <p>
          Simple and clear teaching method. Anyone can understand easily.
        </p>
        <h4>Sneha Joshi</h4>
        <span>Student</span>
      </div>

    </div>

  </div>
</section>


{/* cta section....................... */}
<section className="course-cta">
  <div className="container">

    <div className="cta-box">

      <h2>Enroll for the Course Today</h2>

      <p>
        Start your journey in professional investigation with practical training,
        real case exposure, and certification.
      </p>

      <div className="cta-buttonss">
        <button className="btn-primary" aria-label="Book your seat for detective course">Book Your Seat</button>
        
        <a href="/brochure.pdf" download className="btn-outline" aria-label="Download course brochure">
         Download Brochure
        </a>

      </div>

      <div className="sndfguard-extra-contact">
      
        {/* EMAIL ONLY */}
        <div className="sndfguard-extra-contact-infodic">
      
          <a href="tel:+918484834570" className="sndfguard-extra-itemdic" aria-label="Call SNDF course support">
              <FaPhoneAlt className="sndf-ndf-icon phone" aria-hidden="true"/>
              +91 8484834570
            </a>

          <a href="mailto:ndfdiclectures@gmail.com" className="sndfguard-extra-itemdic" aria-label="Send email to SNDF course team">
            <FaEnvelope className="sndfguard-extra-icon email" aria-hidden="true"/>
            ndfdiclectures@gmail.com
          </a>
      
        </div>
      
        {/* SOCIAL */}
        <div className="sndfguard-extra-social">
      
          <a href="https://wa.me/918484834570" target="_blank" rel="noreferrer" className="sndfguard-extra-social-icon whatsapp" aria-label="Visit Whatsapp">
            <FaWhatsapp aria-hidden="true"/>
          </a>
      
          <a href="#" target="_blank" rel="noreferrer" className="sndfguard-extra-social-icon facebook" aria-label="Visit Facebook page">
            <FaFacebookF aria-hidden="true"/>
          </a>
      
          <a href="#" target="_blank" rel="noreferrer" className="sndfguard-extra-social-icon instagram">
            <FaInstagram aria-hidden="true"/>
          </a>
      
          <a href="#" target="_blank" rel="noreferrer" className="sndfguard-extra-social-icon youtube" aria-label="Visit Youtube page">
            <FaYoutube aria-hidden="true"/>
          </a>
      
        </div>
      
      </div>
      

    </div>

  </div>
</section>

</div>

</main>
  );
};

export default Course;