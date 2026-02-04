import { useRef } from "react";
import MovieCard from "./MovieCard";

export interface Movie {
  id: number;
  title: string;
  image: string;
  year: string;
  genres: string[];
  description: string;
}

interface MoviesSectionProps {
  onCardClick: (movie: Movie) => void;
}

export default function MoviesSection({ onCardClick }: MoviesSectionProps) {
  const movies: Movie[] = [
    {
      id: 1,
      title: "",
      image: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2022/06/FWQ-WW-XkAAIOU0.jpg",
      year: "2016",
      genres: ["Drama", "Sci-Fi"],
      description: "A group of kids uncover supernatural mysteries in their small town."
    },
    {
      id: 2,
      title: "",
      image: "https://lsureveille.com/wp-content/uploads/2025/10/frankenstein-new-wide.jpg",
      year: "2025",
      genres: ["Horror", "Drama"],
      description: "A reimagined tale of the classic monster."
    },
    {
      id: 3,
      title: "",
      image: "https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTPInBEph1iMEi2q7RSKOsoZlKexxEAh_fitoYf9slw38WQL-WMXvZTVeyPtthEHXofSBVB56GO4-qH5Yelo6OEdME54qIvvtwzwZdG3lGiBkPf_b_prRKpYox4xN27Un_WY3Q.jpg?r=49b",
      year: "2023",
      genres: ["Anime", "Action"],
      description: "K-pop idols fight demons in a supernatural adventure."
    },
    {
      id: 4,
      title: "",
      image: "https://a.storyblok.com/f/178900/1448x2048/f6bc0fb45d/one-piece-egghead-arc-part-ii-key-visual.jpg/m/filters:quality(95)format(webp)",
      year: "2023",
      genres: ["Anime", "Adventure"],
      description: "The Straw Hat crew embarks on new adventures in the Egghead Arc."
    },
    {
      id: 5,
      title: "",
      image: "https://static.kinoafisha.info/k/series_posters/220/upload/series/posters/6/2/5/13526/970849361761034894.jpg",
      year: "2010",
      genres: ["Documentary", "Music"],
      description: "A documentary about the life of Juan Gabriel."
    },
    {
      id: 6,
      title: "",
      image: "https://es.web.img3.acsta.net/r_1280_720/pictures/20/05/13/19/40/4344878.jpg",
      year: "2017",
      genres: ["Drama", "Biography"],
      description: "The story of Jenny Rivera's life and struggles."
    },
    {
      id: 7,
      title: "",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPV8pfEsV2SGcAaNGxnPOKILts359pc5BydA&s",
      year: "2022",
      genres: ["Reality", "Competition"],
      description: "Contestants compete in extreme challenges for survival."
    },
    {
      id: 8,
      title: "",
      image: "https://m.media-amazon.com/images/I/71M8YFEakfL.jpg",
      year: "2022",
      genres: ["Comedy", "Mystery"],
      description: "Follow Wednesday Addams in her dark and quirky adventures."
    },
    {
      id: 9,
      title: "",
      image: "https://media.themoviedb.org/t/p/w500/130H1gap9lFfiTF9iDrqNIkFvC9.jpg",
      year: "2022",
      genres: ["Drama", "Comedy"],
      description: "A grumpy man discovers life can still be beautiful."
    },
    {
      id: 10,
      title: "",
      image: "https://i.scdn.co/image/ab67616d0000b2731520620dc55064059193b702",
      year: "2000",
      genres: ["Horror", "True Crime"],
      description: "The chilling story of Ed Gein's crimes."
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="px-6 py-10 max-w-6xl mx-auto relative">
      <p className="text-white text-xl mb-4">Trending Now</p>

      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-3 rounded-full hover:bg-black/70 transition cursor-pointer"
      >
        &#10094;
      </button>

      <div
  ref={scrollRef}
  className="flex gap-4 overflow-x-auto overflow-y-hidden no-scrollbar py-2"
>
  {movies.map((movie) => (
    <MovieCard
      key={movie.id}
      title={movie.title}
      image={movie.image}
      onClick={() => onCardClick(movie)}
    />
  ))}
</div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-3 rounded-full hover:bg-black/70 transition cursor-pointer"
      >
        &#10095;
      </button>
    </section>
  );
}