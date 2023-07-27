// Library
import { useState, useContext, createContext, useEffect } from "react";

// Hooks
import { useMovies } from "../useMovies";
import { useLocalStorage } from "../useLocalStorage";

// Data
// import { tempMovieData, tempWatchedData } from "../data";
export const MovieContext = createContext();

const KEY = "50089922";

export const MovieProvider = ({ children }) => {
  const [query, setQuery] = useState("");

  // Single Movie
  const [selectedId, setSelectedId] = useState(null);
  const [movie, setMovie] = useState({});
  const [selectIsLoading, setSelectIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const { movies, error, isLoading } = useMovies(query);
  const [watched, setWatched] = useLocalStorage([], "watched");

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setSelectIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );

        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setSelectIsLoading(false);
      }
    }
    getMovieDetails();
  }, [selectedId]);

  const value = {
    movies,
    watched,
    setWatched,
    query,
    setQuery,
    isLoading,
    error,
    selectedId,
    setSelectedId,
    movie,
    selectIsLoading,
    userRating,
    setUserRating,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);
