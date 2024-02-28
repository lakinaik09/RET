import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/RET_logo.png";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import fbLogo from "../assets/facebook.png";
import instaLogo from "../assets/instagram.png";
import twitterLogo from "../assets/twitter.png";
import pinLogo from "../assets/pinterest.png";


import "../App.css";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const checkScrollY = () => {
    if (window.scrollY > 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  const handleSidebar = () =>{
    setMobileNav(!mobileNav)
  }

  useEffect(() => {
    window.addEventListener("scroll", checkScrollY);
    return () => {
      window.removeEventListener("scroll", checkScrollY);
    };
  }, []);

  return (
    <>
      <nav
        className={`${
          nav
            ? "bg-blue-950 transition-all duration-500 fixed w-screen flex justify-between items-center text-white md:px-16 sm:px-10 px-6 py-4 z-40"
            : "fixed w-screen flex justify-between items-center text-white md:px-16 sm:px-10 px-6 py-6 "
        } z-[999999]`}
      >
        <div>
          <Link spy={true} smooth={true} offset={0} duration={500} to={"home"}>
            <img src={logo} alt="" className="md:w-32 w-28 cursor-pointer" />
          </Link>
        </div>
        <ul className="md:flex hidden items-center gap-10 text-lg">
          <li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              to="home"
              className="cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              to="about-us"
              className="cursor-pointer"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              to="our-value"
              className="cursor-pointer"
            >
              Our Value
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              to="services"
              className="cursor-pointer"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
              to="contact-us"
              className="cursor-pointer"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <button
          className={`hamburger ${mobileNav ? "is-active" : ""} md:hidden`}
          onClick={handleSidebar}
        >
            
         { mobileNav ? <AiOutlineClose className="text-3xl duration-300"/>
         :
         <FiMenu className="text-3xl duration-300" />
        }
        </button>

       
      </nav>
        {/* ========Mobile Nav======= */}
      <div className={`w-full h-screen bg-[#000000bb] fixed ${mobileNav?'left-0':'-left-full'} duration-300 transition-all z-[99]`}>
     
          <div className="bg-blue-950 text-white h-screen relative inline-flex flex-col w-auto md:items-center md:gap-10 px-6 text-lg border-white">
          <div>
          <Link spy={true} smooth={true} offset={0} duration={500} to={"home"}>
            <img src={logo} alt="" className="md:w-32 w-32 cursor-pointer py-6" />
          </Link>
        </div>
            <ul className="flex flex-col gap-6 py-6 border-t border-b border-slate-500">

            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                to="home"
                className="cursor-pointer"
                onClick={handleSidebar}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                to="about-us"
                className="cursor-pointer"
                onClick={handleSidebar}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                to="our-value"
                className="cursor-pointer"
                onClick={handleSidebar}
              >
                Our Value
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={80}
                duration={500}
                to="services"
                className="cursor-pointer"
                onClick={handleSidebar}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                to="contact-us"
                className="cursor-pointer"
                onClick={handleSidebar}
              >
                Contact Us
              </Link>
            </li>
            </ul>
<div className="mt-6">
              <p className="mb-2">Follow us:</p> 
            <div className="icons flex gap-3">
              <Link className="hover:-translate-y-2 duration-300">
                <img src={fbLogo} alt="facebook icon" className="w-6"/>
              </Link>
              <Link className="hover:-translate-y-2 duration-300">
                <img src={instaLogo} alt="instagram icon" className="w-6"/>
              </Link>
              <Link className="hover:-translate-y-2 duration-300">
                <img src={twitterLogo} alt="twitter icon" className="w-6"/>
              </Link>
              <Link className="hover:-translate-y-2 duration-300">
                <img src={pinLogo} alt="pintrest icon" className="w-6"/>
              </Link>
            </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Navbar;
