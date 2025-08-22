import axios from 'axios';
import type { ApiResponse, MovieDetails } from '../types/movie';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovies = async (query: string, page: number = 1): Promise<ApiResponse> => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query,
        page,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar filmes');
  }
};

export const getMovieDetails = async (movieId: number): Promise<MovieDetails> => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
        append_to_response: 'credits'
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar detalhes do filme');
  }
};