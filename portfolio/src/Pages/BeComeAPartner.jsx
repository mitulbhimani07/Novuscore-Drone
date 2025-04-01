import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiDollarSign, FiTool, FiUsers, FiShield, FiBarChart2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../assets/scss/BecomeAPartner.scss";

const PartnerBenefitCard = ({ icon, title, description }) => (
  <motion.div 
    className="benefit-card"
    whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
    transition={{ duration: 0.3 }}
  >
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
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
    <div className="partner-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Become an Agricultural Drone Partner
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Join our network of precision agriculture partners and revolutionize farming with drone technology.
          </motion.p>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="partnership-types">
        <div className="section-header">
          <h2>Partnership Opportunities</h2>
          <p>
            We offer different partnership models to match your agricultural business goals.
          </p>
        </div>

        <div className="partner-types-grid">
          {partnerTypes.map((type, index) => (
            <motion.div 
              key={index}
              className="partner-type-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="card-header">
                <h3>{type.title}</h3>
                <p>{type.description}</p>
              </div>
              <div className="card-body">
                <ul>
                  {type.features.map((feature, i) => (
                    <li key={i}>
                      <FiCheckCircle />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2 className="green-800">Why Partner With Us</h2>
            <p>
              We provide the tools, training and support to help your agricultural business succeed with drone technology.
            </p>
          </div>

          <div className="benefits-grid">
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
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Revolutionize Agriculture With Us?</h2>
          <p>
            Join our network of agricultural drone partners and help farmers increase yields today.
          </p>
          <Link to='/contact'>
            <motion.button
              className="cta-button"
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
