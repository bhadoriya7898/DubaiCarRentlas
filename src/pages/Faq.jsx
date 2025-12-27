import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "Do you provide car rental with driver in Dubai?",
    answer:
      "Yes, Dubai City Transport offers a wide range of chauffeur-driven cars for short trips, full-day hire, corporate travel, airport pick-up/drop, and city tours.",
  },
  {
    question: "How Can I Book A Car With Driver?",
    answer:
      "You can book a car with driver through our website booking form, by phone call, or via email. Our team will confirm your booking after verifying the details.",
  },
  {
    question: "Are Your Prices Fixed Or Do They Vary?",
    answer:
      "Prices may vary based on duration, distance, vehicle type, and special requirements. Contact our team for the most accurate quote.",
  },
  {
    question: "Do You Provide Airport Pick-Up And Drop-Off?",
    answer:
      "Yes, we offer reliable airport transfer services including pick-up and drop-off from Dubai International Airport and other locations.",
  },
  {
    question: "Can I Hire A Car With Driver For A Full Day?",
    answer:
      "Absolutely. We provide full-day chauffeur services ideal for business meetings, city tours, and personal travel.",
  },
  {
    question: "Do You Offer Cars For Long-Distance Trips Like Dubai To Abu Dhabi?",
    answer:
      "Yes, we offer chauffeur-driven cars for long-distance travel including Dubai to Abu Dhabi and other UAE destinations.",
  },
  {
    question: "What Types Of Cars Do You Offer?",
    answer:
      "Our fleet includes luxury sedans, SUVs, premium vans, and executive vehicles to suit every travel requirement.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* PAGE TITLE */}
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#E1B400] mb-14">
          FAQ (Frequently Asked Questions)
        </h1>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-md shadow-sm"
            >
              {/* QUESTION */}
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left font-medium text-gray-900"
              >
                <span>
                  {index + 1}. {faq.question}
                </span>

                {activeIndex === index ? (
                  <FaMinus className="text-gray-700" />
                ) : (
                  <FaPlus className="text-gray-700" />
                )}
              </button>

              {/* ANSWER */}
              {activeIndex === index && (
                <div className="px-5 pb-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Faq;
