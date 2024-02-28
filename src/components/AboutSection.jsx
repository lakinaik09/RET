import React from 'react'
import CreateAccountBtn from './CreateAccountBtn'
import SolutionImg from "../assets/solution.png"
import ScalingImg from "../assets/scaling.png"
import InterfaceImg from "../assets/login.png"
import SecurityImg from "../assets/encrypted.png"

const AboutSection = () => {
  return (
    <section className="md:px-14 sm:px-10 px-6 second-section md:py-10" id='about-us'>
    <div className="features-wrapper mx-auto relative z-20 bg-white rounded-md border shadow-md sm:px-12 p-6 py-8">
      <h3 className="md:text-3xl text-xl font-semibold text-slate-700 mb-5 border-b md:pt-10 pb-5 ">About us</h3>
      <div className="md:mb-10">
        <h2 className="md:text-4xl text-xl font-semibold mb-4 bg-gradient-to-r from-violet-700 via-orange-600 to-blue-800 inline-block text-transparent bg-clip-text">A Firm with a DNA in Salesforce & CRM Consulting Services </h2>
        <p className=" text-slate-600 md:text-lg md:mb-2">If you are looking to maximize the most Value from your Salesforce Investment, you are at the right place. With the right Guidance, Experience, and ExpertiseRET is committed to work with its clients as a trusted partner and drive them towards success.</p>

        <p className="text-slate-600 md:text-lg md:mb-2">RET was establishedwith the primary Vision of Helping Clients succeed and to meet the critical shortage of Experienced and Well-Rounded Salesforce Professionals.Our vision extends beyond meeting current demands of our clients and we aspire to become a pivotal player in the broader CRM Technology landscape.</p>

        <p className="text-slate-600 md:text-lg md:mb-2">With our Deep Understanding & Expertise in Salesforce Sales and Service Cloud we cover the entire Sales and After Sales Cycle for our clients. we envision a future where our expertise expands to encompass every facet of Salesforce and ultimately, a diverse range of CRM technologies</p>

        <p className="text-slate-600 md:text-lg md:mb-2">Our strength lies in our experienced team, boasting extensive knowledge in  Salesforce solutioning, and management. We're committed to nurturing a culture of learning and excellence, continually seeking eager, young professionals to join our journey towards innovation and success.</p>

        <p className="text-slate-600 md:text-lg md:mb-2">What truly distinguishes Round Eyes Technology is our well-rounded team of experts and our constant hunger to learn and grow. With experience spanning various crucial domains and verticals, we are uniquely positioned to offer comprehensive and insightful solutions in the Salesforce and CRM technology sphere.</p>
      </div>
         

      <div className='md:mb-10'>
      <h2 className="md:text-3xl text-xl font-semibold text-slate-700 md:pb-4 my-2">Who we are</h2>
      <p className="mb-3 text-slate-900 font-semibold text-sm md:text-lg">A consulting firm focussed at helping its clients realize the full potential of its CRM Investments. With our Unique Consulting and Domain Led understanding we help our clients to better connect with their customers, partners, and potential customers.</p>
      <p className="text-slate-700 text-sm md:text-lg">Salesforce  Celebrated its 25th Anniversary in February 2024, and it has been a wild and rapid Growth for them but at the same time what this Rapid Growth Means is that there is a Chronic Shortage of Skilled Salesforce Professionals in the Market. A latest report by IDC shows how Salesforce Economy Employment is doubling in 2026.</p>
    </div>


        {/* ================Why choose us================== */}



        <h3 className="md:text-3xl text-xl font-semibold text-slate-700 md:pb-4 my-2">Why Choose RET?</h3>
      <div className="box-wrapper grid md:grid-cols-2 md:gap-14 gap-10 md:mb-12">
        <div className="">
         <img src={SolutionImg} alt="SolutionImg" className="w-20"/>
          <h4 className="md:text-2xl text-xl font-bold my-4 text-slate-800 bg-gradient-to-r from-violet-700 via-orange-600 to-blue-800 inline-block text-transparent bg-clip-text">
            Customized Solutions
          </h4>
          <p className="text-slate-700 md:text-lg">
            We don't believe in a one-size-fits-all approach. Our team
            works closely with you to understand your business goals and
            challenges, crafting bespoke CRM solutions to address your
            specific needs.
          </p>
        </div>

        <div className="">
          <img src={ScalingImg} alt="ScalingImg" className="w-20" />
          <h4 className="md:text-2xl text-xl font-bold my-4 text-slate-800 bg-gradient-to-r from-violet-700 via-orange-600 to-blue-800 inline-block text-transparent bg-clip-text">
            Scalability
          </h4>
          <p className="text-slate-700 md:text-lg">
            Whether you're a small startup or a large enterprise, our CRM
            solutions are scalable to accommodate your growth. From
            managin
          </p>
        </div>

        <div className="">
          <img src={InterfaceImg} alt="InterfaceImg" className="w-20"/>
          <h4 className="md:text-2xl text-xl font-bold my-4 text-slate-800 bg-gradient-to-r from-violet-700 via-orange-600 to-blue-800 inline-block text-transparent bg-clip-text">
            User-Friendly Interface
          </h4>
          <p className="text-slate-700 md:text-lg">
            We pride ourselves on delivering intuitive interfaces that are
            easy to navigate, ensuring quick adoption by your team. Say
            goodbye to complex systems that hinder productivity.
          </p>
        </div>

        <div className="">
          <img src={SecurityImg} alt="SecurityImg" className="w-20" />
          <h4 className="md:text-2xl text-xl font-bold my-4 text-slate-800 bg-gradient-to-r from-violet-700 via-orange-600 to-blue-800 inline-block text-transparent bg-clip-text">
            Data Security
          </h4>
          <p className="text-slate-700 md:text-lg">
            Your data is your most valuable asset, and we take its
            security seriously. Our robust security measures ensure that
            your information remains safe and protected at all times.
          </p>
        </div>
      </div>
    
    </div>
   
    <section className="max-w-2xl mx-auto text-center md:mt-14 mt-4">
    <h1 className="md:text-4xl text-xl font-bold text-slate-700">
      Elevate Your Customer Relationships with Ret's CRM Solutions
    </h1>
    <p className="md:mt-6 mt-3 pb-8 text-slate-700 text-sm md:text-lg">
      write a heading for "Ready to take your customer relationships to
      the next level? Sign up for Ret today and experience the difference
      our CRM service can make for your business. With Ret, building
      lasting relationships with your customers has never been easier"
    </p>
    
  </section>
  </section>
  )
}

export default AboutSection