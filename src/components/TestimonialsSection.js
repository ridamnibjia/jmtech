import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Eli",
    role: "CEO, Korkiland",
    text: "This agency transformed our online presence with an amazing web and mobile app! Highly recommended!",
  },
  {
    id: 2,
    name: "Faheem",
    role: "Founder, Donabees Shop",
    text: "Their AI/ML integration boosted our efficiency and automated our workflow. A game-changer!",
  },
  {
    id: 3,
    name: "Rhythm",
    role: "Founder, EarlyEarnly",
    text: "The cloud transition was seamless. Their IT support is top-notch! They also build our android native mobile which was also a great success.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white text-center" id="testimonials">
      <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="p-6 bg-gray-100 shadow-md rounded-xl"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-gray-700 italic">"{testimonial.text}"</p>
            <h3 className="mt-4 font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
