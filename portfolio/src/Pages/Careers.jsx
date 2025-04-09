import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../assets/scss/Careers.scss";

export default function Careers() {
  const jobOpenings = [
    {
      title: "Drone Pilot & Field Operator",
      type: "Full-time",
      location: "Multiple Locations",
      description: "Operate agricultural drones for crop spraying, mapping, and data collection. Requires DGCA certification and farming knowledge.",
      responsibilities: [
        "Conduct pre-flight checks and drone operations",
        "Execute precision spraying missions",
        "Collect and process field data",
        "Maintain equipment and flight logs"
      ]
    },
    {
      title: "Agri-Tech Sales Executive",
      type: "Full-time",
      location: "Regional Offices",
      description: "Promote our drone solutions to farmers and agribusinesses. Agriculture background preferred.",
      responsibilities: [
        "Generate leads and close sales",
        "Conduct product demonstrations",
        "Build relationships with farming communities",
        "Achieve sales targets"
      ]
    },
    {
      title: "Drone Software Engineer",
      type: "Full-time",
      location: "Hyderabad HQ",
      description: "Develop flight planning and agricultural analytics software for our drone systems.",
      responsibilities: [
        "Develop drone control algorithms",
        "Implement precision agriculture features",
        "Optimize flight path planning",
        "Integrate multispectral data analysis"
      ]
    },
    {
      title: "Agriculture Data Analyst",
      type: "Full-time",
      location: "Remote/Hybrid",
      description: "Transform drone-collected data into actionable insights for farmers.",
      responsibilities: [
        "Process NDVI and other crop health data",
        "Generate yield prediction models",
        "Create farmer-friendly reports",
        "Develop data visualization tools"
      ]
    }
  ];

  const perks = [
    {
      title: "Competitive Salary",
      icon: "💰",
      description: "Industry-standard compensation with performance bonuses"
    },
    {
      title: "Field Training",
      icon: "🚜",
      description: "Hands-on training with cutting-edge agri-drones"
    },
    {
      title: "Health Benefits",
      icon: "🏥",
      description: "Comprehensive medical insurance for you and family"
    },
    {
      title: "Career Growth",
      icon: "📈",
      description: "Clear progression paths in fast-growing industry"
    },
    {
      title: "Tech Allowance",
      icon: "💻",
      description: "Subsidized gadgets and equipment"
    },
    {
      title: "Farm Visits",
      icon: "🌱",
      description: "Regular field exposure to understand real challenges"
    }
  ];

  return (
    <div className="careers-container">
      {/* Hero Section */}
      <section className="hero-section" >
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Grow Your Career With Us</h1>
            <p>Join our mission to revolutionize agriculture through drone technology</p>
          </motion.div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="job-openings-section">
        <div className="section-header">
          <h2>Current Openings</h2>
          <p>Help build the future of precision agriculture with these exciting roles</p>
          <div className="divider"></div>
        </div>
        
        <div className="job-list">
          {jobOpenings.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="job-card"
            >
              <div className="job-content">
                <div className="job-header">
                  <div>
                    <h3>{job.title}</h3>
                    <div className="job-meta">
                      <span className="job-type">{job.type}</span>
                      <span className="job-location">
                        <svg xmlns="http://www.w3.org/2000/svg" className="location-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <Link to='/contact'>
                    <button className="apply-button">Apply Now</button>
                  </Link>
                </div>
                
                <p className="job-description">{job.description}</p>
                
                <div className="responsibilities">
                  <h4>Key Responsibilities:</h4>
                  <ul>
                    {job.responsibilities.map((item, i) => (
                      <li key={i}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Perks & Culture */}
      <section id="culture" className="perks-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Why Join Our Team?</h2>
            <p>We're building more than drones - we're building the future of sustainable agriculture</p>
            <div className="divider"></div>
          </div>

          <div className="perks-grid">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="perk-card"
              >
                <div className="perk-icon">{perk.icon}</div>
                <h3>{perk.title}</h3>
                <p>{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="culture-section">
        <div className="section-container">
          <div className="culture-content">
            <motion.div 
              className="culture-image"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Our team working with drones"
              />
            </motion.div>
            <motion.div 
              className="culture-text"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Our Work Culture</h2>
              <p>
                At [Your Company Name], we combine agricultural wisdom with technological innovation. Our team thrives on:
              </p>
              <ul className="culture-list">
                <li>
                  <div className="icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" className="culture-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4>Field-First Approach</h4>
                    <p>Regular farm visits keep us grounded in real agricultural challenges</p>
                  </div>
                </li>
                <li>
                  <div className="icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" className="culture-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h4>Continuous Learning</h4>
                    <p>Weekly tech talks and farming workshops keep skills sharp</p>
                  </div>
                </li>
                <li>
                  <div className="icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" className="culture-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4>Collaborative Spirit</h4>
                    <p>Farmers, engineers and pilots work side-by-side</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
