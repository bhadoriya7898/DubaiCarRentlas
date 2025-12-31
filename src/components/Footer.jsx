import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-white pt-20">

      {/* ================= TOP INFO ROW ================= */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

        {/* CALL US */}
        <a
          href="tel:+916264504541"
          className="group flex items-start gap-4 transition hover:-translate-y-1"
        >
          <FaPhoneAlt className="text-[#E1B400] text-3xl mt-1 group-hover:scale-110 transition" />
          <div>
            <h4 className="font-semibold text-2xl mb-1 group-hover:text-[#E1B400] transition">
              Call Us
            </h4>
            <p className="text-gray-300 text-xl group-hover:text-white group-hover:underline underline-offset-4 transition">
              +91 6264504541
            </p>
          </div>
        </a>

        {/* EMAIL US */}
        <a
          href="mailto:dubaicarental4@gmail.com"
          className="group flex items-start gap-4 transition hover:-translate-y-1"
        >
          <FaEnvelope className="text-[#E1B400] text-3xl mt-1 group-hover:scale-110 transition" />
          <div>
            <h4 className="font-semibold text-2xl mb-1 group-hover:text-[#E1B400] transition">
              Email Us
            </h4>
            <p className="text-gray-300 text-xl group-hover:text-white group-hover:underline underline-offset-4 transition">
              info@dubaicarental.com
            </p>
          </div>
        </a>

        {/* LOCATION */}
        <a
          href="https://www.google.com/maps/search/102+Apollo+Tower+Vijay+Nagar+Indore"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-4 transition hover:-translate-y-1"
        >
          <FaMapMarkerAlt className="text-[#E1B400] text-3xl mt-1 group-hover:scale-110 transition" />
          <div>
            <h4 className="font-semibold text-2xl mb-1 group-hover:text-[#E1B400] transition">
              Our Location
            </h4>
            <p className="text-gray-300 text-xl leading-relaxed group-hover:text-white group-hover:underline underline-offset-4 transition">
              102 Apollo Tower, Vijay Nagar Indore <br />
              Pin 452010
            </p>
          </div>
        </a>

        {/* WORK HOURS */}
        <div className="group flex items-start gap-4 transition hover:-translate-y-1">
          <FaClock className="text-[#E1B400] text-3xl mt-1 group-hover:scale-110 transition" />
          <div>
            <h4 className="font-semibold text-2xl mb-1 group-hover:text-[#E1B400] transition">
              Work Hours
            </h4>
            <p className="text-gray-300 text-xl group-hover:text-white transition">
              09:00 AM – 10:00 PM
            </p>
          </div>
        </div>

      </div>

      {/* ================= MIDDLE FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 border-t border-gray-700 pt-16 pb-16">

        {/* LOGO + DESCRIPTION */}
        <div>
          <img
            src="/logo.png"
            alt="Dubai Car Rentals"
            className="h-28 mb-6"
          />

          <h3 className="text-2xl font-semibold mb-4">
            Dubai Car Rentals
          </h3>

          <p className="text-gray-400 text-lg leading-relaxed">
            Experience Dubai in absolute luxury with Dubai Car Rentals.
            Premium chauffeur-driven services designed for comfort,
            reliability, and elegance.
          </p>
        </div>

        {/* USEFUL LINKS */}
        <div>
          <h4 className="text-2xl font-semibold mb-6">
            Useful Links
          </h4>

          <ul className="space-y-4 text-gray-400 text-lg">
            <li>
              <Link to="/privacy-policy" className="hover:text-[#E1B400] transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-conditions" className="hover:text-[#E1B400] transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/disclaimer" className="hover:text-[#E1B400] transition">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-2xl font-semibold mb-6">
            Quick Links
          </h4>

          <ul className="space-y-4 text-lg">
            <li>
              <Link to="/" className="text-[#E1B400]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/#services" className="text-gray-400 hover:text-[#E1B400] transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/#about" className="text-gray-400 hover:text-[#E1B400] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-400 hover:text-[#E1B400] transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <div>
          <h4 className="text-2xl font-semibold mb-6">
            <Link to="/faq" className="hover:text-[#E1B400] transition">
              FAQ
            </Link>
          </h4>
        </div>

      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="bg-black py-6">
        <p className="text-center text-gray-400 text-base">
          © 2025 Dubai Car Rentals. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
