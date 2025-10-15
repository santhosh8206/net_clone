// src/components/Hero.jsx
import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Hero({ movies = [] }) {
  const imageBase = "https://image.tmdb.org/t/p/original";

  if (!movies || movies.length === 0) return null;

  return (
    <div className="hero-carousel mb-4">
      <Carousel fade interval={4000}>
        {movies.slice(0, 5).map((movie) => (
          <Carousel.Item key={movie.id}>
            <div
              className="hero-slide"
              style={{
                backgroundImage: `url(${imageBase}${movie.backdrop_path})`,
                height: "75vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
            >
              <div
                className="overlay position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2))",
                }}
              ></div>

              <div
                className="content position-absolute text-white"
                style={{ bottom: "20%", left: "5%", maxWidth: "600px" }}
              >
                <h1>{movie.title || movie.name}</h1>
                <p>{movie.overview?.slice(0, 150)}...</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
