import rollsRoyce from "../assets/images/BookingSteps/rollsroyce.webp";
import {
  FaCar,
  FaUserTie,
  FaMapMarkedAlt,
  FaGem,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaCar />,
    title: "Choose Your Luxury Vehicle",
    desc: "Browse our exclusive fleet and select the ideal luxury car that perfectly suits your Dubai travel experience.",
  },
  {
    icon: <FaUserTie />,
    title: "Select Chauffeur Service Type",
    desc: "Pick the chauffeur service you need—hourly hire, full-day travel, airport transfers, or special events.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Provide Travel Information",
    desc: "Share your pickup point, schedule, and journey details so we can tailor the ride exactly to your needs.",
  },
  {
    icon: <FaGem />,
    title: "Relax & Enjoy the Journey",
    desc: "Sit back and enjoy a smooth, refined ride with a professional chauffeur ensuring comfort and elegance throughout.",
  },
];

const BookingSteps = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

        {/* CAR IMAGE */}
        <div className="flex justify-center mb-12 md:mb-24">
          <img
            src={rollsRoyce}
            alt="Luxury Rolls Royce"
            className="w-full max-w-5xl object-contain"
          />
        </div>

        {/* TOP TEXT */}
        <p className="text-[#E1B400] font-semibold tracking-widest mb-3 text-sm sm:text-base">
          HOW IT WORKS
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#E1B400] mb-12 md:mb-20">
          Book Your Luxury Ride in 4 Simple Steps
        </h2>

        {/* STEPS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-14">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center transition-transform duration-300 md:hover:-translate-y-2"
            >
              {/* ICON BOX */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 border-2 border-[#E1B400] flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#E1B400]">
                <span
                  aria-hidden="true"
                  className="text-[#E1B400] text-3xl sm:text-4xl transition-colors duration-300 group-hover:text-white"
                >
                  {step.icon}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[#E1B400]">
                {step.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BookingSteps;
