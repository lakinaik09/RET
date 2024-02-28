import React from "react";
import { motion } from "framer-motion";

const AnimateCandle = () => {
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "auto" }}
        transition={{ duration: 0.5 }}
        className="w-0 flex items-end justify-between md:gap-10 border-b-4 border-slate-600 md:px-10 px-2 md:h-96 h-80 overflow-hidden"
      >
        <motion.div
          viewport={{ once: false }}
          initial={{ height: 0 }}
          whileInView={{ height: 80 }}
          transition={{ duration: 0.3 }}
          exit={{ transition: { delay: 0, duration: 0 } }}
          className="md:w-20 h-20 flex flex-col relative"
        >
          <div className="text-center font-bold text-white pt-1 w-full px-1 bg-orange-400 h-[45%]">
            1.9
          </div>
          <div className="text-center font-bold text-white pt-1 w-full bg-blue-500 h-[55%]">
            2.8
          </div>
          <div className="absolute md:-top-10 -top-8 md:left-7 left-1 md:text-xl text-blue-950 font-bold">4.6</div>
        </motion.div>
        <motion.div
          viewport={{ once: false }} 
          initial={{ height: 0 }}
          whileInView={{ height: 112 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          exit={{ transition: { delay: 0, duration: 0 } }}
          className="md:w-20 h-28 relative"
        >
          <div className="text-white px-1 text-center font-bold pt-1 w-full bg-orange-400 h-[45%]">
            2.3
          </div>
          <div className="text-white text-center font-bold pt-1 w-full bg-blue-500 h-[55%]">
            3.4
          </div>
          <div className="absolute md:-top-10 -top-8 md:left-7 left-1 md:text-xl text-blue-950 font-bold">5.8</div>
        </motion.div>
        <motion.div
          viewport={{ once: false }}
          initial={{ height: 0 }}
          whileInView={{ height: 144 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          exit={{ transition: { delay: 0, duration: 0 } }}
          className="md:w-20 h-36 relative"
        >
          <div className="text-center px-1 text-white font-bold pt-1 w-full bg-orange-400 h-[45%]">
            2.9
          </div>
          <div className="text-center text-white font-bold pt-1 w-full bg-blue-500 h-[55%]">
            4.2
          </div>
          <div className="absolute md:-top-10 -top-8 md:left-7 left-1 md:text-xl text-blue-950 font-bold">7.1</div>
        </motion.div>
        <motion.div
          viewport={{ once: false }}
          initial={{ height: 0 }}
          whileInView={{ height: 176 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          exit={{ transition: { delay: 0, duration: 0 } }}
          className="md:w-20 h-44 relative"
        >
          <div className="text-center px-1 font-bold text-white pt-1 w-full bg-orange-400 h-[45%]">
            3.5
          </div>
          <div className="text-center font-bold text-white pt-1 w-full bg-blue-500 h-[55%]">
            5.1
          </div>
          <div className="absolute md:-top-10 -top-8 md:left-7 left-1 md:text-xl text-blue-950 font-bold">8.6</div>
        </motion.div>
        <motion.div
          viewport={{ once: false }}
          initial={{ height: 0 }}
          whileInView={{ height: 224 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          exit={{ transition: { delay: 0, duration: 0 } }}
          className="md:w-20 h-56 relative"
        >
          <div className="text-center px-1 font-bold text-white pt-1 w-full bg-orange-400 h-[45%]">
            4.1
          </div>
          <div className="text-center font-bold text-white pt-1 w-full bg-blue-500 h-[55%]">
            6.0
          </div>
          <div className="absolute md:-top-10 -top-8 md:left-7 md:text-xl text-blue-950 font-bold">10.2</div>
        </motion.div>
        <motion.div
          viewport={{ once: false }}
          initial={{ height: 0 }}
          whileInView={{ height: 256 }}
          transition={{ duration: 0.3, delay: 0.9 }}
          exit={{ transition: { delay: 0, duration: 0 } }}
          className="md:w-20 h-64 relative"
        >
          <div className="text-center px-1 font-bold text-white pt-1 w-full bg-orange-400 h-[45%] ">
            4.9
          </div>
          <div className="text-center font-bold text-white pt-1 w-full bg-blue-500 h-[55%]">
            7.1
          </div>
          <div className="absolute md:-top-10 -top-8 md:left-7 md:text-xl text-blue-950 font-bold">12.0</div>
        </motion.div>
        <motion.div
          viewport={{ once: false }}
          initial={{ height: 0 }}
          whileInView={{ height: 288 }}
          transition={{ duration: 0.3, delay: 1 }}
          exit={{ transition: { delay: 0, duration: 0 } }}
          className="md:w-20 flex flex-col relative"
        >
          <div className="text-center px-1 font-bold pt-1 w-full text-white bg-orange-400 h-[45%]">
            5.7
          </div>
          <div className="text-center font-bold pt-1 w-full text-white bg-blue-500 h-[55%]">
            8.3
          </div>
          <div className="absolute md:-top-10 -top-8 md:left-7 md:text-xl text-blue-950 font-bold">14.0</div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-between md:px-10 lg:px-14 sm:px-6 px-2"
      >
        <div className="text-center font-bold md:text-lg text-sm">2020</div>
        <div className="text-center font-bold md:text-lg text-sm">2021</div>
        <div className="text-center font-bold md:text-lg text-sm">2022</div>
        <div className="text-center font-bold md:text-lg text-sm">2023</div>
        <div className="text-center font-bold md:text-lg text-sm">2024</div>
        <div className="text-center font-bold md:text-lg text-sm">2025</div>
        <div className="text-center font-bold md:text-lg text-sm">2026</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="my-3 flex items-center justify-center gap-6"
      >
        <div className="flex items-center gap-2">
          <div className="w-10 h-4 bg-blue-600"></div>
          <p className="font-bold">Indirect/induced</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-4 bg-orange-500"></div>
          <p className="font-bold">Direct</p>
        </div>
      </motion.div>
    </>
  );
};

export default AnimateCandle;
