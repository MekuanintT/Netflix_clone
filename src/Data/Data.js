// src/Data/Data.js
// Central definition of the genre/category rows shown on the homepage.
// Each entry maps a display title to a key used to look up its TMDB
// endpoint in src/Utility/requestUrls.js

export const categories = [
  { title: "Netflix Originals", key: "fetchNetflixOriginals", isLargeRow: true },
  { title: "Trending Now", key: "fetchTrending" },
  { title: "Top Rated", key: "fetchTopRated" },
  { title: "Action Movies", key: "fetchActionMovies" },
  { title: "Comedy Movies", key: "fetchComedyMovies" },
  { title: "Horror Movies", key: "fetchHorrorMovies" },
  { title: "Romance Movies", key: "fetchRomanceMovies" },
  { title: "Documentaries", key: "fetchDocumentaries" },
];

// Fallback banner image shown if TMDB backdrop fails to load.
// Place the actual file at src/assets/image/fallback-banner.jpg
export const FALLBACK_BANNER = "/src/assets/image/fallback-banner.jpg";
