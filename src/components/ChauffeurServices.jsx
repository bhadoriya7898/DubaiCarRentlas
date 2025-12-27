import chauffeurImg from "../assets/images/Services/choufferservice.jpg";

const ChauffeurServices = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-14 md:py-20" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ================= TOP CONTENT ================= */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E1B400] mb-4">
          Premium Chauffeur Services in Dubai
        </h2>

        <p className="text-gray-700 text-base sm:text-lg mb-6 max-w-5xl leading-relaxed">
          Enjoy refined comfort and luxury with the premium chauffeur services
          offered by <strong>Dubai Car Rentals</strong>. Whether your journey is
          for business, airport transfers, city sightseeing, or special
          occasions, our experienced chauffeurs and high-end fleet ensure every
          ride is smooth, elegant, and stress-free.
        </p>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-5">
          Our Chauffeur Service Options
        </h3>

        <div className="space-y-4 text-gray-700 text-sm sm:text-[16px] leading-relaxed max-w-6xl">
          <p>
            <strong>Chauffeur with Driver:</strong><br />
            Travel effortlessly with professional chauffeurs committed to
            punctuality, safety, and superior comfort throughout your journey.
          </p>

          <p>
            <strong>Private Chauffeur:</strong><br />
            Experience complete privacy and luxury with our dedicated private
            chauffeur service—ideal for executives, VIPs, and premium travelers.
          </p>

          <p>
            <strong>Regular Transfers:</strong><br />
            Dependable and timely transfer solutions designed for daily travel
            or specific routes, ensuring a smooth and reliable commute.
          </p>

          <p>
            <strong>Business Transfers:</strong><br />
            Impress clients and colleagues with luxury transportation tailored
            for meetings, conferences, and corporate events.
          </p>

          <p>
            <strong>Group Tour Services:</strong><br />
            Discover Dubai with family or friends using our spacious vehicles,
            offering customized group tours for a relaxed travel experience.
          </p>

          <p>
            <strong>Airport Transfers:</strong><br />
            Begin or conclude your trip effortlessly with our punctual airport
            transfer services—your chauffeur arrives before you do.
          </p>

          <p>
            <strong>Weddings & Special Events:</strong><br />
            Arrive in style at weddings and celebrations with our premium
            chauffeur-driven vehicles designed for memorable moments.
          </p>

          <p>
            <strong>Dubai City Tours:</strong><br />
            Explore iconic landmarks and hidden gems through personalized city
            tours crafted to your preferences.
          </p>

          <p>
            <strong>Abu Dhabi City Tours:</strong><br />
            Travel in comfort and elegance while experiencing the culture and
            beauty of the UAE’s capital city.
          </p>

          <p>
            <strong>Desert Safari Experiences:</strong><br />
            Enjoy thrilling desert adventures in premium vehicles driven by
            experienced and certified desert drivers.
          </p>

          <p>
            <strong>Corporate Bookings:</strong><br />
            Flexible corporate transportation solutions tailored to business
            travel, events, and executive requirements.
          </p>
        </div>

   {/* ================= SECOND SECTION ================= */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mt-16 md:mt-20">

  {/* LEFT TEXT */}
  <div className="flex flex-col h-full">
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E1B400] mb-6">
      Flexible Chauffeur Plans for Daily, Weekly & Monthly Bookings
    </h3>

    <div className="text-gray-700 text-sm sm:text-[16px] leading-relaxed space-y-4 flex-1">
      <p>
        In today’s fast-moving business environment, managing time efficiently
        is essential. Having a personal chauffeur allows you to remain focused
        on meetings and priorities while we handle every aspect of your travel
        with precision.
      </p>

      <p>
        <strong>Dubai Car Rentals</strong> offers flexible hourly, daily, and
        long-term chauffeur plans supported by a diverse range of premium
        vehicles. Each chauffeur brings a minimum of seven years of professional
        driving experience and follows strict safety and service protocols.
      </p>

      <p>
        Our chauffeurs are trained to avoid distractions, respect traffic
        regulations, and select the safest and most efficient routes—ensuring
        every journey is calm, punctual, and secure.
      </p>

      <p>
        To deliver consistently high standards, our fleet includes luxury
        sedans, SUVs, and executive vans that are fully sanitized, serviced, and
        maintained according to government guidelines. Combined with
        well-groomed, courteous chauffeurs, every ride delivers comfort,
        reliability, and complete peace of mind.
      </p>
    </div>
  </div>

  {/* RIGHT IMAGE */}
  <div className="flex h-full">
    <img
      src={chauffeurImg}
      alt="Professional Chauffeur Service"
      className="w-full h-[540px] object-cover rounded-lg"
    />
  </div>

</div>


      </div>
    </section>
  );
};

export default ChauffeurServices;
