import { useEffect, useState } from "react";

import img1 from "../assets/images/fleetIMG/img1.jpg";
import img2 from "../assets/images/fleetIMG/img2.jpg";
import img3 from "../assets/images/fleetIMG/img3.jpg";
import img4 from "../assets/images/fleetIMG/img4.jpg";

const images = [img1, img2, img3, img4];

const Fleet = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ================= FLEET SECTION ================= */}
      <section className="w-full bg-white py-16 md:py-20" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* HEADING */}
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#E1B400] mb-12 md:mb-16">
            Chauffeur-Driven Cars for Dubai City Tours
          </h2>

          {/* TWO COLUMN LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">

            {/* LEFT – IMAGE SLIDER */}
            <div className="w-full">
              <div className="relative w-full overflow-hidden rounded-lg">
                <img
                  src={images[current]}
                  alt="Luxury Fleet"
                  className="w-full h-[260px] sm:h-[340px] md:h-full object-cover"
                />

                {/* LEFT ARROW */}
                <button
                  onClick={() =>
                    setCurrent((current - 1 + images.length) % images.length)
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black transition"
                >
                  ❮
                </button>

                {/* RIGHT ARROW */}
                <button
                  onClick={() =>
                    setCurrent((current + 1) % images.length)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black transition"
                >
                  ❯
                </button>
              </div>
            </div>

            {/* RIGHT – CONTENT */}
            <div className="text-gray-700 text-base md:text-[17px] leading-relaxed space-y-5 md:space-y-6">
              <p>
                Welcome to a city where every ride is elevated into a refined
                experience. <strong>Dubai Car Rentals</strong> offers dependable
                and professional chauffeur services designed to move with your
                schedule and expectations.
              </p>

              <p>
                Travel across Dubai in complete ease with our private chauffeur
                solutions, ensuring every journey feels smooth, relaxed, and
                indulgent. Our high-end limousine services, paired with expert
                chauffeurs, transform simple travel into an enjoyable luxury.
              </p>

              <p>
                Focus on creating memories while we take care of the roads.
                From sightseeing to special occasions, our premium services are
                crafted to deliver peace of mind and comfort at every step.
              </p>

              <p>
                Our chauffeur-driven fleet features renowned models such as GMC
                Yukon, Mercedes V-Class, BMW 7 Series, Tesla, and many other
                luxury vehicles, ensuring the perfect ride for every occasion.
              </p>

              <p>
                Booking a full-day chauffeur for your Dubai city tour allows you
                to move seamlessly between destinations without time pressure.
                You may also reserve our services for the entirety of your stay.
              </p>

              <h3 className="text-lg md:text-xl font-semibold text-gray-900 pt-3">
                Chauffeur Services for Dubai City Tours — Travel with Comfort
                and Style
              </h3>

              <p>
                Discover Dubai in absolute luxury with Dubai Car Rentals.
                Our professional chauffeurs expertly guide you through iconic
                landmarks and lesser-known attractions, ensuring an elegant and
                stress-free experience throughout your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DESTINATIONS SECTION ================= */}
      <section className="w-full bg-white py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E1B400] mb-5">
            Explore Dubai’s Must-Visit Destinations with Dubai Car Rentals
          </h2>

          <p className="text-gray-700 text-base md:text-[17px] leading-relaxed mb-4">
            Our experienced chauffeurs take you through Dubai’s most admired
            locations, offering a luxury city tour that blends convenience,
            elegance, and personalized travel.
          </p>

          <div className="space-y-4 text-gray-700 text-base md:text-[17px] leading-relaxed">
            <p>
              <strong>Downtown Dubai:</strong> Visit world-famous landmarks such
              as Burj Khalifa, Dubai Mall, and the Dubai Fountain at your own
              pace, enjoying a private and relaxed touring experience.
            </p>

            <p>
              <strong>Dubai Marina:</strong> Take in breathtaking skyline views
              and waterfront dining while cruising through one of the city’s
              most vibrant districts.
            </p>

            <p>
              <strong>Jumeirah Beach:</strong> Enjoy scenic coastal drives past
              the iconic Burj Al Arab and soak in the beauty of the Arabian Gulf.
            </p>

            <p>
              <strong>Palm Jumeirah:</strong> Experience luxury resorts and
              exclusive attractions located on this world-renowned island.
            </p>

            <p>
              <strong>Old Dubai:</strong> Step into the city’s heritage through
              Dubai Creek, traditional markets, and historic neighborhoods that
              reflect Dubai’s cultural roots.
            </p>

            <p>
              Our chauffeurs ensure every destination is reached smoothly while
              adding a refined touch to your entire travel experience.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Fleet;
