// src/components/MovieCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();
  if (!movie) return null;

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : "/fallback.jpg";

  return (
    <div
      className="movie-card"
      onClick={() => navigate(`/movie/${movie.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && navigate(`/movie/${movie.id}`)}
    >
      <img
        src={poster}
        alt={movie.title || movie.name}
        className="w-100 rounded"
        onError={(e) => (e.currentTarget.src = "/fallback.jpg")}
      />
     
    </div>
  );
}
