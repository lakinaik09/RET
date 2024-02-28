import React from "react";
import "../App.css";
import EmployeeImg from "../assets/employee-focus.png";
import CustomerImg from "../assets/customer-focus.png";
import Quality from "../assets/quality.png";
import Transparency from "../assets/transparency.png";
import Innovation from "../assets/innovation.png";
import ValueCard from "./ValueCard";

const OurValues = () => {
  const companyValues = [
    {
      title: "Employee First",
      description:
        "Adopting an 'employee first' approach, we at RET aim to create a positive workplace culture that attracts and retains top talent, leading to long-term success and sustainability.",
        image: EmployeeImg
    },
    {
      title: "Customer Focus",
      description:
        "Prioritizing the needs and satisfaction of customers, ensuring a positive experience and building long-term relationships.",
        image: CustomerImg
    },
    {
      title: "Quality",
      description:
        "Commit to delivering high-quality services and products, ensuring customer satisfaction and trust.",
        image: Quality
    },
    {
      title: "Transparency",
      description:
        "Maintain openness in operations and communications, both internally and externally.",
        image:Transparency
    },
    {
      title: "Innovation",
      description:
        "Encouraging creativity, continuous improvement, and a willingness to explore new ideas and technologies.",
        image: Innovation
    },
  ];

  return (
    <>
      <div className="our-values-wrapper min-h-screen mb-10 pt-10">
        <div className="salesforce-content min-h-[90vh] flex items-center md:px-16 p-6">
          <div className="md:w-3/4">
            <h1 className="md:text-6xl text-2xl font-semibold mb-4 bg-gradient-to-r from-violet-700 via-white to-orange-600 inline-block text-transparent bg-clip-text">
              The Salesforce Demand Skills Gap is Real!!
            </h1>

            <p className="md:text-base text-sm text-slate-300 md:mt-4 mt-2">
              With Salesforce Revenue Clocking at USD 31.35 Billion, there are a
              lot of companies investing in Salesforce and similar SaaS
              software, and software requires the right people who know how to
              design, develop, architect, implement, test, manage, support, and
              build to ensure success of a company and realize full potential of
              its investments
            </p>
            <p className="md:text-base text-sm text-slate-300  md:mt-4 mt-2">
              Finding the“right people,” is a huge challenge today.
            </p>
            <p className="md:text-base text-sm text-slate-300  md:mt-4 mt-2">
              This is true for a myriad of reasons, but one of the biggest
              roadblocks comes down to this: Salesforce is a complex,
              multi-faceted solution—spanning multiple business areas and
              serving multiple purposes. As a result, successfully managing
              Salesforce requires a variety of specialized skillsets—making it
              difficult to find talent that can successfully fill and execute
              these niche roles.
            </p>
            <p className="md:text-base text-sm text-slate-300  md:mt-4 mt-2">
              Keeping this in Mind, we at Round Eye Technology help to bridge
              the Talent Gap and our key goal is to help our Clients and
              Partners achieve their desired outcomes without having Skills as a
              bottleneck.
            </p>
          </div>
        </div>
        <div id="our-value" className="md:py-10 mt-5">
          <h3 className="md:text-3xl text-2xl font-semibold text-center text-slate-700 md:mt-6 md:mb-4">
            Our values
          </h3>

          <div className="md:px-14 px-6 text-center mt-4">
            <p className="md:text-xl text-balance font-semibold">
              RET is a Value Driven Company which is committed towards the
              growth and success of its Employees, Clients, and Partners. The
              Foundation of our company lays on the below key principles which
              form the core pillars of our Firm.
            </p>

            <div className="flex lg:flex-nowrap flex-wrap justify-center gap-3 md:my-14 my-6">
              {companyValues.map((value, index) => {
                return (
                  <ValueCard
                    key={index}
                    img={value.image}
                    title={value.title}
                    description={value.description}
                  />
                );
              })}
            </div>
          </div>

          {/* <h4 className="md:text-3xl text-xl font-semibold text-center text-slate-800 md:my-8">
            Quality, reliability, continuous upgradation and have a customer
            centric focus
          </h4> */}
        </div>
        {/* <div className="grid md:grid-cols-3 gap-10 mt-8">
               
                <div className="value-box border  rounded-md md:p-10 p-4 bg-gradient-to-r from-fuchsia-500 via-purple-600 to-indigo-600 text-white text-center">
                    <div className="img-wrapper flex items-center mx-auto h-52 w-52 bg-white rounded-full overflow-hidden">
                        <img src={value3} alt="" className=" object-cover w-full"/>
                    </div>
                    <div>
                        <h2 className="md:text-3xl text-xl font-semibold my-3">Quality</h2>
                        <p className="text-sm md:text-base">Our quality is not just what we put into our services, but it is what our clients gets out of it to grow their business.</p>
                    </div>
                </div>
                <div className="value-box border  rounded-md md:p-10 p-4 bg-gradient-to-r from-fuchsia-500 via-purple-600 to-indigo-600 text-white text-center">
                    <div className="img-wrapper flex items-center mx-auto h-52 w-52 bg-white rounded-full overflow-hidden">
                        <img src={value2} alt="" className=" object-cover w-full"/>
                    </div>
                    <div>
                        <h2 className="md:text-3xl text-xl font-semibold my-3">Reliability</h2>
                        <p className="text-sm md:text-base">Our team provide the product, service, or system which will perform as expected now and in the future. We deliver services with deep focus on Accessibility, Continuity and Performance.</p>
                    </div>
                </div>
                <div className="value-box border  rounded-md md:p-10 p-4 bg-gradient-to-r from-fuchsia-500 via-purple-600 to-indigo-600 text-white text-center">
                    <div className="img-wrapper flex items-center mx-auto h-52 w-52 bg-white rounded-full overflow-hidden">
                        <img src={value1} alt="" className=" object-cover w-full"/>
                    </div>
                    <div>
                        <h2 className="md:text-3xl text-xl font-semibold my-3">Customer Centric Focus</h2>
                        <p className="text-sm md:text-base">Our cutting edge team providing a positive customer experience both at the point of pre-sale and post-sale in order to drive profit, trust and gain competitive advantage.

</p>
                    </div>
                </div>
        </div> */}

        {/* <div className="">
            <div className="w-1/4 relative flex ">
                  <div className="">
                    <div>
                    <img src={value1} alt="" />
                    </div>
                    <div>

                    </div>
                  </div>
                  <div className="top-40 left-20 z-10">
                    <img src={value2} alt="" />
                  </div>
                  <div className="">
                    <img src={value3} alt="" />
                  </div>
            </div>
            <div>

            </div>
        </div> */}
      </div>
    </>
  );
};

export default OurValues;
