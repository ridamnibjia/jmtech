import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Transform Your Ideas into Reality
      </motion.h1>
      <motion.p
        className="mt-4 text-lg md:text-xl max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        We build cutting-edge web & mobile applications, AI/ML solutions, and provide expert IT support to help your business thrive.
      </motion.p>
      <motion.a
        href="#services"
        className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition"
        whileHover={{ scale: 1.1 }}
      >
        Explore Our Services
      </motion.a>
    </section>
  );
};

export default HeroSection;
