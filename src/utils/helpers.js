// utils/helpers.js

// Function to truncate long text (e.g., movie overview)
export const truncateText = (text, maxLength = 150) => {
  if (!text) return '';
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

// Function to get a random movie from list (for hero section)
export const getRandomMovie = (movies = []) => {
  if (!Array.isArray(movies) || movies.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * movies.length);
  return movies[randomIndex];
};

// Function to format rating with star icon
export const formatRating = (rating) => {
  if (!rating) return 'N/A';
  return `⭐ ${rating}`;
};

// Function to capitalize each word in a title
export const capitalizeWords = (text) => {
  if (!text) return '';
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
};