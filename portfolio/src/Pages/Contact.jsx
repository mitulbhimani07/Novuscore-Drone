import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiX } from "react-icons/fi";

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
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        setIsModalOpen(false);
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="bg-slate-50 text-slate-900 min-h-screen overflow-hidden">
            {/* Hero Section */}
            <motion.section
                className="relative w-full h-50 mt-15 flex items-center justify-center overflow-hidden"
                initial="initial"
                animate="animate"
            >
                {/* Animated gradient background */}
                <motion.div
                    className="absolute inset-0"
                    variants={gradientVariants}
                // style={{
                //     background: "linear-gradient(270deg, #0f172a, #1e293b, #334155, #475569)",
                //     backgroundSize: "300% 300%"
                // }}
                />

                {/* Subtle floating particles */}
                <div className="absolute inset-0 opacity-20 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-white"
                            style={{
                                width: Math.random() * 10 + 5 + 'px',
                                height: Math.random() * 10 + 5 + 'px',
                                top: Math.random() * 100 + '%',
                                left: Math.random() * 100 + '%',
                            }}
                            animate={{
                                y: [0, (Math.random() - 0.5) * 50],
                                x: [0, (Math.random() - 0.5) * 50],
                                opacity: [0.2, 0.8, 0.2],
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>

                <motion.div
                    className="text-center relative z-10 px-4"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        type: "spring",
                        stiffness: 100,
                        damping: 10
                    }}
                >
                    <motion.h1
                        className="text-5xl font-bold mb-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            color: 'green'
                        }}
                    >
                        Get In Touch
                    </motion.h1>
                    <motion.p
                        className="mt-2 text-xl text-slate-200 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        {/* Have questions or want to discuss a project? We're here to help and would love to hear from you. */}
                    </motion.p>
                </motion.div>
            </motion.section>

            {/* Contact Content */}
            <motion.section
                className="max-w-7xl mx-auto px-6 mb-15 relative z-10"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div
                    className="grid md:grid-cols-2 gap-12"
                >
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
                            style={{
                                color: 'green'
                            }}
                        >
                            Send us a message
                        </motion.h2>

                        <motion.form
                            className="space-y-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            {['Your Name', 'Email Address', 'Mobile No'].map((label, index) => (
                                <motion.div
                                    key={label}
                                    className="space-y-1"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                >
                                    <label className="block text-slate-700 font-medium">{label}</label>
                                    <input
                                        type={label === 'Email Address' ? 'email' : 'text'}
                                        className="w-full p-3 rounded-lg bg-slate-50 text-slate-900 border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 transition"
                                        placeholder={label === 'Subject' ? "How can we help?" : label}
                                        required
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
                                    className="w-full p-3 rounded-lg bg-slate-50 text-slate-900 border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 transition min-h-[150px]"
                                    placeholder="Your message here..."
                                    required
                                ></textarea>
                            </motion.div>

                            <motion.button
                                className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-3 px-6 rounded-lg font-medium transition-all relative overflow-hidden group"
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: "0 10px 20px rgba(15, 23, 42, 0.2)"
                                }}
                                whileTap={{ scale: 0.98 }}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 }}
                            >
                                <span className="absolute inset-0 bg-slate-800 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                                <span className="relative z-10 flex items-center gap-2">
                                    <FiSend className="text-lg" />
                                    Send Message
                                </span>
                            </motion.button>
                        </motion.form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        variants={itemVariants}
                    >
                        <motion.h2
                            className="text-3xl font-bold mb-6 text-slate-800"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            style={{
                                color: 'green'
                            }}
                        >
                            Contact Information
                        </motion.h2>

                        <motion.p
                            className="text-slate-600 mb-8 text-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            We're available to answer your questions and help you with any projects or inquiries you might have.
                        </motion.p>

                        <div className="space-y-6">
                            {[
                                {
                                    icon: <FiMapPin className="text-2xl" />,
                                    title: "Our Location",
                                    content: "NOVUSCORE SOFTCOM SOLUTION PRIVATE LIMITED<br />SHOP-408 A R MALL, OPP-PANVEL POINT<br />Utran, Chorasi - 394105<br />Gujarat, India",
                                    bg: "bg-slate-100",
                                    color: "text-slate-600"
                                },
                                {
                                    icon: <FiMail className="text-2xl" />,
                                    title: "Email Us",
                                    content: `<a href="mailto:info@novuscore.co.in" class="hover:text-blue-600 transition">info@novuscore.co.in</a><br /><a href="mailto:support@novuscore.com" class="hover:text-blue-600 transition">support@novuscore.com</a>`,
                                    bg: "bg-slate-100",
                                    color: "text-slate-600"
                                },
                                {
                                    icon: <FiPhone className="text-2xl" />,
                                    title: "Call Us",
                                    content: `<a href="tel:+1234567890" class="hover:text-blue-600 transition">+1 234 567 890</a><br />Mon-Fri: 9am-6pm`,
                                    bg: "bg-slate-100",
                                    color: "text-slate-600"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-slate-500 transition cursor-pointer shadow-sm"
                                    whileHover={{
                                        y: -5,
                                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                >
                                    <div className={`p-3 ${item.bg} rounded-lg ${item.color}`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-800">{item.title}</h3>
                                        <p
                                            className="text-slate-600"
                                            dangerouslySetInnerHTML={{ __html: item.content }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            className="mt-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <h3 className="text-xl font-semibold mb-4 text-slate-800">Connect With Us</h3>
                            <div className="flex gap-4">
                                {['twitter', 'linkedin', 'facebook', 'custom'].map((social, index) => (
                                    <motion.a
                                        key={social}
                                        href="#"
                                        className="p-3 bg-white rounded-full hover:bg-slate-100 transition relative overflow-hidden group border border-slate-200"
                                        whileHover={{
                                            y: -3,
                                            scale: 1.1
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.9 + index * 0.1 }}
                                    >
                                        <span className="absolute inset-0 bg-slate-100 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                                        {/* <img 
                                            src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${social}.svg`} 
                                            alt={social} 
                                            className="w-5 h-5 filter brightness-0 opacity-70 hover:opacity-100 transition relative z-10"
                                        /> */}

                                        {social === 'custom' ? (
                                            // SVG Icon
                                            <svg width="24" height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 opacity-70 hover:opacity-100 transition relative z-10">
                                                <path d="M16 3C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16ZM12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8ZM12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10ZM16.5 6.5C16.2348 6.5 15.9804 6.60536 15.7929 6.79289C15.6054 6.98043 15.5 7.23478 15.5 7.5C15.5 7.76522 15.6054 8.01957 15.7929 8.20711C15.9804 8.39464 16.2348 8.5 16.5 8.5C16.7652 8.5 17.0196 8.39464 17.2071 8.20711C17.3946 8.01957 17.5 7.76522 17.5 7.5C17.5 7.23478 17.3946 6.98043 17.2071 6.79289C17.0196 6.60536 16.7652 6.5 16.5 6.5Z" fill="black" />
                                            </svg>
                                        ) : (
                                            // Standard Social Media Icons
                                            <img
                                                src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${social}.svg`}
                                                alt={social}
                                                className="w-5 h-5 filter brightness-0 opacity-70 hover:opacity-100 transition relative z-10"
                                            />
                                        )}
                                    </motion.a>
                                ))}

                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* Map Section */}
            {/* <motion.section 
                className="max-w-7xl mx-auto px-6 pb-16 py-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
            >
                <motion.div 
                    className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white"
                    whileHover={{
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.091104466615!2d72.8657423154024!3d21.02848579315084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be051f0e0a6e0b9%3A0x6a1a1b1b1b1b1b1b!2sNOVUSCORE%20SOFTCOM%20SOLUTION%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        className="filter grayscale-30 contrast-110 brightness-95 hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                </motion.div>
            </motion.section> */}

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
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-slate-500 hover:text-slate-700 z-10"
                            >
                                <FiX className="text-xl" />
                            </button>

                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-6 text-slate-800" style={{
                                color: 'green'
                            }}>
                                    Quick Contact
                                </h2>

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
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-slate-700 mb-1">Mobile No</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full p-3 rounded-lg bg-slate-50 text-slate-900 border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 transition"
                                            placeholder="Enter Mobile No"
                                            required
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
                                        ></textarea>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 mt-4"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <FiSend />
                                        Send Message
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