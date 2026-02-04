import React from "react";

interface MovieCardProps {
  title: string;
  image: string;
  onClick: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, image, onClick }) => {
  return (
    <div
      className="w-[200px] sm:w-[220px] md:w-[240px] h-[320px] flex-shrink-0 rounded overflow-hidden cursor-pointer relative transform transition-transform duration-300 hover:scale-105"
      onClick={onClick}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover block"
      />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-2 text-white text-sm">
        {title}
      </div>
    </div>
  );
};

export default MovieCard;