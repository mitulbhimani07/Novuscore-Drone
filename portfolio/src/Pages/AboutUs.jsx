import React from "react";
import { motion } from "framer-motion";
import { FiCheck, FiUsers, FiAward, FiMapPin, FiBarChart2, FiShield, FiGlobe } from "react-icons/fi";
import AboutImage from "../assets/image/AboutImage.jpg";
import SmartDrone from "../assets/image/agd.jpg";
import "../assets/scss/AboutUs.scss";

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
    <div className="bg-green-50">
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container">
          <motion.h1 
            variants={itemVariants}
          >
            Transforming Agriculture with Novuscore Drones
          </motion.h1>
          <motion.p 
            variants={itemVariants}
          >
            India's leading agri-drone solutions provider, empowering farmers with cutting-edge technology
          </motion.p>
        </div>
      </motion.section>

      {/* Our Story */}
      <motion.section 
        className="journey-section"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid-container">
          <motion.div variants={itemVariants}>
            <h2>Our Journey</h2>
            <p>
              Founded with a vision to revolutionize Indian agriculture, Novuscore Drones has emerged as a pioneer in 
              drone-based farming solutions. As DGCA-approved drone manufacturers, we combine indigenous technology 
              with global best practices.
            </p>
            <p>
              From our beginnings in Hyderabad, we've grown to serve farmers across 12 states, helping them 
              adopt precision agriculture techniques that boost productivity sustainably.
            </p>
            <div className="feature-list">
              {[
                "DGCA & MoCA approved drones",
                "2000+ farmers empowered",
                "1,00,000+ acres covered",
                "30% average cost savings",
                "40% reduction in chemical usage"
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="feature-item"
                  // whileHover={{ x: 5 }}
                >
                  <FiCheck className="icon" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="image-container"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src={AboutImage} 
              alt="Marut Drone in action" 
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Core Values */}
      <motion.section 
        className="values-section"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container">
          <motion.h2 
            variants={itemVariants}
          >
            Why Choose Novuscore Drones
          </motion.h2>
          
          <div className="values-grid">
            {[
              {
                icon: <FiBarChart2 className="icon" />,
                title: "Precision Farming",
                content: "Our drones deliver exact inputs where needed, optimizing resource utilization and maximizing yields"
              },
              {
                icon: <FiShield className="icon" />,
                title: "DGCA Approved",
                content: "All our drones and operations comply with strict DGCA regulations for safety and reliability"
              },
              {
                icon: <FiGlobe className="icon" />,
                title: "Made in India",
                content: "Proudly developing indigenous drone technology tailored for Indian farming conditions"
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="value-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 10px 25px -5px rgba(5, 150, 105, 0.2)"
                }}
              >
                <div className="icon-container">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technology & Services */}
      <motion.section 
        className="solutions-section"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="section-header"
          variants={itemVariants}
        >
          <h2>Our Agri-Drone Solutions</h2>
          <p>
            Comprehensive services designed for modern farming needs
          </p>
        </motion.div>
        
        <div className="solutions-grid">
          <motion.div variants={itemVariants}>
            <div className="solutions-list">
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
                  className="solution-card"
                  // whileHover={{ scale: 1.02 }}
                >
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="image-container"
            variants={itemVariants}
          >
            <img 
              src={SmartDrone}
              alt="Novuscore Drone spraying" 
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Awards & Recognition */}
      <motion.section 
        className="recognition-section"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container">
          <motion.h2 
            variants={itemVariants}
          >
            Recognition & Partnerships
          </motion.h2>
          
          <div className="logo-grid">
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
                className="logo-container"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <img 
                  src={logo} 
                  alt="Partner logo" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>  
    </div>
  );
}
