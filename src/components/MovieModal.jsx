import React from 'react';
import './MovieModal.css';

export default function MovieModal({ movie, onClose }) {
    console.log(movie +"i am in modelpage");
    
  if (!movie) return null;

  return (
    <div className="movie-modal-overlay" onClick={onClose}>
      <div className="movie-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="btn-close btn-close-white movie-modal-close" onClick={onClose}></button>
        <div className="movie-modal-content">
          <div className="movie-modal-backdrop" style={{ backgroundImage: `url(${movie.backdrop_path})` }}>
            <div className="movie-modal-gradient" />
          </div>
          <div className="movie-modal-body text-light">
            <h2>{movie.title}</h2>
            <p className="movie-modal-details">
              {movie.year} • ⭐ {movie.rating} • {movie.genre?.join(', ')}
            </p>
            <p className="movie-modal-overview">{movie.overview}</p>
            <div className="movie-modal-buttons">
              <button className="btn btn-light me-3">
                <i className="bi bi-play-fill"></i> Play
              </button>
              <button className="btn btn-outline-light">
                <i className="bi bi-plus"></i> My List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}