import { useRef, useEffect } from "react";

import { useMovieContext } from "../context/movie_context";

const Search = () => {
  const { query, setQuery } = useMovieContext();

  const inputEl = useRef(null);

  useEffect(() => {
    const callback = e => {
      if (document.activeElement === inputEl.current) return;

      if (e.code === "Enter") {
        inputEl.current.focus();
        setQuery("");
      }
    };

    document.addEventListener("keydown", callback);

    return () => document.addEventListener("keydown", callback);
  }, [setQuery]);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={e => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
};

export default Search;
