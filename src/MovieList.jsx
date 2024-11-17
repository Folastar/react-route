import React from "react";
import MovieCard from "./MovieCard";
import { movies } from "./Data";

const MovieList = () => {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
