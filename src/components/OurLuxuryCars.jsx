import { useState, useEffect } from "react";

import img1 from "../assets/images/Our Luxury Cars/img1.jpg";
import img2 from "../assets/images/Our Luxury Cars/img2.png";
import img3 from "../assets/images/Our Luxury Cars/img3.png";
import img4 from "../assets/images/Our Luxury Cars/img4.png";
import img5 from "../assets/images/Our Luxury Cars/img5.jpg";
import img6 from "../assets/images/Our Luxury Cars/img6.png";

const cars = [
  {
    name: "BMW 7 Series",
    image: img1,
    fullDay: "AED 1700",
    hour: "AED 110",
    airport: "AED 400",
    model: "22, 23",
    luggage: 4,
    doors: 4,
    passengers: 4,
  },
  {
    name: "Lexus ES350",
    image: img2,
    fullDay: "AED 1000",
    hour: "AED 90",
    airport: "AED 550",
    model: "21, 23",
    luggage: 4,
    doors: 4,
    passengers: 4,
  },
  {
    name: "GMC Yukon",
    image: img3,
    fullDay: "AED 1600",
    hour: "AED 100",
    airport: "AED 600",
    model: "20, 22",
    luggage: 5,
    doors: 4,
    passengers: 7,
  },
  {
    name: "Mercedes V-Class",
    image: img4,
    fullDay: "AED 1400",
    hour: "AED 150",
    airport: "AED 450",
    model: "20, 22",
    luggage: 7,
    doors: 4,
    passengers: 7,
  },
  {
    name: "Tesla",
    image: img5,
    fullDay: "AED 1200",
    hour: "AED 130",
    airport: "AED 500",
    model: "22, 23",
    luggage: 3,
    doors: 4,
    passengers: 4,
  },
  {
    name: "Range Rover",
    image: img6,
    fullDay: "AED 1800",
    hour: "AED 160",
    airport: "AED 700",
    model: "21, 23",
    luggage: 5,
    doors: 4,
    passengers: 5,
  },
];

const OurLuxuryCars = () => {
  const [index, setIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  /* 🔥 RESPONSIVE CARD COUNT */
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

  const visibleCars = cars.slice(index, index + cardsToShow);

  const next = () => {
    if (index < cars.length - cardsToShow) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Explore Our Premium Vehicle Collection
          </h2>

          <button className="bg-[#E1B400] text-white px-6 py-2 rounded-md text-sm sm:text-base font-medium hover:bg-[#cfa900] transition">
            Browse All Vehicles
          </button>
        </div>

        {/* SLIDER */}
        <div className="relative">

          {/* CARDS */}
          <div
            className={`grid gap-8 ${
              cardsToShow === 1
                ? "grid-cols-1"
                : cardsToShow === 2
                ? "grid-cols-2"
                : "grid-cols-3"
            }`}
          >
            {visibleCars.map((car, i) => (
              <div
                key={i}
                className="bg-white shadow-lg rounded-md overflow-hidden flex flex-col"
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-[220px] object-cover"
                />

                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold mb-3">
                    {car.name}
                  </h3>

                  <div className="text-sm space-y-2">
                    <p>Full Day (10 Hours) — {car.fullDay}</p>
                    <p>Hourly Rental (3 Hour Min) — {car.hour}</p>
                    <p>Airport Transfer — {car.airport}</p>
                  </div>

                  <div className="text-sm text-gray-600 space-y-1 pt-2">
                    <p>Model Year: {car.model}</p>
                    <p>Luggage Capacity: {car.luggage}</p>
                    <p>Doors: {car.doors}</p>
                    <p>Passenger Limit: {car.passengers}</p>
                  </div>

                  <button className="mt-6 bg-[#E1B400] text-white py-2 rounded-md hover:bg-[#cfa900] transition">
                    View Vehicle Details →
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
        <div className="flex justify-center gap-2 mt-6">
          {Array(cars.length - cardsToShow)
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
  );
};

export default OurLuxuryCars;
