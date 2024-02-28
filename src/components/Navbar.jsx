import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/RET_logo.png";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";


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
          class={`hamburger ${mobileNav ? "is-active" : ""} md:hidden`}
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
          <ul className="bg-white h-screen relative inline-flex flex-col w-auto md:items-center md:gap-10 gap-5 text-lg pt-20 px-10">
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
        </div>
    </>
  );
};

export default Navbar;
