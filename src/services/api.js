// src/services/api.js
import axios from "axios";

const API_KEY = "eaadf1eff34aad27fc63545413fef65e";  // your key
const API = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

// Fetch popular movies (discover)
export const getMovies = async () => {
  const { data } = await API.get("/discover/movie", {
    params: { sort_by: "popularity.desc" },
  });
  return data.results || [];
};

// Fetch top rated movies
export const getTopRated = async () => {
  const { data } = await API.get("/movie/top_rated");
  return data.results || [];
};

// Fetch upcoming movies
export const getUpcoming = async () => {
  const { data } = await API.get("/movie/upcoming");
  return data.results || [];
};

// Fetch movies by genre id
export const getMoviesByGenre = async (genreId) => {
  const { data } = await API.get("/discover/movie", {
    params: { with_genres: genreId },
  });
  return data.results || [];
};

// Fetch movie details by ID
export const getMovieById = async (id) => {
  const { data } = await API.get(`/movie/${id}`);
  return data;  // full details object
};

// Fetch movie videos (trailers, etc.)
export const getMovieVideos = async (id) => {
  const { data } = await API.get(`/movie/${id}/videos`);
  return data.results || [];
};

// Fetch TV (if needed)
export const getTVPopular = async () => {
  const { data } = await API.get("/tv/popular");
  return data.results || [];
};

// Search movies or TV
export const searchMulti = async (query) => {
  const { data } = await API.get("/search/multi", {
    params: { query: query },
  });
  return data.results || [];
};

export default API;




