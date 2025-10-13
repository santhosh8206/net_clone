import React from 'react';
// import './Hero.css';

export default function Hero({ movie }) {
  if (!movie) return null;

  return (
    <header
      className="hero-section text-light"
      style={{ backgroundImage: `url(${movie.backdrop})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content container">
          <h1 className="hero-title">{movie.title}</h1>
          <p className="hero-overview">{movie.overview}</p>
          <div className="hero-buttons">
            <button className="btn btn-light btn-lg me-3">
              <i className="bi bi-play-fill"></i> Play
            </button>
            <button className="btn btn-secondary btn-lg">
              <i className="bi bi-info-circle"></i> More Info
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}