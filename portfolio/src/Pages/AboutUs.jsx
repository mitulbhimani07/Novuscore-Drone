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
            Revolutionizing Industries with AI-Powered Drone Solutions
          </motion.h1>
          <motion.p 
            variants={itemVariants}
          >
            Pioneering intelligent, data-driven systems to transform AgriTech and beyond
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
            <h2>About Novuscore Softcom Solutions</h2>
            <p>
              At NOVUSCORE SOFTCOM SOLUTION PVT LTD, we are pioneers in revolutionizing drone technology through advanced software solutions powered by Artificial Intelligence (AI) and Machine Learning (ML). Based in the vibrant city of Surat, Gujarat, we specialize in creating intelligent, data-driven systems designed to transform industries—with a dedicated focus on AgriTech.
            </p>
            <p>
              From precision farming and smart crop monitoring to infrastructure inspection and logistics, our software empowers businesses to optimize operations, reduce costs, and make data-backed decisions.
            </p>
            <div className="feature-list">
              {[
                "AI & ML powered solutions",
                "Precision agriculture focus",
                "Industry-specific drone software",
                "Data-driven decision making",
                "Sustainable farming practices"
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="feature-item"
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
              alt="Novuscore drone technology" 
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Vision & Mission */}
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
            Our Vision & Mission
          </motion.h2>
          
          <div className="values-grid">
            {[
              {
                icon: <FiGlobe className="icon" />,
                title: "Our Vision",
                content: "To emerge as a global leader in drone and AgriTech innovation, delivering AI-driven solutions that redefine productivity, efficiency, and sustainability across industries."
              },
              {
                icon: <FiBarChart2 className="icon" />,
                title: "Our Mission",
                content: "We develop scalable, industry-specific drone software using cutting-edge AI and ML technologies. Our goal is to enhance decision-making, operational excellence, and environmental stewardship in agriculture and beyond."
              },
              {
                icon: <FiMapPin className="icon" />,
                title: "Why Surat?",
                content: "Surat's dynamic entrepreneurial spirit, skilled workforce, and robust infrastructure align seamlessly with our mission to drive technological transformation. The city's progressive policies and connectivity fuel our ability to innovate and scale."
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

      {/* Leadership */}
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
          <h2>Our Leadership</h2>
          <p>
            Meet the visionary directors guiding Novuscore's innovation journey
          </p>
        </motion.div>
        
        <div className="solutions-grid">
          <motion.div variants={itemVariants}>
            <div className="solutions-list">
              {[
                {
                  title: "Suresh J.",
                  subtitle: "Co-Founder & Director – Administration, Personnel & Finance",
                  desc: "A visionary leader with expertise in corporate governance, Suresh oversees the company's financial strategy, human resources, and operational efficiency. His sharp business acumen ensures sustainable growth and seamless internal operations."
                },
                {
                  title: "Hemraj J.",
                  subtitle: "Director – Technology & Product Development",
                  desc: "Hemraj spearheads our technological innovation, blending his deep knowledge of AI and ML to craft groundbreaking drone solutions. His leadership in AgriTech software development is transforming farming practices."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="solution-card"
                >
                  <h3>{item.title}</h3>
                  <h4>{item.subtitle}</h4>
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
              alt="Novuscore leadership" 
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