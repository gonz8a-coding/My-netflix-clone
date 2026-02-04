import React from "react";

interface Movie {
  id: number;
  title: string;
  description: string;
  year: string;
  genres: string[];
  image: string;
}

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

const Modal: React.FC<MovieModalProps> = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg max-w-xl w-full p-6 relative">
        <button
          className="absolute top-2 right-2 text-white text-xl font-bold cursor-pointer"
          onClick={onClose}
        >
          X
        </button>
        <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover rounded mb-4" />
        <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
        <p className="text-gray-300 mb-2">{movie.description}</p>
        <p className="text-gray-400 mb-2">
          Year: {movie.year} | Genres: {movie.genres.join(", ")}
        </p>
        <button className="bg-red-600 px-4 py-2 rounded text-white mt-4 hover:bg-red-700 cursor-pointer font-semibold">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Modal;