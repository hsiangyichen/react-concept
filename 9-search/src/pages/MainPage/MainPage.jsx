import { useState, useEffect } from "react";
import "./MainPage.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const MainPage = () => {
  const [movies, setMovies] = useState(null);

  const getMovies = async () => {
    try {
      const response = await axios.get(`
        https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`);
      console.log(response.data.results);
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <main className="main">
      <section className="movie-card">
        {movies &&
          movies.map((movie) => (
            <article key={movie.id} className="movie-card__container">
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.id}
                  className="movie-card__img"
                />
              </Link>
              <h2 className="movie-card__title">{movie.title}</h2>
            </article>
          ))}
      </section>
    </main>
  );
};

export default MainPage;
