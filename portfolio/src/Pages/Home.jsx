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
import "../assets/scss/Home.scss";

const Banner = () => {
   const stats = [
      { value: 2252, suffix: "+", label: "Farmers Served" },
      { value: 10896, suffix: "+", label: "Acres Covered" },
      { value: 70, suffix: "%", label: "Chemical Reduction" },
      { value: 23, suffix: "", label: "States Operating" }
   ];

   return (
      <div className="banner">
         {/* Content */}
         <div className="banner__content">
            <div className="banner__grid">
               {/* Text content */}
               <motion.div
                  className="banner__text"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
               >
                  <h1>
                     Pioneering <span>Agri-Drone</span> Solutions in India
                  </h1>
                  <p>
                     DGCA-approved drone technology for precision agriculture, crop monitoring, and smart farming.
                  </p>
                  <div className="banner__buttons">
                     <Link to="/services" className="inline-block">
                        <motion.a
                           className="banner__primary-btn"
                           whileTap={{ scale: 0.95 }}
                        >
                              Explore Services
                              <FiArrowRight className="ml-2" />
                        </motion.a>
                     </Link>

                     <Link to="/contact" className="inline-block">
                        <motion.a
                           className="banner__secondary-btn h-[48px]"
                           whileTap={{ scale: 0.95 }}
                        >
                           Book a Free Demo
                        </motion.a>
                     </Link>
                  </div>
               </motion.div>

               {/* Image */}
               <motion.div
                  className="banner__image-container"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
               >
                  <img
                     src={NovuscoreDrones}
                     alt="Novuscore Drone in action"
                     className="banner__image"
                  />
                  <motion.div
                     className="banner__badge motion-pulse"
                  >
                     DGCA Approved
                  </motion.div>
               </motion.div>
            </div>
         </div>

         {/* Stats bar */}
         <div className="banner__stats">
            <div className="banner__stats-container">
               <div className="banner__stats-grid">
                  {stats.map((stat, index) => (
                     <motion.div
                        key={index}
                        className="banner__stat-item"
                     >
                        <div className="banner__stat-value">
                           <CountUp
                              end={stat.value}
                              duration={2}
                              separator=","
                           />
                           {stat.suffix}
                        </div>
                        <div className="banner__stat-label">{stat.label}</div>
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