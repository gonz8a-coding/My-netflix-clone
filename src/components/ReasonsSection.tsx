export default function ReasonsSection() {
  const reasons = [
    {
      title: "Enjoy on your TV",
      description:
        "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    },
    {
      title: "Download your shows to watch offline",
      description:
        "Save your favorites easily and always have something to watch.",
    },
    {
      title: "Watch everywhere",
      description:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    },
    {
      title: "Create profiles for kids",
      description:
        "Send kids on adventures with their favorite characters in a space made just for them.",
    },
  ];

  return (
    <section className="bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          More Reasons to Join
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="
                p-8 rounded-xl
                bg-linear-to-r from-[#1504fe3e] to-[#ff0ec327]
                shadow-lg transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl
              "
            >
              <h3 className="text-xl font-semibold mb-4">
                {reason.title}
              </h3>
              <p className="text-base text-gray-200 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}