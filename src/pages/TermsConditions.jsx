const TermsConditions = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* PAGE TITLE */}
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#E1B400] mb-6">
          Terms & Conditions
        </h1>

        {/* INTRO */}
        <p className="text-gray-700 text-sm sm:text-base max-w-4xl mx-auto mb-14 text-center leading-relaxed">
          By using <strong>DubaiCarRentals.com</strong> and our chauffeur
          services, you agree to the following terms and conditions outlined
          below.
        </p>

        {/* CONTENT */}
        <div className="space-y-10 text-gray-700 text-sm sm:text-base leading-relaxed">

          {/* 1 */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              1. Booking Confirmation
            </h2>
            <p>
              A booking is considered confirmed only after we verify your travel
              details and send you an official confirmation via message or
              email.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              2. Payment Terms
            </h2>
            <p>
              Payments must be completed using approved payment methods. Prices
              may vary based on trip duration, location, vehicle selection, and
              special service requests.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              3. Cancellation Policy
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Cancellations made at least 12 hours before the scheduled trip
                are free of charge.
              </li>
              <li>
                Cancellations made after this period may incur cancellation
                fees.
              </li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              4. Vehicle & Driver Allocation
            </h2>
            <p>
              We reserve the right to assign an equivalent or upgraded vehicle
              if the originally selected vehicle is unavailable due to
              operational reasons.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              5. Customer Responsibility
            </h2>
            <p>
              Customers are expected to behave respectfully and comply with UAE
              laws during their journey. Any damage caused to the vehicle due to
              customer actions may result in additional charges.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              6. Delays & Service Changes
            </h2>
            <p>
              Delays caused by traffic conditions, weather, road closures, or
              other unforeseen circumstances are beyond our control and do not
              constitute liability.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              7. Use of Website
            </h2>
            <p>
              You agree not to misuse this website or attempt unauthorized
              access to our systems, servers, or data.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              8. Limitation of Liability
            </h2>
            <p>
              <strong>Dubai Car Rentals</strong> is not responsible for any
              losses, damages, or inconveniences resulting from delays,
              accidents, or events beyond our reasonable control.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TermsConditions;
