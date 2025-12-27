const Disclaimer = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* PAGE TITLE */}
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#E1B400] mb-10">
          Disclaimer
        </h1>

        {/* CONTENT */}
        <div className="space-y-10 text-gray-700 text-sm sm:text-base leading-relaxed">

          {/* DISCLAIMER HEADING */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
              Disclaimer
            </h2>

            <ul className="list-disc list-inside space-y-3">
              <li>
                The content provided on{" "}
                <strong>DubaiCarRentals.com</strong> is intended for general
                information and booking purposes only.
              </li>

              <li>
                While we strive to keep all service details accurate, pricing,
                availability, and offerings may change without prior notice.
              </li>

              <li>
                <strong>Dubai Car Rentals</strong> is not responsible for the
                content, policies, or services of external websites or
                third-party providers linked through our platform.
              </li>

              <li>
                Travel durations and arrival times may vary due to traffic
                conditions, weather, road closures, or unforeseen circumstances.
              </li>

              <li>
                All customers are responsible for complying with local laws,
                regulations, and safety guidelines throughout their journey.
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="pt-6">
            <p className="mb-3 font-semibold text-gray-900">
              For any concerns, please contact us:
            </p>

            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:Vishaly1022@gmail.com"
                className="text-[#E1B400] hover:underline"
              >
                dubaicarental4@gmail.com
              </a>
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+919685534688"
                className="text-[#E1B400] hover:underline"
              >
                +91 6264504541
              </a>
            </p>

            <p>
              <strong>Address:</strong> 102 apollo tower, vijay nagar indore
pin 452010
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
