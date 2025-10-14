import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Hero.css';

export default function Hero({ movies = [] }) {
  if (!movies || movies.length === 0) {
    return null; // Prevent rendering if no movies yet
  }

  return (
    <section className="hero-section">
      <Carousel
        fade
        controls={false}
        indicators={false}
        pause={false}
        interval={4000}
        className="hero-carousel"
      >
        {movies.slice(0, 5).map((movie) => (
          <Carousel.Item key={movie.id}>
            <div className="hero-slide">
              <img
                className="hero-image d-block w-100"
                src={movie.poster_path || movie.backdrop_path}
                alt={movie.title || movie.tamilTitle}
              />
              <div className="hero-overlay" />
              <div className="hero-content">
                <h1 className="hero-title">{movie.title || movie.tamilTitle}</h1>
                {movie.overview && (
                  <p className="hero-description">{movie.overview.slice(0, 150)}...</p>
                )}
                <div className="hero-buttons">
                  <button className="btn btn-light me-2">
                    ▶ Play
                  </button>
                  <button className="btn btn-secondary">
                    ℹ More Info
                  </button>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
