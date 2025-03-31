import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
    <div className="bg-white text-green-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full pt-28 pb-10 flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-700 to-green-800">
        <div className="relative z-10 px-6 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Grow Your Career With Us
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Join our mission to revolutionize agriculture through drone technology
            </p>
           
          </motion.div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="max-w-6xl mx-auto py-20 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-green-900 mb-4">Current Openings</h2>
          <p className="text-lg text-green-700 max-w-3xl mx-auto">
            Help build the future of precision agriculture with these exciting roles
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-green-600 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="space-y-8">
          {jobOpenings.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-green-900 mb-2">{job.title}</h3>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                        {job.type}
                      </span>
                      <span className="flex items-center text-green-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <Link to='/contact'>
                  <button className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg mt-4 md:mt-0">
                    Apply Now
                  </button>
                  </Link>
                </div>
                
                <p className="text-gray-700 mb-6">{job.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-green-900 mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2 text-green-700">
                    {job.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
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
      <section id="culture" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Why Join Our Team?</h2>
            <p className="text-lg text-green-700 max-w-3xl mx-auto">
              We're building more than drones - we're building the future of sustainable agriculture
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-green-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="text-4xl mb-4">{perk.icon}</div>
                <h3 className="text-xl font-semibold text-green-900 mb-2">{perk.title}</h3>
                <p className="text-green-700">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Our team working with drones"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-green-900 mb-6">Our Work Culture</h2>
              <p className="text-green-700 mb-6">
                At [Your Company Name], we combine agricultural wisdom with technological innovation. Our team thrives on:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-lg p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900">Field-First Approach</h4>
                    <p className="text-green-700">Regular farm visits keep us grounded in real agricultural challenges</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-lg p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900">Continuous Learning</h4>
                    <p className="text-green-700">Weekly tech talks and farming workshops keep skills sharp</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-lg p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900">Collaborative Spirit</h4>
                    <p className="text-green-700">Farmers, engineers and pilots work side-by-side</p>
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