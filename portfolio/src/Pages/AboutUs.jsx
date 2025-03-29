import React from "react";
import { motion } from "framer-motion";
import { FiCheck, FiUsers, FiAward, FiMapPin, FiBarChart2, FiShield, FiGlobe } from "react-icons/fi";
import AboutImage from "../assets/image/AboutImage.jpg";
import SmartDrone from "../assets/image/agd.jpg";
// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

export default function About() {
  return (
    <div className="bg-green-50 min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="relative py-24 bg-gradient-to-r from-green-700 to-green-600 text-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 mt-6 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Transforming Agriculture with Novuscore Drones
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-4xl mx-auto"
            variants={itemVariants}
          >
            India's leading agri-drone solutions provider, empowering farmers with cutting-edge technology
          </motion.p>
        </div>
      </motion.section>

      {/* Our Story */}
      <motion.section 
        className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-green-800 mb-6">Our Journey</h2>
            <p className="text-green-700 mb-4 text-lg">
              Founded with a vision to revolutionize Indian agriculture, Novuscore Drones has emerged as a pioneer in 
              drone-based farming solutions. As DGCA-approved drone manufacturers, we combine indigenous technology 
              with global best practices.
            </p>
            <p className="text-green-700 mb-6 text-lg">
              From our beginnings in Hyderabad, we've grown to serve farmers across 12 states, helping them 
              adopt precision agriculture techniques that boost productivity sustainably.
            </p>
            <div className="space-y-3">
              {[
                "DGCA & MoCA approved drones",
                "2000+ farmers empowered",
                "1,00,000+ acres covered",
                "30% average cost savings",
                "40% reduction in chemical usage"
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                >
                  <FiCheck className="text-green-600 mr-3 text-xl" />
                  <span className="text-green-800 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="rounded-2xl overflow-hidden shadow-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src={AboutImage} 
              alt="Marut Drone in action" 
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Core Values */}
      <motion.section 
        className="py-16 bg-green-600"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-center text-white mb-16"
            variants={itemVariants}
          >
            Why Choose Novuscore Drones
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiBarChart2 className="text-4xl text-green-600" />,
                title: "Precision Farming",
                content: "Our drones deliver exact inputs where needed, optimizing resource utilization and maximizing yields"
              },
              {
                icon: <FiShield className="text-4xl text-green-600" />,
                title: "DGCA Approved",
                content: "All our drones and operations comply with strict DGCA regulations for safety and reliability"
              },
              {
                icon: <FiGlobe className="text-4xl text-green-600" />,
                title: "Made in India",
                content: "Proudly developing indigenous drone technology tailored for Indian farming conditions"
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-md text-center"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 10px 25px -5px rgba(5, 150, 105, 0.2)"
                }}
              >
                <div className="bg-green-50 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-4">{item.title}</h3>
                <p className="text-green-700">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technology & Services */}
      <motion.section 
        className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-green-800 mb-4">Our Agri-Drone Solutions</h2>
          <p className="text-green-700 max-w-3xl mx-auto text-lg">
            Comprehensive services designed for modern farming needs
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <div className="space-y-6">
              {[
                {
                  title: "Pesticide Spraying",
                  desc: "Precision application that reduces chemical usage by 30-40% with better coverage"
                },
                {
                  title: "Fertilizer Broadcasting",
                  desc: "Uniform distribution of fertilizers for optimal plant nutrition"
                },
                {
                  title: "Crop Monitoring",
                  desc: "Multispectral imaging for early detection of pests, diseases and nutrient deficiencies"
                },
                
                {
                  title: "Training Programs",
                  desc: "Comprehensive drone pilot training and agri-drone operation certification"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-sm border border-green-200"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-semibold text-green-800 mb-2">{item.title}</h3>
                  <p className="text-green-700">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="flex items-center"
            variants={itemVariants}
          >
            <img 
              src={SmartDrone}
              alt="Novuscore Drone spraying" 
              className="rounded-2xl shadow-xl w-full"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Awards & Recognition */}
      <motion.section 
        className="py-16 bg-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-center text-green-800 mb-12"
            variants={itemVariants}
          >
            Recognition & Partnerships
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
            {[
              "https://marutdrones.com/wp-content/uploads/2023/09/04-7.png",
              "https://marutdrones.com/wp-content/uploads/2023/09/34.png",
              "https://marutdrones.com/wp-content/uploads/2023/09/02-5.png",
              "https://marutdrones.com/wp-content/uploads/2023/09/03-8.png",
              "https://marutdrones.com/wp-content/uploads/2023/10/CPRI-Logo.png",
              "https://marutdrones.com/wp-content/uploads/2023/09/25.png",
              "https://marutdrones.com/wp-content/uploads/2023/09/28.png",
              "https://marutdrones.com/wp-content/uploads/2023/09/36.png",
              "https://marutdrones.com/wp-content/uploads/2023/09/30.png",
              "https://marutdrones.com/wp-content/uploads/2023/09/22.png",
              "https://marutdrones.com/wp-content/uploads/2023/09/18.png",
              "https://marutdrones.com/wp-content/uploads/2023/09/15-1.png",
            ].map((logo, index) => (
              <motion.div 
                key={index}
                className="p-4 flex justify-center"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <img 
                  src={logo} 
                  alt="Partner logo" 
                  className="h-16 object-contain grayscale hover:grayscale-0 transition"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>  
    </div>
  );
}