import React from "react";
import { motion } from "framer-motion";


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




export default function Blog() {
return (
    <div className="pt-24 px-4 sm:px-8 md:px-16 bg-green-50 min-h-screen">
     <div className="max-w-7xl mx-auto pb-3" >
        <motion.div
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6 }}
        >
         <h1 className="text-4xl font-bold mb-6 text-center text-green-800">Drone Technology Blog</h1>
         <p className="text-lg text-green-700 text-center mb-12 max-w-3xl mx-auto">
            Insights and innovations in drone applications for agriculture, surveillance, and environmental management.
         </p>
        </motion.div>

        <motion.div
         className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
         variants={containerVariants}
         initial="hidden"
         animate="visible"
        >
         {/* Blog Card 1 - Agriculture */}
         <motion.div
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-green-200 hover:border-green-400"
            variants={itemVariants}
            whileHover="hover"
            variants={cardHoverVariants}
         >
            <motion.img
             src="https://marutdrones.com/wp-content/uploads/2024/10/image.png"
             alt="Agricultural Drone"
             className="w-full h-48 object-cover"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.5 }}
            />
            <div className="p-6">
             <div className="flex gap-2 mb-3 flex-wrap">
                <motion.span
                 className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full"
                 whileHover={{ scale: 1.05 }}
                >
                 Agriculture
                </motion.span>
                <motion.span
                 className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full"
                 whileHover={{ scale: 1.05 }}
                >
                 Spraying
                </motion.span>
             </div>
             <h2 className="text-2xl font-semibold text-green-900 mb-3">Revolutionizing Crop Management</h2>
             <p className="text-green-700 mb-4">
                How our precision spraying drones are increasing yields while reducing chemical usage by up to 30%.
             </p>
             <motion.a
                href="#"
                className="inline-flex items-center text-green-600 font-medium hover:text-green-800 transition"
                whileHover={{ x: 5 }}
             >
                Read More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
             </motion.a>
            </div>
         </motion.div>

         {/* Blog Card 2 - Surveillance */}
         <motion.div
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-green-200 hover:border-green-400"
            variants={itemVariants}
            whileHover="hover"
            variants={cardHoverVariants}
         >
            <motion.img
             src="https://marutdrones.com/wp-content/uploads/2023/07/IMG-20221222-WA0008-768x441.jpg"
             alt="Surveillance Drone"
             className="w-full h-48 object-cover"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.5, delay: 0.2 }}
            />
            <div className="p-6">
             <div className="flex gap-2 mb-3 flex-wrap">
                <motion.span
                 className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full"
                 whileHover={{ scale: 1.05 }}
                >
                 Surveillance
                </motion.span>
                <motion.span
                 className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full"
                 whileHover={{ scale: 1.05 }}
                >
                 Mapping
                </motion.span>
             </div>
             <h2 className="text-2xl font-semibold text-green-900 mb-3">Advanced Aerial Surveillance</h2>
             <p className="text-green-700 mb-4">
                Our high-resolution mapping drones provide real-time data for security and infrastructure monitoring.
             </p>
             <motion.a
                href="#"
                className="inline-flex items-center text-green-600 font-medium hover:text-green-800 transition"
                whileHover={{ x: 5 }}
             >
                Read More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
             </motion.a>
            </div>
         </motion.div>

         {/* Blog Card 3 - Environmental */}
         <motion.div
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-green-200 hover:border-green-400"
            variants={itemVariants}
            whileHover="hover"
            variants={cardHoverVariants}
         >
            <motion.img
             src="https://marutdrones.com/wp-content/uploads/2024/11/image-1.png"
             alt="Environmental Drone"
             className="w-full h-48 object-cover"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.5, delay: 0.4 }}
            />
            <div className="p-6">
             <div className="flex gap-2 mb-3 flex-wrap">
                <motion.span
                 className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full"
                 whileHover={{ scale: 1.05 }}
                >
                 Afforestation
                </motion.span>
                <motion.span
                 className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full"
                 whileHover={{ scale: 1.05 }}
                >
                 Mosquito Control
                </motion.span>
             </div>
             <h2 className="text-2xl font-semibold text-green-900 mb-3">Drones for Environmental Solutions</h2>
             <p className="text-green-700 mb-4">
                Innovative approaches to mosquito eradication and large-scale afforestation using drone technology.
             </p>
             <motion.a
                href="#"
                className="inline-flex items-center text-green-600 font-medium hover:text-green-800 transition"
                whileHover={{ x: 5 }}
             >
                Read More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
             </motion.a>
            </div>
         </motion.div>
        </motion.div>

        {/* Services Section */}
        <motion.div
         className="mt-20 mb-16"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 0.6 }}
        >
         <motion.h2
            className="text-3xl font-bold text-center text-green-800 mb-8"
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
         >
            Our Drone Services
         </motion.h2>
         <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 "
            variants={containerVariants}
            initial="hidden"
            animate="visible"
         >
            {[
             "Agriculture",
             "Pesticide Spraying",
             "Fertiliser Broadcasting",
             "Direct Seeding",
             "Thermal Fogging",
             "Crop Intelligence",
             "Training",
             "Mosquito Eradication",
             "Afforestation",
             "Mapping",
             "Surveillance",
             "Logistics"
            ].map((service, index) => (
             <motion.div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-green-100 hover:border-green-300 transition text-center"
                variants={itemVariants}
                whileHover={{
                 y: -5,
                 boxShadow: "0 10px 15px -3px rgba(5, 150, 105, 0.1)"
                }}
             >
                <motion.div
                 className="bg-green-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3"
                 whileHover={{ scale: 1.1 }}
                >
                 <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                 </svg>
                </motion.div>
                <h3 className="font-medium text-green-800">{service}</h3>
             </motion.div>
            ))}
         </motion.div>
        </motion.div>
     </div>
    </div>
);
}