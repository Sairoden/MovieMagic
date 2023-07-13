// Library
import { useState, useContext, createContext } from "react";

// Data
import { tempMovieData, tempWatchedData } from "../data";
export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [query, setQuery] = useState("");

  const value = { movies, setMovies, watched, setWatched, query, setQuery };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);
