import { motion } from "framer-motion";
import korkilandImg from "./../scotter.avif";
import earlyearnlyImg from "./../early.webp";
// import donna from "./../donna.html";
const projects = [
  {
    id: 1,
    title: "Korkiland Scotter Rentals",
    description: "Developed a full-fledged scooter rental application for Korkiland Scotter Rentals with sign agreement and time tracking for each ride.",
    image: korkilandImg, // Replace with actual image URL
  },
  {
    id: 2,
    title: "Early Earnly Mobile App",
    description: "Developed an android native mobile app that let users earn real money by playing simple games and folling simple steps",
    image: earlyearnlyImg,
  },
  {
    id: 3,
    title: "DonaBees Shop",
    description: "Helped business develop their Shopify store for their business with some AI integrations.",
    // image: donna,
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-16 bg-gray-100 text-center" id="projects">
      <h2 className="text-3xl font-bold mb-8">Our Projects</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="p-6 bg-white shadow-md rounded-xl flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
