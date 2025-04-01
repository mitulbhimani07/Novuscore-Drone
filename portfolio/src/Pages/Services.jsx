import React from "react";
import { motion } from "framer-motion";
import '../assets/scss/Services.scss';

export default function Services() {
  {/* Add this Counter component at the top of your file or in a separate components folder */ }
  const Counter = ({ from, to, duration }) => {
    const [count, setCount] = React.useState(from);
    const ref = React.useRef();

    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            let start = from;
            const increment = to / (duration * 60); // 60fps

            const timer = setInterval(() => {
              start += increment;
              if (start >= to) {
                clearInterval(timer);
                setCount(to);
              } else {
                setCount(Math.floor(start));
              }
            }, 1000 / 60); // 60fps

            return () => clearInterval(timer);
          }
        },
        { threshold: 0.5 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, [from, to, duration]);

    return <span ref={ref}>{count}</span>;
  };
  const services = [
    {
      title: "Aerial Crop Spraying",
      desc: "Precision drone spraying with 90% less chemical waste compared to traditional methods. Our systems cover 50 acres per hour with pinpoint accuracy.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18v4H3V4z" />
        </svg>
      ),
      color: "from-green-500 to-green-600"
    },
    {
      title: "NDVI Crop Analysis",
      desc: "Advanced Normalized Difference Vegetation Index mapping detects plant health issues 2-3 weeks before visible symptoms appear.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "from-green-400 to-green-500"
    },
    {
      title: "3D Field Topography",
      desc: "High-resolution 3D mapping for precision land leveling, drainage planning, and irrigation system design with centimeter accuracy.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l9 4 9-4-9-4-9 4z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6v12l9 4 9-4V6M12 10v8" />
        </svg>
      ),
      color: "from-green-600 to-green-700"
    },
    {
      title: "Drone Seeding",
      desc: "Direct seed planting with 95% germination rates. Ideal for cover crops, reforestation, and hard-to-access areas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      color: "from-green-300 to-green-400"
    },
    {
      title: "Pest Hotspot Detection",
      desc: "Thermal imaging identifies pest infestations early, enabling targeted treatment before significant damage occurs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: "from-green-700 to-green-800"
    },
    {
      title: "Livestock Monitoring",
      desc: "Automated herd tracking with AI-powered analytics for health monitoring, counting, and pasture management.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      color: "from-green-200 to-green-300"
    },
  ];

  const technologyFeatures = [
    {
      title: "LiDAR Scanning",
      desc: "Penetrates crop canopy to measure plant height and density with millimeter precision",
      icon: "📡"
    },
    {
      title: "Multispectral Imaging",
      desc: "5-band sensors capture data beyond visible light for comprehensive plant health analysis",
      icon: "📷"
    },
    {
      title: "AI Analytics",
      desc: "Machine learning algorithms predict yield variations and recommend interventions",
      icon: "🧠"
    },
    {
      title: "RTK Positioning",
      desc: "Real-time kinematic GPS provides centimeter-level spraying and mapping accuracy",
      icon: "📍"
    },
    {
      title: "Automated Fleets",
      desc: "Swarm technology enables multiple drones to work simultaneously on large fields",
      icon: "🚁"
    },
    {
      title: "Weather Integration",
      desc: "Live weather data adjusts flight plans for optimal spraying conditions",
      icon: "⛅"
    }
  ];

  return (
    <div className="bg-white text-green-700 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full pt-28 pb-10 flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-700 to-green-800">
        <div className="relative z-10 px-6 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-clip-text bg-gradient-to-r from-green-200 to-white">Drone-Powered AgTech Solutions </span>
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Transform your farming operations with our precision agriculture drone services
            </p>

          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-green-9 00 mb-4">Precision Agriculture Services</h2>
          <p className="text-lg text-green-700 max-w-3xl mx-auto">
            Our drone solutions deliver 40% reduction in chemical usage and 30% higher yields through data-driven farming
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-green-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-green-200"
            >
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-8">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-green-9 00 mb-3">{service.title}</h3>
                <p className="text-green-700 mb-6">{service.desc}</p>
                {/* <div className="text-green-600 font-medium flex items-center group-hover:underline">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-9 00 mb-4">Advanced Drone Technology</h2>
            <p className="text-lg text-green-700 max-w-3xl mx-auto">
              We use cutting-edge agricultural drone systems with specialized sensors and AI capabilities
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-green-400 to-green-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-green-9 00 mb-2">{feature.title}</h3>
                <p className="text-green-700">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6"
            >
              <div className="text-5xl font-bold mb-2">
                <Counter from={0} to={95} duration={2} />%
              </div>
              <div className="text-green-200">Reduction in water usage for targeted irrigation</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6"
            >
              <div className="text-5xl font-bold mb-2">
                <Counter from={0} to={50} duration={2} />+
              </div>
              <div className="text-green-200">Crop varieties we've successfully analyzed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6"
            >
              <div className="text-5xl font-bold mb-2">
                <Counter from={0} to={10} duration={2} />x
              </div>
              <div className="text-green-200">Faster than manual field surveying</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}