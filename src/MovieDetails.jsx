import React from "react";
import { useParams, Link } from "react-router-dom";
import { movies } from "./Data";

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  return (
    <div style={styles.container}>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title={movie.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/" style={styles.link}>Back to Home</Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  link: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 20px",
    textDecoration: "none",
    backgroundColor: "#007BFF",
    color: "#fff",
    borderRadius: "5px",
  },
};

export default MovieDetails;
