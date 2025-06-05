import React from "react";
import Sidebar from './Sidebar';
import About from './About';
import "./Home.css";
import Skills from './Skills';
import ContactSection from './ContactSection';
import Achievements from "./Achievements";

const Home = () => {
  return (
    <div className="universal">
      <div className="wrapper">
        <div className="side">
          <Sidebar />
        </div>
        <div className="about">
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
           <section id="achievements">
            <Achievements />
          </section>
          <section id="contact">
            <ContactSection />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
