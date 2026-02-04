import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-125 sm:h-150 md:h-175 bg-cover bg-center" style={{ backgroundImage: 'url(https://xboxwire.thesourcemediaassets.com/sites/2/2023/05/Background-size1920x1080-4e1694a6-75aa-4c36-9d4d-7fb6a3102005-bc5318781aad7f5c8520.png)' }}>
      
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 sm:p-6 z-10">
        <div className="text-red-600 font-bold text-2xl">Netflix</div>
        <button className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 text-white font-semibold cursor-pointer">
          Sign In
        </button>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl mb-4">
          Watch anywhere. Cancel anytime.
        </h2>
        <p className="mb-6 text-lg sm:text-xl">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 w-full max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Email address"
            className="p-4 flex-1 rounded border border-gray-200 text-white focus:outline-none focus:ring-1 "
            required
          />
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-4 rounded hover:bg-red-700 cursor-pointer font-semibold"
          >
            Get Started &gt;
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;