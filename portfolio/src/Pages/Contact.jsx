import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiX } from "react-icons/fi";
import { submitContactForm } from "../../api";

// Animation variants (keep your existing animation variants)
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
            
            // Auto-hide success message after 3 seconds
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
        <div className="bg-slate-50 text-slate-900 min-h-screen overflow-hidden">
            {/* Hero Section (keep your existing hero section) */}
            <motion.section
                className="relative w-full h-50 mt-15 flex items-center justify-center overflow-hidden"
                initial="initial"
                animate="animate"
            >
                {/* Your existing hero content */}
            </motion.section>

            {/* Contact Content */}
            <motion.section
                className="max-w-7xl mx-auto px-6 mb-15 relative z-10"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200"
                        variants={itemVariants}
                        whileHover={cardHoverVariants.hover}
                    >
                        <motion.h2
                            className="text-3xl font-bold mb-6 text-slate-800"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            style={{ color: 'green' }}
                        >
                            Send us a message
                        </motion.h2>

                        {/* Success and Error Messages */}
                        {submitSuccess && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 mb-6 text-green-700 bg-green-100 rounded-lg"
                            >
                                Message sent successfully!
                            </motion.div>
                        )}
                        
                        {submitError && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 mb-6 text-red-700 bg-red-100 rounded-lg"
                            >
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
                                { label: 'Your Name', name: 'name', type: 'text' },
                                { label: 'Email Address', name: 'email', type: 'email' },
                                { label: 'Mobile No', name: 'phone', type: 'tel' }
                            ].map((field, index) => (
                                <motion.div
                                    key={field.name}
                                    className="space-y-1"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                >
                                    <label className="block text-slate-700 font-medium">{field.label}</label>
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                        className="w-full p-3 rounded-lg bg-slate-50 text-slate-900 border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 transition"
                                        placeholder={field.label}
                                        required
                                        disabled={isSubmitting}
                                    />
                                </motion.div>
                            ))}

                            <motion.div
                                className="space-y-1"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                            >
                                <label className="block text-slate-700 font-medium">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-lg bg-slate-50 text-slate-900 border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 transition min-h-[150px]"
                                    placeholder="Your message here..."
                                    required
                                    disabled={isSubmitting}
                                ></textarea>
                            </motion.div>

                            <motion.button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-3 px-6 rounded-lg font-medium transition-all relative overflow-hidden group"
                                whileHover={!isSubmitting ? {
                                    scale: 1.02,
                                    boxShadow: "0 10px 20px rgba(15, 23, 42, 0.2)"
                                } : {}}
                                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 }}
                                disabled={isSubmitting}
                            >
                                <span className="absolute inset-0 bg-slate-800 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
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

                    {/* Keep your existing Contact Info section */}
                    <motion.div variants={itemVariants}>
                        {/* Your existing contact information content */}
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
                    className="bg-slate-900 text-white p-4 rounded-full shadow-xl flex items-center justify-center hover:bg-slate-800 transition"
                >
                    <FiMail className="text-2xl" />
                </button>
            </motion.div>

            {/* Email Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
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
                                <h2 className="text-2xl font-bold mb-6 text-slate-800" style={{ color: 'green' }}>
                                    Quick Contact
                                </h2>

                                {/* Modal Success and Error Messages */}
                                {submitSuccess && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 mb-6 text-green-700 bg-green-100 rounded-lg"
                                    >
                                        Message sent successfully!
                                    </motion.div>
                                )}
                                
                                {submitError && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 mb-6 text-red-700 bg-red-100 rounded-lg"
                                    >
                                        {submitError}
                                    </motion.div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-slate-700 mb-1">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full p-3 rounded-lg bg-slate-50 text-slate-900 border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 transition"
                                            placeholder="John Doe"
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-slate-700 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full p-3 rounded-lg bg-slate-50 text-slate-900 border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 transition"
                                            placeholder="your@email.com"
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-slate-700 mb-1">Mobile No</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full p-3 rounded-lg bg-slate-50 text-slate-900 border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 transition"
                                            placeholder="Enter Mobile No"
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-slate-700 mb-1">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full p-3 rounded-lg bg-slate-50 text-slate-900 border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 transition min-h-[120px]"
                                            placeholder="Your message here..."
                                            required
                                            disabled={isSubmitting}
                                        ></textarea>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 mt-4"
                                        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
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