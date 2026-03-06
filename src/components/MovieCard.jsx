import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="movie-card">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://via.placeholder.com/500x750"
        }
        alt={movie.title}
      />

      <div className="movie-info">
        <h3>{movie.title}</h3>

        <p className="rating">⭐ {movie.vote_average.toFixed(1)}</p>

        <p className="year">{movie.release_date?.slice(0,4)}</p>
      </div>
    </div>
  );
};

export default MovieCard;