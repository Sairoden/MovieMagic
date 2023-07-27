import { useEffect, useState } from "react";

const KEY = "50089922";

export const useMovies = query => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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

  return { movies, setMovies, error, isLoading };
};
