import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMail, FiMapPin, FiBriefcase } from "react-icons/fi";

export default function Careers() {
  const jobListings = [
    {
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-Time",
      description: "Looking for a React developer with experience in Tailwind CSS and TypeScript.",
    },
    {
      title: "Backend Developer",
      location: "San Francisco, CA",
      type: "Full-Time",
      description: "Node.js & MongoDB expert needed for scalable backend solutions.",
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      type: "Part-Time",
      description: "Passionate about creating intuitive and visually appealing interfaces.",
    },
    {
      title: "Cloud Engineer",
      location: "New York, NY",
      type: "Full-Time",
      description: "AWS-certified professional required for cloud infrastructure management.",
    },
  ];

  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Application submitted for:', selectedJob.title, formData);
    setSelectedJob(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      resume: null,
      coverLetter: ''
    });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section
        className="relative w-full h-80 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?office,team')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <motion.div
          className="text-center relative z-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-blue-400">Join Our Team</h1>
          <p className="mt-2 text-lg text-gray-300">
            Be part of something amazing. Explore career opportunities at Novuscore.
          </p>
        </motion.div>
      </section>

      {/* Job Listings */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-blue-400 text-center mb-8">
          Current Openings
        </h2>
        <div className="space-y-6">
          {jobListings.map((job, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-900/30 rounded-lg text-blue-400">
                  <FiBriefcase className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">{job.title}</h3>
                  <div className="flex items-center text-gray-300 mt-1">
                    <FiMapPin className="mr-1" />
                    <span>{job.location} | {job.type}</span>
                  </div>
                  <p className="mt-2 text-gray-400">{job.description}</p>
                  <motion.button
                    onClick={() => setSelectedJob(job)}
                    className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md flex items-center gap-2"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiMail />
                    Apply Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-md relative overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
              >
                <FiX className="text-xl" />
              </button>

              <div className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-blue-900/30 rounded-lg text-blue-400">
                    <FiBriefcase className="text-xl" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-blue-400">{selectedJob.title}</h2>
                    <div className="flex items-center text-gray-300 mt-1">
                      <FiMapPin className="mr-1" />
                      <span>{selectedJob.location} | {selectedJob.type}</span>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-1">Resume (PDF)</label>
                    <input
                      type="file"
                      name="resume"
                      onChange={handleFileChange}
                      className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-400"
                      accept=".pdf"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-1">Cover Letter (Optional)</label>
                    <textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition min-h-[100px]"
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 mt-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiSend />
                    Submit Application
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}