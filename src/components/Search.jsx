import { useMovieContext } from "../context/movie_context";

const Search = () => {
  const { query, setQuery } = useMovieContext();

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={e => setQuery(e.target.value)}
    />
  );
};

export default Search;
