import { useState } from 'react';
import { searchMovies } from '../services/tmdbAPI.ts';
import type { ApiResponse } from '../types/movie';
import MovieCard from '../components/MovieCard/MovieCard';
import SearchBar from '../components/SearchBar/SearchBar';
import Pagination from '../components/Pagination/Pagination';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import './SearchPage.css';

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState<ApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async (query: string, page: number = 1) => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    setError(null);
    setSearchQuery(query);
    
    try {
      const results = await searchMovies(query, page);
      setSearchResults(results);
      setCurrentPage(page);
    } catch (err) {
      setError('Erro ao buscar filmes. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    handleSearch(searchQuery, page);
  };

  return (
    <div className="search-page">
      <h1>Buscar Filmes</h1>
      
      <SearchBar onSearch={handleSearch} />
      
      {isLoading && <LoadingSpinner />}
      
      {error && <div className="error-message">{error}</div>}
      
      {searchResults && (
        <>
          <div className="results-info">
            <p>{searchResults.total_results} resultados encontrados</p>
          </div>
          
          <div className="movies-grid">
            {searchResults.results.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          
          {searchResults.total_pages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={searchResults.total_pages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </div>
  );
};

export default SearchPage;