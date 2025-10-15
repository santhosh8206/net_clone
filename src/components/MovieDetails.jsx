// src/components/MovieDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieById, getMovieVideos } from "../services/api";
import "./MovieDetails.css";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        // movie details
        const movieData = await getMovieById(id);
        if (!mounted) return;
        setMovie(movieData);

        // videos/trailers
        const videos = await getMovieVideos(id);
        if (!mounted) return;
        // prefer official YouTube trailer
        const ytTrailer =
          videos?.find((v) => v.type === "Trailer" && v.site === "YouTube") ||
          videos?.find((v) => v.site === "YouTube");

        setTrailer(ytTrailer || null);
      } catch (err) {
        console.error("MovieDetails fetch error:", err);
        setError("Failed to load movie details.");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchData();
    return () => {
      mounted = false;
    };
  }, [id]);

  if (loading) return <div className="p-6 text-center text-white">Loading...</div>;
  if (error) return <div className="p-6 text-center text-danger">{error}</div>;
  if (!movie) return <div className="p-6 text-center text-white">Movie not found.</div>;

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/fallback-banner.jpg";

  const releaseYear = (movie.release_date || movie.first_air_date || "").slice(0, 4);

  return (
    <div className="movie-details-page text-white">
      <div
        className="movie-backdrop"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.2)), url(${backdropUrl})`,
        }}
      >
        <div className="movie-details-inner container py-5">
          <div className="row align-items-center">
            <div className="col-md-4">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "/fallback.jpg"
                }
                alt={movie.title || movie.name}
                className="img-fluid rounded shadow"
                onError={(e) => (e.currentTarget.src = "/fallback.jpg")}
              />
            </div>

            <div className="col-md-8">
              <h1 className="mb-2">{movie.title || movie.name}</h1>
              <p className="text-muted mb-2">
                {releaseYear} • {movie.runtime ? `${movie.runtime} min • ` : ""}⭐{" "}
                {typeof movie.vote_average !== "undefined" ? movie.vote_average : "N/A"}
              </p>
              <p style={{ maxWidth: 800 }}>{movie.overview}</p>

              <div className="mt-3 d-flex gap-2">
                {/* Watch Trailer (opens YouTube in new tab) */}
                {trailer ? (
                  <a
                    href={`https://www.youtube.com/watch?v=${trailer.key}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-danger"
                  >
                    ▶ Trailer
                  </a>
                ) : (
                  <button className="btn btn-secondary" disabled>
                    No Trailer
                  </button>
                )}

                {/* Watch Movie - opens a VidSrc / external embed route */}
                <button
                  className="btn btn-outline-light"
                  onClick={() => {
                    // route to a page that embeds VidSrc (or external player)
                    // e.g. /watch/movie/:id  — create this route/page if you want to embed vidsrc
                    navigate(`/watch/movie/${id}`);
                  }}
                >
                  ▶ Watch Movie
                </button>

                <button className="btn btn-light" onClick={() => navigate(-1)}>
                  ← Back
                </button>
              </div>
            </div>
          </div>

          {/* Inline embedded trailer (optional, show below) */}
          {trailer && (
            <div className="mt-4">
              <div className="ratio ratio-16x9">
                <iframe
                  title="Trailer"
                  src={`https://www.youtube.com/embed/${trailer.key}?rel=0`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
