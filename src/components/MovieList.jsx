// Context
import { useMovieContext } from "../context/movie_context";

// Components
import Movie from "./Movie";

const MovieList = () => {
  const { movies } = useMovieContext();

  return (
    <ul className="list">
      {movies?.map(movie => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
