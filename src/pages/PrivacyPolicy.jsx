const PrivacyPolicy = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* PAGE TITLE */}
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#E1B400] mb-6">
          Privacy Policy
        </h1>

        {/* INTRO */}
        <p className="text-gray-700 text-sm sm:text-base text-center max-w-4xl mx-auto mb-14 leading-relaxed">
          At <strong>Dubai Car Rentals</strong>, your privacy is extremely
          important to us. This Privacy Policy explains how we collect, use, and
          protect your personal information when you use our website or
          chauffeur services.
        </p>

        {/* CONTENT */}
        <div className="space-y-12 text-gray-700 text-sm sm:text-base leading-relaxed">

          {/* INFORMATION WE COLLECT */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Personal details such as name, phone number, and email address</li>
              <li>Pickup and drop-off locations</li>
              <li>Trip details, preferences, and booking requirements</li>
              <li>Communication records related to bookings or support</li>
              <li>Website usage data to improve user experience</li>
            </ul>
          </div>

          {/* HOW WE USE */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To confirm and manage your bookings</li>
              <li>To provide customer support and assistance</li>
              <li>To personalize your transportation experience</li>
              <li>To send booking updates, notifications, or promotional offers</li>
              <li>To improve our services and website performance</li>
            </ul>
          </div>

          {/* INFORMATION SHARING */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              Information Sharing
            </h2>
            <p className="mb-4">
              We do <strong>not</strong> sell, trade, or rent your personal
              information to third parties. Your data is shared only with:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Verified chauffeurs to execute your trip</li>
              <li>
                Trusted service partners when necessary (e.g., payment gateways,
                security verification tools)
              </li>
            </ul>
          </div>

          {/* DATA SECURITY */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              Data Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your
              personal information from unauthorized access, misuse, or loss.
            </p>
          </div>

          {/* YOUR RIGHTS */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              Your Rights
            </h2>
            <p className="mb-4">You have the right to request:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Access to the personal data we hold about you</li>
              <li>Correction of inaccurate or incomplete information</li>
              <li>Deletion of your data (subject to legal requirements)</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              Contact for Privacy Concerns
            </h2>
            <p className="mb-2">
              If you have any questions or concerns regarding this Privacy
              Policy, please contact us:
            </p>
            <p>
              <strong>Email:</strong> dubaicarental4@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +91 6264504541
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
