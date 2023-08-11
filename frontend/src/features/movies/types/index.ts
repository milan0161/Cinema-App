export interface Movie {
  id: string;
  title: string;
  actors: string;
  description: string;
  director: string;
  genre: string;
  image: string;
  year: number;
  duration: number;
}

export interface Images {
  images: { image: string; title: string; description: string }[];
}
