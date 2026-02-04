export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-6 py-10">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        <div className="text-center">
          <p className="text-white text-lg mb-4">
            Ready to watch? Enter your email to create or restart your membership
          </p>
          <form className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Email address"
              required
              className="px-4 py-3 w-full sm:w-auto sm:flex-1 rounded-md bg-black text-white placeholder-gray-400 focus:white outline-none border focus:ring-1 "
            />
            <button
              type="submit"
              className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition cursor-pointer"
            >
              Get Started
            </button>
          </form>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="hover:text-white transition">FAQ</a>
          <a href="#" className="hover:text-white transition">Help Center</a>
          <a href="#" className="hover:text-white transition">Terms of Use</a>
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Cookie Preferences</a>
          <a href="#" className="hover:text-white transition">Corporate Information</a>
        </div>

        <div className="text-center text-gray-500">
          © 1997-2024 Netflix, Inc.
        </div>
      </div>
    </footer>
  );
}