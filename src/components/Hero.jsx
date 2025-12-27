import heroImg from "../assets/images/heroimg/heroimg.webp";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-[90vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl px-4 sm:px-6">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          Dubai Car Rentals Chauffeur Tour Experience
        </h1>

        <p className="mt-4 text-[#F5C400] text-base sm:text-lg md:text-xl font-medium">
          Book Your Luxury Chauffeur Tour in Dubai Today
        </p>

        <p className="mt-6 text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
          Planning to explore Dubai in complete comfort and sophistication?
          Now is the perfect time to secure your chauffeur-driven city tour.
          With Dubai Car Rentals, enjoy a personalized luxury travel experience
          designed around your schedule, preferences, and convenience.
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <button className="bg-[#F5C400] hover:bg-[#e0b000] text-black font-semibold px-8 sm:px-10 py-3 rounded-full transition">
            Book Now
          </button>
        </div>
      </div>

      {/* BOTTOM CURVE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[70px] sm:h-[80px]"
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
        >
          <path
            d="M0.00,49.98 C150.00,150.00 350.00,0.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
