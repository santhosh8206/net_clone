// src/components/MovieModal.jsx
import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { getMovieVideos, getMovieById } from "../services/api";

export default function MovieModal({ movie, onClose }) {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [details, setDetails] = useState(null);
  const [useVidSrc, setUseVidSrc] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const det = await getMovieById(movie.id);
        setDetails(det);

        const videos = await getMovieVideos(movie.id);
        // prefer official YouTube trailer
        const trailer = videos.find(
          (v) => v.type === "Trailer" && v.site === "YouTube"
        );
        if (trailer) {
          setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}?autoplay=1&rel=0`);
        } else {
          setTrailerUrl("");
        }
      } catch (err) {
        console.error("Modal load error:", err);
      }
    };
    load();
  }, [movie]);

  // VidSrc embed (experimental) — may or may not work depending on VidSrc rules.
  // If you want full movie streaming from vidsrc, set useVidSrc true.
  const vidSrcEmbed = `https://vidsrc.to/embed/movie/${movie.id}`;

  return (
    <Modal show={true} onHide={onClose} size="xl" centered dialogClassName="modal-90w">
      {/* <Modal.Header closeButton className="bg-dark text-white">
        <Modal.Title>{movie.title || movie.name}</Modal.Title>
      </Modal.Header> */}

      <Modal.Body className="bg-black text-white p-0">
        <div style={{ background: "#000" }}>
          {/* If user switched to vidsrc show that, otherwise show trailer if available */}
          {useVidSrc ? (
            <div className="ratio ratio-16x9">
              <iframe
                src={vidSrcEmbed}
                title="VidSrc Player"
                allow="autoplay; fullscreen; encrypted-media"
                allowFullScreen
              />
            </div>
          ) : trailerUrl ? (
            <div className="ratio ratio-16x9">
              <iframe
                src={trailerUrl}
                title="Trailer"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="text-center p-4">🎬 Trailer not available</div>
          )}
        </div>

        <div className="p-3">
          <h5>{details?.title || details?.name || movie.title}</h5>
          <p className="text-muted">
            {details?.release_date || details?.first_air_date} • ⭐{" "}
            {Math.round(details?.vote_average || movie.vote_average || 0)} / 10
          </p>
          <p>{details?.overview || movie.overview || "No description available."}</p>

          <div className="mt-3">
            <Button
              variant={useVidSrc ? "outline-light" : "light"}
              onClick={() => setUseVidSrc((s) => !s)}
              className="me-2"
            >
              {useVidSrc ? "Play Trailer" : "Play Full (VidSrc)"}
            </Button>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
