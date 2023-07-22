// Library
import { useState, useContext, createContext, useEffect } from "react";

// Data
import { tempMovieData, tempWatchedData } from "../data";
export const MovieContext = createContext();

const API_KEY = "50089922";

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching movies 💥");

        const data = await res.json();

        if (data.Response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
        setError("");
      }
    }

    if (!query) {
      setMovies([]);
      setError("");

      return;
    }

    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const value = {
    movies,
    setMovies,
    watched,
    setWatched,
    query,
    setQuery,
    isLoading,
    error,
    selectedId,
    setSelectedId,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);
