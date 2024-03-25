import React from "react";
import { motion } from "framer-motion";
import animated_img_1 from "../assets/animation/animate-img-1.png";
import animated_img_2 from "../assets/animation/animate-img-2.png";
import animated_img_3 from "../assets/animation/animate-img-3.png";
import animated_img_4 from "../assets/animation/animate-img-4.png";
import animated_img_leaf from "../assets/animation/animate-img-leaf.png";
import animated_img_vas from "../assets/animation/animate-img-vas.png";
import animated_img_stroke from "../assets/animation/animate-img-stroke.png";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section
      className="hero-section md:p-16 px-10 sm:py-32 py-24 flex flex-col md:flex-row items-center md:justify-between justify-center md:gap-24 w-full md:min-h-screen"
      id="home"
    >
      <div className="md:w-1/2 w-full z-10">
        <motion.h1
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="md:text-4xl text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-sky-500 to-blue-200 "
        >
          Revolutionize Your Business: Unleash Growth with Next-Gen CRM
          Solutions
        </motion.h1>

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          <p className="md:mt-4 mt-2 md:text-xl text-slate-300 mb-6">
            we specialize in personalized CRM solutions to fuel your business
            growth. With our tailored approach and expert support, we ensure
            you're equipped to thrive in today's fast-paced market.
          </p>

          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            to="contact-us"
            className="bg-violet-600 cursor-pointer border-2 border-violet-600 text-white md:px-10 px-2 md:py-3 py-1 rounded-sm hover:bg-transparent hover:text-violet-400 duration-300"
          >
            Get started
          </Link>
        </motion.div>
      </div>
      <div className="img-icons md:relative md:w-1/2 top-5 z-0 w-full mx-auto text-center">
        {/* <img
          src={heroBg}
          alt="hero-icons"
          className="md:relative w-full"
        /> */}

        <div className="relative top-0">
          <motion.img
            initial={{ opacity: 0, scale: 0.6, }}
            whileInView={{ opacity: 1, scale: 1, }}
            transition={{ duration: 0.7,  }}
            src={animated_img_1}
            alt=""
            className="animate-bg"
          ></motion.img>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 , }}
            whileInView={{ opacity: 1, scale: 1, }}
            transition={{ duration: .8, delay: 1, }}
            src={animated_img_leaf}
            alt=""
            className="absolute z-10 top-0 stroke"
          ></motion.img>
          <motion.img
            initial={{ opacity: 0, scale: 0.6}}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            src={animated_img_2}
            alt=""
            className="absolute z-10 top-0"
          ></motion.img>
          <motion.img
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8, delay: 1 }}
            src={animated_img_3}
            alt=""
            className="absolute z-20 top-0"
          ></motion.img>
          <motion.img
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8, delay: 1 }}
            src={animated_img_4}
            alt=""
            className="absolute z-20 top-0"
          ></motion.img>
          
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .8, delay: 1 }}
            src={animated_img_vas}
            alt=""
            className="absolute z-10 top-0"
          ></motion.img>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .8, delay: 1, }}
            
            src={animated_img_stroke}
            alt=""
            className="absolute top-0 z-10 stroke"
          ></motion.img>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
