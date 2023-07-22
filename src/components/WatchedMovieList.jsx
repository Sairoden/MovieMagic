// Components
import WatchedMovie from "./WatchedMovie";
import { useMovieContext } from "../context/movie_context";

const WatchedMovieList = () => {
  const { watched } = useMovieContext();

  return (
    <ul className="list">
      {watched.map(movie => (
        <WatchedMovie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
};

export default WatchedMovieList;
