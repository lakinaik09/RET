import React from "react";

import aboutImg from "../assets/about-img.png";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      className="md:px-14 sm:px-10 second-section md:py-10"
      id="about-us"
    >
      <div className="features-wrapper mx-auto relative z-20 bg-white rounded-md border md:shadow-md mb-5 sm:px-12 p-6 py-8">
        <h3 className="md:text-3xl text-xl font-bold text-slate-700 mb-5 border-b md:pt-10 pb-5 font-Krub ">
          About Us
        </h3>
        <div className="md:mb-10">
          <h2 className="md:text-4xl text-xl font-semibold mb-4 bg-gradient-to-r from-violet-700 via-orange-600 to-blue-800 inline-block text-transparent bg-clip-text">
            A Firm with a DNA in Salesforce & CRM Consulting Services{" "}
          </h2>
          <p className=" text-slate-600 md:text-lg md:mb-2">
            If you are looking to maximize the most value from your Salesforce
            Investment, you are at the right place. With the right guidance,
            experience, and expertise. RET is committed to work with its clients
            as a trusted partner and drive them towards success.
          </p>
        </div>

        <div className="md:mb-10 flex md:flex-nowrap flex-wrap gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className=" bg-slate-100 p-5"
          >
            <h2 className="md:text-3xl text-xl font-bold text-slate-700 md:pb-4 my-2">
              Who We Are
            </h2>
            <div>
              <img src={aboutImg} alt="about image" className="w" />
            </div>
            <p className="mb-3 text-slate-700 text-sm md:text-lg">
              A consulting firm focused on helping its clients realize the full
              potential of its CRM investments. With our unique consulting and
              domain-led understanding, we help our clients better connect with
              their customers, partners, and potential customers.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="border rounded-md p-3 bg-slate-100"
            >
              <p className="text-slate-600 md:text-lg md:mb-2">
                RET was established with the primary vision of helping clients
                succeed and meeting the critical shortage of experienced and
                well-rounded Salesforce professionals. Our vision extends beyond
                meeting the current demands of our clients; we aspire to become
                a pivotal player in the broader CRM technology landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="border rounded-md p-3 bg-slate-100"
            >
              <p className="text-slate-600 md:text-lg md:mb-2">
              With our deep understanding and expertise in Salesforce Sales and Service Cloud, we cover the entire sales and after-sales cycle for our clients. We envision a future where our expertise expands to encompass every facet of Salesforce and ultimately a diverse range of CRM technologies. 
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="border rounded-md p-3 bg-slate-100"
            >
              <p className="text-slate-600 md:text-lg md:mb-2">
              Our strength lies in our experienced team, boasting extensive knowledge in Salesforce solutions and management. We are committed to nurturing a culture of learning and excellence, continually seeking eager, young professionals to join our journey toward innovation and success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="border rounded-md p-3 bg-slate-100"
            >
              <p className="text-slate-600 md:text-lg md:mb-2">
                What truly distinguishes Round Eyes Technology is our
                well-rounded team of experts and our constant hunger to learn
                and grow. With experience spanning various crucial domains and
                verticals, we are uniquely positioned to offer comprehensive and
                insightful solutions in the Salesforce and CRM technology
                sphere.
              </p>
            </motion.div>
          </div>
        </div>

        <hr />
      </div>

      {/* <section className="max-w-2xl mx-auto text-center md:mt-14 mt-4">
        <h1 className="md:text-4xl text-xl font-bold text-slate-700">
          Elevate Your Customer Relationships with RET's CRM Solutions
        </h1>
        <p className="md:mt-6 mt-3 pb-8 text-slate-700 text-sm md:text-lg">
          write a heading for "Ready to take your customer relationships to the
          next level? Sign up for Ret today and experience the difference our
          CRM service can make for your business. With RET, building lasting
          relationships with your customers has never been easier"
        </p>
      </section> */}
    </section>
  );
};

export default AboutSection;
