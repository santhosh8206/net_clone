import axios from 'axios';

// Use external mock API hosted on Vercel
const API = axios.create({ baseURL: 'https://mimic-server-api.vercel.app' });

// Fetch all movies
export const getMovies = async () => {
  const response = await API.get('/movies');
  return response.data;
};

// Fetch a single movie by ID
export const getMovieById = async (id) => {
  const response = await API.get(`/movies/${id}`);
  return response.data;
};