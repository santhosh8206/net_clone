// src/pages/WatchPage.jsx
import React from "react";
import { useParams } from "react-router-dom";

export default function WatchPage() {
  const { id } = useParams();
  // vidsrc embed (may require id mapping; this is a simple attempt)
  const vidsrcEmbed = `https://vidsrc.to/embed/movie/${id}`;

  return (
    <div className="container-fluid p-3 bg-black">
      <div className="ratio ratio-16x9">
        <iframe
          src={vidsrcEmbed}
          title="Watch Movie"
          allow="autoplay; fullscreen; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  );
}
