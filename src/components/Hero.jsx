// src/components/Hero.jsx
import React from "react";

export default function Hero({ movies = [] }) {
  const featured = movies[0];
  if (!featured) return null;

  const imageBase = "https://image.tmdb.org/t/p/original";
  const bg = featured.backdrop_path ? `${imageBase}${featured.backdrop_path}` : null;

  return (
    <header
      className="hero p-5 rounded mb-4"
      style={{
        backgroundImage: bg ? `url(${bg})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.7), transparent)" }} className="p-4 rounded">
        <h1 className="text-white">{featured.title || featured.name}</h1>
        <p className="text-muted" style={{ maxWidth: 800 }}>
          {featured.overview}
        </p>
      </div>
    </header>
  );
}
