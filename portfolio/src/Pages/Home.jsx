import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import AboutUs from "../Pages/AboutUs";
import WhatWeOffer from "../Pages/WhatWeOffer";
import Blog from "../Pages/Blog";
import ContactUs from "../Pages/Contact";

const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-green-700 to-green-600 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        {/* <div className="absolute inset-0 bg-[url('https://static.dw.com/image/64115481_605.jpg')] bg-repeat"></div> */}
      </div>
      
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
              <motion.a
                href="/services"
                className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold px-8 py-3 rounded-lg flex items-center transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services <FiArrowRight className="ml-2" />
              </motion.a>
              <motion.a
                href="/contact"
                className="border-2 border-white hover:bg-white hover:text-green-800 font-bold px-8 py-3 rounded-lg flex items-center transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
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
              src="https://www.sify.com/wp-content/uploads/2023/03/drone_agriculture_freepik-1024x490.jpg" 
              alt="Marut Drone in action" 
              className="w-full max-w-lg mx-auto rounded-lg shadow-2xl"
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white text-green-800 px-6 py-2 rounded-lg shadow-lg font-bold"
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
            {[
              { value: "2000+", label: "Farmers Served" },
              { value: "1L+", label: "Acres Covered" },
              { value: "40%", label: "Chemical Reduction" },
              { value: "12", label: "States Operating" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="p-4"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl font-bold text-yellow-300 mb-2">{stat.value}</div>
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