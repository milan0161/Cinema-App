export interface Movie {
  id: number;
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

export interface EditMovie {
  id: number;
  name: string;
  country: string;
  actors: string;
  description: string;
  director: string;
  genre: string;
  year: number;
  duration: number;
}

export interface Images {
  images: { image: string; title: string; description: string }[];
}

export interface SearchMovies {
  searchTerm: string;
  pageSize: number;
  pageNumber: number;
}
export interface PaginationResponse<T> {
  totalCount: number;
  totalPages: number;
  data: T;
}
