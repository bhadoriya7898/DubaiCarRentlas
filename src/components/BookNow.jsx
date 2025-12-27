import BgIMG from "../assets/images/Book Now/BgIMG.jpg";
import {
  SiVisa,
  SiMastercard,
  SiAmericanexpress,
  SiPaypal,
} from "react-icons/si";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const BookNow = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center py-12 sm:py-14 md:py-20"
      style={{ backgroundImage: `url(${BgIMG})` }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white">
            <p className="text-[#E1B400] font-semibold uppercase mb-2 text-sm sm:text-base">
              Ready to hire a chauffeur?
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
              Book Your Ride
            </h2>

            <p className="text-base sm:text-lg mb-5">
              Reserve a premium vehicle with a professional chauffeur and enjoy
              a smooth, stress-free travel experience. Whether it’s business or
              leisure, we handle the driving so you can relax.
            </p>

            <p className="text-base sm:text-lg mb-8">
              Secure your booking today and travel in complete comfort.
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold mb-5">
              Dubai
            </h3>

            <ul className="space-y-4 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#E1B400] mt-1" />
                <span>
                  102 apollo tower, vijay nagar indore pin 452010
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#E1B400]" />
                <span>+91 9685534688</span>
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#E1B400]" />
                <span>dubaicarental4@gmail.com</span>
              </li>

              <li className="flex items-center gap-3">
                <FaClock className="text-[#E1B400]" />
                <span>09:00 AM – 10:00 PM</span>
              </li>
            </ul>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 flex flex-col">
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E1B400]"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E1B400]"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E1B400]"
                />
              </div>

              <select className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E1B400]">
                <option>Select Chauffeur Service</option>
                <option>Airport Transfer</option>
                <option>Full Day Chauffeur</option>
                <option>Corporate Chauffeur</option>
                <option>Event Chauffeur</option>
              </select>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="date"
                  className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E1B400]"
                />
                <input
                  type="time"
                  className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E1B400]"
                />
              </div>

              <textarea
                rows="4"
                placeholder="Additional details or requests"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E1B400]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#E1B400] text-white py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-[#cfa900] transition"
              >
                Submit Booking Request
              </button>
            </form>

            {/* PAYMENT METHODS */}
            <div className="mt-6 pt-5 border-t">
              <div className="flex items-center justify-center gap-6 text-gray-500">
                <SiVisa className="text-3xl opacity-70 hover:text-[#E1B400] transition" />
                <SiMastercard className="text-3xl opacity-70 hover:text-[#E1B400] transition" />
                <SiAmericanexpress className="text-3xl opacity-70 hover:text-[#E1B400] transition" />
                <SiPaypal className="text-3xl opacity-70 hover:text-[#E1B400] transition" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookNow;
