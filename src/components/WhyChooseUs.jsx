import React from "react";
import SolutionImg from "../assets/solution.png";
import ScalingImg from "../assets/scaling.png";
import InterfaceImg from "../assets/login.png";
import SecurityImg from "../assets/encrypted.png";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <>
      {/* ================Why choose us================== */}

      <h3 className="md:text-3xl text-xl font-bold text-slate-700 md:pb-4 mb-2 mt-6 font-Krub md:px-16 px-6">
        Why Choose RET?
      </h3>
      <div className="box-wrapper grid md:grid-cols-2 md:gap-14 gap-10 md:mb-12 md:px-16 px-3">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="bg-white p-4 rounded-md text-center"
        >
          <img src={SolutionImg} alt="SolutionImg" className="w-20 mx-auto" />
          <h4 className="md:text-2xl text-xl font-bold my-4 text-slate-800 bg-gradient-to-r from-violet-700 via-orange-600 to-blue-800 inline-block text-transparent bg-clip-text">
            Customized Solutions
          </h4>
          <p className="text-slate-700 md:text-lg">
            We don't believe in a one-size-fits-all approach. Our team works
            closely with you to understand your business goals and challenges,
            crafting bespoke CRM solutions to address your specific needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="bg-white p-4 rounded-md text-center"
        >
          <img src={ScalingImg} alt="ScalingImg" className="w-20 mx-auto" />
          <h4 className="md:text-2xl text-xl font-bold my-4 text-slate-800 bg-gradient-to-r from-violet-700 via-orange-600 to-blue-800 inline-block text-transparent bg-clip-text">
            Scalability
          </h4>
          <p className="text-slate-700 md:text-lg">
          Whether you're a budding start-up or an established enterprise, our scalable CRM solutions adapt seamlessly to your expansion journey. Let's manage your growth together!
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="bg-white p-4 rounded-md text-center"
        >
          <img src={InterfaceImg} alt="InterfaceImg" className="w-20 mx-auto" />
          <h4 className="md:text-2xl text-xl font-bold my-4 text-slate-800 bg-gradient-to-r from-violet-700 via-orange-600 to-blue-800 inline-block text-transparent bg-clip-text">
            User-Friendly Interface
          </h4>
          <p className="text-slate-700 md:text-lg">
            We pride ourselves on delivering intuitive interfaces that are easy
            to navigate, ensuring quick adoption by your team. Say goodbye to
            complex systems that hinder productivity.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="bg-white p-4 rounded-md text-center"
        >
          <img src={SecurityImg} alt="SecurityImg" className="w-20 mx-auto" />
          <h4 className="md:text-2xl text-xl font-bold my-4 text-slate-800 bg-gradient-to-r from-violet-700 via-orange-600 to-blue-800 inline-block text-transparent bg-clip-text">
            Data Security
          </h4>
          <p className="text-slate-700 md:text-lg">
            Your data is your most valuable asset, and we take its security
            seriously. Our robust security measures ensure that your information
            remains safe and protected at all times.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default WhyChooseUs;
