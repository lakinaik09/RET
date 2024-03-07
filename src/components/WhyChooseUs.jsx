import React from 'react'
import SolutionImg from "../assets/solution.png";
import ScalingImg from "../assets/scaling.png";
import InterfaceImg from "../assets/login.png";
import SecurityImg from "../assets/encrypted.png";    
const WhyChooseUs = () => {
  return (
   <>
     {/* ================Why choose us================== */}

     <h3 className="md:text-3xl text-xl font-bold text-slate-700 md:pb-4 mb-2 mt-6 font-Krub md:px-16 px-6">
          Why Choose RET?
        </h3>
        <div className="box-wrapper grid md:grid-cols-2 md:gap-14 gap-10 md:mb-12 md:px-16 px-3">
          <div className="bg-white p-4 rounded-md">
            <img src={SolutionImg} alt="SolutionImg" className="w-20" />
            <h4 className="md:text-2xl text-xl font-bold my-4 text-slate-800 bg-gradient-to-r from-violet-700 via-orange-600 to-blue-800 inline-block text-transparent bg-clip-text">
              Customized Solutions
            </h4>
            <p className="text-slate-700 md:text-lg">
              We don't believe in a one-size-fits-all approach. Our team works
              closely with you to understand your business goals and challenges,
              crafting bespoke CRM solutions to address your specific needs.
            </p>
          </div>

          <div className="bg-white p-4 rounded-md">
            <img src={ScalingImg} alt="ScalingImg" className="w-20" />
            <h4 className="md:text-2xl text-xl font-bold my-4 text-slate-800 bg-gradient-to-r from-violet-700 via-orange-600 to-blue-800 inline-block text-transparent bg-clip-text">
              Scalability
            </h4>
            <p className="text-slate-700 md:text-lg">
              Whether you're a small startup or a large enterprise, our CRM
              solutions are scalable to accommodate your growth. From managin
            </p>
          </div>

          <div className="bg-white p-4 rounded-md">
            <img src={InterfaceImg} alt="InterfaceImg" className="w-20" />
            <h4 className="md:text-2xl text-xl font-bold my-4 text-slate-800 bg-gradient-to-r from-violet-700 via-orange-600 to-blue-800 inline-block text-transparent bg-clip-text">
              User-Friendly Interface
            </h4>
            <p className="text-slate-700 md:text-lg">
              We pride ourselves on delivering intuitive interfaces that are
              easy to navigate, ensuring quick adoption by your team. Say
              goodbye to complex systems that hinder productivity.
            </p>
          </div>

          <div className="bg-white p-4 rounded-md">
            <img src={SecurityImg} alt="SecurityImg" className="w-20" />
            <h4 className="md:text-2xl text-xl font-bold my-4 text-slate-800 bg-gradient-to-r from-violet-700 via-orange-600 to-blue-800 inline-block text-transparent bg-clip-text">
              Data Security
            </h4>
            <p className="text-slate-700 md:text-lg">
              Your data is your most valuable asset, and we take its security
              seriously. Our robust security measures ensure that your
              information remains safe and protected at all times.
            </p>
          </div>
        </div>
   </>
  )
}

export default WhyChooseUs