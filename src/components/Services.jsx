import { useState, useEffect } from "react";
import ratingImg from "../assets/images/Services/rating.webp";
import carImg from "../assets/images/Services/car.jpg";
import img1 from "../assets/images/Services/img1.png";
import img2 from "../assets/images/Services/img2.png";
import img3 from "../assets/images/Services/img3.png";
import img4 from "../assets/images/Services/img4.png";
import img5 from "../assets/images/Services/img5.png";
import img6 from "../assets/images/Services/img6.png";

const services = [
  {
    title: "Dubai Airport Transfers",
    image: img1,
    desc: "Enjoy a seamless and comfortable airport pickup or drop-off with our professional chauffeur-driven transfer service.",
  },
  {
    title: "Full-Day Chauffeur Hire",
    image: img2,
    desc: "Travel across Dubai all day with complete flexibility and premium comfort using our full-day chauffeur service.",
  },
  {
    title: "Corporate Chauffeur Solutions",
    image: img3,
    desc: "Arrive in style for meetings, conferences, and corporate events with our executive chauffeur services.",
  },
  {
    title: "Event Chauffeur Services",
    image: img4,
    desc: "Make weddings, parties, and special occasions unforgettable with our luxury chauffeur-driven vehicles.",
  },
  {
    title: "Airport Chauffeur Service",
    image: img5,
    desc: "Reliable and elegant airport transportation designed to ensure punctuality and a stress-free experience.",
  },
  {
    title: "Luxury Chauffeur Experience",
    image: img6,
    desc: "Discover Dubai in sophistication with our premium chauffeur services crafted for comfort and elegance.",
  },
];

const Services = () => {
  const [index, setIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);


  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1); // mobile
      } else if (window.innerWidth < 768) {
        setCardsToShow(2); // tablet
      } else {
        setCardsToShow(3); // desktop
      }
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const visibleServices = services.slice(index, index + cardsToShow);

  const next = () => {
    if (index < services.length - cardsToShow) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <>
      {/* ================= SERVICES SLIDER ================= */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* HEADER */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
              Our Chauffeur Services
            </h2>

            <button className="bg-[#E1B400] text-white px-6 py-2 rounded-md text-sm sm:text-base font-medium hover:bg-[#cfa900] transition">
              View All Services
            </button>
          </div>

          {/* SLIDER */}
          <div className="relative">

            {/* CARDS */}
            <div
              className={`grid gap-10 ${
                cardsToShow === 1
                  ? "grid-cols-1"
                  : cardsToShow === 2
                  ? "grid-cols-2"
                  : "grid-cols-3"
              }`}
            >
              {visibleServices.map((service, i) => (
                <div
                  key={i}
                  className="bg-white shadow-md rounded-md overflow-hidden flex flex-col"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[210px] sm:h-[230px] object-cover"
                  />

                  <div className="p-6 flex flex-col flex-1 text-center">
                    <h3 className="text-lg font-semibold mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed flex-1">
                      {service.desc}
                    </p>

                    <button className="mt-6 bg-[#E1B400] text-white px-6 py-2 rounded-md mx-auto hover:bg-[#cfa900] transition">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* ARROWS */}
            <button
              onClick={prev}
              className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
            >
              ❮
            </button>

            <button
              onClick={next}
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
            >
              ❯
            </button>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-8">
            {Array(services.length - cardsToShow)
              .fill(0)
              .map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === index ? "bg-black" : "bg-gray-300"
                  }`}
                />
              ))}
          </div>
        </div>
      </section>

     {/* ================= LUXURY CHAUFFEUR INFO ================= */}
<section className="w-full bg-white py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

      {/* LEFT SIDE */}
      <div className="flex flex-col h-full">
        <img
          src={ratingImg}
          alt="Top Rated Chauffeur Service"
          className="h-20 mb-4 self-start"
        />

        <div className="flex-1">
          <img
            src={carImg}
            alt="Luxury Chauffeur Service"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="bg-white shadow-lg p-6 sm:p-8 md:p-10 flex flex-col h-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          Luxury Chauffeur Services in Dubai for a True VIP Experience
        </h2>

        <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-4 flex-1">
          <p>
            Choosing a luxury chauffeur service in Dubai means opting for
            seamless travel where comfort, professionalism, and prestige come
            together. Whether you are heading to a business meeting, airport,
            or a private event, having a skilled chauffeur transforms every
            journey into a relaxed and refined experience.
          </p>

          <p>
            With <strong>Dubai Car Rentals</strong>, every ride is carefully
            planned to ensure punctuality and peace of mind. Our premium fleet
            includes elegant sedans, spacious SUVs, and executive vans—each
            maintained to exceptional standards for safety and comfort.
          </p>

          <p>
            Our professional chauffeurs are trained in hospitality, route
            optimization, and discreet service across Dubai and the UAE. From
            corporate transfers and city tours to special events and long
            journeys, every detail is handled with precision.
          </p>

          <p>
            We understand that luxury is not only about vehicles—it’s about
            reliability, courtesy, and attention to detail. That’s why our
            chauffeur services are designed to deliver a smooth, stress-free
            experience tailored to your schedule and preferences.
          </p>

          <p>
            If you’re looking for premium chauffeur services in Dubai that offer
            both value and sophistication, Dubai Car Rentals delivers an ideal
            balance of elegance, efficiency, and affordability.
          </p>
        </div>

        <button className="mt-8 bg-[#E1B400] text-white px-8 py-3 rounded-full self-start hover:bg-[#cfa900] transition">
          Book Your Chauffeur
        </button>
      </div>

    </div>
  </div>
</section>

    </>
  );
};

export default Services;
