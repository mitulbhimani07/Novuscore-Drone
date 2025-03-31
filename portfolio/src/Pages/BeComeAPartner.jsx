import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiDollarSign, FiTool, FiUsers, FiShield, FiBarChart2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const PartnerBenefitCard = ({ icon, title, description }) => (
  <motion.div 
    className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
    whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
    transition={{ duration: 0.3 }}
  >
    <div className="text-green-600 text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-green-900 mb-2">{title}</h3>
    <p className="text-green-700">{description}</p>
  </motion.div>
);

export default function BecomeAPartner() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Partner form submitted:", formData);
    alert("Thank you for your partnership interest! We'll contact you shortly.");
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      interest: "",
      message: ""
    });
  };

  const partnerTypes = [
    {
      title: "Reseller Partners",
      description: "Sell our agricultural drone products to your clients",
      features: [
        "Attractive margin structure",
        "Sales and technical training",
        "Marketing collateral",
        "Lead sharing program",
        "Dedicated support"
      ]
    },
    {
      title: "Service Partners",
      description: "Deliver precision agriculture services using our drones",
      features: [
        "Certification programs",
        "Operations manual",
        "Insurance support",
        "Client referral system",
        "Revenue sharing options"
      ]
    },
    {
      title: "Technology Partners",
      description: "Integrate your agtech solutions with our drone platforms",
      features: [
        "API access",
        "SDK documentation",
        "Joint development",
        "Co-marketing opportunities",
        "Pilot programs"
      ]
    }
  ];

  const benefits = [
    {
      icon: <FiDollarSign />,
      title: "Lucrative Commissions",
      description: "Earn competitive commissions on every sale or service delivered"
    },
    {
      icon: <FiTool />,
      title: "Exclusive Training",
      description: "Access to specialized agricultural drone training programs"
    },
    {
      icon: <FiUsers />,
      title: "Dedicated Support",
      description: "Assigned partnership manager and technical support team"
    },
    {
      icon: <FiShield />,
      title: "Certification",
      description: "Get officially certified as an authorized partner"
    },
    {
      icon: <FiBarChart2 />,
      title: "Marketing Support",
      description: "Co-branded marketing materials and lead generation support"
    },
    {
      icon: <FiCheckCircle />,
      title: "Priority Access",
      description: "Early access to new agricultural drone products"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen ">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 to-green-600 text-white py-20 ">
        <div className="max-w-7xl mx-auto px-6 text-center mt-10">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Become an Agricultural Drone Partner
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Join our network of precision agriculture partners and revolutionize farming with drone technology.
          </motion.p>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-green-900 mb-4">Partnership Opportunities</h2>
          <p className="text-green-700 max-w-2xl mx-auto text-lg">
            We offer different partnership models to match your agricultural business goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {partnerTypes.map((type, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-r from-green-600 to-green-500 p-6 text-white">
                <h3 className="text-xl font-bold">{type.title}</h3>
                <p className="mt-2 opacity-90">{type.description}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Why Partner With Us</h2>
            <p className="text-green-700 max-w-2xl mx-auto text-lg">
              We provide the tools, training and support to help your agricultural business succeed with drone technology.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <PartnerBenefitCard 
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Revolutionize Agriculture With Us?</h2>
          <p className="text-xl mb-8">
            Join our network of agricultural drone partners and help farmers increase yields today.
          </p>
          <Link to='/contact'>
          <motion.button
            
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-bold shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply Now
          </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}