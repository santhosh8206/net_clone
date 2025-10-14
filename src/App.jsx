import React, { useEffect, useState } from 'react';
import TopNavbar from './components/TopNavbar';
import Login from './components/Login';
import Hero from './components/Hero';
import MovieRow from './components/MovieRow';
import MovieModal from './components/MovieModal';
import { getMovies } from './services/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    getMovies()
      .then((data) => {
        setMovies(data);
        setFilteredMovies(data);
      })
      .catch((err) => console.error('Error fetching movies:', err));
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredMovies(movies);
      return;
    }
    const filtered = movies.filter(
      (movie) =>
        movie.title?.toLowerCase().includes(query.toLowerCase()) ||
        movie.tamilTitle?.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="app bg-dark min-vh-100">
      <TopNavbar onLoginClick={() => setIsLoggedIn(false)} onSearch={handleSearch} />
     {filteredMovies.length > 0 && <Hero movies={filteredMovies} />}


      <div className="container-fluid mt-4">
        <MovieRow title="Trending Now" movies={filteredMovies} onSelect={setSelectedMovie} />
        <MovieRow title="Top Picks For You" movies={filteredMovies} onSelect={setSelectedMovie} />
        <MovieRow title="New Releases" movies={filteredMovies} onSelect={setSelectedMovie} />
      </div>

      {selectedMovie && <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
    </div>
  );
}
