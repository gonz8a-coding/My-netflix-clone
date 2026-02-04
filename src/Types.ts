export interface Movie {
  id: number;
  title: string;
  description: string;
  year: string | number;
  genres: string[];
  image: string;
}