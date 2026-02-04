import { useState } from "react";

interface Question {
  q: string;
  a: string;
}

const faqData: Question[] = [
  {
    q: "What is Netflix?",
    a: "Netflix is a streaming service offering a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
  },
  {
    q: "How much does Netflix cost?",
    a: "Plans range from USD 9.99 to USD 19.99 a month. No extra costs, no contracts."
  },
  {
    q: "Where can I watch?",
    a: "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web or on any internet-connected device."
  },
  {
    q: "How do I cancel?",
    a: "Netflix is flexible. You can easily cancel your account online anytime. There are no cancellation fees."
  },
  {
    q: "Is Netflix good for kids?",
    a: "Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="px-6 py-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-white text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="bg-gray-400/25 rounded-lg overflow-hidden">
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center text-white text-lg font-medium hover:bg-gray-400/25 transition cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              {item.q}
              <span className={`transform transition-transform ${openIndex === index ? "rotate-45" : ""}`}>+</span>
            </button>
            <div
              className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 py-4" : "max-h-0 py-0 text-transparent"}`}
            >
              {item.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}