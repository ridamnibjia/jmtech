import { FaCode, FaMobileAlt, FaCloud, FaRobot } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  { id: 1, icon: <FaCode size={40} />, title: "Web & Mobile Development", description: "Custom websites & apps tailored to your business needs." },
  { id: 2, icon: <FaRobot size={40} />, title: "AI/ML Integrations & Training", description: "Leverage AI to optimize and automate processes." },
  { id: 3, icon: <FaMobileAlt size={40} />, title: "IT Support & Cloud Transition", description: "Seamless migration & reliable IT support." },
  { id: 4, icon: <FaCloud size={40} />, title: "Cloud Systems", description: "Scalable cloud solutions to power your business." },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-100 text-center" id="services">
      <h2 className="text-3xl font-bold mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="p-6 bg-white shadow-md rounded-xl flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-blue-500 mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
