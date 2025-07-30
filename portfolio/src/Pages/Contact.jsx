import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiX } from "react-icons/fi";
import { submitContactForm } from "../../api";
import "../assets/scss/ContactUs.scss"; // Import the SCSS module

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
        <div className='contactPage'>
            {/* Hero Section */}
            <motion.section
                className='heroSection' style={{padding:"162px 0px"}}
                initial="initial"
                animate="animate"
                variants={gradientVariants}
            >
                <div className='heroContent'>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Get In Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                       Let’s transform agri-commerce, together.

                    </motion.p>
                </div>
            </motion.section>

            {/* Contact Content */}
            <motion.section
                className='contactContent'
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div className='gridContainer'>
                    {/* Contact Form */}
                    <motion.div
                        className='formCard'
                        variants={itemVariants}
                        whileHover={cardHoverVariants.hover}
                    >
                        <motion.h2
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
                            className='success flex mb-5 rounded-md bg-green-100 text-green-700 p-4'
                            style={{ padding: '10px 20px' }}
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Message sent successfully!
                        </motion.div>
                         )} 

                        {submitError && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`${alert} ${error}`}
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                {submitError}
                            </motion.div>
                        )}

                        <motion.form
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            onSubmit={handleSubmit}
                            className='form'
                        >
                            {[
                                { label: 'Your Name', name: 'name', type: 'text', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg> },
                                { label: 'Email Address', name: 'email', type: 'email', icon: <FiMail className="w-5 h-5" /> },
                                { label: 'Mobile No', name: 'phone', type: 'tel', icon: <FiPhone className="w-5 h-5" /> }
                            ].map((field, index) => (
                                <motion.div
                                    key={field.name}
                                    className='formGroup'
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                >
                                    <label>{field.label}</label>
                                    <div className='inputWrapper'>
                                        <div className='inputIcon'>
                                            {field.icon}
                                        </div>
                                        <input
                                            type={field.type}
                                            name={field.name}
                                            value={formData[field.name]}
                                            onChange={handleChange}
                                            placeholder={field.label}
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </motion.div>
                            ))}

                            <motion.div
                                className='formGroup'
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                            >
                                <label>Message</label>
                                <div className='inputWrapper'>
                                    <div className='inputIcon'>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                                        </svg>
                                    </div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your message here..."
                                        required
                                        disabled={isSubmitting}
                                    ></textarea>
                                </div>
                            </motion.div>

                            <motion.button
                                type="submit"
                                className='submitButton'
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
                                <span className='buttonBg'></span>
                                <span className='buttonContent'>
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
                                            Send Us a Message
                                        </>
                                    )}
                                </span>
                            </motion.button>
                        </motion.form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className='infoColumn'
                        variants={itemVariants}
                    >
                        <motion.div
                            className='infoCard'
                            whileHover={cardHoverVariants.hover}
                        >
                            <h2>Contact Information</h2>
                            <p>Whether you’re a farmer, buyer, or government partner, we’d love to hear from you.</p>

                            <div className='infoItems'>
                                <div className='infoItem'>
                                    <div className='iconWrapper'>
                                        <FiMail />
                                    </div>
                                    <div className='infoContent'>
                                        <h3>Email</h3>
                                        <p>info@novuscore.co.in</p>
                                    </div>
                                </div>

                                <div className='infoItem'>
                                    <div className='iconWrapper'>
                                        <FiPhone />
                                    </div>
                                    <div className='infoContent'>
                                        <h3>Phone</h3>
                                        <p>+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className='infoItem'>
                                    <div className='iconWrapper'>
                                        <FiMapPin />
                                    </div>
                                    <div className='infoContent'>
                                        <h3>Address</h3>
                                        <p>408, A R MALL, OPP-PANVEL POINT, Utran , Surat ,Chorasi , Gujarat , India - 394105</p>
                                    </div>
                                </div>
                            </div>

                            <div className='businessHours'>
                                <h3>Business Hours</h3>
                                <ul>
                                    <li>
                                        <span>Monday - Friday</span>
                                        <span>9:30 AM - 6:30 PM</span>
                                    </li>
                                    <li>
                                        <span>Saturday-Sunday</span>
                                        <span>Closed</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            className='supportCard'
                            whileHover={cardHoverVariants.hover}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <h3>Need immediate assistance?</h3>
                            <p>Our customer support team is available to help you with any urgent inquiries.</p>
                            <button>Partner With Us</button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* Floating action button */}
            <motion.div
                className='fab'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, type: "spring" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-green-700 text-white p-4 rounded-full shadow-xl flex items-center justify-center hover:bg-emerald-700 transition"
                    style={{ boxShadow: '0 4px 20px rgba(19, 150, 5, 0.3)' }}
                >
                    <FiMail />
                </button>
            </motion.div>

            {/* Email Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className='modalOverlay'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className='modalContent'
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
                                className='closeButton'
                            >
                                <FiX />
                            </button>

                            <div className='modalBody'>
                                <h2>Quick Contact</h2>

                                {/* Modal Success and Error Messages */}
                                {submitSuccess && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className='success flex mb-5 border-r-4'
                                        style={{ padding: '10px 20px' }}
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        Message sent successfully!
                                    </motion.div>
                                )}

                                {submitError && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className='error'
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        {submitError}
                                    </motion.div>
                                )}

                                <form onSubmit={handleSubmit} className='form'>
                                    <div className='formGroup'>
                                        <label>Your Name</label>
                                        <div className='inputWrapper'>
                                            <div className='inputIcon'>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                                </svg>
                                            </div>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                required
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                    </div>

                                    <div className='formGroup'>
                                        <label>Email Address</label>
                                        <div className='inputWrapper'>
                                            <div className='inputIcon'>
                                                <FiMail className="w-5 h-5" />
                                            </div>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="your@email.com"
                                                required
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                    </div>

                                    <div className='formGroup'>
                                        <label>Mobile No</label>
                                        <div className='inputWrapper'>
                                            <div className='inputIcon'>
                                                <FiPhone className="w-5 h-5" />
                                            </div>
                                            <input
                                                type="text"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Enter Mobile No"
                                                required
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                    </div>

                                    <div className='formGroup'>
                                        <label>Message</label>
                                        <div className='inputWrapper'>
                                            <div className='inputIcon'>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                                                </svg>
                                            </div>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Your message here..."
                                                required
                                                disabled={isSubmitting}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        className='submitButton'
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