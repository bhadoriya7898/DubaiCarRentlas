import cadillac from "../assets/images/Driven Cars/CadillacEscalade.png";
import chevrolet from "../assets/images/Driven Cars/ChevroletSuburban.png";
import gmc from "../assets/images/Driven Cars/GMCYukonDenali.png";
import lexus from "../assets/images/Driven Cars/LexusLX570.png";
import mercedes from "../assets/images/Driven Cars/Mercedes-Benz-V-Class.png";
import toyota from "../assets/images/Driven Cars/ToyotaLandCruiser.png";
import volvoImg from "../assets/images/Driven Cars/volvo.png";
import gmcImg from "../assets/images/Driven Cars/GMCYukonDenali.png";

const cars = [
  {
    img: gmc,
    title: "GMC Yukon Denali",
    desc: "A perfect balance of strength and luxury, the GMC Yukon Denali offers spacious interiors, advanced safety features, and a refined driving experience ideal for group travel and corporate journeys.",
  },
  {
    img: cadillac,
    title: "Cadillac Escalade",
    desc: "The Cadillac Escalade represents premium elegance with its expansive cabin, plush seating, and modern technology—an excellent choice for VIP travel and airport transfers.",
  },
  {
    img: mercedes,
    title: "Mercedes-Benz V-Class",
    desc: "Designed for executive comfort, the Mercedes-Benz V-Class features a spacious interior, smooth performance, and refined styling for business and family travel.",
  },
  {
    img: toyota,
    title: "Toyota Land Cruiser",
    desc: "Renowned for reliability and power, the Toyota Land Cruiser is ideal for long-distance travel, desert safaris, and premium city tours.",
  },
  {
    img: chevrolet,
    title: "Chevrolet Suburban",
    desc: "Offering generous space and smooth handling, the Chevrolet Suburban ensures a comfortable and effortless journey for families and professionals alike.",
  },
  {
    img: lexus,
    title: "Lexus LX 570",
    desc: "The Lexus LX 570 delivers refined luxury with a powerful engine, elegant interiors, and advanced safety systems for superior comfort.",
  },
];

const DrivenCars = () => {
  return (
    <>
      {/* ================= VEHICLE GRID ================= */}
      <section className="w-full bg-white py-14 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#E1B400] mb-6">
            Unveiling Our Finest Chauffeur-Driven Vehicles
          </h2>

          <p className="text-center text-gray-700 max-w-4xl mx-auto mb-14 text-sm sm:text-base md:text-lg">
            Dubai Car Rentals offers a premium selection of chauffeur-driven
            vehicles designed for corporate travel, leisure experiences, and
            special occasions—combining advanced technology with comfort and
            safety.
          </p>

<div className="
  flex gap-6 overflow-x-auto pb-4
  md:grid md:grid-cols-2 lg:grid-cols-3
  md:overflow-visible
">
            {cars.map((car, index) => (
             <div
  key={index}
  className="
    bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col
    min-w-[85%] sm:min-w-[70%] md:min-w-0
  "
>

                <img
                  src={car.img}
                  alt={car.title}
                  className="w-full h-[220px] sm:h-[240px] object-cover"
                />

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-center mb-4">
                    {car.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed text-center flex-1">
                    {car.desc}
                  </p>

                  <div className="flex justify-center gap-4 mt-8">
                    <button className="bg-[#E1B400] text-white px-6 py-2 rounded-full hover:bg-[#cfa900] transition">
                      Read More
                    </button>
                    <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= PRIVATE CAR SECTION ================= */}
      <section className="w-full bg-white py-14 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20">

          {/* SECTION 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E1B400] mb-6">
                Seamless Travel with a Private Car and Professional Chauffeur
              </h2>

              <p className="text-gray-700 text-sm sm:text-[16px] leading-relaxed">
                Looking for a private car with a professional chauffeur in
                Dubai? <strong>Dubai Car Rentals</strong> provides flexible,
                reliable, and premium chauffeur-driven services for business
                meetings, city tours, and intercity travel.
                <br /><br />
                Our car-with-driver services include full-day rentals, corporate
                transportation, and luxury travel options designed for tourists,
                executives, and families seeking comfort and convenience.
                <br /><br />
                From affordable solutions to luxury chauffeur vehicles, we
                ensure every journey is smooth, punctual, and stress-free.
              </p>
            </div>

            <div className="flex">
              <img
                src={gmcImg}
                alt="Private Car with Chauffeur"
                className="w-full h-[300px] sm:h-[420px] md:h-[520px] lg:h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* SECTION 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            <div className="flex order-2 lg:order-1">
              <img
                src={volvoImg}
                alt="Affordable Chauffeur Service"
                className="w-full h-[300px] sm:h-[420px] md:h-[520px] lg:h-full object-cover rounded-2xl"
              />
            </div>

            <div className="flex flex-col justify-center order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E1B400] mb-6">
                Reliable & Affordable Chauffeur Services Anytime
              </h2>

              <p className="text-gray-700 text-sm sm:text-[16px] leading-relaxed">
                Dubai Car Rentals makes hiring a car with a chauffeur simple,
                transparent, and affordable. Whether you need short-term travel
                or long-term chauffeur services, our flexible packages come with
                no hidden costs.
                <br /><br />
                From one-day bookings to Dubai-Abu Dhabi chauffeur journeys, our
                services are built around safety, comfort, and punctuality.
                <br /><br />
                We proudly serve tourists, residents, and business travelers
                seeking dependable transportation—from budget-friendly options
                to premium luxury chauffeur services.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default DrivenCars;
