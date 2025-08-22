export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  adult: boolean;
  video: boolean;
}

export interface ApiResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MovieDetails extends Movie {
  budget: number;
  genres: { 
    id: number; 
    name: string; 
  }[];
  homepage: string;
  imdb_id: string;
  production_companies: { 
    name: string; 
  }[];
  production_countries: { 
    name: string; 
  }[];
  revenue: number;
  runtime: number;
  spoken_languages: { 
    english_name: string; 
  }[];
  status: string;
  tagline: string;
  credits: {
    cast: {
      name: string;
      character: string;
      profile_path: string | null;
    }[];
  };
}