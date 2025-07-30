import React, { useState, useEffect } from "react";
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
   // const [theme, setTheme] = useState("default");

   // useEffect(() => {
   //    document.documentElement.setAttribute("data-theme", theme);
   //  }, [theme]);


   // const toggleTheme = () => {
   //    const nextTheme = theme === "default" ? "earth" : theme === "earth" ? "forest" : "default";
   //    setTheme(nextTheme);
   //    console.log("change color----",theme)
   // };

   const stats = [
      { value: 30, suffix: "+", label: "Trusted by" },
      { value: 40 , suffix: "+", label: "INR valuation" },
      { value: 10 , suffix: "Cr+", label: "Net worth " },
      { value: 20 , suffix: "+", label: "Employees" },
   ];


   return (
      <div className="banner">
         {/* Theme Switch Button */}
         {/* <div style={{ textAlign: "right", padding: "1rem" }}>
            <button onClick={toggleTheme} className="banner__primary-btn">
               Switch Theme
            </button>
         </div> */}

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
                     Empowering Indian <span>Agriculture</span> Through Technology
                  </h1>
                  <p style={{ fontSize: "1.2rem" }}>
                     Welcome to Novuscore Softcom Solution Pvt. Ltd., where innovation meets impact. We are transforming the agricultural ecosystem by bridging the gap between farmers and markets with a tech-enabled platform for the seamless buying and selling of agri-product
                  </p>
                  <p style={{ fontSize: "1.2rem" }}>
                    From Farm to Market—Simplified, Secured, Scalable.
                  </p>
                  <div className="banner__buttons">
                     <Link to="/services" className="inline-block">
                        <motion.a
                           className="banner__primary-btn"
                           whileTap={{ scale: 0.95 }}
                        >
                           Explore Our Platform
                           <FiArrowRight className="ml-2" />
                        </motion.a>
                     </Link>

                     <Link to="/contact" className="inline-block">
                        <motion.a
                           className="banner__secondary-btn h-[48px]"
                           whileTap={{ scale: 0.95 }}
                        >
                          Get in Touch
                        </motion.a>
                     </Link>
                  </div>
               </motion.div>

               {/* Image */}
               <motion.div
                  className="banner__image-container"
                  style={{ display: "flex", justifyContent: "flex-end" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
               >
                  <img
                     src={NovuscoreDrones}
                     alt="Novuscore Drone in action"
                     className="banner__image"
                  />
                  <motion.div className="banner__badge motion-pulse">
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
                     <motion.div key={index} className="banner__stat-item">
                        <div className="banner__stat-value">
                           <CountUp end={stat.value} duration={2} separator="," />
                           {stat.suffix}
                        </div>
                        <div className="banner__stat-label">{stat.label}</div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>

         {/* Other Sections */}
         <AboutUs />
         <WhatWeOffer />
         <Blog />
         <ContactUs />
      </div>
   );
};

export default Banner;
