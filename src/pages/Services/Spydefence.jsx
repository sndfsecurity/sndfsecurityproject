import React from "react";
import "./Spydefence.css";

import spy from "../../assets/images/academy1.webp";

import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";



import {
  GiPistolGun,
  GiArcheryTarget
} from "react-icons/gi";

import {
  MdSelfImprovement,
  MdGroups
} from "react-icons/md";

import {
  FaHiking,
  FaRunning,
  FaLaughBeam,
  FaCampground
} from "react-icons/fa";

import {
  BsMusicNoteBeamed
} from "react-icons/bs";

import {
  IoMdTime
} from "react-icons/io";

const Spydefence = () => {
  return (
   
    <>

    <Helmet>
      <title>Spy Defence Services | Protection Against Threats</title>
      <link rel="canonical" href="https://www.sndfndf.com/services/spydefence" />
      <meta name="description" content="SNDF Spy Defence services protect against spying, threats and unauthorized surveillance with expert solutions." />
    </Helmet>
    
      <section className="spy-hero">
      <div className="container spy-hero-container">

        {/* LEFT CONTENT */}
        <div className="spy-hero-content">
          <h2 className="fade-up">
            Spy Defence <span>Training Program</span>
          </h2>

          <p className="fade-up delay-1">
            A unique outdoor training experience combining discipline, adventure
            and real-world skills to shape confident and capable individuals.
          </p>

          {/* UPDATED POINTS (NO REPEAT) */}
          <div className="spy-points fade-up delay-2">
            <span>✔ Certified Trainers</span>
            <span>✔ All India Program</span>
            <span>✔ Safe & Structured Training</span>
          </div>

          {/* BUTTONS */}
          <div className="spy-hero-buttons fade-up delay-3">
            <a href="#enquiry" className="btn-red">
              Join Program
            </a>

            <a  href="#activities" className="btn-outline">
              Explore Activities
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="spy-hero-image">
          <img
            src={spy}
            alt="Spy Defence Training Camp"
          />
        </div>

      </div>
    </section>


    {/* section................................................. */}

     <section className="activities" id="activities">
      <div className="container">

        <h2 className="section-titlespy">Our Training Activities</h2>
        <p className="section-subtitlespy">
          A perfect blend of skill training, fitness and engaging experiences.
        </p>

        <div className="activities-grid">

          <div className="activity-card">
            <GiPistolGun className="icon" />
            <h3>Weapon Training</h3>
            <p>Learn safe handling and usage of weapons with expert supervision.</p>
          </div>

          <div className="activity-card">
            <MdSelfImprovement className="icon" />
            <h3>Self Defence</h3>
            <p>Master real-life techniques to protect yourself with confidence.</p>
          </div>

          <div className="activity-card">
            <GiArcheryTarget className="icon" />
            <h3>Archery</h3>
            <p>Enhance focus, precision and control through archery training.</p>
          </div>

          <div className="activity-card">
            <FaHiking className="icon" />
            <h3>Trekking</h3>
            <p>Outdoor trekking to build endurance and mental strength.</p>
          </div>

          <div className="activity-card">
            <FaRunning className="icon" />
            <h3>Yoga & Workout</h3>
            <p>Daily routines to improve flexibility, strength and fitness.</p>
          </div>

          <div className="activity-card">
            <BsMusicNoteBeamed className="icon" />
            <h3>Cultural Activities</h3>
            <p>Programs that boost creativity, expression and confidence.</p>
          </div>

          <div className="activity-card">
            <FaLaughBeam className="icon" />
            <h3>Fun Activities</h3>
            <p>Enjoy engaging activities that refresh and energize participants.</p>
          </div>

          <div className="activity-card">
            <MdGroups className="icon" />
            <h3>Team Building Games</h3>
            <p>Improve teamwork, leadership and communication skills.</p>
          </div>

        </div>

      </div>
    </section>


{/* cta camp........................................... */}

      <section className="summer">
      <div className="container summer-container">

        {/* LEFT CONTENT */}
        <div className="summer-left">
          <span className="badgespy">Limited Seats Available</span>

          <h2>
            Spy Defence <span>Summer Camp</span>
          </h2>

          <p className="taglinespy">
            Stronger, braver and bolder — that's the spirit of adventure!
          </p>

          <p className="descspy">
            Join our intensive training camp designed to build discipline,
            confidence and real-world skills through practical activities.
          </p>

          <div className="summer-info">
            <div className="info-boxspy">
              <FaCampground />
              <div>
                <h4>6 Nights - 7 Days</h4>
                <p>Adventure Training Camp</p>
              </div>
            </div>

            <div className="info-boxspy">
              <MdGroups />
              <div>
                <h4>Age Group: 8 - 25</h4>
                <p>Boys & Girls Welcome</p>
              </div>
            </div>

            <div className="info-boxspy">
              <IoMdTime />
              <div>
                <h4>Limited Slots</h4>
                <p>Book Early</p>
              </div>
            </div>
          </div>

          <div className="summer-buttons">

            {/* <button className="primary-btnspy">Book Your Slot</button> */}

            <a href="#enquiry" className="primary-btnspy">
              Book Your Slot
            </a>

            <a href="#about" className="secondary-btnspy">
             View Details
            </a>

            {/* <button className="secondary-btnspy">View Details</button> */}
          </div>
        </div>

       
        <div className="summer-right">
          <img src={spy} alt="Summer Camp Training" />
        </div>

      </div>
    </section>


    {/* about camp................................................ */}

  <section id="about" className="camp-about">
  <div className="camp-container">

    <h2 className="camp-title">
      Spy Defence <span>Summer Camp</span>
    </h2>

    <p className="camp-subtitle">
      A professional training program by Spy Defence Academy,
      focused on discipline, confidence, teamwork and real-world
      experience through structured activities and adventure.
    </p>

    <div className="camp-grid">

      <div className="camp-card">
        <h3>Camp Facilities</h3>
        <p>
          Accommodation, Healthy & Hygienic Food, Trained Trainers,
          Safe Environment, Participation Certificate, 24/7 Security
        </p>
      </div>

      <div className="camp-card">
        <h3>Activities During Stay</h3>
        <p>
          Confidence Development, Social Skills, Teamwork,
          Nature Connection, Outdoor Learning Experience
        </p>
      </div>

      <div className="camp-card">
        <h3>Additional Benefits</h3>
        <p>
          Free T-Shirt Included, Trophies for Participants,
          Engaging Camp Activities Throughout the Stay
        </p>
      </div>

      <div className="camp-card">
        <h3>Adventure Experience</h3>
        <p>
          Special visit to Pawna Lake and Lohagad Fort included
          in the camp journey
        </p>
      </div>

    </div>

    <div className="camp-highlight">
      🌄 Experience an unforgettable adventure with a special visit to Pawna Lake and Lohagad Fort — where nature, exploration and real outdoor learning come together as part of your training journey.
    </div>

  </div>
</section>


{/* final cta............................ */}

 <section className="spycta-split"  id="enquiry">
      <div className="spycta-split-container">

        {/* LEFT SECTION */}
        <div className="spycta-left">

          <h2>
            Join the <span>Spy Defence Summer Camp</span>
          </h2>

          <p>
            A practical training experience focused on discipline,
            confidence and real-world skills through guided activities.
          </p>

          {/* FEATURES */}
          <div className="spycta-features">
            <div className="feature">
              <h4>Real Training</h4>
              <p>Hands-on activities & field-based learning</p>
            </div>
            <div className="feature">
              <h4>Safe Environment</h4>
              <p>24/7 supervision with trained professionals</p>
            </div>
          </div>

          {/* STATS */}
          <div className="spycta-stats">
            <div className="stat">
              <h3>500+</h3>
              <span>Participants</span>
            </div>
            <div className="stat">
              <h3>7 Days</h3>
              <span>Adventure Camp</span>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <span>Safe</span>
            </div>
          </div>

          {/* CONTACT ICONS */}
          <div className="spycta-contact">
            <a href="tel:997111904" className="call-icon">
              <FiPhoneCall />
            </a>
            <a
              href="https://wa.me/91997111904"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-icon"
            >
              <FaWhatsapp />
            </a>

          <a href="#" className="facebook-icon">
            <FaFacebookF />
          </a>

          <a href="https://www.instagram.com/spy_defence_academy?igsh=YzR5NnpjazE3d3F5&utm_source=qr" className="instagram-icon">
            <FaInstagram />
          </a>

          <a href="#" className="youtube-icon">
            <FaYoutube />
          </a>

          </div>

        </div>

        {/* RIGHT FORM (UNCHANGED) */}
        <div className="spycta-right">

          <h3>Quick Registration</h3>

          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="text" placeholder="City" />
            <input type="number" placeholder="Age" />

            <select>
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>

            <button type="submit">Reserve Seat</button>
          </form>

        </div>

      </div>
    </section>


    </>
  );
};

export default Spydefence;