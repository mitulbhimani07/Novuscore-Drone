import React from "react";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../assets/scss/WhatWeOffer.scss"; // Make sure this path is correct

// Animation variants (keep these in the component file since they're JS-specific)
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

// ServiceCard component (now using SCSS classes)
const ServiceCard = ({ title, features }) => (
  <motion.div
    variants={itemVariants}
    className="service-card"
  >
    <div className="card-header bg-green-500">
      <h3>{title}</h3>
    </div>
    <div className="card-body">
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="features-list"
      >
        {features.map((feature, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            className="feature-item"
          >
            <FiCheck className="feature-icon" />
            <span>{feature}</span>
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
    <div className="drone-solutions">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="hero-section"
      >
        <div className="hero-container">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="hero-title"
          >
            Revolutionizing Business with Advanced Drone Technology
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hero-subtitle"
          >
            Cutting-edge aerial solutions that transform data collection, inspection, and delivery processes.
          </motion.p>
          <Link to='/services'>
            <motion.button
              // whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-button "
            >
              Explore Our Services
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-header">
          <h2 className="section-title">Our Comprehensive Drone Services</h2>
          <p className="section-description">
            Innovative solutions tailored to meet the diverse needs of industries worldwide.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="services-grid"
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
        className="cta-section bg-green-500" 
      >
        <div className="cta-container">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="cta-title"
          >
            Transform Your Operations Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="cta-description"
          >
            Discover how our advanced drone technologies can elevate your business efficiency and insights.
          </motion.p>
          <Link to="/becomepartner">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="cta-button"
            >
              Schedule Consultation
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}