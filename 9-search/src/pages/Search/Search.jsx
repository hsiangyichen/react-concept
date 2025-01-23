import axios from "axios";
import React, { useState } from "react";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function Search() {
  const [movie, setMovie] = useState({});

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const id = e.target.movieId.value;
    console.log(id);
    getMovieById(id);
    console.log("Form Submitted");
  };

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

  return (
    <section>
      <h2>Search By ID</h2>

      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Enter the ID" name="movieId"></input>
        <button>Search</button>
      </form>

      <h3>{movie.title}</h3>
    </section>
  );
}

export default Search;
