import React from 'react'
import Boost from "../assets/Boost.png";
import Insight from "../assets/insight.png";
import SocialCare from "../assets/social-care.png";
import DataMigration from "../assets/data-migration.png"
import {motion} from "framer-motion"

const ServiceSection = () => {
  return (
   <>
    <section className="md:py-20 py-10  md:px-16 sm:px-10 px-6 bg-img text-center" id='services'>
          <h2 className="md:text-4xl text-2xl my-6 font-bold inline-block text-white text-center mb-10 font-Krub">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 text-center gap-10">
            <motion.div  
              initial={{y:50,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:.9}} 
              className="md:p-6 p-4 bg-white rounded-md hover:scale-105 duration-300">
              <img src={Boost} alt="efficient boost" className="w-16 mx-auto" />
              <h4 className="md:text-2xl text-xl text-slate-900 font-semibold md:my-5 my-3 bg-gradient-to-r from-violet-700 via-orange-600 to-blue-800 inline-block text-transparent bg-clip-text">
                Salesforce Implementation and Integration
              </h4>
              <p className="font-medium text-slate-800 text-sm md:text-base">
                Harness the full power of Salesforce with our expert
                implementation and integration services. From initial setup to
                seamless integration with your existing systems, we ensure that
                Salesforce aligns perfectly with your business objectives,
                enabling streamlined processes and enhanced productivity.
              </p>
            </motion.div>
            <motion.div  
              initial={{y:50,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:.9}} 
              className="md:p-6 p-4 bg-white rounded-md hover:scale-105 duration-300">
              <img
                src={Insight}
                alt="efficient boost"
                className="w-16 mx-auto"
              />
              <h4 className="md:text-2xl text-xl text-slate-900 font-semibold md:my-5 my-3 bg-gradient-to-r from-violet-700 via-orange-600 to-blue-800 inline-block text-transparent bg-clip-text">
                Customization and Configuration
              </h4>
              <p className="font-medium text-slate-800 text-sm md:text-base">
              Tailoring Salesforce to meet your unique business needs is our specialty. Our team works closely with you to understand your requirements and customize Salesforce to optimize workflows, data management, reporting, and more. Experience CRM solutions that are truly aligned with your organization's goals.
              </p>
            </motion.div>
            <motion.div  
              initial={{y:50,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:.9}} 
              className="md:p-6 p-4 bg-white rounded-md hover:scale-105 duration-300">
              <img
                src={SocialCare}
                alt="efficient boost"
                className="w-16 mx-auto"
              />
              <h4 className="md:text-2xl text-xl text-slate-900 font-semibold md:my-5 my-3 bg-gradient-to-r from-violet-700 via-orange-600 to-blue-800 inline-block text-transparent bg-clip-text">
                Training and Support
              </h4>
              <p className="font-medium text-slate-800 text-sm md:text-base">
                Empower your team with the knowledge and skills they need to
                make the most out of Salesforce. We offer comprehensive training
                programs tailored to different user roles and proficiency
                levels, ensuring smooth adoption and maximizing the ROI of your
                CRM investment. Additionally, our dedicated support services are
                always available to address any questions or concerns, providing
                ongoing assistance whenever you need it.
              </p>
            </motion.div>
            <motion.div  
              initial={{y:50,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:.9}} 
              className="md:p-6 p-4 bg-white rounded-md hover:scale-105 duration-300">
              <img
                src={DataMigration}
                alt="efficient boost"
                className="w-16 mx-auto"
              />
              <h4 className="md:text-2xl text-xl text-slate-900 font-semibold md:my-5 my-3 bg-gradient-to-r from-violet-700 via-orange-600 to-blue-800 inline-block text-transparent bg-clip-text">
                Data Migration and Cleanup
              </h4>
              <p className="font-medium text-slate-800 text-sm md:text-base">
                Transitioning to Salesforce or upgrading your CRM system? Let us
                handle the complexities of data migration and cleanup. Our
                experts ensure seamless transfer of your valuable data while
                maintaining data integrity and consistency. Say goodbye to data
                silos and inaccuracies, and hello to a clean, organized database
                ready to fuel your business growth.
              </p>
            </motion.div>
          </div>
        </section>
   </>
  )
}

export default ServiceSection