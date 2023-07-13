// Library
import { useState, useContext, createContext } from "react";

// Data
import { tempWatchedData, tempMovieData } from "./movie_context";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  const value = { movies, setMovies, watched, setWatched };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);
