import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../App.css";

import Footer from "../components/Footer";

import OurValues from "../components/OurValues";

import Contact from "../components/Contact";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import GrowthGraphSection from "../components/GrowthGraphSection";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <AboutSection />
        <GrowthGraphSection/> 
        <OurValues />
        <ServiceSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
