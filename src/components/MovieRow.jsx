// src/components/MovieRow.jsx
import React from "react";
import MovieCard from "./MovieCard";
import "./MovieRow.css";

export default function MovieRow({ title, movies = [], onSelect }) {
  return (
    <div className="movie-row mb-4">
      <h4 className="text-white mb-2">{title}</h4>
      <div className="movie-row-scroll d-flex overflow-auto pb-2">
        {movies.map((movie) => (
          <div key={movie.id} className="me-2">
            <MovieCard mname={movie} onSelect={onSelect} />
          </div>
        ))}
      </div>
    </div>
  );
}
