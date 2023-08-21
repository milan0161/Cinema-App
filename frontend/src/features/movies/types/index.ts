export interface Movie {
  id: string;
  name: string;
  country: string;
  actors: string;
  description: string;
  director: string;
  genre: string;
  mainPhoto: string;
  year: number;
  duration: number;
}

export interface AddMovieFormValue {
  id: string;
  name: string;
  country: string;
  actors: string;
  description: string;
  director: string;
  genre: string;
  mainPhoto: File;
  year: number;
  duration: number;
}

export interface Images {
  images: { image: string; title: string; description: string }[];
}
