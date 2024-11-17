import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div style={styles.card}>
      <img src={movie.posterURL} alt={movie.title} style={styles.image} />
      <h3>{movie.title}</h3>
      <p><strong>Rating:</strong> {movie.rating}/5</p>
      <Link to={`/movie/${movie.id}`} style={styles.link}>View Details</Link>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "10px",
    margin: "10px",
    textAlign: "center",
  },
  image: {
    width: "150px",
    height: "200px",
    objectFit: "cover",
    marginBottom: "10px",
  },
  link: {
    textDecoration: "none",
    color: "blue",
    fontWeight: "bold",
  },
};

export default MovieCard;
