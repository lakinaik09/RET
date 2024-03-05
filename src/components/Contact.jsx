import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdMail } from "react-icons/io"
import { Link } from "react-router-dom";


const Contact = () => {
  return (
    <>
      <div
        className="contact-us-wrapper md:px-16 md:py-20a py-8 px-6 bg-slate-100"
        id="contact-us"
      >
        <h1 className="text-3xl font-bold text-slate-800 text-center mb-10 font-Krub">
          Get in touch
        </h1>
        <div className="flex items-start flex-col md:flex-row justify-center md:gap-20 gap-10">
          <div className="md:w-1/2 w-full rounded-md flex flex-col gap-2 text-xl">
            <div className="grid md:grid-cols-2 md:gap-14">
            <div className="col-span-2 border shadow-sm rounded-md p-6 text-center bg-white">
            <Link>
                <p><IoLocationOutline className="md:text-2xl inline-block me-1" /></p>
              <p className="my-3 font-semibold text-violet-900">Our Address</p>
             <p> Plot no -664, Saheed Nagar, Bhubaneswar, Odisha 751007</p>
            </Link>
            </div>
              <div className="border shadow-sm rounded-md p-6 text-center bg-white">
              <IoMdMail className="md:text-2xl inline-block me-1" />
              <p className="my-3 font-semibold text-violet-900">Mail Us</p>
              <Link to="mailto:support.ret@gmail.com">
             support.ret@gmail.com
            </Link>
              </div>
              <div className="border shadow-sm rounded-md p-6 text-center bg-white">
             
              <FiPhoneCall className="md:text-2xl inline-block me-1" />
              <p className="my-3 font-semibold text-violet-900">Call Us</p>
              <Link to="telto:9199999999">
              <span>+91 9999 999 999</span>
            </Link>
              </div>
            </div>
         
           
          </div>
          <div className="md:w-1/2 w-full border shadow-sm rounded-md p-6 bg-white">
            <form className="grid md:grid-cols-2 grid-cols-1 gap-6">
              <div className="w-full col-span-2 md:col-auto">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  className="p-2 w-full border outline-violet-800"
                />
              </div>
              <div className="w-full col-span-2 md:col-auto">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  className="p-2 w-full border outline-violet-800"
                />
              </div>
              <div className="col-span-2">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Your subject"
                  className="p-2 w-full border outline-violet-800"
                />
              </div>
              <div className="col-span-2">
                <textarea
                  rows="5"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  className="p-2 w-full border outline-violet-800"
                />
              </div>
              <button className="bg-violet-700 text-white px-3 py-2 rounded w-full col-span-2 hover:bg-transparent hover:text-violet-700 duration-300 border-2 border-violet-700">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
