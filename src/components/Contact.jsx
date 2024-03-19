import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";
import { CgCloseO } from "react-icons/cg";

import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";

const Contact = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9q7ug9s", "template_6ndcj3s", form.current, {
        publicKey: "RGc_UxvFBos5RwUdH",
      })
      .then(
        () => {
          // console.log("SUCCESS!");
          setError(false);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
          form.current.reset();
        },
        (error) => {
          setError(true);
          // console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div
        className="contact-us-wrapper md:px-16 md:py-24 py-8 px-6 bg-slate-100"
        id="contact-us"
      >
        <h1 className="text-3xl font-bold text-slate-800 text-center mb-10 font-Krub">
          Get in touch
        </h1>
        <div className="flex items-start flex-col md:flex-row justify-center md:gap-20 gap-10 overflow-hidden">
          <div className="md:w-1/2 w-full rounded-md flex flex-col gap-2 text-xl">
            <div className="grid md:grid-cols-2 md:gap-10 gap-6">
              <motion.div 
              initial={{y:-50,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:.9}}
               className="md:col-span-2 border shadow-sm rounded-md p-6 text-center bg-white">
                <Link>
                  <p>
                    <IoLocationOutline className="md:text-2xl inline-block me-1" />
                  </p>
                  <p className="my-3 font-semibold text-violet-900">
                    Our Address
                  </p>
                  <p> Plot no -664, Saheed Nagar, Bhubaneswar, Odisha 751007</p>
                </Link>
              </motion.div>
              <motion.div  
              initial={{y:50,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:.9}}
               className="border shadow-sm rounded-md p-6 text-center bg-white">
                <IoMdMail className="md:text-2xl inline-block me-1" />
                <p className="my-3 font-semibold text-violet-900">Mail Us</p>
                <Link to="mailto:support.ret@gmail.com">
                  support.ret@gmail.com
                </Link>
              </motion.div>
              <motion.div  
              initial={{y:50,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:.9}}
               className="border shadow-sm rounded-md p-6 text-center bg-white">
                <FiPhoneCall className="md:text-2xl inline-block me-1" />
                <p className="my-3 font-semibold text-violet-900">Call Us</p>
                <Link to="telto:9199999999">
                  <span>+91 9999 999 999</span>
                </Link>
              </motion.div>
            </div>
          </div>
          <motion.div 
          initial={{x:60,opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration:.9}}
          className="md:w-1/2 w-full border shadow-sm rounded-md p-6 bg-white">
            <form
              className="grid md:grid-cols-2 grid-cols-1 gap-6"
              onSubmit={sendEmail}
              ref={form}
            >
              <div className="w-full col-span-2 md:col-auto">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  className="p-2 w-full border outline-violet-800"
                  required
                />
              </div>
              <div className="w-full col-span-2 md:col-auto">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  className="p-2 w-full border outline-violet-800"
                  required
                />
              </div>
              <div className="col-span-2">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Your subject"
                  className="p-2 w-full border outline-violet-800"
                  required
                />
              </div>
              <div className="col-span-2">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your message"
                  className="p-2 w-full border outline-violet-800"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-violet-700 text-white md:px-3 md:py-2 py-1 rounded w-full col-span-2 hover:bg-transparent hover:text-violet-700 duration-300 border-2 border-violet-700"
              >
                Submit
              </button>
            </form>
            {/* Success/Error Messages */}
            {success && (
              <div className="text-center mt-3 text-green-600 flex items-center gap-1 justify-center">
                <FaRegCircleCheck className="text-xl" />
                <p>Successfully Submitted.</p>
              </div>
            )}
            {error && (
              <div className="text-center mt-3 text-red-600 flex items-start gap-1 justify-center">
                <CgCloseO className="text-xl" />
                <p>Something went wrong. Refresh and try again.</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
