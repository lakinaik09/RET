import React from "react";
import { IoMdMail } from "react-icons/io";
import Logo from "../assets/RET_logo.png";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import fbLogo from "../assets/facebook.png";
import instaLogo from "../assets/instagram.png";
import twitterLogo from "../assets/twitter.png";
import LinkedInLogo from "../assets/linkedin.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-blue-950 text-white md:px-16 pt-10 px-6 md:pt-10">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-5">
          <div>
            <div>
              <img src={Logo} alt="logo" className="md:w-32 w-24 md:mb-2 mb-1" />
              <p className="p-2 md:text-base text-sm text-slate-300">
                Unlock the beauty of seamless connections with our CRM website -
                where every click is a brushstroke, painting a masterpiece of
                customer relationships.
              </p>
            </div>
          </div>
          <div className="md:ms-20">
            <h1 className="md:text-2xl text-xl border-b border-slate-400 inline-block font-semibold text-violet-100 mb-3">
              Quick links
            </h1>
            <br />
            <p className="text-slate-300 cursor-pointer hover:underline hover:text-orange-400 duration-300 inline-block">
              Home
            </p>{" "}
            <br />
            <p className="text-slate-300 cursor-pointer hover:underline hover:text-orange-400 duration-300 inline-block">
              About us
            </p>{" "}
            <br />
            <p className="text-slate-300 cursor-pointer hover:underline hover:text-orange-400 duration-300 inline-block">
              Services
            </p>{" "}
            <br />
            <p className="text-slate-300 cursor-pointer hover:underline hover:text-orange-400 duration-300 inline-block">
              Our values
            </p>{" "}
            <br />
            <p className="text-slate-300 cursor-pointer hover:underline hover:text-orange-400 duration-300 inline-block">
              Contact us
            </p>{" "}
            <br />
          </div>
          <div>
            <h1 className="md:text-2xl text-xl border-b border-slate-400 inline-block font-semibold text-violet-100 mb-3">
              Information
            </h1>
            <br />
            <p className="text-slate-300 cursor-pointer hover:underline hover:text-orange-400 duration-300 inline-block">
              Terms & conditons
            </p>{" "}
            <br />
            <p className="text-slate-300 cursor-pointer hover:underline hover:text-orange-400 duration-300 inline-block">
              Privacy policy
            </p>
          </div>
          <div>
            <h1 className="md:text-2xl text-xl border-b border-slate-400 inline-block font-semibold text-violet-100 mb-3">
              Contact & Follow
            </h1>
            <p className="mb-2 text-slate-300 cursor-pointer hover:underline hover:text-orange-400 duration-300 inline-block">
              <IoMdMail className="text-xl inline-block me-1" />
              <Link to="mailto:domy@gmail.com">domy@gmail.com</Link>
            </p>
            <p className="mb-2 text-slate-300 cursor-pointer hover:underline hover:text-orange-400 duration-300 inline-block">
              <FiPhoneCall className="text-xl inline-block me-1" />
              <Link to="tel:+4733378901">+91 999 999 9999</Link>
            </p>{" "}
            <br />
            <p className="mb-2 text-slate-300 cursor-pointer hover:underline hover:text-orange-400 duration-300 inline-block">
              <IoLocationOutline className="text-xl inline-block me-1" />
              <span>Domy adress</span>
            </p>
            <div className="icons flex gap-3 mt-2">
              <Link className="hover:-translate-y-2 duration-300">
                <img src={fbLogo} alt="facebook icon" className="w-7"/>
              </Link>
              <Link className="hover:-translate-y-2 duration-300">
                <img src={instaLogo} alt="instagram icon" className="w-7"/>
              </Link>
              <Link className="hover:-translate-y-2 duration-300">
                <img src={twitterLogo} alt="twitter icon" className="w-7"/>
              </Link>
              <Link className="hover:-translate-y-2 duration-300">
                <img src={LinkedInLogo} alt="pintrest icon" className="w-7"/>
              </Link>
            </div>
          </div>
        </div>
        <p className="border-slate-700 text-center text-slate-400 py-4 border-t mt-7 md:mt-4 text-sm">
          RET@2024. All rights reserved. Developed with ❤ by <Link to="https://digitaldeta.com/" target="_blank" className=" text-violet-600">Digitaldeta</Link>.
        </p>
      </footer>
    </>
  );
};

export default Footer;
