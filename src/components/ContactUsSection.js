import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">JM Technologies</h3>
          <nav className="flex flex-col space-y-2 text-base">
            <Link to="hero" smooth={true} className="cursor-pointer hover:text-white transition">🏠 Home</Link>
            <Link to="services" smooth={true} className="cursor-pointer hover:text-white transition">🛠️ Services</Link>
            <Link to="testimonials" smooth={true} className="cursor-pointer hover:text-white transition">💬 Testimonials</Link>
            <Link to="projects" smooth={true} className="cursor-pointer hover:text-white transition">📁 Projects</Link>
            <Link to="contact" smooth={true} className="cursor-pointer hover:text-white transition">📩 Contact</Link>
          </nav>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-base">📍 23, Mahaveer Udhyog Nagar - Pali Raj, India, 306401</p>
          <p className="text-base">📞 +91 79762-41042</p>
          <p className="text-base">📧 ridamnibjia786@gmail.com</p>
        </div>

        {/* Social & External Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
          <p className="text-base">📌 Follow us for updates and new projects.</p>
          <div className="mt-3 flex space-x-4">
            <a href="https://www.linkedin.com/in/ridam-jain-9b8b7817b/" 
               target="_blank" rel="noopener noreferrer"
               className="hover:text-white transition text-base">
              🔗 LinkedIn
            </a>
            <a href="https://www.upwork.com/freelancers/~01cc7429f2aee545f2" 
               target="_blank" rel="noopener noreferrer"
               className="hover:text-white transition text-base">
              🔗 Upwork
            </a>
            <a href="https://github.com/ridamnibjia"
               target="_blank" rel="noopener noreferrer"
               className="hover:text-white transition text-base">
              🔗 GitHub
            </a>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-base text-gray-400">
        <p>&copy; {new Date().getFullYear()} JM Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
}
