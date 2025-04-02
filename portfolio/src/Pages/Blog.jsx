import React from "react";
import { motion } from "framer-motion";
import Blog1 from "../assets/image/Blog1.jpg";
import Blog2 from "../assets/image/Blog2.jpg";
import Blog3 from "../assets/image/Blog3.png";
import "../assets/scss/Blog.scss";

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

const cardHoverVariants = {
  hover: {
    y: -5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  }
};

export default function Blog() {
  return (
    <div className="blog-container">
      <div className="blog-content">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="blog-header"
        >
          <h1 className="text-[30px]">Drone Technology Blog</h1>
          <p>
            Insights and innovations in drone applications for agriculture, surveillance, and environmental management.
          </p>
        </motion.div>

        <motion.div
          className="blog-cards"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Blog Card 1 - Agriculture */}
          <motion.div
            className="blog-card"
            variants={itemVariants}
            whileHover="hover"
            variants={cardHoverVariants}
          >
            <motion.img
              src={Blog1}
              alt="Agricultural Drone"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="card-content">
              <div className="tag-container">
                <motion.span
                  className="tag"
                  whileHover={{ scale: 1.05 }}
                >
                  Agriculture
                </motion.span>
                <motion.span
                  className="tag"
                  whileHover={{ scale: 1.05 }}
                >
                  Spraying
                </motion.span>
              </div>
              <h2>Revolutionizing Crop Management</h2>
              <p>
                How our precision spraying drones are increasing yields while reducing chemical usage by up to 30%.
              </p>
            </div>
          </motion.div>

          {/* Blog Card 2 - Surveillance */}
          <motion.div
            className="blog-card"
            variants={itemVariants}
            whileHover="hover"
            variants={cardHoverVariants}
          >
            <motion.img
              src={Blog2}
              alt="Surveillance Drone"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <div className="card-content">
              <div className="tag-container">
                <motion.span
                  className="tag"
                  whileHover={{ scale: 1.05 }}
                >
                  Surveillance
                </motion.span>
                <motion.span
                  className="tag"
                  whileHover={{ scale: 1.05 }}
                >
                  Mapping
                </motion.span>
              </div>
              <h2>Advanced Aerial Surveillance</h2>
              <p>
                Our high-resolution mapping drones provide real-time data for security and infrastructure monitoring.
              </p>
            </div>
          </motion.div>

          {/* Blog Card 3 - Environmental */}
          <motion.div
            className="blog-card"
            variants={itemVariants}
            whileHover="hover"
            variants={cardHoverVariants}
          >
            <motion.img
              src={Blog3}
              alt="Environmental Drone"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            <div className="card-content">
              <div className="tag-container">
                <motion.span
                  className="tag"
                  whileHover={{ scale: 1.05 }}
                >
                  Afforestation
                </motion.span>
                <motion.span
                  className="tag"
                  whileHover={{ scale: 1.05 }}
                >
                  Mosquito Control
                </motion.span>
              </div>
              <h2>Drones for Environmental Solutions</h2>
              <p>
                Innovative approaches to mosquito eradication and large-scale afforestation using drone technology.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          className="services-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.h2
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            Our Drone Services
          </motion.h2>
          <motion.div
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              "Agriculture",
              "Pesticide Spraying",
              "Fertiliser Broadcasting",
              "Direct Seeding",
              "Thermal Fogging",
              "Crop Intelligence",
              "Training",
              "Mosquito Eradication",
              "Afforestation",
              "Mapping",
              "Surveillance",
              "Logistics"
            ].map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 15px -3px rgba(5, 150, 105, 0.1)"
                }}
              >
                <motion.div
                  className="service-icon"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                </motion.div>
                <h3>{service}</h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
