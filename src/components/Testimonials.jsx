import bgImg from "../assets/images/Services/car.jpg";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    text: `I frequently rely on Dubai Car Rentals for my corporate travel, and every experience has been outstanding. The chauffeurs are courteous, punctual, and highly professional. It’s truly a premium way to travel across Dubai.`,
    name: "Huma Mansoori",
    location: "Dubai Marina",
    img: "https://i.pravatar.cc/100?img=32",
  },
  {
    text: `Whether it’s airport transfers or family outings, their service never disappoints. The vehicles are immaculate, rides are smooth, and the chauffeurs know the city inside out. Perfect for anyone who values comfort and reliability.`,
    name: "Fatima Khan",
    location: "Jumeirah",
    img: "https://i.pravatar.cc/100?img=47",
  },
  {
    text: `My full-day Dubai city tour was absolutely seamless. The chauffeur was polite, knowledgeable, and ensured everything ran on schedule. Dubai Car Rentals delivers a true VIP experience—worth every moment.`,
    name: "Omar Haddad",
    location: "Downtown Dubai",
    img: "https://i.pravatar.cc/100?img=12",
  },
];

const Testimonials = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center py-16 sm:py-20 md:py-28"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/65"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center text-white">

        {/* TOP TEXT */}
        <p className="text-[#E1B400] tracking-widest font-semibold mb-3 text-sm sm:text-base">
          TESTIMONIALS
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">
          Why Clients Trust Dubai Car Rentals
        </h2>

        <p className="max-w-3xl mx-auto text-gray-200 text-sm sm:text-base mb-12 md:mb-16">
          Discover what our clients across Dubai say about their chauffeur
          experience with Dubai Car Rentals. We are committed to delivering
          luxury, reliability, and peace of mind on every journey.
        </p>

        {/* TESTIMONIAL CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white text-gray-700 rounded-xl shadow-lg p-6 sm:p-8 text-left"
            >
              <p className="mb-6 leading-relaxed text-sm sm:text-base">
                “{item.text}”
              </p>

              {/* STARS */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-[#E1B400]" aria-hidden="true" />
                ))}
              </div>

              {/* USER INFO */}
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
