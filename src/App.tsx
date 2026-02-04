import Hero from "./components/Hero";
import MoviesSection from "./components/MoviesSection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Modal from "./components/MoviesModal";
import React from "react";
import type { Movie } from "./Types";
import ReasonsSection from "./components/ReasonsSection";
function App() {
  const [selectedMovie, setSelectedMovie] = React.useState<Movie | null>(null);

  const handleCardClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Hero />
      <MoviesSection onCardClick={handleCardClick} />
      <ReasonsSection />
      <FAQ />
      <Footer />
      {selectedMovie && (
        <Modal movie={{ ...selectedMovie, year: String(selectedMovie.year) }} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;