// Library
import { useState, useContext, createContext, useEffect } from "react";

// Data
// import { tempMovieData, tempWatchedData } from "../data";
export const MovieContext = createContext();

const KEY = "50089922";

export const MovieProvider = ({ children }) => {
  // Movies
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(
    () => JSON.parse(localStorage.getItem("watched")) || []
  );
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Single Movie
  const [selectedId, setSelectedId] = useState(null);
  const [movie, setMovie] = useState({});
  const [selectIsLoading, setSelectIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setIsLoading(true);

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching movies 💥");

        const data = await res.json();

        if (data.Response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
      } catch (err) {
        console.log(err.message);

        if (err.name !== "AbortError") setError(err.message);
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

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

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

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);

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
