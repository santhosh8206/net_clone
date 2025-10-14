import React from 'react';
import MovieCard from './MovieCard';
import './MovieRow.css';

export default function MovieRow({ title, movies =[] , onSelect }) {
   if(!movies.length) return null;
  return (
    <section className="movie-row-section">
      <h4 className="text-light mb-3 px-3">{title}</h4>
      <div className="movie-row d-flex flex-nowrap overflow-auto px-3 pb-3">
        {movies.map((movie,index) => (
          <div  key={`${movie.id}-${index}`}className="me-3">
            <MovieCard
            
            mname={movie}
            onSelect={onSelect}
          />
          </div>
        ))}
      </div>
    </section>
  );
}