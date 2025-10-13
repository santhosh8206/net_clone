import React, { useEffect, useState } from 'react';
import TopNavbar from './components/TopNavbar';
import Hero from './components/Hero';
import MovieRow from './components/MovieRow';
import MovieModal from './components/MovieModal';
import { getMovies } from './services/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    getMovies().then(setMovies).catch((err) => console.error('Error fetching movies:', err));
  }, []);
  // console.log(movies);
  console.log( "1" +selectedMovie);
  
  

  return (
    <div className="app bg-dark min-vh-100">
      <TopNavbar />
      {movies.length > 0 && <Hero movie={movies[0]} />}

      <div className="container-fluid mt-4">
        <MovieRow
          title="Trending Now"
          movies={movies}
          onSelect={(movie) => setSelectedMovie(movie)}
        />
        <MovieRow
          title="Top Picks For You"
          movies={movies}
          onSelect={(movie) => setSelectedMovie(movie)}
        />
        <MovieRow
          title="New Releases"
          movies={movies}
          onSelect={(movie) => setSelectedMovie(movie)}
        />
      </div>

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
}
// import React, { useEffect, useState } from 'react';
// import MovieRow from './components/MovieRow';
// import MovieModal from './components/MovieModal';
// import { getMovies } from './services/api';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// export default function App() {
//   const [movies, setMovies] = useState([]);
//   const [selectedMovie, setSelectedMovie] = useState(null);

//   useEffect(() => {
//     getMovies()
//       .then(setMovies)
//       .catch((err) => console.error('Error fetching movies:', err));
//   }, []);

//   const handleSelectMovie = (movie) => setSelectedMovie(movie);
//   const handleCloseModal = () => setSelectedMovie(null);

//   return (
//     <div className="app bg-dark min-vh-100">
//       <h1 className="text-light text-center py-3">My Movie App</h1>

//       {movies.length > 0 && (
//         <>
//           <MovieRow title="Trending Now" movies={movies} onSelect={handleSelectMovie} />
//           <MovieRow title="Top Picks For You" movies={movies} onSelect={handleSelectMovie} />
//           <MovieRow title="New Releases" movies={movies} onSelect={handleSelectMovie} />
//         </>
//       )}

//       {selectedMovie && <MovieModal movie={selectedMovie} onClose={handleCloseModal} />}
//     </div>
//   );
// }
