import { useEffect, useState } from "react";
import { fetchPopularMovies, searchMovies } from "../services/tmdbapi";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadPopularMovies();
  }, []);

  const loadPopularMovies = async () => {
    const data = await fetchPopularMovies();
    setMovies(data);
  };

  const handleSearch = async (query) => {
    if (!query) {
      loadPopularMovies();
      return;
    }

    const data = await searchMovies(query);
    setMovies(data);
  };

  return (
    <div className="container">
      <h1 className="title">🎬 Cine-Stream</h1>

      <SearchBar onSearch={handleSearch} />

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;