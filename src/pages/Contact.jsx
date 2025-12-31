import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      {/* ================= CONTACT SECTION ================= */}
      <section className="w-full bg-gradient-to-b from-[#e6e6e6] via-[#e4d46b] to-[#e1c900] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* HEADER */}
          <div className="text-center mb-14">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold allow-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-gray-800 text-sm sm:text-base">
              Drop your details in the form and let’s create something awesome.
            </p>
          </div>

          {/* CONTENT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* LEFT INFO */}
            <div>
              <h2 className="text-2xl font-bold mb-8">
                Get In Touch
              </h2>

              <ul className="space-y-6 text-gray-900">

                <li className="flex items-start gap-4">
                  <span className="w-12 h-12 flex items-center justify-center rounded-full border border-black">
                    <FaPhoneAlt />
                  </span>
                  <div>
                    <p className="font-semibold">Number</p>
                    <p className="text-sm">+91 6264504541</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="w-12 h-12 flex items-center justify-center rounded-full border border-black">
                    <FaEnvelope />
                  </span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm">info@dubaicarental.com</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="w-12 h-12 flex items-center justify-center rounded-full border border-black">
                    <FaMapMarkerAlt />
                  </span>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-sm leading-relaxed">
                      102 apollo tower, vijay nagar indore<br />
                      Pin 452010
                    </p>
                  </div>
                </li>

              </ul>
            </div>

            {/* RIGHT FORM */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
              <h2 className="text-xl sm:text-2xl font-bold mb-6">
                Work With Me
              </h2>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E1B400]"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E1B400]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E1B400]"
                  />
                </div>

                <textarea
                  rows="4"
                  placeholder="Anything else I should know?"
                  className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E1B400]"
                />

                <button
                  type="submit"
                  className="w-full bg-[#E1B400] text-black font-semibold py-3 rounded-full hover:bg-[#cfa900] transition"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MAP SECTION ================= */}
      <section className="w-full">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps?q=Laxmi%20Tower%20Vijay%20Nagar%20Indore&output=embed"
          className="w-full h-[300px] sm:h-[400px] md:h-[450px] border-0"
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
