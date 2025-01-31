import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const genreId = 878;

  useEffect(() => {
    const fetchAllMoviesWithGenre = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchAllMoviesWithGenre();
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
        </li>
      ))}
    </div>
  );
};

export default MovieList;
