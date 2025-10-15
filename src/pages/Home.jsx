// src/pages/Home.jsx
import React from "react";
import MovieCard from "../components/MovieCard";

export default function Home({ trending = [], topRated = [], action = [] }) {
  return (
    <div className="container-fluid px-4 py-4">
      <header className="mb-4">
        {/* You can create a Hero component here selecting one featured movie */}
      </header>

      <section className="mb-4">
        <h3 className="text-white">Trending Now</h3>
        <div className="d-flex overflow-auto py-2">
          {trending.map((m) => <MovieCard key={m.id} movie={m} />)}
        </div>
      </section>

      <section className="mb-4">
        <h3 className="text-white">Top Rated</h3>
        <div className="d-flex overflow-auto py-2">
          {topRated.map((m) => <MovieCard key={m.id} movie={m} />)}
        </div>
      </section>

      <section className="mb-4">
        <h3 className="text-white">Action</h3>
        <div className="d-flex overflow-auto py-2">
          {action.map((m) => <MovieCard key={m.id} movie={m} />)}
        </div>
      </section>
    </div>
  );
}
