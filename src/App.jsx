import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import TopNavbar from "./components/TopNavbar";
import MovieDetails from "./components/MovieDetails";
import Login from "./components/Login";
import Home from "./pages/Home";
import WatchPage from "./pages/WatchPage";
import {
  getMovies,
  getTopRated,
  getMoviesByGenre,
} from "./services/api";

export default function App() {
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [action, setAction] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  // Fetch movies from API / demo dataset
  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const [pop, top, act] = await Promise.all([
          getMovies(),
          getTopRated(),
          getMoviesByGenre(28), // action genre
        ]);
        setTrending(pop);
        setTopRated(top);
        setAction(act);
        setFilteredMovies(pop); // default search list
        console.log("✅ Trending:", pop);
        console.log("✅ Top Rated:", top);
        console.log("✅ Action:", act);
      } catch (err) {
        console.error("Error loading movies:", err);
      }
    };
    fetchAllMovies();
  }, []);

  // Search handler
  const handleSearch = (query) => {
    if (!query) {
      setFilteredMovies(trending);
      return;
    }
    const filtered = trending.filter(
      (movie) =>
        movie.title?.toLowerCase().includes(query.toLowerCase()) ||
        movie.tamilTitle?.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  // Show Login if not logged in
  if (!isLoggedIn) return <Login onLogin={() => setIsLoggedIn(true)} />;

  return (
    <div className="app bg-dark min-vh-100 text-white">
      {/* Navbar */}
      <TopNavbar
        onLoginClick={() => setIsLoggedIn(false)}
        onSearch={handleSearch}
      />

      {/* Routes */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <Home
              trending={filteredMovies.length > 0 ? filteredMovies : trending}
              topRated={topRated}
              action={action}
            />
          }
        />

        {/* Movie Details Page */}
        <Route path="/movie/:id" element={<MovieDetails />} />

        {/* Watch Page (VidSrc or player) */}
        <Route path="/watch/movie/:id" element={<WatchPage />} />
      </Routes>
    </div>
  );
}
