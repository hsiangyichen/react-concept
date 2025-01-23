import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function MovieDetails() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  const getMovieById = async (id) => {
    try {
      const response = await axios.get(`
            https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
      console.log(response.data);
      setMovie(response.data);
    } catch (error) {
      console.error("error fetching movie by id", id);
    }
  };

  useEffect(() => {
    getMovieById(movieId);
  }, [movieId]);

  return (
    <section>
      <h2>Movie Details</h2>
      {movie && (
        <article>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.original_title}
          />
          <h3>{movie.original_title}</h3>
          <p>Popularity: {movie.popularity}</p>
        </article>
      )}
    </section>
  );
}

export default MovieDetails;
