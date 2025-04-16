import React, { useState } from 'react';
import { FiMail, FiPhone, FiSend, FiX } from 'react-icons/fi';
import '../assets/scss/ContactUs.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { submitContactForm } from '../../api';
import '../assets/scss/emailIcon.scss'; // Ensure this path is correct

function Emailicon() {
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
        <>
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
                    className="email-icon bg-green-700 text-white p-4 rounded-full shadow-xl flex items-center justify-center hover:bg-emerald-700 transition"
                    style={{ boxShadow: '0 4px 20px rgba(19, 150, 5, 0.3)' }}
                >
                    <FiMail />
                </button>
            </motion.div>

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
                                <h2 className='heading'>Quick Contact</h2>

                                {/* Modal Success and Error Messages */}
                                {submitSuccess && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className='success'
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
                                        <label className='label'>Your Name</label>
                                        <div className='inputWrapper'>
                                            <div className='inputIcon'>
                                                <svg className="w-5 h-5 icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
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
                                        <label className='label'>Email Address</label>
                                        <div className='inputWrapper'>
                                            <div className='inputIcon'>
                                                <FiMail className="w-5 h-5 icon" />
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
                                        <label className='label'>Mobile No</label>
                                        <div className='inputWrapper'>
                                            <div className='inputIcon'>
                                                <FiPhone className="w-5 h-5 icon" />
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
                                        <label className='label'>Message</label>
                                        <div className='inputWrapper'>
                                            <div className='inputIcon'>
                                                <svg className="w-5 h-5 icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                                                <FiSend className="mr-1" />
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
        </>
    );
}

export default Emailicon;