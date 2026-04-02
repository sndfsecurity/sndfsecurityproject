import React from "react";
import "./Spydefence.css";

import spy from "../../assets/images/spy1.png";


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
  FaLaughBeam
} from "react-icons/fa";

import {
  BsMusicNoteBeamed
} from "react-icons/bs";

const Spydefence = () => {
  return (
   
    <>
    
      <section className="spy-hero">
      <div className="container spy-hero-container">

        {/* LEFT CONTENT */}
        <div className="spy-hero-content">
          <h2 className="fade-up">
            Spy Defence <span>Training Program</span>
          </h2>

          <p className="fade-up delay-1">
            A unique outdoor training experience combining discipline, adventure,
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
            <a href="#activities" className="btn-outline">
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

     <section className="activities">
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


    {/* ========== SECTION 3: SUMMER CAMP HERO / INTRO BANNER ========== */}
<section className="summer-camp-banner">
  <div className="container summer-banner-container">
    
    {/* BADGE */}
    <div className="camp-badge fade-up">
      🔥 Limited Seats Available
    </div>

    {/* MAIN TITLE */}
    <h1 className="camp-main-title fade-up delay-1">
      SPY DEFENCE <span>SUMMER CAMP</span>
    </h1>

    {/* SUPPORTED BY */}
    <p className="camp-supported fade-up delay-2">
      Supported by <strong>Nationalist Detective Force</strong>
    </p>

    {/* TAGLINE WITH QUOTES */}
    <div className="camp-tagline fade-up delay-3">
      <span className="quote-icon">"</span>
      Stronger, braver and bolder - that's the spirit of adventure!
      <span className="quote-icon">"</span>
    </div>

    {/* DURATION & AGE GROUP CARDS */}
    <div className="camp-info-cards fade-up delay-4">
      <div className="info-card">
        <div className="info-icon">🏕️</div>
        <div className="info-text">
          <h4>6 Nights - 7 Days</h4>
          <p>Summer Adventure Camp</p>
        </div>
      </div>
      <div className="info-card">
        <div className="info-icon">👥</div>
        <div className="info-text">
          <h4>Age Group: 8 to 25 Years</h4>
          <p>Girls & Boys Welcome</p>
        </div>
      </div>
    </div>

    {/* CTA BUTTONS */}
    <div className="camp-cta-buttons fade-up delay-5">
      <a href="#camp-enquiry" className="btn-camp-primary">
        🎯 Book Your Slot
      </a>
      <a href="#camp-facilities" className="btn-camp-secondary">
        📋 View Facilities
      </a>
    </div>

    {/* SUBTEXT */}
    <p className="camp-subtext fade-up delay-6">
      "This summer don't stay at home... join the adventure!"
    </p>

  </div>
</section>


{/* ========== SECTION 4: ABOUT CAMP + ACTIVITIES + FACILITIES ========== */}
<section className="camp-details">
  <div className="container">
    
    {/* About Summer Camp */}
    <div className="camp-about">
      <h2>About Summer Camp</h2>
      <div className="about-columns">
        <div className="about-left">
          <p>✅ Adventure is in our spirit</p>
          <p>✅ Perfect destination for adventure</p>
        </div>
        <div className="about-right">
          <p>✅ Experience, discipline, teamwork</p>
          <p>✅ Learn new skills while enjoying fun</p>
        </div>
      </div>
    </div>

    {/* Camp Activities */}
    <div className="camp-activities">
      <h2>Camp Activities</h2>
      <div className="activities-columns">
        <div className="activities-left">
          <p>Self Defence</p>
          <p>Weapon Training</p>
          <p>Rifle Shooting</p>
          <p>Archery</p>
          <p>Trekking</p>
          <p>Fort Trekking</p>
        </div>
        <div className="activities-right">
          <p>Team Building</p>
          <p>Cultural Program</p>
          <p>Sports Activity</p>
          <p>Fun Activities</p>
           <p>Martial Art</p>
          <p>Adventure Activities</p>
        </div>
      </div>
    </div>

    {/* Special Visit */}
    <div className="special-visit">
      <h3>Special Visit to Pawna Lake!</h3>
      <p>Camping, bonfire & lakeside adventure activities</p>
    </div>

    {/* Camp Facilities */}
    <div className="camp-facilities">
      <h2>Camp Facilities</h2>
      <div className="facilities-columns">
        <div className="facilities-left">
          <p>✓ Accommodation</p>
          <p>✓ Healthy Food</p>
          <p>✓ Trained Trainers</p>
          <p>✓ Safety Equipment</p>
        </div>
        <div className="facilities-right">
          <p>✓ Safe Environment</p>
          <p>✓ Certificate</p>
          <p>✓ 24/7 Security</p>
          <p>✓ Travelling</p>
        </div>
      </div>
    </div>

  </div>
</section>

    </>
  );
};

export default Spydefence;