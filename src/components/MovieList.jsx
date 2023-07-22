// Components
import Movie from "./Movie";

// Context
import { useMovieContext } from "../context/movie_context";

const MovieList = () => {
  const { movies } = useMovieContext();

  return (
    <ul className="list list-movies">
      {movies?.map(movie => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
