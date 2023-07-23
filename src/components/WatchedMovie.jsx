import { useMovieContext } from "../context/movie_context";

const WatchedMovie = ({ movie }) => {
  const { setWatched } = useMovieContext();

  const handleDeleteWatched = () => {
    setWatched(watched => watched.filter(mov => mov.imdbID !== movie.imdbID));
  };

  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>

        <button className="btn-delete" onClick={handleDeleteWatched}>
          X
        </button>
      </div>
    </li>
  );
};

export default WatchedMovie;
