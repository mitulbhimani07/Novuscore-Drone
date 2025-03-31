import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck, FiShield, FiBarChart2, FiSettings, FiLifeBuoy, FiAward, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.1,
         delayChildren: 0.2
      }
   }
};

const itemVariants = {
   hidden: { y: 20, opacity: 0 },
   visible: {
      y: 0,
      opacity: 1,
      transition: {
         duration: 0.5
      }
   }
};



const ServiceCard = ({ title, features }) => (
   <motion.div
      variants={itemVariants}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform transition-all hover:scale-105"
   >
      <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
         <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="p-6">
         <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-3"
         >
            {features.map((feature, index) => (
               <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start"
               >
                  <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-green-800">{feature}</span>
               </motion.li>
            ))}
         </motion.ul>
      </div>
   </motion.div>
);

export default function DroneSolutionsWebsite() {
   const services = [
      {
         title: "Aerial Photography & Videography",
         features: [
            "4K Ultra HD resolution",
            "Cinematic drone footage",
            "360° panoramic shots",
            "Real-time video transmission",
            "Post-production editing"
         ]
      },
      {
         title: "Industrial Drone Inspections",
         features: [
            "Thermal imaging capabilities",
            "High-resolution zoom cameras",
            "Automated flight paths",
            "Detailed inspection reports",
            "NDT (Non-Destructive Testing)"
         ]
      },
      {
         title: "Drone Mapping & Surveying",
         features: [
            "High-accuracy GPS positioning",
            "3D terrain modeling",
            "Orthomosaic map creation",
            "Volumetric measurements",
            "GIS data integration"
         ]
      },
      {
         title: "Drone Delivery Solutions",
         features: [
            "Up to 5kg payload capacity",
            "10km operational range",
            "Automated flight systems",
            "Weather-resistant drones",
            "Real-time tracking"
         ]
      }
   ];

   return (
      <div className="min-h-screen bg-green-100">

         {/* Hero Section */}
         <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-r from-green-900 to-gray-900 text-white py-20"
         >
            <div className="max-w-7xl mx-auto px-4 text-center mt-10">
               <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto"
               >
                  Revolutionizing Business with Advanced Drone Technology
               </motion.h1>
               <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-xl max-w-2xl mx-auto mb-8"
               >
                  Cutting-edge aerial solutions that transform data collection, inspection, and delivery processes.
               </motion.p>
               <Link to='/services'>
               <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-green-700 px-8 py-3 rounded-[8px] font-bold shadow-lg hover:shadow-xl transition-all"
               >
                  Explore Our Services
               </motion.button>
               </Link>
            </div>
         </motion.section>

         {/* Services Section */}
         <section className="py-16 max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-green-900 mb-4">Our Comprehensive Drone Services</h2>
               <p className="text-green-700 max-w-2xl mx-auto text-lg">
                  Innovative solutions tailored to meet the diverse needs of industries worldwide.
               </p>
            </div>

            <motion.div
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               className="grid md:grid-cols-2 gap-8"
            >
               {services.map((service, index) => (
                  <ServiceCard
                     key={index}
                     title={service.title}
                     features={service.features}
                  />
               ))}
            </motion.div>
         </section>

         {/* Call to Action */}
         <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white"
         >
            <div className="max-w-4xl mx-auto px-4 text-center">
               <motion.h2
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold mb-6"
               >
                  Transform Your Operations Today
               </motion.h2>
               <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-xl mb-8 max-w-2xl mx-auto"
               >
                  Discover how our advanced drone technologies can elevate your business efficiency and insights.
               </motion.p>
               <Link to="/becomepartner">
                  <motion.button
                     whileTap={{ scale: 0.95 }}
                     className="bg-white text-green-700 px-8 py-3 rounded-[8px] font-bold shadow-lg hover:shadow-xl transition-all"
                  >
                     Schedule Consultation
                  </motion.button>
               </Link>
            </div>
         </motion.section>
      </div>
   );
}
