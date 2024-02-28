import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";



const Contact = () => {
  return (
    <>
      <div className="contact-us-wrapper md:px-16 py-28 px-6 bg-slate-100 mt-20" id="contact-us">
        <h1 className="text-3xl font-semibold text-slate-800 text-center mb-10">
          Get in touch
        </h1>
        <div className="flex items-start flex-col md:flex-row justify-center md:gap-20 gap-10">
          <div className="md:w-1/2 w-full border shadow-sm rounded-md p-6 bg-white">
          <IoLocationOutline className="text-3xl"/>
          <IoMdMail className="text-3xl"/>
          <FiPhoneCall className="text-3xl"/>


          </div>
          <div className="md:w-1/2 w-full border shadow-sm rounded-md p-6 bg-white">
            <form className="grid md:grid-cols-2 grid-cols-1 gap-6">
                    <div className="w-full col-span-2 md:col-auto">
                        <input type="text" name="name" id="name" placeholder="Your name" className="p-2 w-full border outline-violet-800"/>
                    </div>
                    <div className="w-full col-span-2 md:col-auto">
                        <input type="email" name="email" id="email" placeholder="Your email" className="p-2 w-full border outline-violet-800"/>
                    </div>
                    <div className="col-span-2">
                        <input type="text" name="subject" id="subject" placeholder="Your subject" className="p-2 w-full border outline-violet-800"/>
                    </div>
                    <div className="col-span-2">
                        <textarea rows="5" type="text" name="name" id="name" placeholder="Your name" className="p-2 w-full border outline-violet-800"/>
                    </div>
                        <button className="bg-violet-700 text-white px-3 py-2 rounded w-full col-span-2 hover:bg-transparent hover:text-violet-700 duration-300 border-2 border-violet-700">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
