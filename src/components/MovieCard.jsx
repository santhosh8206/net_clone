import React from 'react';
import './MovieCard.css';

export default function MovieCard({ mname,onSelect }) {
    // console.log(mname);
    
  return (
    <div className="movie-card" onClick={() => onSelect && onSelect(mname)}>
      <div className="movie-card-image">
        <img
          src={mname.poster_path}
          alt={mname.title}
          className="img-fluid rounded"
        />
      </div>
      <div className="movie-card-overlay">
        <div className="movie-card-info">
          <h6>{mname.title}</h6>
          <p>{mname.release_date} • ⭐ {mname.popularity}</p>
        </div>
      </div>
    </div>
    // <h1>hello</h1>
  );
}