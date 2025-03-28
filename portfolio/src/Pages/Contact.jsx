import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiX } from "react-icons/fi";
import { submitContactForm } from "../../api";

// Updated animation variants with green theme
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
        boxShadow: "0 10px 25px -5px rgba(5, 150, 105, 0.2)",
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 10
        }
    }
};

const gradientVariants = {
    initial: {
        backgroundPosition: "0% 50%"
    },
    animate: {
        backgroundPosition: "100% 50%",
        transition: {
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
        }
    }
};

export default function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);
        setSubmitSuccess(false);
        
        try {
            console.log('Submitting form data:', formData);
            const response = await submitContactForm(formData);
            console.log('Submission successful:', response);
            
            setSubmitSuccess(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });
            
            setTimeout(() => {
                setSubmitSuccess(false);
                setIsModalOpen(false);
            }, 3000);
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitError(
                error.response?.data?.message || 
                error.message || 
                'Failed to send message. Please try again.'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-emerald-50 text-slate-800 min-h-screen overflow-hidden">
            {/* Hero Section */}
            <motion.section
                className="relative w-full py-20 flex items-center justify-center overflow-hidden"
                initial="initial"
                animate="animate"
                variants={gradientVariants}
                style={{
                    background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)'
                }}
            >
                <div className="text-center px-6 z-10 mt-10">
                    <motion.h1 
                        className="text-4xl md:text-5xl font-bold mb-4 text-emerald-800"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Get In Touch
                    </motion.h1>
                    <motion.p 
                        className="text-lg text-emerald-700 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        We'd love to hear from you! Reach out for inquiries, collaborations, or just to say hello.
                    </motion.p>
                </div>
            </motion.section>

            {/* Contact Content */}
            <motion.section
                className="max-w-7xl mx-auto px-6 py-16 relative z-10"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100"
                        variants={itemVariants}
                        whileHover={cardHoverVariants.hover}
                    >
                        <motion.h2
                            className="text-3xl font-bold mb-6 text-emerald-700"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            Send us a message
                        </motion.h2>

                        {/* Success and Error Messages */}
                        {submitSuccess && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 mb-6 text-emerald-800 bg-emerald-100 border border-emerald-200 rounded-lg flex items-center"
                            >
                                <svg className="w-5 h-5 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Message sent successfully!
                            </motion.div>
                        )}
                        
                        {submitError && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 mb-6 text-rose-800 bg-rose-100 border border-rose-200 rounded-lg flex items-center"
                            >
                                <svg className="w-5 h-5 mr-2 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                {submitError}
                            </motion.div>
                        )}

                        <motion.form
                            className="space-y-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            onSubmit={handleSubmit}
                        >
                            {[
                                { label: 'Your Name', name: 'name', type: 'text', icon: <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg> },
                                { label: 'Email Address', name: 'email', type: 'email', icon: <FiMail className="w-5 h-5 text-emerald-500" /> },
                                { label: 'Mobile No', name: 'phone', type: 'tel', icon: <FiPhone className="w-5 h-5 text-emerald-500" /> }
                            ].map((field, index) => (
                                <motion.div
                                    key={field.name}
                                    className="space-y-1"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                >
                                    <label className="block text-emerald-700 font-medium">{field.label}</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            {field.icon}
                                        </div>
                                        <input
                                            type={field.type}
                                            name={field.name}
                                            value={formData[field.name]}
                                            onChange={handleChange}
                                            className="w-full pl-10 p-3 rounded-lg bg-emerald-50 text-slate-800 border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition"
                                            placeholder={field.label}
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </motion.div>
                            ))}

                            <motion.div
                                className="space-y-1"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                            >
                                <label className="block text-emerald-700 font-medium">Message</label>
                                <div className="relative">
                                    <div className="absolute top-3 left-3">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                                        </svg>
                                    </div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full pl-10 p-3 rounded-lg bg-emerald-50 text-slate-800 border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition min-h-[150px]"
                                        placeholder="Your message here..."
                                        required
                                        disabled={isSubmitting}
                                    ></textarea>
                                </div>
                            </motion.div>

                            <motion.button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-lg font-medium transition-all relative overflow-hidden group"
                                whileHover={!isSubmitting ? {
                                    scale: 1.02,
                                    boxShadow: "0 5px 15px rgba(5, 150, 105, 0.4)"
                                } : {}}
                                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 }}
                                disabled={isSubmitting}
                            >
                                <span className="absolute inset-0 bg-emerald-700 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                                <span className="relative z-10 flex items-center gap-2">
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FiSend className="text-lg" />
                                            Send Message
                                        </>
                                    )}
                                </span>
                            </motion.button>
                        </motion.form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div 
                        className="space-y-8"
                        variants={itemVariants}
                    >
                        <motion.div 
                            className="bg-white px-8 py-8 rounded-2xl shadow-lg border border-emerald-100"
                            whileHover={cardHoverVariants.hover}
                        >
                            <h2 className="text-3xl font-bold mb-6 text-emerald-700">Contact Information</h2>
                            <p className="text-slate-600 mb-8">Fill out the form or reach out to us through these channels:</p>
                            
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-emerald-100 p-3 rounded-full mr-4">
                                        <FiMail className="text-emerald-600 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-emerald-800">Email</h3>
                                        <p className="text-slate-600">contact@example.com</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="bg-emerald-100 p-3 rounded-full mr-4">
                                        <FiPhone className="text-emerald-600 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-emerald-800">Phone</h3>
                                        <p className="text-slate-600">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="bg-emerald-100 p-3 rounded-full mr-4">
                                        <FiMapPin className="text-emerald-600 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-emerald-800">Address</h3>
                                        <p className="text-slate-600">123 Green Street, Eco City, EC 12345</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-10 pt-6 border-t border-emerald-100">
                                <h3 className="font-medium text-emerald-800 mb-4">Business Hours</h3>
                                <ul className="space-y-2 text-slate-600">
                                    <li className="flex justify-between">
                                        <span>Monday - Friday</span>
                                        <span>9:00 AM - 6:00 PM</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Saturday</span>
                                        <span>10:00 AM - 4:00 PM</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Sunday</span>
                                        <span>Closed</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-8 rounded-2xl shadow-lg text-white"
                            whileHover={cardHoverVariants.hover}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <h3 className="text-xl font-bold mb-4">Need immediate assistance?</h3>
                            <p className="mb-6 opacity-90">Our customer support team is available to help you with any urgent inquiries.</p>
                            <button className="bg-white text-emerald-700 hover:bg-emerald-50 px-6 py-3 rounded-lg font-medium transition">
                                Chat with us
                            </button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* Floating action button */}
            <motion.div
                className="fixed bottom-8 right-8 z-50"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, type: "spring" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-emerald-600 text-white p-4 rounded-full shadow-xl flex items-center justify-center hover:bg-emerald-700 transition"
                    style={{ boxShadow: '0 4px 20px rgba(5, 150, 105, 0.3)' }}
                >
                    <FiMail className="text-2xl" />
                </button>
            </motion.div>

            {/* Email Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 bg-opacity-50 z-50 flex items-center justify-center p-4"
                        style={{backgroundColor:'#00000080'}}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded-xl shadow-2xl w-full max-w-md relative overflow-hidden"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                        >
                            <button
                                onClick={() => {
                                    setIsModalOpen(false);
                                    setSubmitError(null);
                                    setSubmitSuccess(false);
                                }}
                                className="absolute top-4 right-4 text-slate-500 hover:text-slate-700 z-10"
                            >
                                <FiX className="text-xl" />
                            </button>

                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-6 text-emerald-700">
                                    Quick Contact
                                </h2>

                                {/* Modal Success and Error Messages */}
                                {submitSuccess && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 mb-6 text-emerald-800 bg-emerald-100 border border-emerald-200 rounded-lg flex items-center"
                                    >
                                        <svg className="w-5 h-5 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Message sent successfully!
                                    </motion.div>
                                )}
                                
                                {submitError && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 mb-6 text-rose-800 bg-rose-100 border border-rose-200 rounded-lg flex items-center"
                                    >
                                        <svg className="w-5 h-5 mr-2 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        {submitError}
                                    </motion.div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-emerald-700 mb-1">Your Name</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                                </svg>
                                            </div>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full pl-10 p-3 rounded-lg bg-emerald-50 text-slate-800 border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition"
                                                placeholder="John Doe"
                                                required
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-emerald-700 mb-1">Email Address</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FiMail className="w-5 h-5 text-emerald-500" />
                                            </div>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full pl-10 p-3 rounded-lg bg-emerald-50 text-slate-800 border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition"
                                                placeholder="your@email.com"
                                                required
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-emerald-700 mb-1">Mobile No</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FiPhone className="w-5 h-5 text-emerald-500" />
                                            </div>
                                            <input
                                                type="text"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full pl-10 p-3 rounded-lg bg-emerald-50 text-slate-800 border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition"
                                                placeholder="Enter Mobile No"
                                                required
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-emerald-700 mb-1">Message</label>
                                        <div className="relative">
                                            <div className="absolute top-3 left-3">
                                                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                                                </svg>
                                            </div>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full pl-10 p-3 rounded-lg bg-emerald-50 text-slate-800 border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition min-h-[120px]"
                                                placeholder="Your message here..."
                                                required
                                                disabled={isSubmitting}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 mt-4"
                                        whileHover={!isSubmitting ? { 
                                            scale: 1.02,
                                            boxShadow: "0 5px 15px rgba(5, 150, 105, 0.4)"
                                        } : {}}
                                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <FiSend />
                                                Send Message
                                            </>
                                        )}
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