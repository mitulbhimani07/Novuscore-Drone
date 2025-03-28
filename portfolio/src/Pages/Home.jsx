import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';
import AboutUs from "../Pages/AboutUs";
import WhatWeOffer from "../Pages/WhatWeOffer";
import Blog from "../Pages/Blog";
import ContactUs from "../Pages/Contact";
import CountUp from 'react-countup';
import NovuscoreDrones from "../assets/image/Novuscore-Drones.jpg";

const Banner = () => {
   const stats = [
      { value: 2252, suffix: "+", label: "Farmers Served" },
      { value: 10896, suffix: "+", label: "Acres Covered" },
      { value: 40, suffix: "%", label: "Chemical Reduction" },
      { value: 12, suffix: "", label: "States Operating" }
   ];

   return (
      <div className="relative overflow-hidden bg-gradient-to-r from-green-700 to-green-600 text-white">
         {/* Content */}
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               {/* Text content */}
               <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
               >
                  <h1 className="text-4xl md:text-5xl font-bold mt-10 mb-6 leading-tight">
                     Pioneering <span className="text-yellow-300">Agri-Drone</span> Solutions in India
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 max-w-lg">
                     DGCA-approved drone technology for precision agriculture, crop monitoring, and smart farming.
                  </p>
                  <div className="flex flex-wrap gap-4">
                     <Link to="/services" className="inline-block">
                        <motion.button
                           className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold px-8 py-3 rounded-lg flex items-center transition-colors"
                           
                           whileTap={{ scale: 0.95 }}
                        >
                           Explore Services <FiArrowRight className="ml-2" />
                        </motion.button>
                     </Link>

                     <Link to="/contact" className="inline-block">
                        <motion.button
                           className="border-2 border-white hover:bg-white hover:text-green-800 font-bold px-8 py-3 rounded-lg flex items-center transition-colors"
                           
                           whileTap={{ scale: 0.95 }}
                        >
                           Contact Us
                        </motion.button>
                     </Link>
                  </div>
               </motion.div>

               {/* Image */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
               >
                  <img
                     src={NovuscoreDrones}
                     alt="Novuscore Drone in action"
                     className="w-full max-w-[512px] h-auto md:h-[288px] object-cover relative rounded-lg shadow-2xl mt-12"
                  />
                  <motion.div
                     className="absolute -bottom-5 -left-0 bg-white text-green-800 px-6 py-2 rounded-lg shadow-lg font-bold"
                     initial={{ scale: 0.8 }}
                     animate={{ scale: 1 }}
                     transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 2
                     }}
                  >
                     DGCA Approved
                  </motion.div>
               </motion.div>
            </div>
         </div>

         {/* Stats bar */}
         <div className="bg-green-900 bg-opacity-50 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  {stats.map((stat, index) => (
                     <motion.div
                        key={index}
                        className="p-4"
                        whileHover={{ y: -5 }}
                     >
                        <div className="text-3xl font-bold text-yellow-300 mb-2">
                           <CountUp
                              end={stat.value}
                              duration={2}
                              separator=","
                           />
                           {stat.suffix}
                        </div>
                        <div className="text-white font-medium">{stat.label}</div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>
         <AboutUs />
         <WhatWeOffer />
         <Blog />
         <ContactUs />
      </div>
   );
};

export default Banner;