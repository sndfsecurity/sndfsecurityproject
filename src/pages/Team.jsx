import React from "react";
import "./Team.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Helmet } from "react-helmet-async";

const Team = () => {

  const departments = [
    { title: "NDF Department", className: "investigation" },
    { title: "Investigation Department", className: "technical" },
    { title: "QRT Department", className: "legal" },
  ];

  const members = [
    { name: "mukunda kaledhon Sir", role: "social media deparment head", desc: "2 years marathi tv serial DOP and Cinematography", img: "" },
    { name: "Rohit Verma", role: "Investigator", desc: "Field operations specialist", img: "https://via.placeholder.com/150" },
    { name: "Karan Singh", role: "Agent", desc: "Undercover expert", img: "https://via.placeholder.com/150" },
    { name: "Vikas Rao", role: "Analyst", desc: "Case analysis expert", img: "https://via.placeholder.com/150" },
    { name: "Sanjay Mehta", role: "Detective", desc: "Surveillance specialist", img: "https://via.placeholder.com/150" },
    { name: "Deepak Sharma", role: "Tracker", desc: "Tracking expert", img: "https://via.placeholder.com/150" },
    { name: "Amit Joshi", role: "Officer", desc: "Security expert", img: "https://via.placeholder.com/150" },
    { name: "Ravi Kumar", role: "Inspector", desc: "Investigation lead", img: "https://via.placeholder.com/150" },
  ];

  
  return (

    <>

    <Helmet>
      <title>Our Expert Team | SNDF Security Professionals</title>
      <link rel="canonical" href="https://www.sndfndf.com/team" />
      <meta name="description" content="Meet SNDF’s skilled team of investigators and security experts delivering trusted protection and surveillance services." />
    </Helmet>

    <div className="team-page">

  <section className="team-hero">
  <div className="hero-content">
    <h1>Meet Our Team</h1>
    <p>
      Professional experts delivering trusted services with dedication,
      accuracy, and confidentiality.
    </p>

    {/* 🔥 HERO CARDS ADD HERE */}
    <div className="leader-row">
      <div className="leader-card">
        <img src="https://via.placeholder.com/120" alt="" />
        <h3>John Doe</h3>
        <span>Director</span>
      </div>

      <div className="leader-card">
        <img src="https://via.placeholder.com/120" alt="" />
        <h3>Rahul Sharma</h3>
        <span>Manager</span>
      </div>

      <div className="leader-card">
        <img src="https://via.placeholder.com/120" alt="" />
        <h3>Priya Singh</h3>
        <span>Hr</span>
      </div>
    </div>

  </div>
</section>

      {/* DEPARTMENTS */}
      {departments.map((dept, index) => (
        <section key={index} className={`dept ${dept.className}`}>

          <h2 className="mb-4">{dept.title}</h2>

          {/* 🔵 DESKTOP GRID */}
          <div className="desktop-view container">
            <div className="row justify-content-center">

              {members.map((m, i) => (
                <div key={i} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="card text-center team-card h-100">
                    <div className="card-body">
                      <img src={m.img} alt="" className="team-img mb-3" />
                      <h5>{m.name}</h5>
                      <span className="text-primary d-block mb-2">{m.role}</span>
                      <p>{m.desc}</p>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* 🔴 MOBILE SLIDER */}
          <div className="mobile-view">
            <Swiper
              modules={[Autoplay]}
              loop={true}
              autoplay={{ delay: 2000 }}
              spaceBetween={10}
              slidesPerView={1}
            >
              {members.map((m, i) => (
                <SwiperSlide key={i}>
                  <div className="card text-center team-card m-3">
                    <div className="card-body">
                      <img src={m.img} alt="" className="team-img mb-3" />
                      <h5>{m.name}</h5>
                      <span className="text-primary d-block mb-2">{m.role}</span>
                      <p>{m.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </section>
      ))}

    </div>

    </>
  );
};

export default Team;