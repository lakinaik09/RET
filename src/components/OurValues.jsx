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
        "Aim to create a positive workplace culture that attracts and retains top talent, leading to long-term success and sustainability.",
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
              The Salesforce Demand Skills Gap is Real!
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
        <div id="our-value" className="md:py-10 mt-5 ">
          <h3 className="md:text-3xl text-2xl font-bold text-center text-slate-700 md:mt-6 md:mb-4 font-Krub">
            Our Values
          </h3>

          <div className="md:px-14 px-6 text-center mt-4">
            <p className="md:text-xl text-slate-900 font-semibold">
              RET is a Value Driven Company which is committed towards the
              growth and success of its Employees, Clients, and Partners. The
              Foundation of our company lays on the below key principles which
              form the core pillars of our Firm.
            </p>

            <div className="flex flex-wrap justify-center text-center md:gap-10 gap-3 md:my-14 my-6">
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

        
        </div>
      
      </div>
    </>
  );
};

export default OurValues;
