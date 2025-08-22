import type { Movie } from '../../types/movie';
import { useFavorites } from '../../contexts/FavoritesContext';
import './MovieCard.css';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(movie.id);

  const handleToggleFavorite = () => {
    if (favorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  const posterUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : 'https://via.placeholder.com/300x450?text=No+Image';

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={movie.title} className="movie-poster" />
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-year">
          {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
        </p>
        <p className="movie-rating">⭐ {movie.vote_average.toFixed(1)}</p>
        <button 
          onClick={handleToggleFavorite}
          className={`favorite-btn ${favorite ? 'favorited' : ''}`}
        >
          {favorite ? '❤️ Remover' : '🤍 Favoritar'}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;