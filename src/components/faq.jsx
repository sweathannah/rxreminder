import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  { q: "What exactly is RxReminder?", a: "RxReminder is a smart medication reminder app designed to help you take your medications on time, track your doses, and keep your health on track effortlessly" },
  { q: "Is RxReminder free to use?", a: "Yes! RxReminder will offer a free version with essential features. We’ll also have premium options for those who want even more advanced support, like automatic refills and personalized insights" },
  { q: "I already set alarms for my meds. Why do I need RxReminder?", a: "Traditional alarms can’t track if you actually took your meds, warn caregivers, or adjust to your health patterns. RxReminder goes beyond simple alarms it helps you stay consistent, alert loved ones when needed, and gives you smart health support" },
  { q: "What if I forget to check my phone?", a: "We’re integrating RxReminder with wearable devices (like smartwatches), so even if you miss your phone, you’ll still get important dose alerts" },
  { q: "How is my health data protected?", a: "Your security is our top priority. We use industry-standard encryption and strict privacy protocols to ensure your health information is safe and confidential" },
  { q: "When will RxReminder be available?", a: "We’re currently gathering early supporters! Join the waitlist today, and you’ll be the first to know when we launch" },
  { q: "Can my caregiver monitor my doses too?", a: "Yes! With your permission, caregivers or loved ones can receive instant notifications if you miss a dose helping you stay even more supported" },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section
      className="relative bg-[#2D7749] px-4 py-20 md:px-16 lg:px-32 text-white z-10" id="faq"
    >
      {/* RxReminder text as background */}
      <img
        src="/images/rx-bg.png"
        alt="RxReminder Background"
        className="absolute bottom-0 left-0 w-full max-w-[90%] opacity-10 z-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl text-black px-5 py-4 transition-all duration-300"
            >
              <div
                onClick={() => toggle(idx)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="font-medium">{item.q}</h3>
                {openIndex === idx ? (
                  <FaChevronUp className="text-green-600" />
                ) : (
                  <FaChevronDown className="text-green-600" />
                )}
              </div>
              {openIndex === idx && (
                <p className="mt-3 text-sm text-gray-600">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
